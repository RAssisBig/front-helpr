import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
};

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.scss']
})
export class ChamadoCreateComponent implements OnInit {
  public statusList: DataSection[] = [
    { title: 'Aberto', value: 0 },
    { title: 'Em andamento', value: 1 },
    { title: 'Encerrado', value: 2 },
  ];

  public prioridadeList: DataSection[] = [
    { title: 'Baixa', value: 0 },
    { title: 'Média', value: 1 },
    { title: 'Alta', value: 2 },
  ];

  public clienteList: Cliente[] = [];
  public tecnicoList: Tecnico[] = [];

  public formChamado: FormGroup;

  private serviceCliente: ClienteService;
  private serviceTecnico: TecnicoService;
  private toast: ToastrService;
  private service: ChamadoService;
  private router: Router;

  constructor(
    service: ChamadoService,
    serviceCliente: ClienteService,
    serviceTecnico: TecnicoService,
    formBuilder: FormBuilder,
    toast: ToastrService,
    router: Router
  ) {
    this.service = service;
    this.serviceCliente = serviceCliente;
    this.serviceTecnico = serviceTecnico;
    this.toast = toast;
    this.router = router;
    this.formChamado = formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      status: ['', [Validators.required]],
      prioridade: ['', [Validators.required]],
      cliente: ['', [Validators.required]],
      tecnico: ['', [Validators.required]],
      observacoes: ['', [Validators.required, Validators.minLength(6)]],
      uid: '',
    });
  }

  ngOnInit(): void {
    this.initializeClientes();
    this.initializeTecnicos();
  }

  initializeClientes(): void {
    this.serviceCliente.findAll().subscribe((clientes) => {
      this.clienteList = clientes;
    });
  }

  initializeTecnicos(): void {
    this.serviceTecnico.findAll().subscribe((tecnicos) => {
      this.tecnicoList = tecnicos;
    });
  }

  create() {
    let chamado: Chamado = this.formChamado.value;
    chamado.uid = chamado.titulo;
    this.service.salvar(chamado);
    console.log(chamado);
  }
}
