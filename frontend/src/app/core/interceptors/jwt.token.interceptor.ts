import { Injectable } from '@angular/core';
// dependencies
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
// services
import { AuthService } from '../auth/auth.service';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {

  constructor(
    public auth: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let interceptedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
    return next.handle(interceptedRequest);
  }

}