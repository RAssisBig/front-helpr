import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Chamado } from 'src/app/models/chamado';
import { ChamadoService } from 'src/app/services/chamado.service';

@Component({
  selector: 'app-urgencias',
  templateUrl: './urgencias.component.html',
  styleUrls: ['./urgencias.component.scss']
})
export class UrgenciasComponent implements OnInit {
  public chamadoList: Chamado[] = [];
  public listaFiltrada: Chamado[] = [];
  displayedColumns = ['position', 'name'];
  dataSource = new MatTableDataSource(this.listaFiltrada);



  constructor(private service: ChamadoService) {
    this.service = service
  }


  ngOnInit(): void {
    this.initializeTable();
  }

  initializeTable(): void {
    this.service.findAll().subscribe(chamados => {
      this.chamadoList = chamados;
      this.filterUrgenciaAberta();
      this.dataSource = new MatTableDataSource(this.listaFiltrada);
    });
  }

  filterUrgenciaAberta() {
    this.chamadoList.forEach(chamado => {
      if (chamado.status == 0 && chamado.prioridade == 2) {
        this.listaFiltrada.push(chamado);
      }
    });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;

  }

}