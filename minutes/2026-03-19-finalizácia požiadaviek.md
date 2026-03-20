# Zápisnica - Pipeline workflow, logy, role
**Dátum:** 19.marec 2026
**Čas:** 12:00 - 13:00
**Miesto:** UNISPACE, FEI STU 
**Zapisovateľ:** Ján Osadský

## Účastníci
- Bc. Michal Balogh – ML/AI Engineer
- Bc. Juraj Hušek – Backend Developer (online)
- Bc. Ján Osadský – Backend Developer (online)
- Bc. Fridrich Molnár – Frontend & Server Developer
- Bc. Zoltán Renczes – Frontend Developer

## Vedúci tímového projektu
- Ing. Stanislav Marochok

## Program stretnutia
1. Vyhodnotenie implementácie požiadaviek  
2. Analýza workflow pre spracovanie dokumentov  
3. Live demo  
4. Backend funkcionality a integrácia databázy pre role a logy 

## Priebeh stretnutia

## 1. Rozdelenie úloh v tíme

Na stretnutí boli prezentované výsledky implementácie, pričom sa podarilo nájsť bug pri používaní viacerých modelov na vytvorenie Bboxov. Diskutovala sa použiteľnosť dokumentovej pipeline, anotovania a používateľského rozhrania. Bolo poznamenané, že treba upraviť front end a deploynuť progres na server.

# 2. Frontend a používateľské rozhranie

Frontend bude doplnený o nové prvky používateľského rozhrania.

Plánované zmeny:

- definovanie brand identity (logo a celá color palette)
- landing page pre užívateľov
- viac user friendly prostredie
- GDPR súhlas
- tutorial pre užívateľa

Diskutovalo sa aj o úprave vizuálu aplikácie. Navrhnutý bol koncept **retro webovej stránky**, ktorá bude obsahovať:

- hodiny  
- meniny  
- počet dokumentov v systéme  

Používateľské rozhranie bude vizuálne pripomínať starý **skicár alebo editor**, čím sa zvýrazní práca s anotáciami.

# 4. Admin workflow

Administrátor systému bude mať možnosť:

- zobraziť všetky dokumenty v sekcii **All Documents** pre private aj public dokumenty
- otvoriť aj cudzí dokument a vidieť anotovanie
- automaticky načítať uložené bounding boxy z backendu

Tieto funkcionality budú implementované v spolupráci backend a frontend časti projektu.


# Prijaté rozhodnutia

- Implementujú sa zmeny s jasne definovanými krokmi.  
- Systém obsahuje **activity log používateľských akcií**.  
- Dokumenty podporujú **public, private a group access režimy**.

# Úlohy do nasledujúceho stretnutia

### **Bc. Michal Balogh**
- opraviť bug v pipeline workflow

### **Bc. Juraj Hušek**
- dokončiť implementáciu admin rozhrania  

### **Bc. Ján Osadský**
- GDPR súhlas (formulácia a UI prevedenie)

### **Bc. Fridrich Molnár**
- deployment na server

### **Bc. Zoltán Renczes**
- definovanie color palette a zaručenie konzistentnosti vizuálov

## Nasledujúce stretnutie
**Dátum:** 27. marca 2026
**Čas:** 12:00  
**Umiestnenie:** Slovenská technická univerzita v Bratislave, Fakulta elektrotechniky a informatiky  
**Miestnosť:** A208, FEI STU  
