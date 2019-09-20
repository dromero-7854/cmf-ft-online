import { Component, OnInit, ViewChild } from '@angular/core';
// dependencies
import { MatSelectionListChange, MatPaginator, MatSort } from '@angular/material';
import { Subscription, merge } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, tap } from 'rxjs/operators';
// data-source
import { RequestsDataSource } from '../../../../core/data-source/request-data-source'
// models
import { FTRequest } from '../../../../core/models/core.model';
// services
import { BackOfficeApiService } from 'src/app/core/http/back-office-api/back-office-api.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  tableWidth: number = 2280;
  selectedColumns: string[] = ['reqId', 'state', 'expirationDate', 'total', 'pfRate', 'ftdId', 'applicantName', 'pfReqRate', 'cuilCuit', 'email', 'debin', 'debinState', 'credin', 'credinState', 'reqDate', 'actions'];
  columns: any[] = [{ label: 'Nro. solicitud', value: 'reqId', fixed: true, width: 130 }, { label: 'Estado', value: 'state', fixed: true, width: 100 }, { label: 'Fecha de vencimiento', value: 'expirationDate', fixed: true, width: 160 }, { label: 'Importe total', value: 'total', fixed: true, width: 130 }, { label: 'Tasa PF', value: 'pfRate', fixed: true, width: 80 }, { label: 'Nro. plazo fijo', value: 'ftdId', fixed: true, width: 130 }, { label: 'Razón social', value: 'applicantName', fixed: true, width: 320 }, { label: 'Tasa solicitud PF', value: 'pfReqRate', fixed: false, width: 130 }, { label: 'CUIT / CUIL', value: 'cuilCuit', fixed: false, width: 120 }, { label: 'Email', value: 'email', fixed: false, width: 250 }, { label: 'Nro. Debin', value: 'debin', fixed: false, width: 120 }, { label: 'Estado debin', value: 'debinState', fixed: false, width: 120 }, { label: 'Nro. credin', value: 'credin', fixed: false, width: 120 }, { label: 'Estado credin', value: 'credinState', fixed: false, width: 120 }, { label: 'Fecha de la solicitud', value: 'reqDate', fixed: false, width: 170 }, { label: 'Acciones', value: 'actions', fixed: true, width: 220 }]

  dataSource: RequestsDataSource;
  displayedColumns: string[] = ['reqId', 'state', 'expirationDate', 'total', 'pfRate', 'ftdId', 'applicantName', 'pfReqRate', 'cuilCuit', 'email', 'debin', 'debinState', 'credin', 'credinState', 'reqDate', 'actions'];

  isHandsetSubs: Subscription;
  isHandset: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  searchValue: string = '';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private backOfficeApi: BackOfficeApiService
  ) { }

  ngOnInit() {
    this.dataSource = new RequestsDataSource(this.backOfficeApi);
    this.dataSource.loadRequests('', '', 'asc', 0, 30);
    this.isHandsetSubs = this.breakpointObserver.observe(['(max-width: 450px)'])
      .pipe(
        map(result => result.matches)
      ).subscribe(
        match => {
          this.isHandset = match;
        }
      );
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadLessonsPage())
      )
      .subscribe();
  }

  loadLessonsPage() {
    this.dataSource.loadRequests(
      this.searchValue,
      this.sort.active,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize
    );
  }

  search() {
    this.paginator.pageIndex = 0;
    this.loadLessonsPage();
  }

  onRowClicked(row: FTRequest) {
    console.log('Row clicked: ', row);
  }

  stopPropagation($event: Event): boolean {
    $event.preventDefault();
    $event.stopPropagation();
    return false;
  }

  showHideColumns($event: MatSelectionListChange) {
    let tableWidth = 0;
    this.selectedColumns.forEach((selectedCol: any) => {
      tableWidth += this.columns.find(col => col.value === selectedCol).width;
    });
    this.tableWidth = tableWidth;
    this.displayedColumns = this.selectedColumns;
  }

}