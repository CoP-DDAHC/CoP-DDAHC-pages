# Zápisnica - Predspracovanie a ukladanie dát
**Dátum:** 6. november 2025
**Čas:** 12:00 - 13:00
**Miesto:** Unispace, FEI STU
**Zapisovateľ:** Juraj Hušek

## Účastníci
- Bc. Michal Balogh – ML/AI Engineer
- Bc. Juraj Hušek – Backend Developer
- Bc. Ján Osadský – Backend Developer
- Bc. Fridrich Molnár – Frontend & Server Developer
- Bc. Zoltán Renczes – Frontend Developer

## Vedúci tímového projektu
- Ing. Stanislav Marochok

## Program stretnutia
1. Odprezentovanie pokroku v implementácii
2. Aktualizácia vývoja trénovacej pipeline pre kľúče
3. Diskusia o ukladaní dokumentov do databázy a na server
4. Diskusia o predspracovaní dát a jeho vplyve na výsledky

## Priebeh stretnutia

### 1. Odprezentovanie pokroku v implementácii

Prebehlo odprezentovanie nového backend endpointu /get-boxes/{document_id}, ktorý pre testovacie účely vracia náhodný zoznam bounding boxov pre historický dokument. Je navrhnutý tak, aby po pripravení yolo modelu bolo možné vrátiť bounding boxy nájdené modelom. Na strane AI service bol implementovaný nový endpoint /preprocess-image pripravený na predspracovanie uploadnutých historických dokumentov.

### 2. Aktualizácia vývoja trénovacej pipeline pre kľúče

Vedúci tímového projektu informoval o dokončení trénovacej pipeline pre kľúče, ktorá umožňuje spúšťať spracovanie anotácií, konvertovať ich na YOLO dataset a trénovať modely. Pipeline umožňuje trénovanie na multi-class, all-class alebo single-class datasetoch. Zistené bolo, že trénovanie na single-class datasetoch dáva lepšie výsledky ako trénovanie na všetkých triedach naraz.

### 3. Diskusia o ukladaní dokumentov do databázy a na server

Účastníci diskutovali o spôsobe ukladania dokumentov, konkrétne či ukladať binárne dáta priamo do databázy alebo ukladať súbory na server a v databáze uchovávať len prepojenia. Diskutovalo sa o výhodách a nevýhodách oboch prístupov, s dôrazom na škálovateľnosť a bezpečnosť. Zvažovalo sa ohraničenie počtu dokumentov pre užívateľa.

### 4. Diskusia o predspracovaní dát a jeho vplyve na výsledky

Účastníci diskutovali o tom, prečo predspracovanie dát zhoršuje výsledky. Zvažovali sa rôzne faktory, ako napríklad odstránenie šumu, stratu informácií pri binarizácii, resizing obrázkov a otočenie dokumentov.

## Prijaté rozhodnutia
-   Pre testovacie účely sa ponecháva ukladanie dokumentov v databáze.
-   Potreba Vypracovania analýzy ukladania obrázkov na serveri vs. v databáze, zohľadniť bezpečnosť, škálovateľnosť a náklady.
-   Zamerať sa na zistenie príčin zhoršenia výsledkov pri predspracovaní dát.
-   Zvážiť polo-automatické otočenie dokumentov, s možnosťou manuálnej úpravy užívateľom a zvážiť vypnutie shade correction pri predspracovaní.
-   Využiť natrénované modely pre urýchlenie anotovania.


## Úlohy do nasledujúceho stretnutia
- **Bc. Michal Balogh:** Rozšíriť dataset anotovaných dokumentov a pokračovať v práci na AI service
- **Bc. Juraj Hušek:** Implementovať backend API endpointy pre prácu a manažment dokumentov a endpoint používajú AI service presprocessing
- **Bc. Ján Osadský:** Vypracovať analýzu ukladania obrázkov na serveri vs. v databáze, zohľadniť bezpečnostné aspekty, škálovateľnosť a náklady. Zahrnúť porovnanie s externými službami pre ukladanie obrázkov.
- **Bc. Fridrich Molnár:** Implementovať vylepšenia anotačného nástroja a funckionality pridané na backend
- **Bc. Zoltán Renczes:** Implementovať vizuálne vylepšenia UI, rozšíriť dataset anotovaných dokumentov

## Nasledujúce stretnutie
**Dátum:** 13. novembra 2025
**Čas:** 12:00  
**Umiestnenie:** Slovenská technická univerzita v Bratislave, Fakulta elektrotechniky a informatiky  
**Miestnosť:** A208, FEI STU  
