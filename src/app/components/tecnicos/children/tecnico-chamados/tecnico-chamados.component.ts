import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ChamadoClientsComponent } from 'src/app/components/chamados/children/chamado-clients/chamado-clients.component';
import { ChamadoDetailsComponent } from 'src/app/components/chamados/children/chamado-details/chamado-details.component';
import { ChamadoTecnicosComponent } from 'src/app/components/chamados/children/chamado-tecnicos/chamado-tecnicos.component';
import { Chamado } from 'src/app/models/chamado';
import { Tecnico } from 'src/app/models/tecnico';
import { ChamadoService } from 'src/app/services/chamado.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-chamados',
  templateUrl: './tecnico-chamados.component.html',
  styleUrls: ['./tecnico-chamados.component.scss']
})
export class TecnicoChamadosComponent implements OnInit {

  public chamadoList: Chamado[] = [];
  public tecnico: Tecnico;
  private serviceCliente: ClienteService;
  private serviceTecnico: TecnicoService;
  private serviceChamado: ChamadoService;
  private dialog: MatDialog;
  public registros: boolean = true;

  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'tecnico', 'dataAbertura', 'prioridade', 'status', 'details'];
  dataSource = new MatTableDataSource<Chamado>(this.chamadoList);

  constructor(@Inject(MAT_DIALOG_DATA) tecnico: Tecnico, serviceCliente: ClienteService, dialog: MatDialog, serviceTecnico: TecnicoService, serviceChamado: ChamadoService) {
    this.tecnico = tecnico;
    this.serviceCliente = serviceCliente;
    this.serviceTecnico = serviceTecnico;
    this.serviceChamado = serviceChamado;
    this.dialog = dialog;
  }

  ngOnInit(): void {
    this.openDailyCalls();
  }

  openDetailsDialog(chamado: Chamado): void {
    this.dialog.open(ChamadoDetailsComponent, { data: chamado, width: "400px" });
  }

  openClienteInfoDialog(cliente: number): void {
    let infoCliente;
    this.serviceCliente.findById(cliente).subscribe((cliente) => {
      infoCliente = cliente;
      this.dialog.open(ChamadoClientsComponent, { data: infoCliente, width: "400px" });
    });
}

  openTecnicoInfoDialog(tecnico: number): void {
    let infoTecnico;
    this.serviceTecnico.findById(tecnico).subscribe((tecnico) => {
      infoTecnico = tecnico;
      this.dialog.open(ChamadoTecnicosComponent, { data: infoTecnico, width: "400px" });
    })
  }

  openDailyCalls(): void {
    let hojeString = this.dataHoje();
    let dailyCalls: Chamado[] = [];
    this.serviceChamado.findAll().subscribe(chamados => {
      this.chamadoList = chamados;
      for (let chamado of this.chamadoList){
        if (chamado.tecnico == this.tecnico.id){
          if (chamado.dataAbertura == hojeString){
            dailyCalls.push(chamado)
            this.registros = false;
          }
        }
      }
      this.dataSource = new MatTableDataSource<Chamado>(dailyCalls);
    })
  }

  dataHoje(): string {
    const hoje = new Date();
  
    const ano = hoje.getFullYear();
    const mes = hoje.getMonth()+1;
    const dia = hoje.getDate();
  
    let mesValor = '';
    let diaValor = '';
  
    mesValor = ((mes < 10) ? '0' : '').concat(mes.toString())
    diaValor = ((dia < 10) ? '0' : '').concat(dia.toString())
  
    return diaValor.concat('/').concat(mesValor).concat('/').concat(ano.toString());
  }

  convertInIcon(status: number): string {
    if (status == 0) {
      return "note_add";
    } else if (status == 1) {
      return "pending_actions";
    } else {
      return "task";
    }
  }
  convertInImg(prioridade: number): string {
    if(prioridade == 0){
      return "signal_cellular_alt_1_bar";
    }
    else if(prioridade == 1){
      return "signal_cellular_alt_2_bar";
    }
    else(prioridade == 2)
    {
      return "signal_cellular_alt_3_bar";
    }
  }
}
