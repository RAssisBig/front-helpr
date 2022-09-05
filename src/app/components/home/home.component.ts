import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public lat!: number;
  public lon!: number;

  constructor(
    private http: HttpClient, private swPush: SwPush
    ) {}

  ngOnInit() {
    this.getUserLocation();
    this.getPushNotifications();
  }

  getPushNotifications() {
    this.swPush
      .requestSubscription({
        serverPublicKey:
          'BA5ij5aNkvDBwo-Bgle58gUwTLwvrjTo8GATPQrC3Ocm2igx5eqen7y7us3R5K1FGjxpNiFogfXbxbsUN3b2SLk',
      })
      .then(() => {
        console.log('Usuário permitiu notificações.');
      })
      .catch((error) => {
        console.log(
          'Usuário recusou ou o navegador não suporta a notificação',
          error
        );
      });
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        console.log(this.lat, this.lon);
      });
    } else {
      console.log('Usuário não permitiu compartilhar sua localização!');
    }
  }
}
