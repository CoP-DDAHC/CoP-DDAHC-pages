# Zoznam požiadaviek a funkcionalít

## Funkčné požiadavky

### Spracovanie šifrovacích dokumentov
- [x] 1. Systém musí umožniť nahratie dokumentu (obrázok, sken).  
- [x] 2. Systém musí validovať formát dokumentu a odmietnuť neplatné vstupy. 
- [ ] OBSOLETE 3. Používateľ musí byť schopný klasifikovať dokument (kľúč / šifrový text).
- [ ] NOT INTEGRATED 4. Používateľ musí mať možnosť upraviť parametre predspracovania (thresholdy, odstránenie šumu, vyrovnanie). Tieto zmeny by sa mali zobrazovať v reálnom čase. 
- [x] 5. Používateľ musí mať možnosť manuálne upraviť bounding boxy po spracovaní a ťuknutím na bounding box zmeniť návrh rozpoznania.
- [x] 6. Systém má vedieť detekovať tabuľky v kľúčoch.
- [ ] 7. Používateľ musí byť schopný anotovať symboly a oblasti. - Chýba UI 
- [ ] 8. Používateľ aj systém musia vedieť mapovať symboly do databázy.
- [ ] 9. Systém musí podporovať rekonštrukciu substitučných tabuliek. Chýba BE integrácia
- [ ] TBA 10. Používateľ musí vedieť použiť kľúč na dešifrovanie textu.
- [ ] 11. Používateľ musí vedieť upravovať návrh dešifrovania.
- [ ] 12. Používateľ má možnosť sa vrátiť k predchádzajúcim krokom a upraviť ich. CTRL Z/Y
- [ ] TBA 13. K dokumentu je automaticky pridaný watermark.

---

### Používateľský profil a autentifikácia
- [x] 14. Systém musí umožniť registráciu nového používateľa.
- [x] 15. Používateľ musí mať možnosť registrovať sa pomocou Google účtu.
- [ ] 16. Systém musí umožniť prihlásenie a odhlásenie používateľa. FE chýba
- [ ] 17. Používateľ musí mať možnosť upraviť svoj profil (meno, heslo, ...).
- [x] 18. Používateľ musí mať možnosť spravovať svoje dokumenty (zobrazenie, mazanie).
- [ ] 19. Každá zmena sa zaznamená do histórie aktivity (upload dokumentu, úprava dokumentu, zdieľanie dokumentu). BG Log

---

### Správa dokumentov
- [x] 20. Systém musí umožniť zobrazenie všetkých svojich dokumentov.
- [ ] 21. Používateľ musí vedieť filtrovať dokumenty podľa typu (napríklad kľúče alebo šifrové texty, a ak sú dostupné jazyk, krajina pôvodu, dátum, autor...). ASK Mentor
- [ ] 22. Používateľ musí vedieť prepínať medzi public/private režimom dokumentov. Public integration in DB (skupina public, private, custom)
- [ ] 23. Používateľ musí vedieť zdieľať dokumenty s inými používateľmi.
- [ ] 24. Používateľ musí mať možnosť nastaviť rôzne role prístupu (read / write).

---

### Gamifikácia
- [ ] OBSOLETE 25. Používateľ musí vedieť získavať body, napríklad za nákup kreditov alebo za aktivitu (upload, anotácie).
- [ ] OBSOLETE 26. Používateľ musí vedieť míňať body (AI spracovanie, pokročilé funkcie).
- [ ] OBSOLETE 27. Systém musí zobrazovať rebríček používateľov.

---

### Administrácia
- [ ] 28. Administrátor musí mať možnosť spravovať používateľov. 
- [ ] 29. Administrátor musí mať možnosť spravovať dokumenty.
- [ ] 30. Administrátor musí mať možnosť spravovať symbolovú databázu (normalizácia, zlúčenie duplicít, odstránenie chýb).

---

## Nefunkčné požiadavky (Non-Functional Requirements)
- [x] 31. Systém musí byť dostupný cez webové rozhranie.
- [x] 32. Autentifikácia a dokumenty musia byť bezpečne uložené (šifrované heslá, kontrola prístupov).
- [x] 33. Používateľské rozhranie musí byť intuitívne a responzívne (aj na mobile).
- [x] 34. Systém musí byť modulárny (ľahko rozšíriteľný o nové AI moduly).
