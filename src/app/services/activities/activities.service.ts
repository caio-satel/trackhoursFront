import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../enviroments/enviroment';
import { Observable } from 'rxjs';
import { Atividade, AtividadeDTO } from '../../models/activities/activity.interface';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  apiUrl = `${environment.api_URL}/activities`;
  private JWT_TOKEN = this.cookieService.get('USER_INFO'); // Token JWT

  // Config para realizar requisições com o Token, garantindo que o usuário está autenticado
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.JWT_TOKEN}`
    })
  };

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  // CRUD Activities
  // GET - Listar todos os atividades
  getActivities(): Observable<Atividade[]> {
    return this.http.get<Atividade[]>(this.apiUrl, this.httpOptions);
  }

  // GET - Buscar atividade filtrado por ID
  getActivityById(id: number): Observable<Atividade> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Atividade>(url, this.httpOptions);
  }

  // POST - Cadastrar atividade
  createActivity(activity: AtividadeDTO): Observable<AtividadeDTO> {
    return this.http.post<Atividade>(this.apiUrl, activity, this.httpOptions);
  }

  // PUT - Atualizar atividade
  updateActivity(id: number, activity: AtividadeDTO): Observable<AtividadeDTO> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Atividade>(url, activity, this.httpOptions);
  }

  // DELETE - Deletar atividade
  deleteActivity(id: number): Observable<Atividade> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Atividade>(url, this.httpOptions);
  }
}
