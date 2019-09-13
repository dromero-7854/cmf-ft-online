import { Component, OnInit } from '@angular/core';
// dependencies
import { ErrorStateMatcher, MatDatepickerInputEvent, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, FormBuilder, Validators } from '@angular/forms';
import { CustomDateAdapter, APP_DATE_FORMATS } from '../../../../core/adapters/format-datepicker';

@Component({
  selector: 'app-new-ft-deposit',
  templateUrl: './new-ft-deposit.component.html',
  styleUrls: ['./new-ft-deposit.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: CustomDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class NewFTDepositComponent implements OnInit {

  states: any[] = [
    {
      label: 'Ciudad Autónoma de Buenos Aires',
      value: 'CABA'
    },
    {
      label: 'Buenos Aires',
      value: 'BA'
    },
    {
      label: 'Chaco',
      value: 'CHA'
    }
  ]

  ftTypes: any[] = [
    {
      label: 'Tradicional',
      value: 'TRA'
    },
    {
      label: 'Precancelable',
      value: 'PRE'
    },
    {
      label: 'Ajustable por CER',
      value: 'CER'
    }
  ]

  fTDepositForm = this.fb.group({
    fullNameBussName: ['', [Validators.required]],
    cuitCuil: ['', [Validators.required]],
    birthdate: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required]],
    street: ['', [Validators.required]],
    number: ['', [Validators.required]],
    zipCode: ['', [Validators.required]],
    place: ['', [Validators.required]],
    state: ['', [Validators.required]],
    cbu: ['', [Validators.required]],
    ftType: ['', [Validators.required]],
  });

  get fullNameBussName() { return this.fTDepositForm.get('fullNameBussName'); }
  get cuitCuil() { return this.fTDepositForm.get('cuitCuil'); }
  get birthdate() { return this.fTDepositForm.get('birthdate'); }
  get phone() { return this.fTDepositForm.get('phone'); }
  get email() { return this.fTDepositForm.get('email'); }
  get street() { return this.fTDepositForm.get('street'); }
  get number() { return this.fTDepositForm.get('number'); }
  get zipCode() { return this.fTDepositForm.get('zipCode'); }
  get place() { return this.fTDepositForm.get('place'); }
  get state() { return this.fTDepositForm.get('state'); }
  get cbu() { return this.fTDepositForm.get('cbu'); }
  get ftType() { return this.fTDepositForm.get('ftType'); }

  matcher = new NoErrorStateMatcher();
  submitted: boolean = false;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.fTDepositForm.value);
    this.loading = true;
    this.submitted = true;
    if (this.fTDepositForm.invalid) {
      this.loading = false;
      return;
    }
  }

  dateChange(event: MatDatepickerInputEvent<Date>) {
    let datetime = event.value;
    console.log(datetime);
  }

}

export class NoErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }
}