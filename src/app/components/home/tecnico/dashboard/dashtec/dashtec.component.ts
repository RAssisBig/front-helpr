import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashtec',
  templateUrl: './dashtec.component.html',
  styleUrls: ['./dashtec.component.scss']
})
export class DashtecComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
          { title: 'Card 5', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Chamados(gráfico)', cols: 1, rows: 1 },
        { title: 'Meta semanal(gráfico-linha)', cols: 1, rows: 1 },
        { title: 'Prioridades dos clientes(tabela)', cols: 1, rows: 1 },
        { title: 'Demanda da região(grafico em mapa)', cols: 1, rows: 1 },
        { title: 'Chamados pendentes(tabela)', cols:2, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
