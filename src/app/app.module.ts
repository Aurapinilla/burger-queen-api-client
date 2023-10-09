import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from '../app/app-routing.module';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { OrdersViewComponent } from './views/orders-view/orders-view.component';
import { AdminViewComponent } from './views/admin-view/admin-view.component';
import { KitchenViewComponent } from './views/kitchen-view/kitchen-view.component';
import { NeworderFormComponent } from './components/neworder-form/neworder-form.component';
import { LogoutComponent } from './components/logout/logout.component';
import { OrdersToDeliverViewComponent } from './views/orders-to-deliver-view/orders-to-deliver-view.component';
import { OrdersToDeliverComponent } from './components/orders-to-deliver/orders-to-deliver.component';
import { ReadyOrdersBtnComponent } from './components/ready-orders-btn/ready-orders-btn.component';
import { ManageUsersComponent } from './components/admin/manage-users/manage-users.component';
import { ManageProductsComponent } from './components/admin/manage-products/manage-products.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { EditUserComponent } from './components/admin/edit-user/edit-user.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserMenuComponent } from './components/admin/user-menu/user-menu.component';
import { ProductMenuComponent } from './components/admin/product-menu/product-menu.component';


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
    OrdersToDeliverViewComponent,
    OrdersToDeliverComponent,
    ReadyOrdersBtnComponent,
    ManageUsersComponent,
    ManageProductsComponent,
    AddUserComponent,
    AddProductComponent,
    OrdersListComponent,
    EditUserComponent,
    EditProductComponent,
    UserMenuComponent,
    ProductMenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
