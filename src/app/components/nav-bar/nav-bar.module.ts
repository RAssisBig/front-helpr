import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterModule } from '../footer/footer.module';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';



@NgModule({
  declarations: [
    NavBarComponent,
    LogoutDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    FooterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
