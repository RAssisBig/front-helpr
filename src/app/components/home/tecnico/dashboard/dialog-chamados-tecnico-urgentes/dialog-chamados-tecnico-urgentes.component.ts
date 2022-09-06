import { Component, OnInit } from '@angular/core';
import { Chamado } from 'src/app/models/chamado';
import { ChamadoService } from 'src/app/services/chamado.service';

@Component({
  selector: 'app-dialog-chamados-tecnico-urgentes',
  templateUrl: './dialog-chamados-tecnico-urgentes.component.html',
  styleUrls: ['./dialog-chamados-tecnico-urgentes.component.scss']
})
export class DialogChamadosTecnicoUrgentesComponent implements OnInit {

  public chamadosList: Chamado[] = [];
  public chamadosUrgentesList: Chamado[] = [];
  public isLoad: boolean = false;

  constructor(private service: ChamadoService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(chamados => {
      this.chamadosList = chamados;
      this.comporListaUrgente();
      this.isLoad = true;
    });
  }

  comporListaUrgente(): void{
    this.chamadosList.forEach(chamado => {
      if(chamado.prioridade == 2){
        console.log(chamado.status)
        this.chamadosUrgentesList.push(chamado);
      }
    });
  }
}
