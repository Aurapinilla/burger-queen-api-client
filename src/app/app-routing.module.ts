import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginViewComponent } from './views/login-view/login-view.component';
import { OrdersViewComponent } from './views/orders-view/orders-view.component';

const routes: Routes = [
  {
    path: 'userLogin',
    component: LoginViewComponent
  },
  {
    path: 'orders',
    component: OrdersViewComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }