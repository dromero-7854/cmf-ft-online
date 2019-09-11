import { NgModule } from '@angular/core';
// routing
import { FrontOfficeRoutingModule } from './front-office-routing.module';
// modules
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
// components
import { NewFixedTermDepositComponent } from './components/new-fixed-term-deposit/new-fixed-term-deposit.component';

@NgModule({
  declarations: [
    NewFixedTermDepositComponent
  ],
  imports: [
    FrontOfficeRoutingModule,
    TranslateModule.forChild(),
    SharedModule
  ]
})
export class FrontOfficeModule { }
