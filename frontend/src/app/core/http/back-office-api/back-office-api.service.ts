import { Injectable } from '@angular/core';
// dependencies
import { Observable } from 'rxjs';
import { HttpResponse, HttpParams } from '@angular/common/http';
// models
import { FTRequest } from '../../models/core.model';
// services
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class BackOfficeApiService {

  constructor(private httpClient: HttpClientService) { }

  findRequests(filter = '', sortActive = '', sortOrder = 'asc', pageNumber = 0, pageSize = 3): Observable<HttpResponse<FTRequest[]>> {
    console.log('| Find requests | filter -> ', filter, ' | sortActive -> ', sortActive, ' | sortOrder -> ', sortOrder, ' | pageNumber -> ', pageNumber, ' | pageSize -> ', pageSize);
    return this.httpClient.get<FTRequest[]>({
      endPoint: '/requests'/*,
      params: new HttpParams()
        .set('filter', filter)
        .set('sortOrder', sortOrder)
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString())*/
    });
  }

}
