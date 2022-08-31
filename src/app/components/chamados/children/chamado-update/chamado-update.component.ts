import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Chamado } from 'src/app/models/chamado';
import { Cliente } from 'src/app/models/cliente';
import { Tecnico } from 'src/app/models/tecnico';
import { ChamadoService } from 'src/app/services/chamado.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

type DataSection = {
  title: string,
  value: number
}

@Component({
  selector: 'app-chamado-update',
  templateUrl: './chamado-update.component.html',
  styleUrls: ['./chamado-update.component.scss']
})
export class ChamadoUpdateComponent implements OnInit {

  public statusList: DataSection[] = [
    { title: "Aberto", value: 0 },
    { title: "Em andamento", value: 1 },
    { title: "Encerrado", value: 2 }
  ];

  public prioridadeList: DataSection[] = [
    { title: "Baixa", value: 0 },
    { title: "Média", value: 1 },
    { title: "Alta", value: 2 }
  ];

  public chamado: Chamado = {
    titulo: "",
    status: NaN,
    prioridade: NaN,
    cliente: NaN,
    tecnico: NaN,
    observacoes: ""
  }

  public clienteList: Cliente[] = [];
  public tecnicoList: Tecnico[] = [];

  private serviceCliente: ClienteService;
  private serviceTecnico: TecnicoService;
  private toast: ToastrService;
  private service: ChamadoService;
  private router: Router;
  private route: ActivatedRoute;

  constructor(service: ChamadoService, serviceCliente: ClienteService, serviceTecnico: TecnicoService, formBuilder: FormBuilder, toast: ToastrService, router: Router, route: ActivatedRoute) {
    this.service = service;
    this.serviceCliente = serviceCliente;
    this.serviceTecnico = serviceTecnico;
    this.toast = toast;
    this.router = router;
    this.route = route;
  }

  ngOnInit(): void {
    this.initializeClientes();
    this.initializeTecnicos();
    this.initializeFields();
  }

  initializeClientes(): void {
    this.serviceCliente.findAll().subscribe(clientes => {
      this.clienteList = clientes;
    });
  }

  initializeTecnicos(): void {
    this.serviceTecnico.findAll().subscribe(tecnicos => {
      this.tecnicoList = tecnicos;
    });
  }

  initializeFields(): void {
    let id: string | null = (this.route.snapshot.paramMap.get("id"));
    if(id != null) {
      this.service.findById(Number.parseInt(id)).subscribe(chamado => {
        this.chamado = chamado;
      });
    }
  }

  update(form: NgForm): void {
    if(form.valid) {
      this.service.update(this.chamado).subscribe({
        next: () => {
          this.toast.success("Chamado editado com sucesso.", "Sucesso");
          this.router.navigate(["/chamados"]);
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
      this.toast.error("Dados inválidos.", "Erro");
    }
  }
}
