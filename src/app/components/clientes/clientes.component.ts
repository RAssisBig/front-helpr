import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Chamado } from 'src/app/models/chamado';
import { MatDialog } from '@angular/material/dialog';
import { ChamadoService } from 'src/app/services/chamado.service';
import { ChamadosClientesComponent } from './children/chamados-clientes/chamados-clientes.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit, AfterViewInit {

  clienteList: Cliente[] = [];
  chamadoList: Chamado[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'dataCriacao', 'update', 'delete'];
  dataSource = new MatTableDataSource<Cliente>(this.clienteList);

  displayedColumnsChamado2: string[] = [
    'id',
    'titulo',
    'cliente',
    'tecnico',
    'dataAbertura',
    'prioridade',
    'status',
    'update',
    'details',
  ];
dataSourceChamado2 = new MatTableDataSource<Chamado>(this.chamadoList);


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  public random: number = Math.ceil(Math.random() * 19);

  public bancoImagensBanner: string =
    `https://raw.githubusercontent.com/victoricoma/helprback/main/img/outsiteBanner/${this.random}.png`;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public progressBarCliente: boolean = false;
  private service: ClienteService;
  private toast: ToastrService;
  private dialog: MatDialog;
  private serviceChamado: ChamadoService;


  constructor(service: ClienteService, serviceChamado: ChamadoService, toast: ToastrService, dialog: MatDialog) {
    this.service = service;
    this.toast = toast;
    this.dialog = dialog;
    this.serviceChamado = serviceChamado;

  }

  ngOnInit(): void {
    this.initializeTable();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  initializeTable(): void {
    this.service.findAll().subscribe(clientes => {
      this.clienteList = clientes;
      this.dataSource = new MatTableDataSource<Cliente>(this.clienteList);
      this.dataSource.paginator = this.paginator;
      this.progressBarCliente = true;

    });
  }

  delete(id: number): void {
    this.service.remove(id).subscribe({
      next: response => {
        this.toast.success("Cliente deletado com sucesso!", "Sucesso");
        this.initializeTable();
      }
    })
  }
  openClienteInfoDialog(cliente: number): void {
    let infoCliente;
    this.service.findById(cliente).subscribe((cliente) => {
      infoCliente = cliente;
      this.dialog.open(ChamadosClientesComponent, {
        data: infoCliente,
        width: '1000px',
      });
    });
  }
}
