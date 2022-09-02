import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Credenciais } from '../models/credenciais';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http: HttpClient;
  private jwt: JwtHelperService = new JwtHelperService();

  constructor(http: HttpClient) {
    this.http = http;
  }

  authenticate(credenciais: Credenciais): Observable<HttpResponse<any>> {
    return this.http.post(`${API_CONFIG.baseUrl}/login`, credenciais, {
      observe: "response",
      responseType: "text"
    });
  }

  findByEmail(email: string): Observable<any>{
    return this.http.get<any>(`${API_CONFIG.serviceUrl}/pessoas/${email}`);
  }

  setToken(token: string | undefined): boolean {
    let flag: boolean = false;
    if(token != undefined) {
      localStorage.setItem("token", token);
      flag = true;
    }
    return flag;
  }

  public getToken():any{
    return localStorage.getItem('token');
  }

  public decodePayloadJWT(): any{
    try{
      let decodeToken = jwtDecode(this.getToken());
      return decodeToken;
    } catch (error){
      return null;
    }
  }

  isAuthenticated(): boolean {
    let flag: boolean = false;
    let token: string | null = this.getToken();
    if (token != null) {
      let tokenTime: any = this.jwt.getTokenExpirationDate(token);
      flag = !this.jwt.isTokenExpired(token);
      let timerMilissegundos = (tokenTime - Date.now());
      let timerHoras = Math.round(timerMilissegundos / (1000 * 60 * 60))
      if (timerHoras !== 0) {
        console.log(`A sessão expirará em ${timerHoras} horas...`);
      }
      else {
        console.log("Sessão expirada!")
      }
    }
    return flag;
  }

  logout(): void {
    localStorage.clear();
  }

  isAdmin(): boolean{
    let role = localStorage.getItem("role");
    let flag: boolean = false;
    if(role == "admin"){
      flag = true;
    }
    return flag;
  }

  isTecnico(): boolean{
    let role = localStorage.getItem("role");
    let flag: boolean = false;
    if(role == "tecnico"){
      flag = true;
    }
    return flag;
  }

  isCliente(): boolean{
    let role = localStorage.getItem("role");
    let flag: boolean = false;
    if(role == "cliente"){
      flag = true;
    }
    return flag;
  }
}
