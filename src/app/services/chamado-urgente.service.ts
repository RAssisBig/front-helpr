import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChamadoUrgente } from '../models/chamado-urgente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChamadoUrgenteService {

  constructor(private http : HttpClient) { }

  findById(id: number):Observable<ChamadoUrgente[]> {
    return this.http.get<ChamadoUrgente[]>(`${API_CONFIG.serviceUrl}/chamados/report/urgentes/${id}`); 
    }

}

