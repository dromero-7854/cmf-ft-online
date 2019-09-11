import { NgModule } from '@angular/core';
// modules
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSelectModule,
  MatCheckboxModule,
  MatMenuModule,
  MatProgressBarModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatRadioModule,
  MatSnackBarModule
} from '@angular/material';
import { MatRippleModule } from '@angular/material/core';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  imports: [
    LayoutModule,
    MatRippleModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule,
    MatProgressBarModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatSnackBarModule
  ],
  exports: [
    MatRippleModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule,
    MatProgressBarModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
