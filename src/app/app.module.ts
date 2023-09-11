import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginViewComponent } from './views/login-view/login-view.component';

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
   // LoginViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
