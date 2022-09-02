import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ClientesFuturosComponent } from './children/clientes-futuros/clientes-futuros.component';
import { Tecnico } from 'src/app/models/tecnico';
import { TrabalheConoscoComponent } from './children/trabalhe-conosco/trabalhe-conosco.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  private toastr: ToastrService;
  private auth: AuthService;
  private router: Router;
  private snack: MatSnackBar;


  constructor(public dialog: MatDialog, formBuilder: FormBuilder, toastr: ToastrService, auth: AuthService, router: Router, snack: MatSnackBar) {
    this.formLogin = formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required, Validators.minLength(3)]]
    });
    this.toastr = toastr;
    this.auth = auth;
    this.router = router;
    this.snack = snack;
    this.dialog = dialog;
  }

  ngOnInit(): void {
    this.abrirSnackCookies()
  }

  public logar(): void {
    if (this.formLogin.valid) {
      let credenciais: Credenciais = this.formLogin.value;
      this.auth.authenticate(credenciais).subscribe({
        next: response => {
          let token: string | undefined = response.headers.get('Authorization')?.substring(7);
          if (this.auth.setToken(token)) {
            let decodeToken = this.auth.decodePayloadJWT();
            this.auth.findByEmail(decodeToken.sub).subscribe({
              next: response => {
                let cred: Tecnico = response;
                if (JSON.stringify(cred.perfis) == JSON.stringify(['ADMIN', 'TECNICO', 'CLIENTE']) || JSON.stringify(cred.perfis) == JSON.stringify(['ADMIN', 'CLIENTE', 'TECNICO'])
                  || JSON.stringify(cred.perfis) == JSON.stringify(['TECNICO', 'ADMIN', 'CLIENTE']) || JSON.stringify(cred.perfis) == JSON.stringify(['TECNICO', 'CLIENTE', 'ADMIN'])
                  || JSON.stringify(cred.perfis) == JSON.stringify(['CLIENTE', 'ADMIN', 'TECNICO']) || JSON.stringify(cred.perfis) == JSON.stringify(['CLIENTE', 'TECNICO', 'ADMIN'])) {
                  localStorage.setItem("role", "admin");
                  this.router.navigate(['admin/dashboard']);
                } if (JSON.stringify(cred.perfis) == JSON.stringify(['TECNICO', 'CLIENTE']) || JSON.stringify(cred.perfis) == JSON.stringify(['CLIENTE', 'TECNICO'])) {
                  localStorage.setItem("role", "tecnico");
                  this.router.navigate(['/tecnico/dashboard']);
                } if (JSON.stringify(cred.perfis) == JSON.stringify(['CLIENTE'])) {
                  localStorage.setItem("role", "cliente");
                  this.router.navigate(['/cliente/dashboard']);
                }
              }
            });
          }
          else {
            this.toastr.error("Acesso negado!", "Login");
          }
        },
        error: error => {
          this.toastr.error("E-mail e/ou senha incorreto.", "Login");
        }
      });
    }
    else {
      this.toastr.error("E-mail e/ou senha inválido.", "Login");
    }
  }

  abrirSnackCookies() {
    let mensagem: string = "Esta aplicação utiliza cookies e prosseguir com sua utilização significa concordar com nossa politica de privacidade e termos de uso. Consulte o administrador do sistema."
    this.snack.open(mensagem, "OK", {
      horizontalPosition: 'start', verticalPosition: 'bottom', panelClass: "snack"
    })
  }

  openClientesFuturos(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ClientesFuturosComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this.dialog.open(TrabalheConoscoComponent, {
      enterAnimationDuration,
      exitAnimationDuration
    });
  }
}
