// A CONFIG DE CURSO — o que muda entre SKUs mora AQUI e só aqui. Componentes
// agnósticos de língua (busca, tradutor, bolso do viajante) leem daqui; nenhum
// deles tem par de idioma ou moeda hard-coded. Derivar um SKU novo = copiar este
// arquivo e trocar os valores.

export const curso = {
  /**
   * Identidade do SKU, e ela NÃO é cosmética: é o namespace de localStorage.
   * Todos os cursos servem de aleapc.github.io/<curso>/, e localStorage é por
   * ORIGEM, não por caminho — sem isto, os cursos leem e sobrescrevem o
   * progresso uns dos outros.
   */
  sku: 'curso-alemanha-it',
  /** Idioma do comprador (a voz-guia). */
  buyerLang: 'it',
  /** Idioma do destino (a fala nativa ensinada). */
  targetLang: 'de',
  /** Par para o link do Google Tradutor: sl = comprador, tl = destino. */
  translatorPair: { sl: 'it', tl: 'de' },
  /** Moeda do destino. */
  destCurrency: 'EUR',
  /**
   * Moedas de "casa" do comprador que vale converter no bolso do viajante.
   * O comprador anglófono deste SKU vem dos EUA e do Reino Unido, e nenhum dos
   * dois usa euro — o conversor é necessário aqui.
   */
  homeCurrencies: [] as string[],
  timeZone: 'Europe/Berlin',
  cidadeExibicao: 'Berlin',
  faixasNow: [
    { de: 0, linha: 'Le cucine sono chiuse, ma uno Späti o un banco Döner ti sfamano lo stesso.' },
    { de: 5 * 60, linha: 'Non è ancora aperto niente — la Bäckerei alza la saracinesca verso le sei.' },
    { de: 7 * 60, linha: 'Ora della Frühstück: Brötchen freschi, affettati e formaggio, e un caffè forte.' },
    { de: 9 * 60 + 30, linha: 'Siamo ancora in orario di colazione. Un secondo caffè e un dolce di forno ci stanno benissimo.' },
    { de: 11 * 60, linha: 'Le cucine si stanno scaldando. Il Mittagessen, il pasto caldo principale, è quasi in tavola.' },
    { de: 12 * 60 + 30, linha: 'È l’ora del Mittagessen — il vero pasto caldo della giornata, verso mezzogiorno.' },
    { de: 15 * 60, linha: 'Kaffee und Kuchen: la pausa pomeridiana con caffè e una fetta di torta. Molto tedesco.' },
    { de: 17 * 60, linha: 'Tra un pasto e l’altro. Un bretzel o un Currywurst da un chiosco colmano il vuoto.' },
    { de: 18 * 60 + 30, linha: 'Abendbrot: la cena leggera di pane, formaggio e affettati — più leggera del pranzo.' },
    { de: 20 * 60 + 30, linha: 'In città si cena caldo e anche più tardi — i ristoranti sono affollati proprio adesso.' },
    { de: 23 * 60, linha: 'È tardi, ma Späti e Döner tengono viva la notte ben oltre la mezzanotte.' }
  ] as { de: number; linha: string }[]
} as const;

export type CursoConfig = typeof curso;
