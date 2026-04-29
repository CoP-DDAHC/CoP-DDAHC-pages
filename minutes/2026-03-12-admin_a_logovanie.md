# Zápisnica – Admin rozhranie a activity log

**Dátum:** 12. marec 2026  
**Čas:** 12:00 – 13:00  
**Miesto:** A208, FEI STU  
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

1. Activity log a záznam akcií používateľov
2. Admin rozhranie pre správu systému
3. Integrácia priebežného progresu do hlavnej vývojovej vetvy
4. Ďalšie prioritné backend/frontend úlohy

## Priebeh stretnutia

### 1. Activity log a záznam akcií používateľov

Na backendovej časti pribudla implementácia activity logu. Do systému sa tak začali zaznamenávať vybrané používateľské akcie, najmä upload dokumentov, mazanie dokumentov a registrácie používateľov.

Zároveň boli pripravené endpointy na získavanie týchto logov, čo je dôležité pre admin časť systému aj pre budúcu auditovateľnosť operácií.

### 2. Admin rozhranie pre správu systému

Do aplikácie bolo doplnené admin rozhranie pre správu používateľov a dokumentov. Táto časť projektu posúva systém od individuálnej práce používateľa smerom k centralizovanej správe obsahu a prístupov.

Diskutovalo sa aj o tom, aké informácie a akcie má mať administrátor k dispozícii priamo z používateľského rozhrania.

### 3. Integrácia priebežného progresu

V sledovanom období prebehla aj integrácia časti zmien z vetvy `feature/processing-pipeline` cez pull request do spoločnej histórie projektu. Tým sa potvrdilo, že pipeline funkcionalita sa stáva hlavnou vetvou ďalšieho vývoja.

### 4. Ďalšie prioritné úlohy

Tím sa zhodol, že najbližšie bude potrebné prepojiť admin funkcionalitu, logovanie a ďalšie pipeline kroky tak, aby systém pôsobil konzistentne a pripravil sa na ďalšie testovanie.

## Prijaté rozhodnutia

- Zachovať a ďalej rozširovať activity log ako súčasť backendu.
- Pokračovať v dokončovaní admin rozhrania pre správu používateľov a dokumentov.
- Postupne zlučovať stabilné časti pipeline do hlavného vývojového prúdu.

## Úlohy do nasledujúceho stretnutia

- **Bc. Michal Balogh:** rozvíjať ďalšie funkcionality pipeline nadviazané na detekciu a review.
- **Bc. Juraj Hušek:** rozširovať admin rozhranie a backend API pre správu systému.
- **Bc. Ján Osadský:** pokračovať v backendových častiach súvisiacich s logovaním a prístupmi.
- **Bc. Fridrich Molnár:** prepojiť admin časť s frontend rozhraním a otestovať správanie.
- **Bc. Zoltán Renczes:** pomáhať s UX a čitateľnosťou admin rozhrania.

## Nasledujúce stretnutie

**Dátum:** 19. marca 2026  
**Čas:** 12:00  
**Umiestnenie:** Slovenská technická univerzita v Bratislave, Fakulta elektrotechniky a informatiky  
**Miestnosť:** A208, FEI STU