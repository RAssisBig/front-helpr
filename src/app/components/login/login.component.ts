import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/services/auth.service';

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
  
  constructor(formBuilder: FormBuilder, toastr: ToastrService, auth: AuthService, router: Router, snack: MatSnackBar) {
    this.formLogin = formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required, Validators.minLength(3)]]
    });
    this.toastr = toastr;
    this.auth = auth;
    this.router = router;
    this.snack = snack;
  }
  
  ngOnInit(): void {
    this.abrirSnackCookies()
  }

  public logar(): void {
    if(this.formLogin.valid) {
      let credenciais: Credenciais = this.formLogin.value;
      this.auth.authenticate(credenciais).subscribe({
        next: response => {
          let token: string | undefined = response.headers.get('Authorization')?.substring(7);
          if(this.auth.setToken(token)) {
            this.router.navigate(['/home']);
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

  abrirSnackCookies(){
    let mensagem: string = "Esta aplicação utiliza cookies e prosseguir com sua utilização significa concordar com nossa politica de privacidade e termos de uso. Consulte o administrador do sistema."
    this.snack.open(mensagem, "OK",{
      horizontalPosition: 'start', verticalPosition: 'bottom', panelClass: "snack"
    })
  }
}
