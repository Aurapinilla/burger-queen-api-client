import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginResponse } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlApi = 'https://burger-queen-api-mock-wm26.onrender.com/login';

  constructor(private http: HttpClient) { }


  login(email:string, password:string): Observable<loginResponse> {

    return this.http.post<loginResponse>(this.urlApi, {
      email: email,
      password: password,
    });
  }
}
