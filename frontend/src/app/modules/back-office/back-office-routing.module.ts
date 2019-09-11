import { NgModule } from '@angular/core';
// dependencies
import { Routes, RouterModule } from '@angular/router';
// models
import { Role } from 'src/app/core/models/core.model';
// guards
import { AuthGuard } from 'src/app/core/guards/auth.guard';
// pages
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { SuperAdminHomeComponent } from './components/super-admin-home/super-admin-home.component';

const routes: Routes = [
  {
    path: 'admin-home',
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin, Role.SuperAdmin] },
    component: AdminHomeComponent
  },
  {
    path: 'super-admin-home',
    canActivate: [AuthGuard],
    data: { roles: [Role.SuperAdmin] },
    component: SuperAdminHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }