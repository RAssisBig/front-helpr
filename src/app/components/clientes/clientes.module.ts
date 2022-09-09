import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { ClienteCreateComponent } from './children/cliente-create/cliente-create.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ClienteUpdateComponent } from './children/cliente-update/cliente-update.component';
import { ChamadosClientesComponent } from './children/chamados-clientes/chamados-clientes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    ClientesComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ChamadosClientesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MaterialModule,
    NavBarModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    MatDialogModule,
    PipesModule
  ],
  exports: [
    ClientesComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ChamadosClientesComponent
  ]
})
export class ClientesModule { }

