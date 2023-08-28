import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./cliente/cliente.module').then((m) => m.ClienteModule),
  },
  {
    path: 'reservation',
    loadChildren: () =>
      import('./reserva/reserva.module').then((m) => m.ReservaModule),
  },
  {
    path:'admin',
    loadChildren: ()=> import('./admin/admin.module').then((m)=> m.AdminModule)
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
