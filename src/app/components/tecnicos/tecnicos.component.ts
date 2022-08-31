import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnicos',
  templateUrl: './tecnicos.component.html',
  styleUrls: ['./tecnicos.component.scss']
})
export class TecnicosComponent implements OnInit, AfterViewInit {

  tecnicoList: Tecnico[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'dataCriacao', 'update', 'delete'];
  dataSource = new MatTableDataSource<Tecnico>(this.tecnicoList);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private service: TecnicoService;
  private toast: ToastrService;

  constructor(service: TecnicoService, toast: ToastrService) {
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
    this.service.findAll().subscribe(tecnicos => {
      this.tecnicoList = tecnicos;
      this.dataSource = new MatTableDataSource<Tecnico>(this.tecnicoList);
      this.dataSource.paginator = this.paginator;
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
}