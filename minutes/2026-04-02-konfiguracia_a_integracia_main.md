# Zápisnica – Konfigurácia API a integrácia do main vetvy

**Dátum:** 2. apríl 2026  
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

1. Konfigurovateľná API base URL
2. Merge pipeline vetvy do main
3. Príprava systému na ďalšie OCR a export funkcionality
4. Stav frontend-backend integrácie

## Priebeh stretnutia

### 1. Konfigurovateľná API base URL

Vo frontende bola upravená práca s API base URL tak, aby sa adresa backendu neviazala len na jednu pevne zadanú hodnotu. Ide o dôležitý krok pre pohodlnejší lokálny vývoj aj budúce nasadenie do iného prostredia.

### 2. Merge pipeline vetvy do main

V sledovanom období prebehol merge pull requestu z vetvy `feature/processing-pipeline` do `main`. Tým sa väčšia časť pipeline funkcionality dostala do hlavnej vetvy projektu a stala sa oficiálnou súčasťou aktuálneho stavu aplikácie.

### 3. Príprava systému na ďalšie funkcionality

Tím diskutoval o tom, že po zjednotení konfigurácie a merge pipeline je vhodný čas na ďalšie rozširovanie systému o OCR funkcionalitu, review krok a export výstupov.

### 4. Stav integrácie

Bolo potvrdené, že flexibilnejšia konfigurácia API je kľúčová podmienka pre spúšťanie frontendu mimo striktne lokálneho `localhost` scenára a že ide o potrebný predpoklad pre ďalší deployment.

## Prijaté rozhodnutia

- Zachovať API URL ako konfigurovateľnú premennú prostredia.
- Pokračovať vo vývoji už primárne nad aktualizovanou `main` vetvou.
- Prioritizovať OCR, review a export ako ďalšie funkčné kroky pipeline.

## Úlohy do nasledujúceho stretnutia

- **Bc. Michal Balogh:** rozbehnúť OCR krok a nadväzujúce review funkcionality.
- **Bc. Juraj Hušek:** kontrolovať backend endpointy potrebné pre ďalšie pipeline fázy.
- **Bc. Ján Osadský:** pomáhať s backend návrhom pre ďalšie rozširujúce funkcionality.
- **Bc. Fridrich Molnár:** testovať frontend po prechode na konfigurovateľnú API adresu.
- **Bc. Zoltán Renczes:** dohliadať na konzistenciu správania rozhrania po merge do main.

## Nasledujúce stretnutie

**Dátum:** 9. apríla 2026  
**Čas:** 12:00  
**Umiestnenie:** Slovenská technická univerzita v Bratislave, Fakulta elektrotechniky a informatiky  
**Miestnosť:** A208, FEI STU