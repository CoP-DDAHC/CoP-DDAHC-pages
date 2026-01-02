# Spracovanie dokumentov


## Úvodná kontrola (document rejector)
Po nahraní nového obrázka systém najprv vyhodnocuje, či ide o historický dokument, alebo o nesúvisiaci obrázok (napríklad fotografia auta, zvieraťa a podobne). Cieľom je zabrániť spracovaniu irelevantných obrázkov.

Na tento účel využívame OCR (optické rozpoznávanie znakov). Zo vstupného obrázka sa extrahujú slová. Ak sa podarí rozpoznať aspoň určitý počet slov (podľa nastaveného thresholdu), obrázok je prijatý na ďalšie spracovanie ako dokument. V opačnom prípade je odmietnutý. Týmto spôsobom sa automaticky filtrujú obrázky bez textu, ktoré pravdepodobne nepredstavujú historické dokumenty určené na ďalšie spracovanie.

V rámci experimentov bol najprv použitý EasyOCR\cite{easyocr}, ktory je lightweight, ma podporu pre vela jazykov, ma dobru vykonost a funguje dobre aj na inych obrazkoch ako cierny text na bielom pozadi. Fungoval dobre aj na pisanom texte na historickych dokumentoch.
Dalsi jeho vyhoda bola to, ze cital text postupne a pomocou parametru sa dalo nastavit maximalny pocet textovych boxov, ktore sa mali rozpoznavat, co znacne urychlovalo proces rozpoznavania. Tento parameter bol nastaveny na rovnake cislo ako threshold pre prijatie dokumentu. Experimentovanim s dokumentami a inymi obrazkami sme dospeli k cislu 30 textovych boxov ako optimalnej hodnote pre nas usecase. Toto cislo malo 100% acceptance rate pre dokumenty a zaroven efektivne odmietalo obrazky, kde neboli dokumenty, ale napriklad zo znaciek precital nejake texty.

EasyOCR vsak spôsoboval  viaceré problémy:
 - prvotné načítanie knižnice bolo pomalé (2-3 sekundy),
 - vyžadoval veľké množstvo závislostí, čo značne predlžovalo čas potrebný na zostavenie docker image (viac ako 10 minút),
 - výsledný docker image mal veľkú veľkosť (až 17 GB).

Z týchto dôvodov sme ho nahradili za Tesseract OCR\cite{tesseract}. Tesseract OCR je jeden z najpoužívanejších OCR nástrojov, je open-source a dosahuje vysokú presnosť rozpoznávania textu. Tiez ma podporu pre vela jazykov a zaroven podporu pre pisany text. Taktiez existuje Python API pre Tesseract (pytesseract\cite{pytesseract}), co umoznuje jednoduche integrovanie do naseho systemu.

Tesseract sa stahuje uz ako skompilovany binarny subor, co znamena, ze nie je potrebne buildnut tolko dependencies ako pri EasyOCR. Vdaka tomu sa cas buildnutia docker image znizil z viac ako 10 minut na priblizne 20 sekund a velkost docker image sa zmensila z 17 GB na priblizne 2 GB. Prve nacitanie Tesseract kniznice trva okolo 0.5 sekundy, co je tiez znacne zrychlenie oproti EasyOCR a uzivatelsky privetive.

Tesseract neumoznuje citanie textu postupne a obrazky s velkym mnozstvom textu zaberali dlhu dobu. Preto sa na zrýchlenie najprv zmenší obrázok a následne sa aplikuje sliding window mechanizmus. Pri tomto postupe sa obrázok skenuje po častiach a priebežne sa kumuluje počet rozpoznaných znakov. Ak počet rozpoznaných znakov prekročí nastavený limit, dokument je akceptovaný a prestáva sa ďalšie spracovanie.

Inferencia Tesseract OCR je vdaka skompilovanemu binarnemu suboru rychlejsia ako u EasyOCR, a preto celkovy cas na vyhodnotenie dokumentu klesol o par desatiny sekund pri zachovani rovnakej presnosti detekcie na nasich testovacich dokumentoch. Cas inferencie je momentalne v rozpati okolo 0.25 az 0.5 sekundy na dokument.

## Predspracovanie obrázkov
Po úspešnom prijatí dokumentu nasleduje fáza predspracovania obrázkov. Cieľom tejto fázy je zlepšiť kvalitu obrázkov a pripraviť ich na následné kroky spracovania, ako je detekcia a klasifikácia elementov. Predspracovanie zahŕňa niekoľko krokov, vrátane:

## Detekcia a klasifikacia elementov, parov a sekcii
Po úvodnom filtrovaní dokumentov nasleduje kľúčová fáza spracovania – extrakcia štruktúry a obsahu z kľúčových dokumentov (cipher keys). Tieto dokumenty majú špecifickú hierarchickú štruktúru: skladajú sa zo sekcií (napr. tabuľky), ktoré obsahujú páry (dvojice znakov otvorený text – šifra) a tie sú tvorené samotnými elementmi (jednotlivé symboly).

Na túto úlohu sme zvolili architektúru YOLO (You Only Look Once), konkrétne verziu YOLOv11, ktorá predstavuje aktuálny state-of-the-art v oblasti detekcie objektov v reálnom čase.

