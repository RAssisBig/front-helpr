import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ChamadoService } from 'src/app/services/chamado.service';
import { ChamadoLogStatus } from '../../../../models/chamadoLogStatus';

@Component({
    selector: 'log-status',
    templateUrl: './log-status.component.html',
    styleUrls: ['./log-status.component.scss']
})
export class LogStatusComponent implements OnInit {

    public chamadoListLogStatus: ChamadoLogStatus[] = [];

    displayedColumns: any[] = ['id', 'dtAlteracao', 'statusAntigo', 'statusNovo'];
    dataSource = new MatTableDataSource<ChamadoLogStatus>(this.chamadoListLogStatus);

    http: HttpClient;
    service: ChamadoService;

    constructor(http: HttpClient, service: ChamadoService) {
        this.http = http;
        this.service = service;
    }

    ngOnInit(): void {
        this.findstatus();
    }

    findstatus(): void {
        console.log("Início de find Status")
        this.service.logStatus().subscribe(logStatus => {
            console.log("Início de subscribe")
            this.chamadoListLogStatus = logStatus;
            this.dataSource = new MatTableDataSource<ChamadoLogStatus>(this.chamadoListLogStatus);
        })
    }
}
