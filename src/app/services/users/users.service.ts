import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Usuario, UsuarioDTO } from '../../models/users/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = `${environment.api_URL}/users`;

  // Inject dependencies | HTTPClient - Garante que esses serviços possam fazer requisições HTTP | CookieService - Leitura e escrita de cookies
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  // Verificar se o usuário está logado
  userLogged(): boolean {
    // Verificar se o cookie USER_INFO existe
    const JWT_TOKEN = this.cookieService.get('USER_INFO');
    return !!JWT_TOKEN; // Mesma coisa que: JWT_TOKEN ? true : false; || Retorna true ou false
  }

  // Crud Users
  // GET - Listar todos os usuários
  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  // GET - Buscar usuário filtrado por ID
  getUserById(id: number): Observable<Usuario> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Usuario>(url);
  }

  // POST - Cadastrar usuário
  createUser(user: UsuarioDTO): Observable<UsuarioDTO> {
    const url = `${this.apiUrl}/new`;
    return this.http.post<UsuarioDTO>(url, user);
  }

  // PUT - Atualizar usuário
  updateUser(id: number, user: UsuarioDTO): Observable<UsuarioDTO> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.put<UsuarioDTO>(url, user);
  }

  // DELETE - Deletar usuário
  deleteUser(id: number): Observable<UsuarioDTO> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete<UsuarioDTO>(url);
  }
}
