import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Tecnico } from '../models/tecnico';
import { OnlineOfflineService } from './online-offline.service';
import Dexie from 'dexie';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TecnicoService {
  private http: HttpClient;
  private db!: Dexie;
  private table!: Dexie.Table<Tecnico, any>;

  constructor(
    http: HttpClient,
    private onlineOfflineService: OnlineOfflineService,
    private toast: ToastrService,
    private router: Router
  ) {
    this.http = http;
    this.ouvirStatusConexao();
    this.iniciarIndexedDb();
  }

  findAll(): Observable<Tecnico[]> {
    return this.http.get<Tecnico[]>(`${API_CONFIG.serviceUrl}/tecnicos`);
  }

  findById(id: number): Observable<Tecnico> {
    return this.http.get<Tecnico>(`${API_CONFIG.serviceUrl}/tecnicos/${id}`);
  }

  insert(tecnico: Tecnico): Observable<Tecnico> {
    return this.http.post<Tecnico>(
      `${API_CONFIG.serviceUrl}/tecnicos`,
      tecnico
    );
  }

  remove(id: number): Observable<Tecnico> {
    return this.http.delete<Tecnico>(`${API_CONFIG.serviceUrl}/tecnicos/${id}`);
  }

  update(tecnico: Tecnico): Observable<Tecnico> {
    return this.http.put<Tecnico>(
      `${API_CONFIG.serviceUrl}/tecnicos/${tecnico.id}`,
      tecnico
    );
  }

  /* PWA */
  private ouvirStatusConexao() {
    this.onlineOfflineService.statusConexao.subscribe((online) => {
      if (online) {
        this.enviarIndexedDbParaApi();
      }
    });
  }

  private salvarAPI(tecnico: Tecnico) {
    this.http
      .post<Tecnico>(`${API_CONFIG.serviceUrl}/tecnicos`, tecnico)
      .subscribe({
        next: (res) => {
          this.toast.success('Técnico cadastrado com sucesso!', 'Sucesso');
          this.router.navigate(['/tecnicos']);
        },
        error: (errorResponse) => {
          let errors = errorResponse.error.errors;
          if (errors != undefined) {
            errors.forEach((error: any) => {
              this.toast.error(error.message, 'Erro');
            });
          } else {
            this.toast.error(errorResponse.error.message, 'Erro');
          }
        },
      });
  }

  public salvar(tecnico: Tecnico) {
    if (this.onlineOfflineService.isOnline) {
      this.salvarAPI(tecnico);
    } else {
      this.salvarIndexedDb(tecnico);
    }
  }

  private async salvarIndexedDb(tecnico: Tecnico) {
    try {
      await this.table.add(tecnico);
      const todosTecnicos: Tecnico[] = await this.table.toArray();
      this.toast.info(
        'Técnico salvo no banco local devido à instabilidade na conexão'
      );
      console.log('tecnico salvo no indexedDb', todosTecnicos);
    } catch (error) {
      this.toast.error('Erro ao incluir Técnico no banco local');
      console.log('Erro ao incluir tecnico no IndexedDb', error);
    }
  }

  private async enviarIndexedDbParaApi() {
    const todosTecnicos: Tecnico[] = await this.table.toArray();

    for (const tecnico of todosTecnicos) {
      this.salvarAPI(tecnico);
      await this.table.delete(tecnico.uid);
      console.log(`Tecnico com o id ${tecnico.uid} foi excluido com sucesso!`);
    }
  }

  private iniciarIndexedDb() {
    this.db = new Dexie('helprback-tecnicos');
    this.db.version(1).stores({
      tecnico: 'uid',
    });
    this.table = this.db.table('tecnico');
  }
}
