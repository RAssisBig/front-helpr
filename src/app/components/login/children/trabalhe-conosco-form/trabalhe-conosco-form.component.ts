import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TecnicosFuturos } from 'src/app/models/tecnicos-futuros';
import { TecnicosFuturosService } from 'src/app/services/tecnicosfuturos.service';


@Component({
  selector: 'app-trabalhe-conosco-form',
  templateUrl: './trabalhe-conosco-form.component.html',
  styleUrls: ['./trabalhe-conosco-form.component.scss']
})
export class TrabalheConoscoFormComponent implements OnInit {
  public formCadastro: FormGroup;
  public formBuilder: FormBuilder;
  private service: TecnicosFuturosService ;


  isLinear = true;
  constructor(formBuilder: FormBuilder, service: TecnicosFuturosService) {
    this.formBuilder = formBuilder;
    this.service = service;
    this.formCadastro = formBuilder.group({
      nome: [""],
      formacao: [""],
      telefone: [""],
      experiencia: [""],
      linkedin: [""]
    })
  }

  ngOnInit(): void { }

  send() {
    let cadastro: TecnicosFuturos = this.formCadastro.value;
    this.service.insert(cadastro).subscribe({
      next: response => {
      }
    });
    console.log(cadastro);
    alert("enviado")
  }
}

