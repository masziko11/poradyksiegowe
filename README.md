# KSeF pod kontrolą — landing page

Statyczna, responsywna strona sprzedażowa polskiego poradnika PDF. Można ją opublikować na Netlify lub dowolnym hostingu statycznym.

## Podgląd lokalny

Otwórz `index.html` w przeglądarce albo uruchom lokalny serwer statyczny w katalogu projektu.

## Przed publikacją sprzedaży

1. W `script.js` ustaw `CHECKOUT_URL` na bezpośredni adres koszyka/strony płatności (Naffy, Easycart lub innej platformy). Bez adresu przycisk pozostaje nieaktywny.
2. Uzupełnij cenę, sprzedawcę, kontakt, regulamin, politykę prywatności i informacje o prawach konsumenta w `index.html`.
3. Uzupełnij sprawdzony sposób i czas dostarczenia PDF po płatności.
4. Prześlij pełny plik PDF wyłącznie do wybranej platformy sprzedażowej. Nie umieszczaj go w tym repozytorium ani w publicznym katalogu hostingu.

Obraz w `public/images/` jest ilustracją strony, nie częścią płatnego produktu. Wizualizacje checklist i schematu w sekcji podglądu są autorskimi makietami HTML opartymi na tematach z poradnika, a nie zrzutami stron PDF.

