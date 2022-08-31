import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPipe } from './status.pipe';
import { PrioridadePipe } from './prioridade.pipe';
import { EncerramentoPipe } from './encerramento.pipe';



@NgModule({
  declarations: [
    StatusPipe,
    PrioridadePipe,
    EncerramentoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusPipe,
    PrioridadePipe,
    EncerramentoPipe
  ]
})
export class PipesModule { }
