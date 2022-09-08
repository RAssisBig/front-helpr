import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { TecnicosFuturos } from '../models/tecnicos-futuros';

@Injectable({
  providedIn: 'root',
})
export class TecnicosFuturosService {
  private http: HttpClient;


  constructor(http: HttpClient) {
    this.http = http;
  }

  findAll(): Observable<TecnicosFuturos[]> {
    return this.http.get<TecnicosFuturos[]>(`${API_CONFIG.serviceUrl}/futuroscandidatos`);
  }

  findById(id: number): Observable<TecnicosFuturos> {
    return this.http.get<TecnicosFuturos>(`${API_CONFIG.serviceUrl}/futuroscandidatos/${id}`);
  }

  insert(tecnicosfuturos: TecnicosFuturos): Observable<TecnicosFuturos> {
    console.log(tecnicosfuturos)
    return this.http.post<TecnicosFuturos>(
      `${API_CONFIG.serviceUrl}/futuroscandidatos`, tecnicosfuturos
    )
  }
}
