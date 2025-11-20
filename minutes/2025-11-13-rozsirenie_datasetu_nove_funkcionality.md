# Zápisnica - Rozšírenie datasetu a nové BE/FE funkcionality
**Dátum:** 6. november 2025
**Čas:** 12:00 - 13:00
**Miesto:** A 208, FEI STU / Discord (online)
**Zapisovateľ:** Juraj Hušek

## Účastníci
- Bc. Michal Balogh – ML/AI Engineer
- Bc. Juraj Hušek – Backend Developer (online)
- Bc. Ján Osadský – Backend Developer (online)
- Bc. Fridrich Molnár – Frontend & Server Developer
- Bc. Zoltán Renczes – Frontend Developer

## Vedúci tímového projektu
- Ing. Stanislav Marochok

## Program stretnutia
1. Odprezentovanie pokroku v implementácii
2. Trénovanie na verejných datasetoch rukou písaného textu
3. Segmentácia viet na slová
4. Rozšírenie datasetu

## Priebeh stretnutia

### 1. Odprezentovanie pokroku v implementácii

#### **Backend – nové funkcionality**
Účastník Bc. Juraj Hušek implementoval kompletné dokumentové API:
  - `GET /documents/user/{user_id}` – zoznam dokumentov používateľa  
  - `GET /documents/{document_id}` – načítanie dokumentu  
  - `DELETE /documents/{document_id}` – bezpečné zmazanie dokumentu (iba vlastník)  
  - `GET /documents` – stránkovaný zoznam všetkých dokumentov  
  - `GET /documents/{document_id}/download` – stiahnutie dokumentu  
  - všetky GET endpointy teraz vracajú aj **thumbnail náhľady**

- Implementovaný nový endpoint `POST /preprocess/{document_id}`:
  - posiela dokument na AI service na predspracovanie  
  - výsledok sa vracia ako `StreamingResponse`  
  - dostupné len pre autentifikovaných používateľov

Opravená bola aj funkcionalita nahrávania dokumentov – dokumenty sa po novom spoľahlivo ukladajú do databázy, generujú sa príslušné changelog záznamy a korektne sa ukladá informácia o vlastníkovi dokumentu.

#### **Frontend – vylepšenia**
Na frontende implementoval účastník Bc. Fridrich Molnár bounding boxy v časti Upload tak, aby boli plne **dragovateľné a resizovateľné**, čo zlepšuje anotovanie. Zároveň bola implementovaná funkcionalita na realtime vytvorenie nového bounding boxu. Pribudli aj toast notifikácie zobrazujúce výsledok používateľských akcií. Konfigurácia frontendu bola doplnená o upravené CORS nastavenia a aktualizované proxy URL, čo stabilizuje komunikáciu s backendom.

### 2. Trénovanie na verejných datasetoch rukou písaného textu

Účastník Bc. Michal Balogh informoval o postupe trénovania modelu AI service na veľkých verejných datasetoch rukou písaného textu. Cieľom je natrénovať základný model na množstve ručne písaných ukážok, aby sa zlepšila generalizácia. Po vytrénovaní základného modelu bude prebiehať finetuning na našom datasete anotovaných historických dokumentov, čím sa model prispôsobí špecifikám písma a typickým artefaktom starých manuskriptov. 

### 3. Segmentácia viet na slová

Vedúci projektu Ing. Stanislav Marochok pokračoval vo výskume verejných datasetov, ktoré poskytujú anotácie na úrovni celých viet. Jeho cieľom bolo tieto anotácie spracovať a previesť ich na úroveň jednotlivých slov. Tento postup umožní porovnať sentence-level a word-level granularitu a overiť, ktorá z nich poskytuje lepšie výsledky pri trénovaní.

### 4. Rozšírenie datasetu

Účastníci diskutovali o potrebe rozšírenia datasetu anotovaných historických dokumentov pre zvýšenie úspšenosti modelu. Do ďalšieho stretnutia je potrebné dataset rozšíriť.

## Prijaté rozhodnutia
- Pokračuje sa v trénovaní modelov na verejných datasetoch.  
- Budú sa testovať alternatívne formy predspracovania.  
- Nové backendové a frontendové funkcionality sa budú ďalej stabilizovať a vyvýjať.
- Dataset anotovaných historických dokumentov sa rozšíri.


## Úlohy do nasledujúceho stretnutia
- **Bc. Michal Balogh:** Pokračovať v trénovaní na verejných datasetoch a pripraviť finetuning a anotovať ďalšie historické dokumenty
- **Bc. Juraj Hušek:** Pokračovať v implementácii API a anotovať ďalšie historické dokumenty
- **Bc. Ján Osadský:** Pokračovať v implementácii API
- **Bc. Fridrich Molnár:** pracovať na vylepšení UI/UX a anotovacieho nástroja
- **Bc. Zoltán Renczes:** pracovať na vylepšení UI/UX a anotovacieho nástroja

## Nasledujúce stretnutie
**Dátum:** 20. novembra 2025
**Čas:** 12:00  
**Umiestnenie:** Slovenská technická univerzita v Bratislave, Fakulta elektrotechniky a informatiky  
**Miestnosť:** A208, FEI STU  
