import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { NavBarModule } from '../components/nav-bar/nav-bar.module';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    NavBarModule,
    MaterialModule
  ],
  exports: [
    FaqComponent
  ]
})
export class FaqModule { }
