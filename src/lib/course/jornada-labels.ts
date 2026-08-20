// Texto de exibição das fases — na língua do COMPRADOR (it).
// Dado, não lógica: gerado a partir da tabela i18n do reposicionamento.
// Ver jornada.ts para a estrutura universal (slot → fase).
import type { FaseId } from './jornada';

export const FASE_LABEL: Record<FaseId, { emoji: string; nome: string; descricao: string }> = {
  chegada: { emoji: '🛬', nome: "Arrivo", descricao: "Le tue prime 24 ore — dall'aereo alla sistemazione." },
  diaadia: { emoji: '☀️', nome: "La vita di tutti i giorni", descricao: "Mangiare, fare acquisti, spostarsi e cavarsela — come chi lo conosce già." },
  integrando: { emoji: '🌙', nome: "Integrarsi", descricao: "Non un turista perso — qualcuno venuto per restare un po'." }
};

export const FASE_COR: Record<FaseId, string> = {
  chegada: 'terracota',
  diaadia: 'salvia',
  integrando: 'oceano'
};

export const PROMESSA = {
  headline: "La lingua del tuo viaggio, nell'ordine in cui ti servirà davvero.",
  subhead: "Dal banco dell'aeroporto all'ultimo brindisi della serata.",
  provaLabel: "Un fatto che questo corso insegna davvero:"
};
