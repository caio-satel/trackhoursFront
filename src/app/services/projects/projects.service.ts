import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Projeto, ProjetoDTO } from '../../models/projects/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  apiUrl = `${environment.api_URL}/projects`;
  private JWT_TOKEN = this.cookieService.get('USER_INFO'); // Token JWT

  // Config para realizar requisições com o Token, garantindo que o usuário está autenticado
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.JWT_TOKEN}`
    })
  };

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  //CRUD Projects
  // GET - Listar todos os projetos
  getProjects(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.apiUrl, this.httpOptions);
  }

  // GET - Buscar projeto filtrado por ID
  getProjectById(id: number): Observable<Projeto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Projeto>(url, this.httpOptions);
  }

  // POST - Cadastrar projeto
  createProject(project: ProjetoDTO): Observable<ProjetoDTO> {
    return this.http.post<Projeto>(this.apiUrl, project, this.httpOptions);
  }

  // PUT - Atualizar projeto
  updateProject(id: number, project: ProjetoDTO): Observable<ProjetoDTO> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<ProjetoDTO>(url, project, this.httpOptions);
  }

  // DELETE - Deletar projeto
  deleteProject(id: number): Observable<ProjetoDTO> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<ProjetoDTO>(url, this.httpOptions);
  }
}
