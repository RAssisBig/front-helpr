import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-chamado-clients',
  templateUrl: './chamado-clients.component.html',
  styleUrls: ['./chamado-clients.component.scss']
})
export class ChamadoClientsComponent implements OnInit {

  public cliente: Cliente;

  constructor(@Inject(MAT_DIALOG_DATA) cliente: Cliente) {
    this.cliente = cliente;
  }

  ngOnInit(): void {
  }

}
