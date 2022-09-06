import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ChamadosCliente } from 'src/app/models/chamados-cliente';
import { ChamadosClienteService } from 'src/app/services/chamados-cliente.service';

@Component({
  selector: 'app-clientedashboard',
  templateUrl: './cliente-dashboard.component.html',
  styleUrls: ['./cliente-dashboard.component.scss']
})
export class ClienteDashboardComponent implements OnInit {

  chamadosList: ChamadosCliente[] = [];

  displayedColumns: string[] = ['id', 'titulo', 'nomeCliente', 'nomeTecnico', 'dataFechamento', 'dataAbertura', 'prioridade', 'status', 'observacoes'];
  dataSource = new MatTableDataSource<ChamadosCliente>(this.chamadosList);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private service: ChamadosClienteService;
  private toast: ToastrService;

  constructor(service: ChamadosClienteService, toast: ToastrService) {
    this.service = service;
    this.toast = toast;
  }

  ngOnInit(): void {
    this.initializeTable();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  initializeTable(): void {
    let userId: number = Number(localStorage.getItem("userId"));
    this.service.findAll(userId).subscribe(chamadosCliente => {
      this.chamadosList = chamadosCliente;
      this.dataSource = new MatTableDataSource<ChamadosCliente>(this.chamadosList);
      this.dataSource.paginator = this.paginator;
    });
  }


}
