import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskhomeadminComponent } from 'src/app/components/taskhomeadmin';

const routes: Routes = [{ path: '', component: TaskhomeadminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminhomeRoutingModule {}
