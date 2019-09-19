import { Component, OnInit } from '@angular/core';
// dependencies
import { MatTableDataSource, MatSelectChange, MatSelectionListChange } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  tableWidth: number = 2200;
  selectedColumns: string[] = ['reqId', 'state', 'expirationDate', 'total', 'pfRate', 'ftdId', 'applicantName', 'pfReqRate', 'cuilCuit', 'email', 'debin', 'debinState', 'credin', 'credinState', 'reqDate'];
  columns: any[] = [{ label: 'Nro. solicitud', value: 'reqId', fixed: true, width: 120 }, { label: 'Estado', value: 'state', fixed: true, width: 100 }, { label: 'Fecha de vencimiento', value: 'expirationDate', fixed: true, width: 140 }, { label: 'Importe total', value: 'total', fixed: true, width: 130 }, { label: 'Tasa PF', value: 'pfRate', fixed: false, width: 70 }, { label: 'Nro. plazo fijo', value: 'ftdId', fixed: true, width: 100 }, { label: 'Nombre completo / Razón social', value: 'applicantName', fixed: true, width: 360 }, { label: 'Tasa solicitud PF', value: 'pfReqRate', fixed: false, width: 120 }, { label: 'CUIT / CUIL', value: 'cuilCuit', fixed: false, width: 120 }, { label: 'Email', value: 'email', fixed: false, width: 300 }, { label: 'Nro. Debin', value: 'debin', fixed: false, width: 120 }, { label: 'Estado debin', value: 'debinState', fixed: false, width: 100 }, { label: 'Nro. credin', value: 'credin', fixed: false, width: 120 }, { label: 'Estado credin', value: 'credinState', fixed: false, width: 100 }, { label: 'Fecha de la solicitud', value: 'reqDate', fixed: false, width: 160 }]

  displayedColumns: string[] = ['reqId', 'state', 'expirationDate', 'total', 'pfRate', 'ftdId', 'applicantName', 'pfReqRate', 'cuilCuit', 'email', 'debin', 'debinState', 'credin', 'credinState', 'reqDate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  isHandsetSubs: Subscription;
  isHandset: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.isHandsetSubs = this.breakpointObserver.observe(['(max-width: 450px)'])
      .pipe(
        map(result => result.matches)
      ).subscribe(
        match => {
          this.isHandset = match;
        }
      );
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









export interface FTRequest {
  reqId: string;
  state: string;
  expirationDate: string;
  total: string;
  pfRate: string;
  ftdId: string;
  applicantName: string;
  pfReqRate: string;
  cuilCuit: string;
  email: string;
  debin: string;
  debinState: string;
  credin: string;
  credinState: string;
  reqDate: string;
}


const ELEMENT_DATA: FTRequest[] = [
  {
    reqId: '2265',
    state: 'INGRESADA',
    expirationDate: '16-09-2019',
    total: '$ 15.600.000',
    pfRate: '48%',
    ftdId: '3366',
    applicantName: 'Juan Carlos Gonzales',
    pfReqRate: '48%',
    cuilCuit: '20-12345678-6',
    email: 'prueba@empresa.com.ar',
    debin: 'N/A',
    debinState: 'NO EMITIDO',
    credin: 'N/A',
    credinState: 'NO EMITIDO',
    reqDate: '16 Ago 2019'
  },
  {
    reqId: '999999999',
    state: 'INGRESADA',
    expirationDate: 'DD-MM-AAAA',
    total: '$ 999.999.999,99',
    pfRate: '100%',
    ftdId: '999999999',
    applicantName: 'Juan Carlos Gonzales',
    pfReqRate: '100%',
    cuilCuit: '99-99999999-9',
    email: 'prueba@empresa.com.ar',
    debin: '999999999',
    debinState: 'NO EMITIDO',
    credin: '999999999',
    credinState: 'NO EMITIDO',
    reqDate: 'DD-MM-AAAA'
  }
];