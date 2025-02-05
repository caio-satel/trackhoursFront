export interface Usuario {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  dataCriacao: Date;
  ultimoLogin?: Date;
  perfil: 'ADMIN' | 'USUARIO'; // Talvez mudar para ENUM
}

export interface UsuarioDTO {
  nome?: string;
  email: string;
  senha: string;
}
