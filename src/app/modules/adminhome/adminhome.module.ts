import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeRoutingModule } from './adminhome-routing.module';
import { TaskhomeadminComponent } from 'src/app/components/taskhomeadmin/taskhomeadmin.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TaskhomeadminComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminhomeRoutingModule,
    MatOptionModule,
    MatSelectModule,
    TextFieldModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatButtonModule,
  ],
})
export class AdminhomeModule {}
