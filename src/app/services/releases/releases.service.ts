import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../enviroments/enviroment';
import { Observable } from 'rxjs';
import { Lancamento, LancamentoDTO } from '../../models/releases/release.interface';

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {
  apiUrl = `${environment.api_URL}/releases`;
  private JWT_TOKEN = this.cookieService.get('USER_INFO'); // Token JWT

  // Config para realizar requisições com o Token, garantindo que o usuário está autenticado
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.JWT_TOKEN}`
    })
  };

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  // CRUD Releases
  // GET - Listar todos os lançamentos
  getReleases(): Observable<Lancamento[]> {
    return this.http.get<Lancamento[]>(this.apiUrl, this.httpOptions);
  }

  // GET - Buscar lançamento filtrado por ID
  getReleaseById(id: number): Observable<Lancamento> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Lancamento>(url, this.httpOptions);
  }

  // POST - Cadastrar lançamento
  createRelease(release: LancamentoDTO): Observable<LancamentoDTO> {
    return this.http.post<LancamentoDTO>(this.apiUrl, release, this.httpOptions);
  }

  // PUT - Atualizar lançamento
  updateRelease(id: number, release: LancamentoDTO): Observable<LancamentoDTO> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<LancamentoDTO>(url, release, this.httpOptions);
  }

  // DELETE - Deletar lançamento
  deleteRelease(id: number): Observable<Lancamento> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Lancamento>(url, this.httpOptions);
  }
}
