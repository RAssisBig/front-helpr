import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ChamadoUrgente } from '../../../../../models/chamado-urgente';
import { MatPaginator } from '@angular/material/paginator';
import { ChamadoUrgenteService } from '../../../../../services/chamado-urgente.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'chamado-urgente',
  templateUrl: './chamado-urgente.component.html',
  styleUrls: ['./chamado-urgente.component.scss']
})
export class ChamadoUrgenteComponent implements AfterViewInit {

  id: any = localStorage.getItem("userId");

  chamadosUrg: ChamadoUrgente[] = [];
  displayedColumns: string[] = ['id', 'dataAbertura', 'dataFechamento', 'prioridade', 'status', 'titulo', 'observacoes'];
  dataSource = new MatTableDataSource<ChamadoUrgente>(this.chamadosUrg);

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private service : ChamadoUrgenteService) { }

  ngAfterViewInit() {
    this.dataSource.paginator= this.paginator;
    this.findById(this.id);
  }

  findById(id: number): void {
    this.service.findById(id).subscribe((resposta) => {
      this.chamadosUrg = resposta;
      console.log(this.chamadosUrg)
      this.dataSource = new MatTableDataSource<ChamadoUrgente>(this.chamadosUrg);
    })
  }

}
