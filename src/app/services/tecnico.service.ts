import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  findAll(): Observable<Tecnico[]> {
    return this.http.get<Tecnico[]>(`${API_CONFIG.serviceUrl}/tecnicos`);
  }

  findById(id: number): Observable<Tecnico> {
    return this.http.get<Tecnico>(`${API_CONFIG.serviceUrl}/tecnicos/${id}`);
  }

  insert(tecnico: Tecnico): Observable<Tecnico> {
    return this.http.post<Tecnico>(`${API_CONFIG.serviceUrl}/tecnicos`, tecnico);
  }

  remove(id: number): Observable<Tecnico> {
    return this.http.delete<Tecnico>(`${API_CONFIG.serviceUrl}/tecnicos/${id}`);
  }

  update(tecnico: Tecnico): Observable<Tecnico> {
    return this.http.put<Tecnico>(`${API_CONFIG.serviceUrl}/tecnicos/${tecnico.id}`, tecnico);
  }
}
