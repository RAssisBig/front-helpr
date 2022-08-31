import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.scss']
})
export class ClienteUpdateComponent implements OnInit {

  public cliente: Cliente = {
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    perfis: []
  }

  private perfis: number[] = [];
  public perfisChecked: boolean[] = [false, false, false];

  private toast: ToastrService;
  private service: ClienteService;
  private router: Router;
  private route: ActivatedRoute;

  constructor(service: ClienteService, toast: ToastrService, router: Router, route: ActivatedRoute) {
    this.service = service;
    this.toast = toast;
    this.router = router;
    this.route = route;
  }

  ngOnInit(): void {
    let id: string | null = this.route.snapshot.paramMap.get("id");
    if(id != null) {
      this.service.findById(Number.parseInt(id)).subscribe(cliente => {
        this.cliente = cliente;
        this.initializePerfis(<string[]>this.cliente.perfis);
      });
    }
  }

  initializePerfis(perfis: string[]): void {
    for(let perfil of perfis) {
      switch(perfil) {
        case "ADMIN":
          this.addPerfil(0);
          break;
        case "CLIENTE":
          this.addPerfil(1);
          break;
        case "CLIENTE":
          this.addPerfil(2);
          break;
      }
    }
  }

  addPerfil(perfil: number): void {
    for(let i = 0; i < this.perfis.length; i++) {
      if(this.perfis[i] === perfil) {
        this.perfis.splice(i, 1);
        this.perfisChecked[perfil] = false;
        this.cliente.perfis = this.perfis;
        return;
      }
    }
    this.perfis.push(perfil);
    this.perfisChecked[perfil] = true;
    this.cliente.perfis = this.perfis;
  }

  update(form: NgForm) {
    if(form.valid) {
      this.service.update(this.cliente).subscribe({
        next: response => {
          this.toast.success("Cliente editado com sucesso!", "Sucesso");
          this.router.navigate(["/clientes"]);
        },
        error: errorResponse => {
          let errors = errorResponse.error.errors;
          if(errors != undefined) {
            errors.forEach((error: any) => {
              this.toast.error(error.message, "Erro");
            });
          }
          else {
            this.toast.error(errorResponse.error.message, "Erro");
          }
        }
      });
    }
    else {
      this.toast.error("Dados inválidos!", "Erro");
    }
  }
}
