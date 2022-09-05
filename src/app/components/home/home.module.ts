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







@NgModule({
  declarations: [
    HomeComponent,
    ClienteDashboardComponent,
    TecnicoDashboardComponent,
    AdminDashboardComponent,
    DashtecComponent,
    DashadminComponent
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
    LayoutModule
  ],
  exports: [
    HomeComponent,
    ClienteDashboardComponent,
    TecnicoDashboardComponent,
    AdminDashboardComponent
  ]
})
export class HomeModule { }
