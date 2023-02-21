import { NgModule } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  exports: [
    MatTabsModule,
    MatSnackBarModule,
    MatFormFieldModule,
  ]
})
export class MaterialModule { }
