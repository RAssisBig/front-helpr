import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { ClienteDashboardComponent } from './cliente/dashboard/cliente-dashboard.component';
import { TecnicoDashboardComponent } from './tecnico/dashboard/tecnico-dashboard.component';
import { AdminDashboardComponent } from './admin/dashboard/admin-dashboard..component';




@NgModule({
  declarations: [
    HomeComponent,
    ClienteDashboardComponent,
    TecnicoDashboardComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    NavBarModule
  ],
  exports: [
    HomeComponent,
    ClienteDashboardComponent,
    TecnicoDashboardComponent,
    AdminDashboardComponent
  ]
})
export class HomeModule { }
