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


@NgModule({
  declarations: [
    TecnicosComponent,
    TecnicoCreateComponent,
    TecnicoUpdateComponent
  ],
  imports: [
    CommonModule,
    TecnicosRoutingModule,
    MaterialModule,
    NavBarModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    TecnicosComponent,
    TecnicoCreateComponent,
    TecnicoUpdateComponent
  ]
})
export class TecnicosModule { }
