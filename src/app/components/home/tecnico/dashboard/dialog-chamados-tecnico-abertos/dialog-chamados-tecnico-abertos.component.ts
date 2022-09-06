import { Component, OnInit } from '@angular/core';
import { Chamado } from 'src/app/models/chamado';
import { ChamadoService } from 'src/app/services/chamado.service';

@Component({
  selector: 'app-dialog-chamados-tecnico-abertos',
  templateUrl: './dialog-chamados-tecnico-abertos.component.html',
  styleUrls: ['./dialog-chamados-tecnico-abertos.component.scss']
})
export class DialogChamadosTecnicoAbertosComponent implements OnInit {

  public chamadosList: Chamado[] = [];
  public chamadosAbertosList: Chamado[] = [];
  public isLoad: boolean = false;

  constructor(private service: ChamadoService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(chamados => {
      this.chamadosList = chamados;
      this.comporListaAberto();
      this.isLoad = true;
    });

  }

  comporListaAberto(): void{
    console.log("oi")
    this.chamadosList.forEach(chamado => {
      if(chamado.status == 0){
        console.log(chamado.status)
        this.chamadosAbertosList.push(chamado);
      }
    });
  }
}