### Príprava dát a datasetov
Pre trénovanie modelov sme museli pripraviť dva hlavné datasety. Prvým bol IAM Handwriting Database\cite{iam_database}, ktorý obsahuje veľké množstvo anotovaného rukou písaného textu. Tento dataset slúžil primárne na predtrénovanie modelov (transfer learning), aby sa neurónová sieť naučila rozpoznávať črty rukopisu skôr, než začne riešiť špecifickú úlohu šifier. Pôvodné XML anotácie sme pomocou skriptov konvertovali do formátu YOLO.

Druhým datasetom bol dataset Transcendino poskytnuty nasim veducim, ktorý obsahuje historické šifrovacie kľúče. K tvorbe tohoto datasetu sme v ramci teamoveho projektu prispeli aj my anotovanim dokumentov. Tieto dokumenty boli manuálne anotované pomocou nástroja LabelMe\cite{labelme}, kde sme vyznačovali bounding boxy pre elementy, páry a sekcie. Následne sme vytvorili konverzný skript, ktorý transformoval JSON výstupy z LabelMe do YOLO formátu a rozdelil dáta na trénovaciu, validačnú a testovaciu množinu v pomere 70:20:10.

### Experimentálne stratégie trénovania
Keďže detekcia vnorených objektov (element je v páre, pár je v sekcii) je pre štandardné detektory náročná, navrhli a porovnali sme v rámci súboru training_grid.py šesť rôznych trénovacích stratégií:

Multiclass (A): Trénovanie jedného modelu, ktorý sa snaží detegovať všetky tri triedy (element, pár, sekcia) naraz.
IAM Pretraining + Multiclass (B): Rovnaký prístup ako A, ale model bol najprv predtrénovaný na IAM datasete.
Single Class (C): Trénovanie troch samostatných modelov – jeden špecializovaný čisto na elementy, druhý na páry a tretí na sekcie.
IAM Pretraining + Single Class (D): Samostatné modely predtrénované na IAM datasete.
Hierarchické trénovanie (E): Inovatívny prístup inšpirovaný curriculum learningom. Najprv sa natrénuje model na najmenších objektoch (elementoch). Váhy tohto modelu sa použijú ako základ pre trénovanie modelu na pároch a ten následne slúži ako základ pre model na sekcie. Týmto sa sieť učí skladať zložitejšie štruktúry z jednoduchších.
IAM Pretraining + Hierarchické trénovanie (F): Kombinácia predtrénovania na rukopise a hierarchického prístupu.

### Výsledky
Experimenty ukázali, že pre naše potreby je najvhodnejší hierarchický prístup kombinovaný s predtrénovaním na IAM datasete (Stratégia F). Štandardný Multiclass prístup mal problémy s prekrývajúcimi sa bounding boxmi (keďže pár obklopuje elementy), čo viedlo k nižšej presnosti. Hierarchický prístup umožnil modelu lepšie pochopiť kontext a

vzťahy medzi objektmi. Použitie modelu YOLOv11 vo veľkosti 'x' (extra large) zabezpečilo dostatočnú kapacitu siete na zachytenie jemných detailov historického rukopisu.

### Integrácia do produkčného prostredia
Kedze v spracovanie ma byt len poloautomaticke, a anotacie navrhnute nasim nastrojom moze clovek potom opravit, na implementaciu sme zvolili mensi model _____, kedze dosahuje stale vybornu presnost a zaroven je rychly na inferenciu a menej narocny na zdroje.


@software{easyocr,
  author = {JaidedAI},
  title = {EasyOCR},
  year = {2024},
  version = {1.7.2},
  url = {https://github.com/JaidedAI/EasyOCR},
  note = {Dostupné z: https://github.com/JaidedAI/EasyOCR [cit. 2026-01-01]}
}

@software{tesseract,
  author = {Ray Smith and Stefan Weil and Zdenko Podobny and contributors},
  title = {Tesseract OCR},
  year = {2024},
  version = {4.1.3},
  url = {https://github.com/tesseract-ocr/tesseract},
  note = {Dostupné z: https://github.com/tesseract-ocr/tesseract [cit. 2026-01-01]}
}

@software{pytesseract,
  author = {Samuel Hoffstaetter and contributors},
  title = {pytesseract: Python-tesseract},
  year = {2024},
  version = {0.3.10},
  url = {https://github.com/madmaze/pytesseract},
  note = {Dostupné z: https://github.com/madmaze/pytesseract [cit. 2026-01-01]}
}

@article{iam_database,
  author = {Urs-Viktor Marti and Horst Bunke},
  title = {The IAM-database: An English Sentence Database for Off-line Handwriting Recognition},
  journal = {International Journal on Document Analysis and Recognition},
  volume = {5},
  number = {1},
  pages = {39--46},
  year = {2002},
  publisher = {Springer}
}

@misc{labelme,
  author = {Kentaro Wada},
  title = {labelme: Image Polygonal Annotation with Python},
  year = {2018},
  publisher = {GitHub},
  journal = {GitHub repository},
  howpublished = {\url{https://github.com/wkentaro/labelme}},
  commit = {master},
}
