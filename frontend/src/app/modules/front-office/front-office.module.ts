import { NgModule } from '@angular/core';
// routing
import { FrontOfficeRoutingModule } from './front-office-routing.module';
// modules
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
// components
import { NewFTDepositComponent } from './components/new-ft-deposit/new-ft-deposit.component';

@NgModule({
  declarations: [
    NewFTDepositComponent
  ],
  imports: [
    FrontOfficeRoutingModule,
    TranslateModule.forChild(),
    SharedModule
  ]
})
export class FrontOfficeModule { }
