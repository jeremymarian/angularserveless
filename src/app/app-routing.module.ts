import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './components/init/init.component';

const routes: Routes = [
{ path: '', component: InitComponent },
{
  path:'home', loadChildren: () => import('./modules/homemodule/homemodule.module')
    .then((m => m.HomemoduleModule))
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
