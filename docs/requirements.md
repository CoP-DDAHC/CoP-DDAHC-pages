# Zoznam požiadaviek a funkcionalít

## Funkčné požiadavky

### Spracovanie šifrovacích dokumentov
1. Systém musí umožniť nahratie dokumentu (obrázok, sken).
2. Systém musí validovať formát dokumentu a odmietnuť neplatné vstupy.
3. Používateľ musí byť schopný klasifikovať dokument (kľúč / šifrový text).
4. Používateľ musí mať možnosť nastaviť parametre predspracovania (thresholdy, odstránenie šumu, vyrovnanie).
5. Systém musí umožniť automatické predspracovanie dokumentov (AI/heuristiky).
6. Používateľ musí mať možnosť manuálne upraviť bounding boxy a segmenty po spracovaní.
7. Systém má vedieť detekovať tabuľky v kľúčoch.
8. Používateľ musí byť schopný annotovať symboly a oblasti.
9. Používateľ aj systém musia vedieť mapovať symboly do databázy.
10. Systém musí podporovať rekonštrukciu substitučných tabuliek.
11. Používateľ musí vedieť použiť kľúč na dešifrovanie textu.
12. Používateľ musí vedieť upravovať návrh dešifrovania.

---

### Používateľský profil a autentifikácia
13. Systém musí umožniť registráciu nového používateľa.
14. Systém musí umožniť prihlásenie a odhlásenie používateľa.
15. Používateľ musí mať možnosť upraviť svoj profil (meno, heslo, ...).
16. Používateľ musí mať možnosť spravovať svoje dokumenty (zobrazenie, mazanie).

---

### Správa dokumentov
17. Systém musí umožniť zobrazenie všetkých dokumentov.
18. Používateľ musí vedieť filtrovať dokumenty podľa typu (kľúče / šifrové texty).
19. Používateľ musí vedieť prepínať medzi public/private režimom dokumentov.

---

### Gamifikácia
20. Používateľ musí získavať body za aktivitu (upload, anotácie).
21. Používateľ musí vedieť míňať body (AI spracovanie, pokročilé funkcie).
22. Systém musí zobrazovať rebríček používateľov.

---

### Administrácia
23. Administrátor musí mať možnosť spravovať používateľov.
24. Administrátor musí mať možnosť spravovať dokumenty.
25. Administrátor musí mať možnosť spravovať symbolovú databázu (normalizácia, zlúčenie duplicít, odstránenie chýb).

---

## Nefunkčné požiadavky (Non-Functional Requirements)
26. Systém musí byť dostupný cez webové rozhranie.
27. Autentifikácia a dokumenty musia byť bezpečne uložené (šifrované heslá, kontrola prístupov).
28. Používateľské rozhranie musí byť intuitívne a responzívne (aj na mobile).
29. Systém musí byť modulárny (ľahko rozšíriteľný o nové AI moduly).
