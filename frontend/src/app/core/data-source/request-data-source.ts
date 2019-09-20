// dependencies
import { DataSource, CollectionViewer } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { HttpResponse } from "@angular/common/http";
// models
import { FTRequest } from "../models/core.model";
// services
import { BackOfficeApiService } from "../http/back-office-api/back-office-api.service";

export class RequestsDataSource implements DataSource<FTRequest> {

  private requestSubject = new BehaviorSubject<FTRequest[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  private paginatorTotalSubject = new BehaviorSubject<number>(0);
  public paginatorTotal$ = this.paginatorTotalSubject.asObservable();

  constructor(private backOfficeApi: BackOfficeApiService) { }

  connect(collectionViewer: CollectionViewer): Observable<FTRequest[]> {
    return this.requestSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.requestSubject.complete();
    this.loadingSubject.complete();
    this.paginatorTotalSubject.complete();
  }

  loadRequests(filter = '', sortActive = '', sortDirection = 'asc', pageIndex = 0, pageSize = 3) {
    this.loadingSubject.next(true);
    this.backOfficeApi.findRequests(filter, sortActive, sortDirection, pageIndex, pageSize)
      .pipe(
        catchError(error => {
          console.log(error);
          return of([]);
        }),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((resp: HttpResponse<FTRequest[]>) => {
        this.requestSubject.next(resp.body);
        this.paginatorTotalSubject.next(resp.body.length);
      }
      );
  }

}