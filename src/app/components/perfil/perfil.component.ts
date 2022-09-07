import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  public username: string | null = localStorage.getItem("Username");
  public cpf: string | null = localStorage.getItem("Cpf");
  public email: string | null = localStorage.getItem("Email");

  constructor() {
  }

  ngOnInit(): void {
  }
}

