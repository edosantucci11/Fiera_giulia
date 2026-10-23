# Fornitori MEDICA + COMPAMED 2026

App per la visita ai fornitori alla fiera MEDICA + COMPAMED 2026 (Düsseldorf, 16–19 novembre 2026).
Funziona da smartphone, tablet e PC. Tutti i dati inseriti restano sul dispositivo.

## Contenuto

| File | A cosa serve |
|---|---|
| `index.html` | L'app completa, in un unico file: dati iniziali, piantine ufficiali dei padiglioni 8A e 8B, elenco espositori ufficiale dei due padiglioni, caratteri, generatore PDF, lettore QR e lettore di PDF già inclusi |
| `sw.js` | Permette di aprire l'app anche senza connessione, dopo la prima apertura |
| `.nojekyll` | Dice a GitHub Pages di pubblicare i file così come sono |

## Pubblicazione su GitHub Pages

1. Crea un nuovo repository su GitHub.
2. Carica i file nella radice del repository: **Add file → Upload files**. Il file `.nojekyll` è nascosto: se non riesci a selezionarlo puoi ometterlo, l'app funziona lo stesso.
3. Vai su **Settings → Pages**. In *Build and deployment* scegli *Deploy from a branch*, poi il branch `main` e la cartella `/ (root)`, e salva.
4. Dopo un paio di minuti l'app è online a un indirizzo del tipo `https://NOME-UTENTE.github.io/NOME-REPOSITORY/`.

L'indirizzo è **https**, quindi fotocamera (lettura QR) e microfono (registrazioni) funzionano anche in diretta.

## Installazione sul telefono

- **iPhone (Safari):** apri l'indirizzo, tocca *Condividi* e poi *Aggiungi alla schermata Home*.
- **Android (Chrome):** apri l'indirizzo, tocca il menu ⋮ e poi *Aggiungi a schermata Home* (o *Installa app*).

Aprila una volta con la rete attiva: da quel momento si apre anche offline.

## Dove finiscono i dati

Appunti, contatti, foto, registrazioni e piantine restano **nel browser del dispositivo**, non su GitHub. Per passarli a un collega o farne una copia di sicurezza: *Impostazioni → File dati → Esporta*. L'altra persona apre la stessa app e usa *Importa*.

Non cancellare i dati di navigazione del sito, altrimenti il contenuto inserito va perso.

## Aggiornare l'app

Sostituisci `index.html` nel repository con la nuova versione. I dati già inseriti sui dispositivi restano.
