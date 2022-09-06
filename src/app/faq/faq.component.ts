import { Component, OnInit } from '@angular/core';
import { Faq } from '../models/faq';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  public faqCliente: Faq[] = [
    {
      title: "O que é Helpr App?",
      description: "Qualquer coisa..."
    },
    {
      title: "No que o Helpr App me ajuda?",
      description: "Qualquer coisa ajuda muito :)"
    },
    {
      title: "Quanto custa o Helpr App?",
      description: "APENAS 5 MIL REAIS! Loucura, loucura, loucura!"
    }
  ]
  public faqAdm: Faq[] = [
    {
      title: "Quem tem acesso?",
      description: "Qualquer coisa..."
    },
    {
      title: "No que o Helpr App me ajuda?",
      description: "Qualquer coisa ajuda muito :)"
    },
    {
      title: "Quanto custa o Helpr App?",
      description: "APENAS 5 MIL REAIS! Loucura, loucura, loucura!"
    }
  ]
  public faqTecnico: Faq[] = [
    {
      title: "Quantos chamados posso atender?",
      description: "Qualquer coisa..."
    },
    {
      title: "No que o Helpr App me ajuda?",
      description: "Qualquer coisa ajuda muito :)"
    },
    {
      title: "Quanto custa o Helpr App?",
      description: "APENAS 5 MIL REAIS! Loucura, loucura, loucura!"
    }
  ]

  panelOpenState = false;
  private service: AuthService;

  constructor(service: AuthService) { 
    this.service = service;
  }

  ngOnInit(): void {
    this.setFaq();
  }

  public faqs: Faq[] = [];

  public setFaq(): void {
    if(this.service.isAdmin()){
      this.faqs = this.faqAdm
    }
    if(this.service.isCliente()){
      this.faqs = this.faqCliente
    }
    if(this.service.isTecnico()){
      this.faqs = this.faqTecnico
    }
  }

}
