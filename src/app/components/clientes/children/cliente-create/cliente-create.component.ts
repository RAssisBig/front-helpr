import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss'],
})
export class ClienteCreateComponent implements OnInit {
  public cliente: Cliente = {
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
  };

  private perfis: number[] = [];

  private service: ClienteService;

  constructor(service: ClienteService) {
    this.service = service;
  }

  ngOnInit(): void {}

  addPerfil(perfil: number): void {
    for (let i = 0; i < this.perfis.length; i++) {
      if (this.perfis[i] === perfil) {
        this.perfis.splice(i, 1);
        this.cliente.perfis = this.perfis;
        return;
      }
    }
    this.perfis.push(perfil);
    this.cliente.perfis = this.perfis;
  }

  create(form: NgForm) {
    if (form.valid) {
      this.cliente.uid = this.cliente.cpf;
      let cliente: Cliente = this.cliente;
      this.service.salvar(cliente);
    }
  }
}
