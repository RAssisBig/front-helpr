import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ChamadologPrioridade } from 'src/app/models/chamadologPrioridade';
import { ChamadoService } from 'src/app/services/chamado.service';

@Component({
  selector: 'app-log-prioridade',
  templateUrl: './log-prioridade.component.html',
  styleUrls: ['./log-prioridade.component.scss']
})
export class  LogPrioridadeComponent implements OnInit {

public  chamadoListPrioridade: ChamadologPrioridade[] = [];
  displayedColumns: any[] = ['id', 'dtAlteracao', 'prioridadeAntigo', 'prioridadeNovo'];
  dataSource = new MatTableDataSource<ChamadologPrioridade>(this.chamadoListPrioridade);

  http: HttpClient;

  service: ChamadoService;

  constructor(http:HttpClient, service: ChamadoService) {
    this.http = http;
    this.service = service;
  }

  ngOnInit(): void {
    this.initializeTable();
  }

    initializeTable(): void {
    this.service.LogPrioridade().subscribe(logPrioridade =>{
      this.chamadoListPrioridade = logPrioridade;
      this.dataSource = new MatTableDataSource<ChamadologPrioridade>(this.chamadoListPrioridade);
    })
  }
}