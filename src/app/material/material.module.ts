import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




const MaterialComponnets = [
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatTableModule,
  MatInputModule,
  MatDialogModule,
  MatIconModule,
  MatSelectModule,
  MatDatepickerModule,
  ReactiveFormsModule,
  FormsModule

];

@NgModule({
  imports: [MaterialComponnets],
  exports: [MaterialComponnets],
})
export class MaterialModule {}
