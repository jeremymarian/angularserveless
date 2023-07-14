import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from '../../components/home';

const routes: Routes = [{
  path:'', component: HomecomponentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomemoduleRoutingModule { }
