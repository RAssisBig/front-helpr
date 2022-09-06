import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Chamado } from 'src/app/models/chamado';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';
import { TecnicoChamadosComponent } from './children/tecnico-chamados/tecnico-chamados.component';

@Component({
  selector: 'app-tecnicos',
  templateUrl: './tecnicos.component.html',
  styleUrls: ['./tecnicos.component.scss']
})
export class TecnicosComponent implements OnInit, AfterViewInit {

  tecnicoList: Tecnico[] = [];
  chamadoList: Chamado[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'dataCriacao', 'chamadoDia', 'update', 'delete'];
  dataSource = new MatTableDataSource<Tecnico>(this.tecnicoList);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public progressBarTecnicos = false;
  private service: TecnicoService;
  private toast: ToastrService;
  private dialog: MatDialog;

  constructor(service: TecnicoService, toast: ToastrService, dialog: MatDialog) {
    this.service = service;
    this.toast = toast;
    this.dialog = dialog;
  }

  ngOnInit(): void {
    this.initializeTable();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  initializeTable(): void {
    this.service.findAll().subscribe(tecnicos => {
      this.tecnicoList = tecnicos;
      this.dataSource = new MatTableDataSource<Tecnico>(this.tecnicoList);
      this.dataSource.paginator = this.paginator;
      this.progressBarTecnicos = true;
    });
  }

  delete(id: number): void {
    this.service.remove(id).subscribe({
      next: response => {
        this.toast.success("Técnico deletado com sucesso!", "Sucesso");
        this.initializeTable();
      }
    })
  }

  openDailyCalls(tecnico: number): void {
    let infoTecnico;
    this.service.findById(tecnico).subscribe((tecnico) => {
      infoTecnico = tecnico;
      this.dialog.open(TecnicoChamadosComponent, { data: infoTecnico, width: "1000px" });
    });
  }
}