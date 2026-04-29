# Zápisnica – Pipeline UI, autentifikácia a vývojové prostredie

**Dátum:** 26. február 2026  
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

1. Pokrok v refaktoringu pipeline rozhrania
2. Úpravy prihlasovania, verifikácie a profilu používateľa
3. Anotačný nástroj a UX pri práci s bounding boxmi
4. Stabilizácia vývojového prostredia

## Priebeh stretnutia

### 1. Pokrok v refaktoringu pipeline rozhrania

Prebehla prezentácia rozsiahlejšieho refaktoringu frontendovej časti aplikácie smerom k viacstupňovej pipeline spracovania dokumentov. Rozhranie bolo upravené tak, aby lepšie odrážalo jednotlivé fázy spracovania, najmä upload, predspracovanie, detekciu a review.

Zároveň bola upravená upload časť, kde sa zmenšil dropzone a zjednotil sa vizuálny štýl s novým layoutom aplikácie.

### 2. Úpravy prihlasovania, verifikácie a profilu používateľa

Na backende aj frontende boli upravené časti spojené s Google login flow, e-mailovou verifikáciou a JWT tokenmi. Cieľom bolo odstrániť nekonzistentnosti pri prihlasovaní a zlepšiť stabilitu autentifikácie.

Okrem toho bola doplnená funkcionalita na aktualizáciu profilu používateľa, konkrétne zmenu používateľského mena, e-mailu a hesla aj s ošetrením reautentifikácie.

### 3. Anotačný nástroj a UX pri práci s bounding boxmi

V anotačnom nástroji boli doplnené funkcionality undo a redo pri úprave dokumentu. Zlepšilo sa aj správanie rohových handlerov bounding boxov, ktoré sa po novom zobrazujú len pri hover stave, čím sa rozhranie stalo prehľadnejším.

Z hľadiska UX sa riešilo aj automatické prispôsobenie obrázka na maximálny rozmer pre rýchlejšie ďalšie spracovanie a plynulejšiu prácu používateľa.

### 4. Stabilizácia vývojového prostredia

V rámci development infra boli vykonané menšie úpravy repozitára, najmä odstránenie IDE súborov z verzionovania a doplnenie pravidiel do `.gitignore`. Cieľom bolo zjednotiť lokálne prostredie a znížiť šum v repozitári.

## Prijaté rozhodnutia

- Pokračovať v refaktoringu pipeline rozhrania ako hlavnej používateľskej časti aplikácie.
- Stabilizovať autentifikáciu a profilové funkcionality pred ďalším rozširovaním systému.
- Pokračovať vo vylepšovaniach anotačného nástroja s dôrazom na UX.
- Udržiavať repozitár čistý od lokálnych IDE artefaktov.

## Úlohy do nasledujúceho stretnutia

- **Bc. Michal Balogh:** ďalej rozvíjať frontend pipeline a zlepšovať UX anotačného nástroja.
- **Bc. Juraj Hušek:** dokončiť a otestovať úpravy autentifikácie, profilu a tokenovej logiky.
- **Bc. Ján Osadský:** priebežne overovať backend kompatibilitu a nadväzné API správanie.
- **Bc. Fridrich Molnár:** podieľať sa na integrácii upraveného frontend rozhrania.
- **Bc. Zoltán Renczes:** pokračovať vo vizuálnom ladení rozhrania a upload časti.

## Nasledujúce stretnutie

**Dátum:** 5. marca 2026  
**Čas:** 12:00  
**Umiestnenie:** Slovenská technická univerzita v Bratislave, Fakulta elektrotechniky a informatiky  
**Miestnosť:** A208, FEI STU