# Guida pratica per costruire il tuo sito con React + Vite

Questa guida ti permette di partire da una base pulita e costruire da solo un sito completo, ordinato e scalabile.

## 1) Obiettivo della struttura

La base attuale separa responsabilita in modo chiaro:

- JSX: struttura semantica (header, main, section, footer).
- CSS globale: reset e variabili di progetto (design tokens).
- CSS del layout: classi riutilizzabili per comporre le sezioni.
- Components e pages: spazio dedicato alla crescita del progetto senza sporcare la base.

## 2) Come strutturare il sito (approccio consigliato)

Struttura logica consigliata:

1. Layout principale in App.jsx
2. Una pagina principale in pages/Home.jsx
3. Componenti verticali in components (Hero, Header, Footer, Card, CTA, Form, ecc.)
4. Ogni componente con:
   - file JSX
   - eventuale file CSS dedicato (se serve)

Flusso ideale:

1. Disegni la pagina in blocchi (Hero, Servizi, Portfolio, Contatti).
2. Ogni blocco diventa un componente.
3. La pagina importa e ordina i componenti.
4. App monta la pagina.

## 3) Convenzione className: tipi, uso e scopo

Usa className con naming prevedibile. Esempio stile BEM leggero + utility.

Tipi principali:

- Strutturali (layout):
  - container, row, stack-sm, stack-lg, section
  - Servono a gestire larghezza, griglie, allineamenti, spazi verticali.

- Di componente:
  - site-header, site-nav, card, hero, footer
  - Servono a dare identita a un blocco specifico.

- Di variante:
  - section-hero, card-featured, button-primary
  - Servono a differenziare lo stesso componente in contesti diversi.

- Tipografiche:
  - display-title, title-md, eyebrow, lead, muted
  - Servono a standardizzare gerarchia visuale del testo.

Regole pratiche:

1. Una classe = una responsabilita chiara.
2. Non usare nomi vaghi tipo box1, prova, test.
3. Mantieni prefissi coerenti (site-, section-, card-).
4. Usa utility per layout, classi di componente per estetica specifica.

## 4) Come scrivere CSS professionale

Ordine consigliato dentro ogni regola:

1. Posizionamento/layout (display, grid, flex, gap)
2. Dimensioni (width, height, padding, margin)
3. Aspetto (background, border, shadow)
4. Tipografia (font, color)
5. Stati/interazioni (hover, focus-visible)
6. Transizioni/animazioni

Linee guida:

- Evita valori magici ripetuti: usa variabili.
- Evita selettori troppo annidati.
- Pensa mobile-first quando possibile.
- Mantieni contrasto testo/sfondo leggibile.
- Usa transizioni brevi e utili, non decorative.

## 5) Variabili CSS disponibili e configurabili

Le variabili sono definite in src/index.css dentro :root.

### 5.1 Colori semantici

- --color-brand
  - Colore principale del brand.
  - Dove usarlo: elementi identitari (logo mark, accenti, label).

- --color-accent
  - Colore secondario per differenziare callout o aree specifiche.

- --color-bg-page
  - Sfondo generale pagina.

- --color-bg-surface
  - Sfondo superfici come card/pannelli.

- --color-bg-subtle
  - Sfondo leggero per hover o aree soft.

- --color-border-soft
  - Bordi delicati tra sezioni/card.

- --color-text-strong
  - Testi ad alta priorita (titoli).

- --color-text
  - Testo principale corpo pagina.

- --color-text-muted
  - Testo secondario (meta info, descrizioni leggere).

### 5.2 Layout

- --layout-content-max
  - Larghezza massima del contenuto centrale.

### 5.3 Spaziature

Scala a step:

- --space-1, --space-2, --space-3, --space-4, --space-5, --space-6, --space-7, --space-8

Perche usarle:

- Mantieni ritmo visivo coerente.
- Eviti gap/margin casuali.
- Cambiare una scala aggiorna tutto il sistema.

### 5.4 Raggi

- --radius-lg
  - Raggio card e blocchi principali.

- --radius-pill
  - Raggio per pill/nav/button.

- --radius-full
  - Cerchi perfetti (es. marker brand).

### 5.5 Ombre

- --shadow-sm
  - Ombra standard leggera.

### 5.6 Motion

- --motion-fast
  - Durata base per hover/focus e piccole transizioni.

### 5.7 Tipografia

- --font-family-sans
- --font-family-display
- --font-size-body
- --line-height-body
- --font-display
- --font-h3
- --font-body
- --font-ui
- --font-label

Perche usarle:

- Gerarchia tipografica consistente.
- Cambi font o scale in un solo punto.
- Riduci incoerenze tra pagine/componenti.

## 6) Esempio mentale: come aggiungere una nuova sezione

Passi pratici:

1. In pages/Home.jsx aggiungi una section con className section.
2. Dentro, usa un div con className container.
3. Per contenuto verticale usa stack-sm o stack-lg.
4. Per blocchi in griglia usa grid-auto.
5. Per titoli e testi usa title-md, lead, muted.

Se la sezione ha stile unico:

- Crea una classe nuova (es. section-services)
- Definisci solo le regole specifiche, riusando i token.

## 7) Errori comuni da evitare

- Duplicare colori hardcoded invece di usare variabili.
- Creare classi con naming non coerente.
- Fare CSS troppo specifico (catene lunghe di selettori).
- Mischiare struttura e stile in modo confuso.
- Inserire layout direttamente inline nel JSX salvo casi eccezionali.

## 8) Piano di crescita consigliato

1. Crea Home reale in pages/Home.jsx.
2. Sposta Header, Hero, Footer in components e rendili dinamici via props.
3. Aggiungi routing quando avrai piu pagine.
4. Introduci una cartella data per contenuti (testi, link, servizi).
5. Aggiorna progressivamente i token per definire un design system personale.

## 9) Checklist prima del deploy

1. Layout responsive da mobile a desktop.
2. Contrasto colori accessibile.
3. Focus keyboard visibile su link/button.
4. Testo leggibile e gerarchie chiare.
5. Build senza errori e lint pulito.

Con questa base puoi costruire il sito in modo ordinato, professionale e facilmente manutenibile.
