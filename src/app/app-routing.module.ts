import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginViewComponent } from './views/login-view/login-view.component';
import { OrdersViewComponent } from './views/orders-view/orders-view.component';
import { AdminViewComponent } from './views/admin-view/admin-view.component';
import { KitchenViewComponent } from './views/kitchen-view/kitchen-view.component';
import { OrdersToDeliverViewComponent } from './views/orders-to-deliver-view/orders-to-deliver-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/userLogin',
    pathMatch: 'full'
  },
  {
    path: 'userLogin',
    component: LoginViewComponent
  },
  {
    path: 'orders',
    component: OrdersViewComponent
  },
  {
    path: 'admin',
    component: AdminViewComponent

  },
  {
    path: 'kitchen',
    component: KitchenViewComponent
  },
  {
    path: 'ready-to-deliver',
    component: OrdersToDeliverViewComponent
  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }