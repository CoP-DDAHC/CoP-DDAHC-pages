# Zápisnica - Pipeline workflow, logy, role
**Dátum:** 19. február 2026
**Čas:** 12:00 - 13:00
**Miesto:** UNISPACE, FEI STU / Discord (online)
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
1. Rekapitulácia a rozdelenie úloh pre ďalšiu fázu implementácie  
2. Návrh workflow pipeline pre spracovanie dokumentov  
3. Úpravy používateľského rozhrania a anotovacieho nástroja  
4. Backend funkcionality a integrácia databázy pre role a logy 

## Priebeh stretnutia

## 1. Rozdelenie úloh v tíme

Na stretnutí bolo dohodnuté prerozdelenie implementačných úloh medzi členov tímu. Postupne sme si prešli požiadavky, aktualizovali status a určili prioritu. Každý člen si má zároveň overiť funkčnosť lokálneho prostredia a schopnosť spustiť celý projekt.

Diskutovali sa najmä úlohy súvisiace s implementáciou dokumentovej pipeline, anotovania a používateľského rozhrania.

# 2. Workflow spracovania dokumentu

Tím sa dohodol na základnom workflow spracovania dokumentu v systéme.

Pipeline bude pozostávať z nasledujúcich krokov:

1. **Upload dokumentu** - používateľ nahrá dokument (obrázok alebo sken).  
2. **Klasifikácia historického dokumentu** - systém overí, či ide o historický dokument.  
3. **Úprava obrázka** - používateľ môže dokument orezať a otočiť.  
4. **Anotovanie bounding boxov** - používateľ pridáva a upravuje bounding boxy nad symbolmi.  
5. **Uloženie anotácií** - bounding boxy sa ukladajú do databázy vo formáte JSON.  
6. **Dokončenie spracovania** - dokument je uložený spolu s anotáciami.
7. **Mock up riešenia** - dokument bude simulovať priradenie kľúčov k riešeniu.

Každý krok pipeline bude zaznamenaný v databáze, aby bolo možné sledovať stav spracovania dokumentu.

# 3. Frontend a používateľské rozhranie

Frontend bude doplnený o nové prvky používateľského rozhrania.

Plánované zmeny:

- implementácia **editoru bounding boxov**  
- možnosť **mazania a úpravy boxov**  
- zobrazenie zoznamu tried symbolov v bočnom paneli  
- tlačidlá pre základné operácie (controls)  
- implementácia funkcií **undo (Ctrl+Z)** a **redo (Ctrl+Y)**  
- automatické uloženie bounding boxov po zastavení pohybu boxu  

Diskutovalo sa aj o úprave vizuálu aplikácie. Navrhnutý bol koncept **retro webovej stránky**, ktorá bude obsahovať:

- hodiny  
- meniny  
- počet dokumentov v systéme  

Používateľské rozhranie bude vizuálne pripomínať starý **skicár alebo editor**, čím sa zvýrazní práca s anotáciami.

# 4. Správa dokumentov

Používateľ bude mať možnosť:

- zobraziť svoje dokumenty v sekcii **My Documents**
- otvoriť dokument a pokračovať v anotovaní
- automaticky načítať uložené bounding boxy z backendu

Diskutovalo sa aj o možnosti správy prístupových práv k dokumentom.

Dokumenty budú podporovať režimy:

- **private**
- **public**
- **custom groups**

Tieto funkcionality budú implementované v spolupráci backend a frontend časti projektu.

# 5. Backend funkcionality

Backend bude ďalej rozšírený o nasledujúce funkcionality:

- implementácia **activity logu**, ktorý bude zaznamenávať operácie používateľov (upload dokumentu, úprava anotácií, zdieľanie dokumentov)  
- návrh **databázy symbolov**, ktorá umožní mapovanie anotovaných symbolov do centrálnej databázy  
- uloženie bounding boxov vo formáte **JSON**  
- implementácia stavu pipeline spracovania dokumentu  

Tieto funkcionality umožnia lepšiu sledovateľnosť práce používateľov a správu anotovaných dát.

# Prijaté rozhodnutia

- Implementuje sa **pipeline spracovania dokumentu** s jasne definovanými krokmi.  
- Bounding boxy budú ukladané ako **JSON objekty** v databáze.  
- Systém bude obsahovať **activity log používateľských akcií**.  
- Používateľské rozhranie bude doplnené o **editor bounding boxov a undo/redo funkcionalitu**.  
- Dokumenty budú podporovať **public, private a group access režimy**.

# Úlohy do nasledujúceho stretnutia

### **Bc. Michal Balogh**
- finalizovať vývoj AI service  
- implementovať workflow pre prácu s dokumentom 

### **Bc. Juraj Hušek**
- pokračovať v implementácii backend API, opraviť Google Auth  
- rozšíriť funkcionalitu správy dokumentov  

### **Bc. Ján Osadský**
- implementovať backend funkcionality súvisiace s databázou a activity logom
- BG role a rozdelenie prístupov  
- podieľať sa na návrhu databázy symbolov  

### **Bc. Fridrich Molnár**
- implementovať editor bounding boxov  
- UI pre role a rozdelenie prístupov  

### **Bc. Zoltán Renczes**
- implementovať používateľské rozhranie pre správu dokumentov  
- pracovať na UX anotovacieho nástroja  


## Nasledujúce stretnutie
**Dátum:** 5. marca 2026
**Čas:** 12:00  
**Umiestnenie:** Slovenská technická univerzita v Bratislave, Fakulta elektrotechniky a informatiky  
**Miestnosť:** A208, FEI STU  
