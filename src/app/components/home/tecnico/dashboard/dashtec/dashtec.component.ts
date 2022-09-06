import { ChamadoService } from 'src/app/services/chamado.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Chamado } from 'src/app/models/chamado';
import { DialogChamadosTecnicoAbertosComponent } from '../dialog-chamados-tecnico-abertos/dialog-chamados-tecnico-abertos.component';
import { DialogChamadosTecnicoUrgentesComponent } from '../dialog-chamados-tecnico-urgentes/dialog-chamados-tecnico-urgentes.component';


@Component({
  selector: 'app-dashtec',
  templateUrl: './dashtec.component.html',
  styleUrls: ['./dashtec.component.scss']
})
export class DashtecComponent implements OnInit{

  public chamadosList: Chamado[] = [];

  public countEmAberto: number = 0;
  public countEmAndamento: number = 0;

  constructor(private service: ChamadoService, public dialog: MatDialog) {
    this.service = service
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(chamados => {
      this.chamadosList = chamados;
    });
    this.contarChamadosEmAberto()
  }

contarChamadosEmAberto(): number{
    this.countEmAberto = 0;
    this.chamadosList.forEach(chamado => {
      if(chamado.status == 0){
        this.countEmAberto += 1;
      }
    });
    return this.countEmAberto;
  }

  contarChamadosUrgentes(): number{
    this.countEmAndamento = 0;
    this.chamadosList.forEach(chamado => {
      if(chamado.prioridade == 2){
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
}

