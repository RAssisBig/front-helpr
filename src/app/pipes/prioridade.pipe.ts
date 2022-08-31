import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prioridade'
})
export class PrioridadePipe implements PipeTransform {

  transform(value: number): string {
    switch(value) {
      case 0:
        return "Baixa";
      case 1:
        return "Média";
      case 2:
        return "Alta";
      default:
        return "";
    }
  }

}
