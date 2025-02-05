export interface Atividade {
  id?: number;
  idProjeto: number;
  nome: string;
  dataInicio: Date;
  dataFim: Date;
  status: 'ABERTA' | 'EM_ANDAMENTO' | 'CONCLUIDA' | 'PAUSADA';
  idUsuarioResponsavel?: number;
  dataCriacao: Date;
}

export interface AtividadeDTO {
  nome: string;
  dataInicio: Date;
  dataFim: Date;
  status: 'ABERTA' | 'EM_ANDAMENTO' | 'CONCLUIDA' | 'PAUSADA';
  idUsuarioResponsavel?: number;
}
