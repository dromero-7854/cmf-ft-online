import { NgModule } from '@angular/core';
// dependencies
import { Routes, RouterModule } from '@angular/router';
// pages
import { NewFTDepositComponent } from './components/new-ft-deposit/new-ft-deposit.component';

const routes: Routes = [
  {
    path: 'new-ft-deposit',
    component: NewFTDepositComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }