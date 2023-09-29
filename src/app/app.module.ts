import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from '../app/app-routing.module';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { OrdersViewComponent } from './views/orders-view/orders-view.component';
import { AdminViewComponent } from './views/admin-view/admin-view.component';
import { KitchenViewComponent } from './views/kitchen-view/kitchen-view.component';
import { NeworderFormComponent } from './components/neworder-form/neworder-form.component';
import { LogoutComponent } from './components/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    LoginFormComponent,
    OrdersViewComponent,
    AdminViewComponent,
    KitchenViewComponent,
    NeworderFormComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
