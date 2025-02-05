export interface Usuario {
  id?: number;
  nome: string;
  email: string;
  senha?: string; // Opcional, pois pode não ser retornado pela API
  dataCriacao: Date;
  ultimoLogin?: Date;
  perfil: 'ADMIN' | 'USUARIO'; // Definindo um tipo restrito para perfil
}

export interface UsuarioDTO {
  nome: string;
  email: string;
  senha: string;
}
