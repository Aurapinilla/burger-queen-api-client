import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../app/app-routing.module';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { OrdersViewComponent } from './views/orders-view/orders-view.component';
import { AdminViewComponent } from './views/admin-view/admin-view.component';
import { KitchenViewComponent } from './views/kitchen-view/kitchen-view.component';
import { NeworderFormComponent } from './components/neworder-form/neworder-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    LoginFormComponent,
    OrdersViewComponent,
    AdminViewComponent,
    KitchenViewComponent,
    NeworderFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
