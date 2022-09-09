import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { ClienteDashboardComponent } from './cliente/dashboard/cliente-dashboard.component';
import { TecnicoDashboardComponent } from './tecnico/dashboard/tecnico-dashboard.component';
import { AdminDashboardComponent } from './admin/dashboard/admin-dashboard..component';
import { DashtecComponent } from './tecnico/dashboard/dashtec/dashtec.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DashadminComponent } from './admin/dashboard/dashadmin/dashadmin.component';
import { DialogChamadosAbertosComponent } from './admin/dashboard/dialog-chamados-abertos/dialog-chamados-abertos.component';
import { DialogChamadosUrgentesComponent } from './admin/dashboard/dialog-chamados-urgentes/dialog-chamados-urgentes.component';
import { DialogChamadosTecnicoAbertosComponent } from './tecnico/dashboard/dialog-chamados-tecnico-abertos/dialog-chamados-tecnico-abertos.component';
import { DialogChamadosTecnicoUrgentesComponent } from './tecnico/dashboard/dialog-chamados-tecnico-urgentes/dialog-chamados-tecnico-urgentes.component';
import { LogPerfisComponent } from './admin/dashboard/logPerfis/log-perfis/log-perfis.component';
import { ChamadosModule } from '../chamados/chamados.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { GraficoChamadosComponent } from './tecnico/dashboard/grafico-chamados/grafico-chamados.component';
import { TableLogComponent } from './admin/dashboard/table-log/table-log.component';
import { ChamadoUrgenteComponent } from './admin/dashboard/chamado-urgente/chamado-urgente.component';
import { UrgenciasComponent } from './admin/dashboard/urgencias/urgencias.component';



@NgModule({
  declarations: [
    HomeComponent,
    ClienteDashboardComponent,
    TecnicoDashboardComponent,
    AdminDashboardComponent,
    DashtecComponent,
    DashadminComponent,
    DialogChamadosAbertosComponent,
    DialogChamadosUrgentesComponent,
    DialogChamadosTecnicoAbertosComponent,
    DialogChamadosTecnicoUrgentesComponent,
    LogPerfisComponent,
    GraficoChamadosComponent,
    TableLogComponent,
    ChamadoUrgenteComponent,
    UrgenciasComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    NavBarModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    ChamadosModule,
    PipesModule
  ],
  exports: [
    HomeComponent,
    ClienteDashboardComponent,
    TecnicoDashboardComponent,
    AdminDashboardComponent,
    UrgenciasComponent
  ]
})
export class HomeModule { }
