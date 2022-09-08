import { Component, OnInit } from '@angular/core';
import { Chamado } from 'src/app/models/chamado';
import { ChamadoService } from 'src/app/services/chamado.service';

@Component({
  selector: 'app-dialog-chamados-urgentes',
  templateUrl: './dialog-chamados-urgentes.component.html',
  styleUrls: ['./dialog-chamados-urgentes.component.scss']
})
export class DialogChamadosUrgentesComponent implements OnInit {

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
    let dado = localStorage.getItem("userId");
    let tecnico = (dado == null) ? -1 : Number(dado);
    this.chamadosList.forEach(chamado => {
      if(chamado.prioridade == 2 && chamado.tecnico == tecnico){
        this.chamadosUrgentesList.push(chamado);
      }
    });
  }
}
