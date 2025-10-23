# Zápisnica - Stretnutie ohľadom Docker setupu a klasifikácie dokumentov
**Dátum:** 09. október 2025  
**Čas:** 12:00 - 12:20  
**Miesto:** A 208  
**Zapisovateľ:** Bc. Fridrich Molnár

## Účastníci
- Bc. Michal Balogh – ML/AI Engineer
- Bc. Juraj Hušek – Backend Developer - ospravedlnený
- Bc. Ján Osadský – Backend Developer - ospravedlnený
- Bc. Fridrich Molnár – Frontend & Server Developer
- Bc. Zoltán Renczes – Frontend Developer

## Vedúci tímového projektu
- Ing. Stanislav Marochok

## Program stretnutia
1. Prehľad Docker setupu
2. Diskusia o klasifikácii dokumentov
3. Úlohy do nasledujúceho stretnutia

## Diskusia a rozhodnutia

### 1. Docker setup

Účastníci zhodnotili aktuálny stav kontajnerov (backend, databáza, frontend, AI service). Všetky kontajnery sú prepojené a komunikujú správne. Diskutovalo sa o stabilite prostredia a možnostiach ďalšieho rozvoja serverovej časti. Zhodli sme sa, že setup je pripravený pre integráciu klasifikácie a frontend funkcionality.

### 2. Klasifikácia dokumentov

Prebehla demonštrácia OCR a klasifikácie dokumentov. Systém dokáže rozpoznať dokument a zamietnuť všetko, čo nie je dokument. Diskutovalo sa o možnom nasadení tejto funkcionality do aplikácie a o spôsobe ukladania logov a výsledkov do databázy. Zhodli sme sa, že klasifikáciu je možné integrovať do aplikácie v najbližšom kroku.

### 3. Plán nasledujúcich krokov

Prebehla diskusia o prioritách ďalšieho vývoja: integrácia klasifikácie, dokončenie frontendu podľa možností, návrh backend riešení, spustenie servera a sprístupnenie databázy pre ukladanie dokumentov a logov. Zhodli sme sa, že je potrebné pripraviť registráciu a prihlásenie používateľov a rozdeliť úlohy medzi členov tímu.

## Úlohy do nasledujúceho stretnutia
- **Bc. Michal Balogh:** Pokračovať v práci na klasifikácii a AI nástrojoch
- **Bc. Juraj Hušek:** Navrhnúť backend riešenie a sprístupniť databázu
- **Bc. Ján Osadský:** Implementácia backendovej funkcionality pre registráciu a prihlásenie
- **Bc. Fridrich Molnár:** Dokončiť frontend - implementovať registráciu a prihlásenie a integrovať serverovú časť
- **Bc. Zoltán Renczes:** Dolaďovanie vizuálneho rozloženia frontendu, optimalizácia UI/UX


## Nasledujúce stretnutie
**Dátum:** 23. októbra 2025  
**Čas:** 16:00  
**Miesto:** Online

## Poznámky
- Tím sa zhodol, že Docker setup a environment fungujú stabilne a sú pripravené na integráciu klasifikácie a frontendu.  
- OCR a klasifikácia dokumentov fungujú správne.  
- Tím sa dohodol na pravidelných konzultáciách a koordinácii pri integrácii frontendu a backendu, aby sa predišlo problémom a zabezpečila sa hladká implementácia ďalších funkcionalít.