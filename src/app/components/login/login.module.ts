import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientesFuturosComponent } from './children/clientes-futuros/clientes-futuros.component';
import { TrabalheConoscoComponent } from './children/trabalhe-conosco/trabalhe-conosco.component';
import { TrabalheConoscoFormComponent } from './children/trabalhe-conosco-form/trabalhe-conosco-form.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    LoginComponent,
    ClientesFuturosComponent,
    TrabalheConoscoComponent,
    TrabalheConoscoFormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  exports: [
    ClientesFuturosComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoginModule { }
