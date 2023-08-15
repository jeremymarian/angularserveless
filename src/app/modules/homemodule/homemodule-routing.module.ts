import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from '../../components/home';
import {
  ActivasComponent,
  ActivascontrolComponent,
  FueraservComponent,
  ObservacionesComponent,
  PendientestableComponent,
} from 'src/app/components';
import { ReservaComponent } from 'src/app/components/reserva/reserva.component';

const routes: Routes = [
  {
    path: '',
    component: HomecomponentComponent,
  },
  {
    path: 'pend',
    component: PendientestableComponent,
  },
  {
    path: 'cont',
    component: ActivascontrolComponent,
  },
  {
    path: 'act',
    component: ActivasComponent,
  },
  {
    path: 'reserv',
    component: ReservaComponent,
  },
  {
    path: 'fserv',
    component: FueraservComponent,
  },
  {
    path: 'obs',
    component: ObservacionesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomemoduleRoutingModule {}
