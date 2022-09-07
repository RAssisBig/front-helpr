import { NavBarModule } from './../nav-bar/nav-bar.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PerfilComponent } from './perfil.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    NavBarModule,
    MaterialModule,
    MatDialogModule,
    FormsModule

  ],
  exports: [
    PerfilComponent
  ]
})
export class PerfilModule { }
