import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { Chamado } from 'src/app/models/chamado';
import { Cliente } from 'src/app/models/cliente';
import { ChamadoService } from 'src/app/services/chamado.service';

@Component({
  selector: 'app-chamado-clientes',
  templateUrl: './chamados-clientes.component.html',
  styleUrls: ['./chamados-clientes.component.scss']
})
export class ChamadosClientesComponent implements OnInit {

  public chamadoList: Chamado[] = [];
  public chamadoListFilter: Chamado[] = [];
  displayedColumns: string[] = [
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
  dataSource = new MatTableDataSource<Chamado>(this.chamadoList);
  public progressBarChamados: boolean = false;
  public cliente: Cliente;
  public serviceChamado: ChamadoService;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    @Inject(MAT_DIALOG_DATA) cliente: Cliente,
    serviceChamado: ChamadoService
  ) {
    this.cliente = cliente;
    this.serviceChamado = serviceChamado;
  }

  ngOnInit(): void {
    this.findChamadoPorIdCliente();
  }
  findChamadoPorIdCliente() {
    const today = new Date();
    let dataAtualConv = today.toLocaleDateString();
    console.log(dataAtualConv);
    this.serviceChamado.findAll().subscribe((chamados) => {
      this.chamadoList = chamados;
      this.dataSource = new MatTableDataSource<Chamado>(this.chamadoList);
      this.dataSource.paginator = this.paginator;
      this.progressBarChamados = true;
      for (const c in chamados) {
        const element = chamados[c];
        if (
          element.cliente == this.cliente.id &&
          element.dataAbertura === dataAtualConv
        ) {
          this.chamadoListFilter.push(element);
        }

      }
    });
  }
}
