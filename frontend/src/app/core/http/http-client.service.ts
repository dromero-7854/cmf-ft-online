import { Injectable } from '@angular/core';
// dependencies
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// environment
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private http: HttpClient
  ) { }

  get<T>(
    options: {
      endPoint: string,
      headers?: HttpHeaders | {
        [header: string]: string | string[]
      },
      params?: HttpParams | {
        [param: string]: string | string[];
      };
    }) {
    return this.http.get<T>(env.baseUrl + options.endPoint, {
      headers: options.headers ? options.headers : new HttpHeaders({
        'Accept': 'application/json'
      }),
      params: options.params ? options.params : undefined,
      observe: 'response'
    }).pipe(
      retry(0),
      catchError(this.handleError<T>())
    );
  }

  post<T>(
    body: any,
    options: {
      endPoint: string,
      headers?: HttpHeaders | {
        [header: string]: string | string[]
      },
      params?: HttpParams | {
        [param: string]: string | string[];
      };
      responseType?: string;
    }) {
    return this.http.post<T>(env.baseUrl + options.endPoint, body, {
      headers: options.headers ? options.headers : new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: options.params ? options.params : undefined,
      observe: 'response'
    }).pipe(
      retry(0),
      catchError(this.handleError<T>())
    );
  }

  put<T>(
    body: any,
    options: {
      endPoint: string,
      headers?: HttpHeaders | {
        [header: string]: string | string[]
      },
      params?: HttpParams | {
        [param: string]: string | string[];
      };
      responseType?: string;
    }) {
    return this.http.put<T>(env.baseUrl + options.endPoint, body, {
      headers: options.headers ? options.headers : new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: options.params ? options.params : undefined,
      observe: 'response'
    }).pipe(
      retry(0),
      catchError(this.handleError<T>())
    );
  }

  delete<T>(
    options: {
      endPoint: string,
      headers?: HttpHeaders | {
        [header: string]: string | string[]
      },
      params?: HttpParams | {
        [param: string]: string | string[];
      };
      responseType?: string;
    }) {
    return this.http.delete<T>(env.baseUrl + options.endPoint, {
      headers: options.headers ? options.headers : new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: options.params ? options.params : undefined,
      observe: 'response'
    }).pipe(
      retry(0),
      catchError(this.handleError<T>())
    );
  }

  private handleError<T>() {
    return error => {
      if (error instanceof HttpErrorResponse) {
        // server-side or connection error 
        if (!navigator.onLine) {
          // TODO: handle offline error
          // router.navigate(['/error'], { queryParams: {error: error} }); 
        } else {
          console.error(error);
          return throwError(error);
        }
      } else {
        // client-side error 
        // TODO: handle client-side error (Angular Error, ReferenceError...)   
        // router.navigate(['/error'], { queryParams: {error: error} }); 
        return throwError(new HttpErrorResponse({ status: -1, statusText: 'client-side error', error: error }));
      }
    }
  }

}