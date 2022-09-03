import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-futuros',
  templateUrl: './clientes-futuros.component.html',
  styleUrls: ['./clientes-futuros.component.scss']
})
export class ClientesFuturosComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) {
  }

  clientesFuturos = this.formBuilder.group({
    nome: ['', [Validators.required]],
    telefone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]]
  });

  isLinear = false;

  ngOnInit(): void {
  }

  enviarCliente(): void{
    console.log(this.clientesFuturos.value)
    //Em desenvolvimento!//
  }
}
