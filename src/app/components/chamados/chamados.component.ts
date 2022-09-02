import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatRadioButton } from '@angular/material/radio';
import { MatTableDataSource } from '@angular/material/table';
import { Chamado } from 'src/app/models/chamado';
import { ChamadoService } from 'src/app/services/chamado.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { TecnicoService } from 'src/app/services/tecnico.service';
import { ChamadoClientsComponent } from './children/chamado-clients/chamado-clients.component';
import { ChamadoDetailsComponent } from './children/chamado-details/chamado-details.component';
import { ChamadoTecnicosComponent } from './children/chamado-tecnicos/chamado-tecnicos.component';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.scss']
})
export class ChamadosComponent implements OnInit {

  public chamadoList: Chamado[] = [];

  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'tecnico', 'dataAbertura', 'prioridade', 'status', 'update', 'details'];
  dataSource = new MatTableDataSource<Chamado>(this.chamadoList);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  public progressBarChamados: boolean = false;
  private service: ChamadoService;
  private serviceTecnico: TecnicoService;
  private serviceCliente: ClienteService;
  private dialog: MatDialog;

  constructor(service: ChamadoService, dialog: MatDialog, serviceCliente: ClienteService, serviceTecnico: TecnicoService) {
    this.service = service;
    this.serviceTecnico = serviceTecnico;
    this.serviceCliente = serviceCliente
    this.dialog = dialog;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.initializeTable();
  }

  initializeTable(): void {
    this.service.findAll().subscribe(chamados => {
      this.chamadoList = chamados;
      this.dataSource = new MatTableDataSource<Chamado>(this.chamadoList);
      this.dataSource.paginator = this.paginator;
      this.progressBarChamados = true;

    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  filterByStatus(status: number): void {
    let filterList: Chamado[] = [];
    this.chamadoList.forEach(chamado => {
      if (chamado.status === status) {
        filterList.push(chamado);
      }
    });
    this.dataSource = new MatTableDataSource<Chamado>(filterList);
    this.dataSource.paginator = this.paginator;
  }

  clearFilter(input: HTMLInputElement, check1: MatRadioButton, check2: MatRadioButton, check3: MatRadioButton): void {
    input.value = "";
    check1.checked = false;
    check2.checked = false;
    check3.checked = false;
    this.dataSource = new MatTableDataSource<Chamado>(this.chamadoList);
    this.dataSource.paginator = this.paginator;
  }

  openDetailsDialog(chamado: Chamado): void {
    this.dialog.open(ChamadoDetailsComponent, { data: chamado, width: "400px" });
  }

  openClienteInfoDialog(cliente: number): void {
    let infoCliente;
    this.serviceCliente.findById(cliente).subscribe((cliente) => {
      infoCliente = cliente;
      this.dialog.open(ChamadoClientsComponent, { data: infoCliente, width: "400px" });
    });
}

  openTecnicoInfoDialog(tecnico: number): void {
    let infoTecnico;
    this.serviceTecnico.findById(tecnico).subscribe((tecnico) => {
      infoTecnico = tecnico;
      this.dialog.open(ChamadoTecnicosComponent, { data: infoTecnico, width: "400px" });
    })
  }



  convertInIcon(status: number): string {
    if (status == 0) {
      return "note_add";
    } else if (status == 1) {
      return "pending_actions";
    } else {
      return "task";
    }
  }
  convertInImg(prioridade: number): string {
    if(prioridade == 0){
      return "signal_cellular_alt_1_bar";
    }
    else if(prioridade == 1){
      return "signal_cellular_alt_2_bar";
    }
    else(prioridade == 2)
    {
      return "signal_cellular_alt_3_bar";
    }
  }
}
