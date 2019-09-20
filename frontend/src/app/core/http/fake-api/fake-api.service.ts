import { Injectable } from '@angular/core';
// dependencies
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class FakeApiService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let requests = [
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

    return { requests };

  }

}

