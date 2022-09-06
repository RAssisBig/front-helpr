import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnicosRoutingModule } from './tecnicos-routing.module';
import { TecnicosComponent } from './tecnicos.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { TecnicoCreateComponent } from './children/tecnico-create/tecnico-create.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { TecnicoUpdateComponent } from './children/tecnico-update/tecnico-update.component';
import { TecnicoChamadosComponent } from './children/tecnico-chamados/tecnico-chamados.component';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    TecnicosComponent,
    TecnicoCreateComponent,
    TecnicoUpdateComponent,
    TecnicoChamadosComponent
  ],
  imports: [
    CommonModule,
    TecnicosRoutingModule,
    MaterialModule,
    NavBarModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    PipesModule
  ],
  exports: [
    TecnicosComponent,
    TecnicoCreateComponent,
    TecnicoUpdateComponent,
    TecnicoChamadosComponent
  ]
})
export class TecnicosModule { }
