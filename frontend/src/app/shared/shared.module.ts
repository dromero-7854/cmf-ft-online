import { NgModule } from '@angular/core';
// modules
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './material/material.module';
import { NgBootstrapModule } from './ng-bootstrap/ng-bootstrap.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    MaterialModule,
    NgBootstrapModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    NgBootstrapModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: []
})
export class SharedModule { }
