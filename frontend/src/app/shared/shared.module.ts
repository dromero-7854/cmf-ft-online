import { NgModule } from '@angular/core';
// components
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
// modules
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './material/material.module';
import { NgBootstrapModule } from './ng-bootstrap/ng-bootstrap.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    MaterialModule,
    NgBootstrapModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BreadcrumbComponent,
    CommonModule,
    MaterialModule,
    NgBootstrapModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: []
})
export class SharedModule { }
