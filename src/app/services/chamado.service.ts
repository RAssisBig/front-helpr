import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Dexie from 'dexie';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Chamado } from '../models/chamado';
import { OnlineOfflineService } from './online-offline.service';

@Injectable({
  providedIn: 'root',
})
export class ChamadoService {
  private http: HttpClient;
  private db!: Dexie;
  private table!: Dexie.Table<Chamado, any>;

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

  findAll(): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`${API_CONFIG.serviceUrl}/chamados`);
  }

  findById(id: number): Observable<Chamado> {
    return this.http.get<Chamado>(`${API_CONFIG.serviceUrl}/chamados/${id}`);
  }

  insert(chamado: Chamado): Observable<Chamado> {
    return this.http.post<Chamado>(
      `${API_CONFIG.serviceUrl}/chamados`,
      chamado
    );
  }

  update(chamado: Chamado): Observable<Chamado> {
    return this.http.put<Chamado>(
      `${API_CONFIG.serviceUrl}/chamados/${chamado.id}`,
      chamado
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

  private salvarAPI(chamado: Chamado) {
    this.http
      .post<Chamado>(`${API_CONFIG.serviceUrl}/chamados`, chamado)
      .subscribe({
        next: (res) => {
          this.toast.success('Chamado cadastrado com sucesso!', 'Sucesso');
          this.router.navigate(['/chamados']);
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

  public salvar(chamado: Chamado) {
    if (this.onlineOfflineService.isOnline) {
      this.salvarAPI(chamado);
    } else {
      this.salvarIndexedDb(chamado);
    }
  }

  private async salvarIndexedDb(chamado: Chamado) {
    try {
      await this.table.add(chamado);
      const todoschamados: Chamado[] = await this.table.toArray();
      this.toast.info(
        'Chamado salvo no banco local devido à instabilidade na conexão'
      );
      console.log('chamado salvo no indexedDb', todoschamados);
    } catch (error) {
      this.toast.error('Erro ao incluir chamado no banco local');
      console.log('Erro ao incluir chamado no IndexedDb', error);
    }
  }

  private async enviarIndexedDbParaApi() {
    const todoschamados: Chamado[] = await this.table.toArray();

    for (const chamado of todoschamados) {
      this.salvarAPI(chamado);
      await this.table.delete(chamado.uid);
      console.log(`chamado com o id ${chamado.uid} foi excluido com sucesso!`);
    }
  }

  private iniciarIndexedDb() {
    this.db = new Dexie('helprback-chamados');
    this.db.version(1).stores({
      chamado: 'uid',
    });
    this.table = this.db.table('chamado');
  }

  LogPrioridade(): Observable<any[]> {
    return this.http.get<any[]>(`${API_CONFIG.serviceUrl}/chamados/log/prioridade`);
  }

  logStatus(): Observable<any[]> {
    return this.http.get<any[]>(`${API_CONFIG.serviceUrl}/chamados/log/status`);
  }
}