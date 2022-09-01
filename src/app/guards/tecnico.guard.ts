import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TecnicoGuard implements CanActivate {

  private router: Router;
  private service: AuthService;

  constructor(router: Router, service: AuthService) {
    this.router = router;
    this.service = service;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.service.isTecnico()) {
      return true;
    } else {
      this
      return false
    }
  }
}
