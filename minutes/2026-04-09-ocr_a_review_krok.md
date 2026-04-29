# Zápisnica – OCR a review krok, pipeline

**Dátum:** 9. apríl 2026  
**Čas:** 12:00 – 13:00  
**Miesto:** Discord, online  
**Zapisovateľ:** Zoltán Renczes  

## Účastníci

- Bc. Michal Balogh – ML/AI Engineer
- Bc. Juraj Hušek – Backend Developer
- Bc. Ján Osadský – Backend Developer
- Bc. Fridrich Molnár – Frontend & Server Developer
- Bc. Zoltán Renczes – Frontend Developer

## Vedúci tímového projektu

- Ing. Stanislav Marochok

## Program stretnutia

1. OCR funkcionalita v pipeline
2. Klasifikácia a review detegovaných prvkov
3. Ďalšie využitie rozpoznaného obsahu
4. Plán ďalšieho rozširovania pipeline

## Priebeh stretnutia

### 1. OCR funkcionalita v pipeline

Do projektu pribudla funkcionalita OCR pre detegované elementy dokumentu. Cieľom je čítať obsah v rámci bounding boxov a použiť ho ako vstup pre ďalšie rozhodovanie v pipeline.

### 2. Klasifikácia a review detegovaných prvkov

Spolu s OCR bol rozšírený aj review krok, v ktorom je možné pracovať s klasifikáciou detegovaných častí dokumentu. Tým sa pipeline posúva od čisto vizuálnej anotácie k sémantickému spracovaniu obsahu.

### 3. Ďalšie využitie rozpoznaného obsahu

Diskutovalo sa o tom, ako využiť OCR výstupy pri rozlíšení symbolov, textu a ďalších tried objektov. Táto časť nadväzuje na predchádzajúce rozhodnutia o pipeline workflow a môže mať dopad aj na export a budúce modelovanie dát.

### 4. Plán ďalšieho rozširovania

Tím sa zhodol, že po OCR a review má nasledovať dorobenie exportných funkcionalít, stavovej perzistencie pipeline a ďalších UX úprav používateľskej časti.

## Prijaté rozhodnutia

- OCR krok zostáva súčasťou hlavného workflow pipeline.
- Review a klasifikácia majú byť navzájom prepojené a prehľadne prezentované používateľovi.
- Ďalší vývoj sa sústredí na export, perzistenciu stavu a finalizáciu UX.

## Úlohy do nasledujúceho stretnutia

- **Bc. Michal Balogh:** pokračovať v OCR a review funkcionalite a pripraviť nadväzné exporty.
- **Bc. Juraj Hušek:** doplniť backend oporu pre uloženie a spracovanie pipeline výstupov.
- **Bc. Ján Osadský:** konzultovať dátový model pre výsledky OCR a review.
- **Bc. Fridrich Molnár:** overiť frontendové zobrazenie review kroku.
- **Bc. Zoltán Renczes:** pracovať na UX a čitateľnosti nového kroku pipeline.

## Nasledujúce stretnutie

**Dátum:** 16. apríla 2026  
**Čas:** 12:00  
**Umiestnenie:** Slovenská technická univerzita v Bratislave, Fakulta elektrotechniky a informatiky  
**Miestnosť:** A208, FEI STU