# Zápisnica – Detekčná fáza pipeline a úpravy obrázka

**Dátum:** 5. marec 2026  
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

1. Pokrok v detekčnej časti pipeline
2. Vylepšenia ovládania obrázka a anotácií
3. Správa tried a inštancií v detekcii
4. Ďalšie kroky v UX pipeline

## Priebeh stretnutia

### 1. Pokrok v detekčnej časti pipeline

V detekčnej fáze pipeline pribudli nové funkcionality pre správu tried objektov. Umožnená bola práca s premenovaním tried, prepnutím ich viditeľnosti a zobrazením inštancií jednotlivých anotovaných prvkov.

Tieto zmeny zlepšujú orientáciu používateľa pri väčšom počte detegovaných objektov a pripravujú rozhranie pre pokročilejšiu prácu s anotáciami.

### 2. Vylepšenia ovládania obrázka a anotácií

Do rozhrania bola doplnená funkcionalita zoom a pan v komponente pre prácu s bounding boxmi. To umožňuje pohodlnejšiu prácu s detailmi dokumentu a presnejšie umiestňovanie alebo kontrolu anotácií.

Okrem toho boli doplnené úpravy jasu a kontrastu v kroku predspracovania obrázka spolu s možnosťou resetu týchto nastavení.

### 3. Správa tried a inštancií

Diskutovalo sa o tom, ako má byť prezentovaný zoznam tried a ich inštancií tak, aby zostalo rozhranie prehľadné aj pri väčšom množstve označených prvkov. Implementované bolo zoradenie inštancií podľa pozície v dokumente a jemné hover efekty pre lepšiu orientáciu.

### 4. Ďalšie kroky v UX pipeline

Tím sa zhodol, že je potrebné pokračovať v ladení používateľského zážitku v detekčnej časti pipeline, aby boli prechody medzi jednotlivými krokmi čo najplynulejšie a aby používateľ vedel jednoducho identifikovať, v akej fáze sa nachádza.

## Prijaté rozhodnutia

- Pokračovať v rozšírení detekčného kroku o správu tried a inštancií.
- Zachovať zoom, pan a vizuálne pomôcky ako základ pre ďalšie anotačné funkcie.
- Udržiavať prehľadnosť rozhrania aj pri väčšom počte objektov v dokumente.

## Úlohy do nasledujúceho stretnutia

- **Bc. Michal Balogh:** ďalej rozvíjať detekčný krok a komponenty pre prácu s obrázkom.
- **Bc. Juraj Hušek:** pripraviť backendovú podporu pre nadväzujúce funkcionality pipeline.
- **Bc. Ján Osadský:** konzultovať štruktúru dát pre ďalšie kroky spracovania.
- **Bc. Fridrich Molnár:** overiť frontend integráciu nových ovládacích prvkov.
- **Bc. Zoltán Renczes:** vyladiť vizuálnu prezentáciu tried, inštancií a ovládania obrazu.

## Nasledujúce stretnutie

**Dátum:** 12. marca 2026  
**Čas:** 12:00  
**Umiestnenie:** Slovenská technická univerzita v Bratislave, Fakulta elektrotechniky a informatiky  
**Miestnosť:** A208, FEI STU