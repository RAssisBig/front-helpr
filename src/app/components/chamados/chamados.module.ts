import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChamadosRoutingModule } from './chamados-routing.module';
import { ChamadosComponent } from './chamados.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ChamadoCreateComponent } from './children/chamado-create/chamado-create.component';
import { ChamadoUpdateComponent } from './children/chamado-update/chamado-update.component';
import { ChamadoDetailsComponent } from './children/chamado-details/chamado-details.component';


@NgModule({
  declarations: [
    ChamadosComponent,
    ChamadoCreateComponent,
    ChamadoUpdateComponent,
    ChamadoDetailsComponent
  ],
  imports: [
    CommonModule,
    ChamadosRoutingModule,
    NavBarModule,
    MaterialModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule
  ],
  exports: [
    ChamadosComponent,
    ChamadoCreateComponent,
    ChamadoUpdateComponent
  ]
})
export class ChamadosModule { }
