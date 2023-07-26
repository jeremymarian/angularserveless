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
import { CreatetaskComponent } from '../../components/createtask';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { BackendbuttComponent } from '../../components';



@NgModule({
  declarations: [
    HomecomponentComponent,
    TasktableComponent,
    DonetasksComponent,
    CreatetaskComponent,
    BackendbuttComponent,
  ],
  imports: [
    CommonModule,
    HomemoduleRoutingModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
  ],
  
})
export class HomemoduleModule {}
