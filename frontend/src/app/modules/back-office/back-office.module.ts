import { NgModule } from '@angular/core';
// routing
import { BackOfficeRoutingModule } from './back-office-routing.module';
// modules
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
// components
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { SuperAdminHomeComponent } from './components/super-admin-home/super-admin-home.component'

@NgModule({
  declarations: [
    AdminHomeComponent,
    SuperAdminHomeComponent
  ],
  imports: [
    BackOfficeRoutingModule,
    TranslateModule.forChild(),
    SharedModule
  ]
})
export class BackOfficeModule { }
