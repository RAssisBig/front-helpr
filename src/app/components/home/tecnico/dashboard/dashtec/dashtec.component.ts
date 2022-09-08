import { ChamadoService } from 'src/app/services/chamado.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Chamado } from 'src/app/models/chamado';
import { DialogChamadosTecnicoAbertosComponent } from '../dialog-chamados-tecnico-abertos/dialog-chamados-tecnico-abertos.component';
import { DialogChamadosTecnicoUrgentesComponent } from '../dialog-chamados-tecnico-urgentes/dialog-chamados-tecnico-urgentes.component';
import { RelatoriosTecnicos } from 'src/app/models/relatorios-tecnicos';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-dashtec',
  templateUrl: './dashtec.component.html',
  styleUrls: ['./dashtec.component.scss']
})
export class DashtecComponent implements OnInit{

  public chamadosList: Chamado[] = [];
  public chamadosList3Dias: Chamado[] = [];
  public progressBarChamados: boolean = false;
  public countEmAberto: number = 0;
  public countEmAndamento: number = 0;

  displayedColumns: string[] = [
    'id',
    'titulo',
    'cliente',
    'tecnico',
    'dataAbertura',
    'prioridade',
    'status',
  ];
  dataSource = new MatTableDataSource<Chamado>(this.chamadosList3Dias);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  constructor(private service: ChamadoService, public dialog: MatDialog) {
    this.service = service
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(chamados => {
      this.chamadosList = chamados;
    });
    this.contarChamadosEmAberto();
    this.initializeTable();
  }

  initializeTable(): void {
    this.service.findAll().subscribe((chamados) => {
      this.chamadosList = chamados;
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);
      let time = new Date(today.toLocaleDateString());
      let outraData = new Date();
      outraData.setDate(time.getDate() - 5);
      this.chamadosList.forEach((chamado) => {
        let ano: string = chamado.dataAbertura as string;
        let mes: string = chamado.dataAbertura as string;
        let dia: string = chamado.dataAbertura as string;
        ano = ano.slice(6, 10);
        mes = mes.slice(3, 5);
        dia = dia.slice(0, 2);
        let dataAbertura = ano + '-' + mes + '-' + dia;
        let time = new Date(dataAbertura);
        console.log(dataAbertura);

        if (chamado.status == 0 && time > outraData) {
          this.chamadosList3Dias.push(chamado);
        }
      });
      this.dataSource = new MatTableDataSource<Chamado>(this.chamadosList3Dias);
      this.dataSource.paginator = this.paginator;
      this.progressBarChamados = true;
    });
  }

contarChamadosEmAberto(): number{
    this.countEmAberto = 0;
    let dado = localStorage.getItem("userId");
    let tecnico = (dado == null) ? -1 : Number(dado);
    this.chamadosList.forEach(chamado => {
      if(chamado.status == 0 && chamado.tecnico == tecnico){
        this.countEmAberto += 1;
      }
    });
    return this.countEmAberto;
  }

  contarChamadosUrgentes(): number{
    this.countEmAndamento = 0;
    let dado = localStorage.getItem("userId");
    let tecnico = (dado == null) ? -1 : Number(dado);
    this.chamadosList.forEach(chamado => {
      if(chamado.prioridade == 2 && chamado.tecnico == tecnico){
        this.countEmAndamento += 1;
      }
    });
    return this.countEmAndamento;
  }

  openDialogAbertos(): void {
    const dialogRef = this.dialog.open(DialogChamadosTecnicoAbertosComponent, {
      width: '400px'
    });
  }

  openDialogUrgentes(): void {
    const dialogRef = this.dialog.open(DialogChamadosTecnicoUrgentesComponent, {
      width: '400px'
    });
  }

  panelOpenState = false ;

    displayedColumns2: string[] = ['id', 'mensagem'];
    dataSource2 = ELEMENT_DATA;
}
  const ELEMENT_DATA: RelatoriosTecnicos[] = [
    {id: 1, mensagem: "#Aqui vai o relatório de técnico#"}
  ];


