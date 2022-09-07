import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OnlineOfflineService {
  /*subject: é um observable, mas ele também emite eventos*/
  private statusConexao$ = new Subject<boolean>();

  constructor() {
    window.addEventListener('online', () => this.atualizaStatusConexao());
    window.addEventListener('offline', () => this.atualizaStatusConexao());
  }

  /* retorna se está online ou não, get nos dá acesso a uma função como se fosse uma variável */
  get isOnline(): boolean {
    return !!window.navigator.onLine;
  }
  /*Se inscrevendo no subject status conexão*/
  get statusConexao(): Observable<boolean> {
    return this.statusConexao$.asObservable();
  }
  /* Emite os estados do subject*/
  atualizaStatusConexao() {
    this.statusConexao$.next(this.isOnline);
  }
}
