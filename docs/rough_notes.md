# Here are some rough notes that will be later used for final documentation


## AI Experiments

### Document rejector
#### EasyOCR
- pouzivali sme najprv toto, ale malo to problemy:
    - loading do pamate prvy krat trvalo dlho (2-3 sekundy)
    - EasyOCR ma velke mnozstvo dependencies -> trvalo vyse 10 minut buildnut docker image, docker image mal 17GB

#### Tesseract OCR
- kedze Tesseract sa da stiahnut uz skompilovany, takze nie je potrebne buildnut tolko dependencies
- build trva miesto 10 minut 20 sekund
- docker image ma okolo 1 GB
- Prve nacitanie trva okolo 0.5 sekundy
- Tesseract nema v api moznost ukoncit scanovanie dokumentu skor. Na zrychlenie procesu preto najprv zmensim dokument a potom pouzivam sliding window mechanizmus, kde scanujem vzdy len cast dokumentu, a kumuluje sa pocet detekovanych znakov. Ak je pocet detekovanych znakov vacsi ako nejaka threshold -> dokument je akceptovany
