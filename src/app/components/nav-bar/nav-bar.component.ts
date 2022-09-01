import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

const itemsMenu: any = [
  {
    route: "/home",
    icone: "home",
    content: "Página inicial"
  },
  {
    route: "/clientes",
    icone: "person",
    content: "Cliente"
  },
  {
    route: "/tecnicos",
    icone: "support_agent",
    content: "Técnicos"
  },
  {
    route: "/chamados",
    icone: "perm_phone_msg",
    content: "Chamados"
  },
  {
    route: "/faq",
    icone: "quiz",
    content: "FAQ"
  },
  {
    route: "/logout",
    icone: "logout",
    content: "Sair"
  }
];

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  mode: string = 'lightmode';
  isChecked: boolean = false;
  title2 = 'dark-mode';
  changed(event: MatSlideToggleChange): void {
    this.mode = event.checked ? 'light_mode' : 'dark_mode';
    document.body.classList.toggle('darkMode');
  }

  constructor() {}

  ngOnInit(): void {}

  public menuList: any = itemsMenu;
  
  applyFilter(value: string): void {
    if(value.length === 0){
      this.menuList = itemsMenu;
    }else {
      this.menuList = itemsMenu.filter((menu: any) => {
        if (menu.content.toLowerCase().indexOf(value.toLowerCase()) != -1) {
          return true;
        } else {
          return false;
        }
      });
    }
  }
}
