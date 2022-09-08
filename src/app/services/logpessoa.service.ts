import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { LogPessoa } from '../models/log-pessoa';

@Injectable({
  providedIn: 'root'
})
export class LogpessoaService {
  baseUrl: string = API_CONFIG.serviceUrl;

  constructor(
    private http: HttpClient
  ) {
  }
  findAll():Observable<LogPessoa[]>{
    const url = this.baseUrl + "/log/perfil";
    return this.http.get<LogPessoa[]>(url);
  }
}

