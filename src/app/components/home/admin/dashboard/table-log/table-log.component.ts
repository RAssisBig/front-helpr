import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LogPessoa } from 'src/app/models/log-pessoa';
import { LogpessoaService } from 'src/app/services/logpessoa.service';

@Component({
  selector: 'table-log',
  templateUrl: './table-log.component.html',
  styleUrls: ['./table-log.component.scss']
})

export class TableLogComponent implements AfterViewInit {
  logpessoa: LogPessoa [] = [];
  displayedColumns: string[] = ['codLog', 'dtAlteracao', 'tipoAlteracao', 'id', 'perfilAdd', 'perfilDel'];
  dataSource = new MatTableDataSource<LogPessoa>(this.logpessoa);

  constructor(private service : LogpessoaService) { }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.findAll();
  }
  findAll(): void{
    this.service.findAll().subscribe((resposta) => {
      this.logpessoa = resposta;
    })
  }
}
