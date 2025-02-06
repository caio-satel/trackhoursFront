export interface Projeto {
  id?: number;
  nome: string;
  dataInicio: Date;
  dataFim: Date;
  status: 'PLANEJADO' | 'EM_ANDAMENTO' | 'CONCLUIDO' | 'CANCELADO';
  idUsuarioResponsavel: number;
  dataCriacao?: Date;
  prioridade: 'ALTA' | 'MEDIA' | 'BAIXA';
}

export interface ProjetoDTO {
  nome: string;
  dataInicio: Date;
  dataFim: Date;
  status: 'PLANEJADO' | 'EM_ANDAMENTO' | 'CONCLUIDO' | 'CANCELADO';
  idUsuarioResponsavel: number;
  prioridade: 'ALTA' | 'MEDIA' | 'BAIXA';
}
