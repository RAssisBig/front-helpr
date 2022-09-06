import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TecnicosFuturos } from 'src/app/models/tecnicos-futuros';

@Component({
  selector: 'app-trabalhe-conosco-form',
  templateUrl: './trabalhe-conosco-form.component.html',
  styleUrls: ['./trabalhe-conosco-form.component.scss']
})
export class TrabalheConoscoFormComponent implements OnInit {
  public formCadastro: FormGroup;
  public formBuilder: FormBuilder;

  isLinear = true;
  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder
    this.formCadastro = formBuilder.group({
      nome: [""],
      formacao: [""],
      telefone: [""],
      experiencia: [""],
      linkedin: [""]
    })
  }

  ngOnInit(): void {
  }
  send() {
    let cadastro: TecnicosFuturos = this.formCadastro.value
    console.log(cadastro)
    alert("enviado")
  }
}
