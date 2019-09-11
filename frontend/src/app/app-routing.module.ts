import { NgModule } from '@angular/core';
// dependencies
import { Routes, RouterModule } from '@angular/router';
// models
import { Role } from './core/models/core.model';
// guards
import { AuthGuard } from './core/guards/auth.guard';
// layouts
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
// components
import { LoginComponent } from './core/components/login/login.component'

const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent
  },
  {
    path: 'back-office',
    canActivate: [AuthGuard],
    component: MainLayoutComponent,
    data: { roles: [Role.Admin, Role.SuperAdmin] },
    loadChildren: './modules/back-office/back-office.module#BackOfficeModule'
  },
  {
    path: 'front-office',
    canActivate: [AuthGuard],
    component: MainLayoutComponent,
    loadChildren: './modules/front-office/front-office.module#FrontOfficeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
