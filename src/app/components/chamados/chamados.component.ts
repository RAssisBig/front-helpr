import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatRadioButton } from '@angular/material/radio';
import { MatTableDataSource } from '@angular/material/table';
import { Chamado } from 'src/app/models/chamado';
import { ChamadoService } from 'src/app/services/chamado.service';
import { ChamadoDetailsComponent } from './children/chamado-details/chamado-details.component';

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

  private service: ChamadoService;
  private dialog: MatDialog;

  constructor(service: ChamadoService, dialog: MatDialog) {
    this.service = service;
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
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  filterByStatus(status: number): void {
    let filterList: Chamado[] = [];
    this.chamadoList.forEach(chamado => {
      if(chamado.status === status) {
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
}
