import { Injectable } from '@angular/core';
// dependencies
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
// service
import { SessionStorageService } from 'ngx-webstorage';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private sessionStorage: SessionStorageService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn()) {
      if (next.data.roles) {
        const userData = this.sessionStorage.retrieve(AuthService.USER_STORAGE_KEY);
        if (userData) {
          for (let authority of userData.authorities) {
            if (next.data.roles.includes(authority)) {
              return true;
            }
          }
          this.router.navigate([AuthService.ADMIN_HOME_URL]);
          return false;
        }
      } else {
        return true;
      }
    } else {
      this.router.navigate([AuthService.LOGIN_URL], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }

}