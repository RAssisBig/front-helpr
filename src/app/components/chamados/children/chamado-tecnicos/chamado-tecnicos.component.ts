import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-chamado-tecnicos',
  templateUrl: './chamado-tecnicos.component.html',
  styleUrls: ['./chamado-tecnicos.component.scss']
})
export class ChamadoTecnicosComponent implements OnInit {

  public tecnico: Tecnico;

  constructor(@Inject(MAT_DIALOG_DATA) tecnico: Tecnico) {
    this.tecnico = tecnico;
  }

  ngOnInit(): void {
  }

}
