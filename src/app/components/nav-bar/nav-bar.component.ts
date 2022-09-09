import { MatDialog } from '@angular/material/dialog';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';

let itemsMenu: any = [
  { route: '/home', icone: 'home', content: 'Página inicial' },
  { route: '/clientes', icone: 'person', content: 'Cliente' },
  { route: '/tecnicos', icone: 'support_agent', content: 'Técnicos' },
  { route: '/chamados', icone: 'perm_phone_msg', content: 'Chamados' },
  { route: '/faq', icone: 'quiz', content: 'FAQ' },
  { route: '/logout', icone: 'logout', content: 'Sair' },
];
let itemsMenuTecnico: any = [
  { route: '/home', icone: 'home', content: 'Página inicial' },
  { route: '/clientes', icone: 'person', content: 'Cliente' },
  { route: '/chamados', icone: 'perm_phone_msg', content: 'Chamados' },
  { route: '/faq', icone: 'quiz', content: 'FAQ' },
  { route: '/logout', icone: 'logout', content: 'Sair' },
];
let itemsMenuCliente: any = [
  { route: '/home', icone: 'home', content: 'Página inicial' },
  { route: '/faq', icone: 'quiz', content: 'FAQ' },
  { route: '/logout', icone: 'logout', content: 'Sair' },
];

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  public menuList: any = itemsMenu;
  private authService: AuthService;
  public value: number = 100;
  public countDownTimer = '';

  mode: string = 'light_mode';
  isChecked: boolean = false;

  changed(event: MatSlideToggleChange): void {
    this.mode = event.checked ? 'light_mode' : 'dark_mode';
    document.body.classList.toggle('darkMode');
  }
  constructor(authService: AuthService, public dialog: MatDialog) {
    this.authService = authService;
  }

  ngOnInit(): void {
    if (this.authService.isCliente()) {
      itemsMenu = [itemsMenu[0], itemsMenu[4], itemsMenu[5]];
      this.menuList = itemsMenu;
    }
    this.initProgressBarTimer();
    this.adjustItemsMenu();
  }

  openLogoutDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(LogoutDialogComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  public initProgressBarTimer(): void {
    setInterval(() => {
      let timeExpirationToken = this.authService.getTimeExpirationToken();
      let timeExpirationTokenPorcent = timeExpirationToken * (100 / 24);
      this.value = timeExpirationTokenPorcent;
      this.countDownTimer = timeExpirationToken;
    }, 5000);
  }

  private adjustItemsMenu(): void {
    if (this.authService.isTecnico()) {
      itemsMenu = itemsMenuTecnico;
    } else if (this.authService.isCliente()) {
      itemsMenu = itemsMenuCliente;
    }
    this.menuList = itemsMenu;
  }

  applyFilter(value: string): void {
    if (value.length === 0) {
      this.menuList = itemsMenu;
    } else {
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
