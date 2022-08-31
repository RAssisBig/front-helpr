import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-update',
  templateUrl: './tecnico-update.component.html',
  styleUrls: ['./tecnico-update.component.scss']
})
export class TecnicoUpdateComponent implements OnInit {

  public tecnico: Tecnico = {
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    perfis: []
  }

  private perfis: number[] = [];
  public perfisChecked: boolean[] = [false, false, false];

  private toast: ToastrService;
  private service: TecnicoService;
  private router: Router;
  private route: ActivatedRoute;

  constructor(service: TecnicoService, toast: ToastrService, router: Router, route: ActivatedRoute) {
    this.service = service;
    this.toast = toast;
    this.router = router;
    this.route = route;
  }

  ngOnInit(): void {
    let id: string | null = this.route.snapshot.paramMap.get("id");
    if(id != null) {
      this.service.findById(Number.parseInt(id)).subscribe(tecnico => {
        this.tecnico = tecnico;
        this.initializePerfis(<string[]>this.tecnico.perfis);
      });
    }
  }

  initializePerfis(perfis: string[]): void {
    for(let perfil of perfis) {
      switch(perfil) {
        case "ADMIN":
          this.addPerfil(0);
          break;
        case "TECNICO":
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
        this.tecnico.perfis = this.perfis;
        return;
      }
    }
    this.perfis.push(perfil);
    this.perfisChecked[perfil] = true;
    this.tecnico.perfis = this.perfis;
  }

  update(form: NgForm) {
    if(form.valid) {
      this.service.update(this.tecnico).subscribe({
        next: response => {
          this.toast.success("Técnico editado com sucesso!", "Sucesso");
          this.router.navigate(["/tecnicos"]);
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
