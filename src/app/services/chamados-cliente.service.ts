import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { ChamadosCliente } from '../models/chamados-cliente';

@Injectable({
  providedIn: 'root'
})
export class ChamadosClienteService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  findAll(id: number): Observable<ChamadosCliente[]> {
    return this.http.get<ChamadosCliente[]>(`${API_CONFIG.serviceUrl}/chamados/cliente/${id}`);
  }
}
