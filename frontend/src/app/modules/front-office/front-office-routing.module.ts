import { NgModule } from '@angular/core';
// dependencies
import { Routes, RouterModule } from '@angular/router';
// pages
import { NewFixedTermDepositComponent } from './components/new-fixed-term-deposit/new-fixed-term-deposit.component';

const routes: Routes = [
  {
    path: 'new-ft-deposit',
    component: NewFixedTermDepositComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }