import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Chamado } from 'src/app/models/chamado';
import { ChamadoService } from 'src/app/services/chamado.service';

@Component({
  selector: 'app-grafico-chamados',
  templateUrl: './grafico-chamados.component.html',
  styleUrls: ['./grafico-chamados.component.scss']
})
export class GraficoChamadosComponent implements OnInit {

  public chamadosList: Chamado[] = [];

  public countEmAberto!: number;
  public countEmAndamento!: number;
  public countEncerrado!: number;

  constructor(private service: ChamadoService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe((chamados) => {
      this.chamadosList = chamados;
      this.chamadosAbertos();
      this.chamadosAndamento();
      this.chamadosFechados();
      this.renderizaTabela();
    
    });  
  }

  chamadosAbertos(): number{
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
  chamadosAndamento(): number{
    this.countEmAndamento = 0;
    let dado = localStorage.getItem("userId");
    let tecnico = (dado == null) ? -1 : Number(dado);
    this.chamadosList.forEach(chamado => {
      if(chamado.status == 1 && chamado.tecnico == tecnico){
        this.countEmAndamento += 1;
      }
    });
    return this.countEmAndamento;
  }

  chamadosFechados(): number{
    this.countEncerrado = 0;
    let dado = localStorage.getItem("userId");
    let tecnico = (dado == null) ? -1 : Number(dado);
    this.chamadosList.forEach(chamado => {
      if(chamado.status == 2 && chamado.tecnico == tecnico){
        this.countEncerrado += 1;
      }
    });
    return this.countEncerrado;
  }

    renderizaTabela() {
    Chart.register(...registerables);
    const myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'Chamados',
            data: [
              { x: 'Aberto', y: this.countEmAberto},
              { x: 'Em Andamento', y: this.countEmAndamento },
              { x: 'Encerrado', y: this.countEncerrado },
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        responsive: true,
      },
    });
  }
}