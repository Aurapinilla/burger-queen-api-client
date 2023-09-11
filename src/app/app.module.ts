import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';

const routes: Routes = [
  {
    path: 'userLogin',
    component: LoginViewComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    LoginFormComponent,
   // LoginViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
