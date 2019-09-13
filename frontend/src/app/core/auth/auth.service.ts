import { Injectable } from '@angular/core';
// dependencies
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
// jwt decode
import * as jwt_decode from 'jwt-decode';
// models
import { Credentials } from '../models/core.model';
// services
import { AuthTokenService } from './auth-token.service';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static readonly LOGIN_URL = '/auth';
  static readonly ADMIN_HOME_URL = '/front-office/new-ft-deposit';
  static readonly TOKEN_STORAGE_KEY = 'token';
  static readonly USER_STORAGE_KEY = 'user';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tokenService: AuthTokenService,
    private sessionStorage: SessionStorageService
  ) { }

  public login(credentials: Credentials): Promise<any> {
    return new Promise((resolve, reject) => {
      let returnUrl = this.route.snapshot.queryParams['returnUrl'] || AuthService.ADMIN_HOME_URL;
      this.tokenService.getResponseHeaders(credentials)
        .subscribe((res: HttpResponse<any>) => {
          this.saveToken(res.headers.get('authorization'));
          this.saveUserData();
          this.router.navigate([returnUrl]);
          resolve();
        }, error => reject());
    });
  }

  public logout(): void {
    this.sessionStorage.clear(AuthService.TOKEN_STORAGE_KEY);
    this.sessionStorage.clear(AuthService.USER_STORAGE_KEY);
    this.router.navigate([AuthService.LOGIN_URL]);
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }

  private saveToken(token: string) {
    this.sessionStorage.store(AuthService.TOKEN_STORAGE_KEY, token);
  }

  private saveUserData() {
    let userData: any = jwt_decode(this.getToken());
    this.sessionStorage.store(AuthService.USER_STORAGE_KEY, { username: userData.sub, authorities: userData.authorities });
  }

  public getToken(): string {
    return this.sessionStorage.retrieve(AuthService.TOKEN_STORAGE_KEY);
  }

}
