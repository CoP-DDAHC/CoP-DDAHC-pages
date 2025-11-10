# Zápisnica - Kontrola postupu a požiadavky na UI
**Dátum:** 31. október 2025
**Čas:** 14:00 - 14:45
**Miesto:** Online - Discord
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
1. Predspracovanie datasetu pre YOLO
2. Predspracovanie obrazových dát
3. Overenie e-mailu a validácia (backend)
4. Aktualizácia frontendu

## Odprezentovanie pokroku

### 1. Prezentovanie predspracovania datasetu pre YOLO

Vedúci projektu nám odprezentoval skript `preprocess_yolo_datatset.py`, ktorý slúži na automatické predspracovanie datasetu pre trénovanie modelu YOLO. Skript vykonáva úpravy kvality obrázkov. Zároveň skúsi zachovať správne YOLO anotácie bounding boxov. Výsledkom je nová verzia datasetu v rovnakej štruktúre (train/val/test), pripravená na efektívnejšie trénovanie modelu.

### 2. Predspracovanie obrázkových dát v našom projekte

Bola zahájená implementácia predspracovania (preprocessingu) obrazových dát. Práca je momentálne v počiatočnej fáze a na riešení sa ďalej pokračuje s cieľom zabezpečiť správne spracovanie vstupných obrazov.

### 3. Overenie e-mailu a validácia vstupov na strane backendu

Do backendu bola pridaná funkcionalita overenia e-mailovej adresy pri registrácii používateľov, ktorí sa neprihlasujú cez Google OAuth. Implementácia zahŕňa generovanie bezpečného JWT tokenu, odosielanie overovacieho e-mailu prostredníctvom SMTP (s využitím premenných v súbore `.env`) a spracovanie verifikácie na koncovom bode `/verify-email/{token}` s následným presmerovaním na frontend. Po úspešnom overení sa používateľ automaticky označí ako overený.

Zároveň bola doplnená backendová validácia vstupných údajov pri registrácii, ktorá je zosúladená s kritériami validácie na frontende. Aktualizovaná bola aj konfigurácia súboru `.env` podľa usmernení v dokumente *ENV_GUIDE* a referenčného súboru `.env_example`.

### 4. Aktualizácie frontend časti aplikácie

Do projektu bola pridaná nová komponenta `Home.jsx` a boli aktualizované viaceré frontendové komponenty s cieľom zlepšiť funkcionalitu prihlasovania a registrácie používateľov. Implementované boli toast notifikácie pre zobrazenie systémových správ a zobrazovanie nahraných súborov, ktoré sú teraz dostupné na prehliadnutie priamo z používateľského rozhrania. Zároveň bola doplnená implementácia routera pre navigáciu medzi jednotlivými stránkami aplikácie.


## Úlohy do nasledujúceho stretnutia
- **Michal Balogh:** Predspracovanie nahratých dokumentov
- **Bc. Juraj Hušek:** Implementovať uloženie obrázkov v databáze na strane backendu
- **Bc. Ján Osadský:** Implementovať zobrazenie, načítanie a správu uložených obrázkov
- **Bc. Fridrich Molnár:** Implementovať vylepšenia anotačného nástroja a integrovať serverovú časť
- **Bc. Zoltán Renczes:** Implementovať vizuálne vylepšenia UI (zmena kurzora, zoom ku kurzoru) a optimalizácia UI/UX anotačného nástroja

## Nasledujúce stretnutie
**Dátum:** 6. novembra 2025
**Čas:** 12:00
**Miesto:** Unispace