import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './components/init/init.component';
import { authGuard } from './guards';

const routes: Routes = [
  { path: '', component: InitComponent },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/homemodule/homemodule.module').then(
        m => m.HomemoduleModule
      ),
  },
  {
    path: 'table',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./modules/adminhome/adminhome.module').then(
        m => m.AdminhomeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
