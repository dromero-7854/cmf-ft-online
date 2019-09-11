import { Injectable } from '@angular/core';
// dependencies
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
// models
import { Credentials } from '../models/core.model';
// services
import { HttpClientService } from '../http/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  API_LOGIN = '/login';
  API_LOGOUT = '/logout';

  constructor(
    private httpClient: HttpClientService
  ) { }

  public getResponseHeaders(credentials: Credentials): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(credentials, { endPoint: this.API_LOGIN });
  }

}
