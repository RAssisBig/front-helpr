import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.scss']
})
export class TecnicoCreateComponent implements OnInit {

  public tecnico: Tecnico = {
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    perfis: []
  }

  private perfis: number[] = [];

  private toast: ToastrService;
  private service: TecnicoService;
  private router: Router;

  constructor(service: TecnicoService, toast: ToastrService, router: Router) {
    this.service = service;
    this.toast = toast;
    this.router = router;
  }

  ngOnInit(): void {
  }

  addPerfil(perfil: number): void {
    for(let i = 0; i < this.perfis.length; i++) {
      if(this.perfis[i] === perfil) {
        this.perfis.splice(i, 1);
        this.tecnico.perfis = this.perfis;
        return;
      }
    }
    this.perfis.push(perfil);
    this.tecnico.perfis = this.perfis;
  }

  create(form: NgForm) {
    if (form.valid) {
      this.tecnico.uid = this.tecnico.cpf;
      let tecnico: Tecnico = this.tecnico;
      this.service.salvar(tecnico);
    }
  }
}
