export interface ChamadoUrgente {
  id?: number;
  titulo: string;
  status: number;
  prioridade: number;
  tecnico: number;
  cliente: number;
  observacoes: string;
  nomeCliente?: string;
  nomeTecnico?: string;
  dataAbertura?: string;
  dataFechamento?: string;
}
