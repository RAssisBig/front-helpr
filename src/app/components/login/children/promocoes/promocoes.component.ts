import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit {

  public bancoImagens: string[] = [
    "https://raw.githubusercontent.com/victoricoma/helprback/main/img/bannerQuadrado/1.png", 
    "https://raw.githubusercontent.com/victoricoma/helprback/main/img/bannerQuadrado/10.png",
    "https://raw.githubusercontent.com/victoricoma/helprback/main/img/bannerQuadrado/11.png"

  ];

  public random: number = Math.floor(Math.random()*this.bancoImagens.length);

  public sorteioImagem: any = this.bancoImagens[this.random]

  constructor() { }

  ngOnInit(): void {
  }

}
