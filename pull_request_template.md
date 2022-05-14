## CR checklist

//test

### a11y
- [ ] test w lighthouse robiony w trybie incognito
- [ ] test a11y  ma wynik powyżej 90% 
- [ ] obrazki mają odpowiednie atrybuty alt
- [ ] obrazki dekoracyjne mają przypisany atrybut aria-hidden=true
- [ ] ikonki-linki mają przypisany atrybut aria-label
- [ ] da się przejść przez aplikację tabem
- [ ] da się potwierdzić wybór elementu enterem
- [ ] linki wyróżnione są nie tylko przez kolor
- [ ] jeśli element nie spełnia swojej podstawowej funkcji (np. button staje się linkiem)- przypisz mu odpowiedni atrybut role
- [ ] nagłówki w odpowiedniej kolejności (tylko jedno h1)
- [ ] strona ma logiczną kolejność tabów
- [ ] element ma odpowiednio oznaczony focus (np. tło, border)
- [ ] teksty są czytelne (mają odpowiedni kontrast)
- [ ] inputy używają autocomplete gdzie to możliwe
- [ ] tekst napisany jest prostym, zrozumiałym językiem (w tym komunikaty dodatkowe, błędy, itd)



### inne
- [ ] Build/deploy przechodzi
- [ ] Kod jest zrozumiały
- [ ] Branch działa lokalnie bez błędów
- [ ] PR nie popsuł czyjejś pracy (trzeba przeklikać się przez apkę)
- [ ] Brak błędów w konsoli
- [ ] Nazwa funkcji pokrywa się z nazwą pliku
- [ ] Nazwy zmiennych/obiektów jasno mówią czego dotyczą
- [ ] lintery nie pokazują błędów
- [ ] eslint-disable nie jest na początku pliku (chyba, że jest ważny powód do tego)
- [ ] nie ma zbędnych console.log
- [ ] sprawdź czy za długi kod da się rozdzielić na moduły
- [ ] usunięto zbędne importy i nieużywane zmienne oraz komentarze
- [ ] kolejność komponentu: importy, nazwa komponentu, zmienne, funkcje pomocnicze, hooki, jsx
- [ ] pr z ui zawiera screen oraz opis co zostało zmienione
- [ ] pr ma przypisanego autora
- [ ] pliki są umieszczone w odpowiednich folderach
