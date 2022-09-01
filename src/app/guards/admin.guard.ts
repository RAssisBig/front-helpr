import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  private router: Router;
  private service: AuthService;

  constructor(router: Router, service: AuthService) {
    this.router = router;
    this.service = service;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.service.isAdmin()) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false
    }
  }
}
