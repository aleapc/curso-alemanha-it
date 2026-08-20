import type { ModuloOutline } from '../types';

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  ARQUIVO GERADO — não edite à mão.                                       │
// │  Fonte: os ep-*.json (título) + slots.json (ordem e módulo).             │
// │  Regenerar: npm run outline   ·   Conferir: npm run outline:conferir     │
// │                                                                          │
// │  O título vivia aqui E no episódio. Duas canônicas para a mesma string   │
// │  é o defeito que fez duas partes reescritas aparecerem na tela com o     │
// │  título antigo e duas partes novas não aparecerem. Agora deriva.         │
// └──────────────────────────────────────────────────────────────────────────┘

export const outline: ModuloOutline[] = [
  {
    nivel: 'basico',
    nome: 'Basic · Get by',
    descricao: 'The German that gets the day done: arriving, ordering, paying, moving, and getting help.',
    cor: 'terracota',
    licoes: [
      { id: 'b01', titulo: 'I suoni sono già tuoi — cinque lettere hanno bisogno di un nuovo compito', pronta: true },
      { id: 'b02', titulo: 'Saluta entrando, e altre nove parole', pronta: true },
      { id: 'b03', titulo: 'Entschuldigung, e poi la cosa che ti serve', pronta: true },
      { id: 'b04', titulo: 'Cinque decisioni che il tuo tavolo di cucina può ancora prendere', pronta: true },
      { id: 'b05', titulo: 'Tre domande, e hai già tutte e tre le risposte', pronta: true },
      { id: 'b06', titulo: 'Haben Sie — e poi qualsiasi cosa serva alla prima ora', pronta: true },
      { id: 'b07', titulo: 'Können Sie — il viaggio in centro, chiesto in quattro parole', pronta: true },
      { id: 'b08', titulo: 'Wo ist — e la risposta che puoi tenere in testa', pronta: true },
      { id: 'b09', titulo: 'Il timbro che trasforma la carta in un biglietto', pronta: true },
      { id: 'b10', titulo: 'Pronuncia la seconda lettera e il cartello si legge da solo', pronta: true },
      { id: 'b11', titulo: 'Ich möchte — e arriva il primo giro', pronta: true },
      { id: 'b12', titulo: 'Ohne — la paroletta che rende il piatto tuo', pronta: true },
      { id: 'b13', titulo: 'Ich habe eine Allergie — detto prima dell\'ordine, non dopo il piatto', pronta: true },
      { id: 'b14', titulo: 'Zahlen, bitte — e il numero sul menu è il numero che paghi', pronta: true },
      { id: 'b15', titulo: 'Was kostet das? — le tre parole che danno il prezzo a qualsiasi cosa sullo scaffale', pronta: true },
      { id: 'b16', titulo: 'Haben Sie — il minuto alla reception che migliora la stanza', pronta: true },
      { id: 'b17', titulo: 'Apotheke — il banco che lo risolve prima che debba farlo un medico', pronta: true },
      { id: 'b18', titulo: 'Der letzte Morgen — was kostet, le valigie, e il saluto che ti fa reinvitare', pronta: true },
    ]
  },
  {
    nivel: 'intermediario',
    nome: 'Intermediate · Get the good stuff',
    descricao: 'Eat where they eat, when they eat, at the price they pay.',
    cor: 'oliva',
    licoes: [
      { id: 'i01', titulo: 'Wann ist — la domanda che ti mette in mano il loro orario', pronta: true },
      { id: 'i02', titulo: 'Moin, Grüß Gott, Hallo — e poi tocca a te, al banco', pronta: true },
      { id: 'i03', titulo: 'Was empfehlen Sie — e il piatto che non avevi intenzione di ordinare', pronta: true },
      { id: 'i04', titulo: 'Die Runde — un tavolo, un giro, una parola per il conto', pronta: true },
      { id: 'i05', titulo: 'Le cinque domande, e le due frasi che chiudono qualsiasi sesta', pronta: true },
      { id: 'i06', titulo: 'Ich war, ich hatte — e otto blocchi già pronti per tutto il resto', pronta: true },
      { id: 'i07', titulo: 'Di\' ad alta voce la cosa buona, e di\' quella semplice con la stessa voce', pronta: true },
      { id: 'i08', titulo: 'Invitato a entrare: cosa porti oltre la soglia, e quando ti alzi', pronta: true },
      { id: 'i09', titulo: 'La mattina di mercato, la macchina del vuoto e la festa che capita questa settimana', pronta: true },
      { id: 'i10', titulo: 'I soldi qui: l\'etichetta è già il prezzo intero', pronta: true },
    ]
  },
  {
    nivel: 'avancado',
    nome: 'Advanced · Read the room',
    descricao: 'The humour, the pride, the old argument, and what their silence means.',
    cor: 'indigo',
    licoes: [
      { id: 'a01', titulo: 'Come parlano quando non è a te che parlano', pronta: true },
      { id: 'a02', titulo: 'Di cosa ridono, e la battuta che è tua', pronta: true },
      { id: 'a03', titulo: 'Chi credono di essere', pronta: true },
      { id: 'a04', titulo: 'La vecchia discussione', pronta: true },
      { id: 'a05', titulo: 'L\'altra lingua, e il saluto che si sposta con la mappa', pronta: true },
      { id: 'a06', titulo: 'Il tre di ottobre, e altri quindici calendari', pronta: true },
      { id: 'a07', titulo: 'L\'offerta che non fai mai, e devi solo accettare', pronta: true },
      { id: 'a08', titulo: 'L\'ultima mattina, e dieci aperture che stanno in tasca', pronta: true },
    ]
  },
];

// Gerado de static/img/ — a home só pede imagem que existe.
export const COM_IMAGEM = new Set(["a01","a02","a03","a04","a05","a06","a07","a08","b01","b02","b03","b04","b05","b06","b07","b08","b09","b10","b11","b12","b13","b14","b15","b16","b17","b18","i01","i02","i03","i04","i05","i06","i07","i08","i09","i10"]);
