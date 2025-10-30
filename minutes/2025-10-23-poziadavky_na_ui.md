# Zápisnica - Kontrola postupu a požiadavky na UI
**Dátum:** . október 2025
**Čas:** 16:00 - 16:40
**Miesto:** Online - Discord
**Zapisovateľ:** Michal Balogh

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
2. Poznámky a požiadavky na implementované časti
3. Diskusia o požiadavkách na UI
4. Úlohy do nasledujúceho stretnutia

## Odprezentovanie pokroku

### 1. Integrácia odmietania nesprávnych dokumentov pomocou OCR

Prebehla demonštrácia OCR a klasifikácie dokumentov integrovaná do web aplikácie. EasyOCR, malo veľa závislostí, ktoré sa museli stiahnuť do Docker kontaineru. To malo za príčinu približne 14GB velky Docker image. Preto bolo EasyOCR vymenene za uz skompilovany Tesseract, vdaka comu sa znizil build time kontajneru z 10 minut na 30 sekund, a velkost image-u znizila z 14GB na 2GB. Presnost detekcie sa zachovala na snimkach, ktore mame k dispozicii. Inferencia sa zrychlila o par desatin sekund.

### 2. Predstavenie zakladnej schemy pre databazu a nove API endpointy.

Backend bol napojeny na databazu, ku ktorej bola vytvorene zakladna shcema. Ukladanie nahratych dokumentov do databazy. Diskusia o formate ulozenia. API Endpointy a logika pre registraciu, login a odhlasenie. Integracia prihlasovania cez Google ucet.

Pre ulozene dokumenty v databaze sa dohodlo, ze sa bude ukladat link na miesto na serveri, kde su dokumenty ulozene. Dokumenty budu mozne rozsirit na viacstranove dokumenty v buducnosti. Tiež sa bude v databaze ukladat informacia o tom, ci je dokument sifra alebo kluc.

### 3. Ukazka UI pre registraciu a prihlasenie

Prezentovane zakladne UI pre registraciu, prihlasenie a upload dokumentov.

### 4. Ukazka funkcneho serveru na Raspberry Pi

Prebehla ukazka funkcneho serveru na Raspberry Pi, ktory bezi ako lokalny server pre web aplikaciu. Server bol uspesne prepojeny s databazou a backendom.

## Diskusia o požiadavkách na UI

### Požiadavky na anotačný nástroj

1. **Kopírovanie a paste anotácií s offsetom**
   - Možnosť duplikovať existujúce bounding boxy s automatickým posunutím
   - Urýchlenie procesu anotácie pri opakujúcich sa prvkoch

2. **Intuitívne rozširovanie anotačných bounding boxov**
   - Bočné steny sa majú dať rozširovať do boku
   - Rohy sa majú dať rozširovať do všetkých smerov
   - Horná stena sa má dať rozširovať iba hore
   - Implementácia prirodzeného spôsobu manipulácie s anotáciami

3. **Zlepšenie zoomovania obrázkov**
   - Implementácia zoomu ku kurzoru (zoom na miesto, kde je kurzor)
   - Vylepšenie existujúceho systému približovania obrázkov
   - Lepšia používateľská skúsenosť pri práci s detailami

4. **Vizuálne vylepšenia interakcie**
   - Zmena kurzora zo šípky na ruku po aktivácii posúvania/manipulácie
   - Jasná vizuálna indikácia aktívneho módu

### Bezpečnostné opatrenia

5. **Ochrana proti automatizácii**
   - Implementácia ochrany proti botom (napr. CAPTCHA alebo podobné riešenie)
   - Zabezpečenie registračného a prihlasovacieho procesu

### Dodatočné backend úlohy

6. **Email verifikácia**
   - Implementovať verifikáciu emailovej adresy pri registrácii
   - Vytvoriť nové API endpointy pre verifikačný proces


## Úlohy do nasledujúceho stretnutia
- **Michal Balogh:** Predspracovanie nahratých dokumentov
- **Bc. Juraj Hušek:** Implementovať nové API endpointy pre email verifikáciu a rozšíriť backend funkcionalitu
- **Bc. Ján Osadský:** Dokončiť implementáciu backendovej funkcionality pre registráciu a prihlásenie, pridať email verifikáciu
- **Bc. Fridrich Molnár:** Implementovať vylepšenia anotačného nástroja a integrovať serverovú časť
- **Bc. Zoltán Renczes:** Implementovať vizuálne vylepšenia UI (zmena kurzora, zoom ku kurzoru) a optimalizácia UI/UX anotačného nástroja

## Nasledujúce stretnutie
**Dátum:** 31. októbra 2025
**Čas:** 14:00
**Miesto:** Online - Discord
