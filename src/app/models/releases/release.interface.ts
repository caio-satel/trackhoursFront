export interface Lancamento {
  id?: number;
  idAtividade: number;
  idUsuario: number;
  descricao: string;
  dataInicio: Date;
  dataFim: Date;
  dataRegistro: Date;
}

export interface LancamentoDTO {
  idAtividade: number;
  idUsuario: number;
  descricao: string;
  dataInicio: Date;
  dataFim: Date;
}
