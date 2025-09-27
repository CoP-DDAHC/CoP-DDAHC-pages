# Zápisnica - Analýza požiadaviek a plánovanie
**Dátum:** 3. októbra 2025
**Čas:** 10:00 - 12:00
**Miesto:** Miestnosť 123, FEI STU
**Zapisovateľ:** [Meno zapisovateľa]

## Účastníci
- [Meno 1] - [Rola] ✓
- [Meno 2] - [Rola] ✓
- [Meno 3] - [Rola] ✓
- [Meno 4] - [Rola] ✓
- [Meno 5] - [Rola] ✗ (ospravedlnený)

## Zhodnotenie úloh z predchádzajúceho stretnutia
- ✅ **Všetci:** Prečítanie zadania - splnené
- ✅ **GitHub repository** - vytvorené a nastavené
- ✅ **Existujúce riešenia** - analyzované 3 podobné projekty
- ✅ **AI/ML technológie** - preštudované
- ⏳ **Databázová schéma** - v procese, hotová budúci týždeň

## Program stretnutia
1. Diskusia o analyzovaných riešeniach
2. Definovanie funkčných požiadaviek
3. Vytvorenie časového plánu
4. Rozdelenie práce na nasledujúce týždne

## Diskusia a rozhodnutia

### 1. Analyzované riešenia
Tím analyzoval nasledujúce existujúce riešenia:
- **Transkribus** - dobré pre OCR, ale chýba dešifrovanie
- **IIIF Annotation tools** - vhodné pre anotácie
- **Historical cipher databases** - inšpirácia pre databázový návrh

### 2. Funkčné požiadavky

#### Core Features
1. **Upload a preprocessing obrazov**
   - Drag & drop interface
   - Batch upload možnosť
   - Automatická normalizácia, binarizácia

2. **Annotation systém**
   - Multi-level anotácie (região, entry, symbol)
   - Real-time collaborative editing
   - Export/import anotácií

3. **AI/Non-AI processing**
   - Symbol detection
   - Table reconstruction
   - Handwriting recognition
   - Fallback na manuálne metódy

4. **Decryption modul**
   - Frequency analysis
   - Manual correction tools
   - Cipher key application

#### User Management
- Registrácia/prihlasovanie
- Role-based permissions
- Project sharing
- Credit system
- Virtual points economy

### 3. Časový plán

| Týždeň | Aktivita | Zodpovedný |
|--------|----------|------------|
| 1-2 | Návrh architektúry | Všetci |
| 3-4 | Database setup + Backend API | Backend team |
| 5-6 | Frontend components | Frontend team |
| 7-8 | AI modules integration | AI specialist |
| 9-10 | User management | Full team |
| 11-12 | Testing + optimization | Full team |

### 4. Úlohy do nasledujúceho stretnutia
- [ ] [Meno]: Dokončiť databázovú schému
- [ ] [Meno]: Vytvoriť wireframes pre UI
- [ ] [Meno]: Naštudovať OpenCV pre preprocessing
- [ ] [Meno]: Pripraviť vývojové prostredie
- [ ] [Meno]: Nájsť testovací dataset

## Riziká a problémy
- **Riziko:** Komplexnosť AI časti môže spôsobiť delay
- **Riešenie:** Paralelný vývoj non-AI metód ako backup
- **Riziko:** Nedostatok historických dát pre testovanie
- **Riešenie:** Vytvorenie syntetických testovacích dát

## Nasledujúce stretnutie
**Dátum:** 10. októbra 2025
**Čas:** 10:00
**Miesto:** Miestnosť 123, FEI STU
**Agenda:** Prezenácia návrhov architektúry
