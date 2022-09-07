import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Dexie from 'dexie';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Cliente } from '../models/cliente';
import { OnlineOfflineService } from './online-offline.service';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private http: HttpClient;
  private db!: Dexie;
  private table!: Dexie.Table<Cliente, any>;

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

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${API_CONFIG.serviceUrl}/clientes`);
  }

  findById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${API_CONFIG.serviceUrl}/clientes/${id}`);
  }

  insert(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(
      `${API_CONFIG.serviceUrl}/clientes`,
      cliente
    );
  }

  remove(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${API_CONFIG.serviceUrl}/clientes/${id}`);
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(
      `${API_CONFIG.serviceUrl}/clientes/${cliente.id}`,
      cliente
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

  private salvarAPI(cliente: Cliente) {
    this.http
      .post<Cliente>(`${API_CONFIG.serviceUrl}/clientes`, cliente)
      .subscribe({
        next: (res) => {
          this.toast.success('Cliente cadastrado com sucesso!', 'Sucesso');
          this.router.navigate(['/clientes']);
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

  public salvar(cliente: Cliente) {
    if (this.onlineOfflineService.isOnline) {
      this.salvarAPI(cliente);
    } else {
      this.salvarIndexedDb(cliente);
    }
  }

  private async salvarIndexedDb(cliente: Cliente) {
    try {
      await this.table.add(cliente);
      const todosClientes: Cliente[] = await this.table.toArray();
      this.toast.info(
        'Cliente salvo no banco local devido à instabilidade na conexão'
      );
      console.log('Cliente salvo no indexedDb', todosClientes);
    } catch (error) {
      this.toast.error('Erro ao incluir Cliente no banco local', 'Erro');
      console.log('Erro ao incluir Cliente no IndexedDb', error);
    }
  }

  private async enviarIndexedDbParaApi() {
    const todosClientes: Cliente[] = await this.table.toArray();

    for (const cliente of todosClientes) {
      this.salvarAPI(cliente);
      await this.table.delete(cliente.uid);
      console.log(`Cliente com o id ${cliente.uid} foi excluido com sucesso!`);
    }
  }

  private iniciarIndexedDb() {
    this.db = new Dexie('helprback-cliente');
    this.db.version(1).stores({
      cliente: 'uid',
    });
    this.table = this.db.table('cliente');
  }
}
