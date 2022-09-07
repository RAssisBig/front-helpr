import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logPerfis',
  templateUrl: './log-perfis.component.html',
  styleUrls: ['./log-perfis.component.scss']
})
export class LogPerfisComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
