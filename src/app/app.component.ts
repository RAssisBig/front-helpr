import { MatSnackBar } from '@angular/material/snack-bar';
import { OnlineOfflineService } from './services/online-offline.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-helpr';
  constructor(
    private OnlineOfflineService: OnlineOfflineService,
    private snackBar: MatSnackBar
  ) {
    this.ouvirStatusConexao();
  }
  private ouvirStatusConexao() {
    this.OnlineOfflineService.statusConexao.subscribe((online) => {
      if (online) {
        this.openSnackBar('Sua conexão foi reestabelecida', 'Fechar');
      } else {
        this.openSnackBar('Você está Offline', 'Fechar');
      }
    });
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
}
