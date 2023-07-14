import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomemoduleRoutingModule } from './homemodule-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HomecomponentComponent } from '../../components/home';
import { TasktableComponent } from '../../components/tasktable';
import { DonetasksComponent } from '../../components/donetasks';

@NgModule({
  declarations: [
    HomecomponentComponent,
    TasktableComponent,
    DonetasksComponent,
  ],
  imports: [
    CommonModule,
    HomemoduleRoutingModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
})
export class HomemoduleModule {}
