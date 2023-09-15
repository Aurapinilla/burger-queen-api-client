import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface loginResponse {
  accessToken: string;
  user: {
    email: string;
    role: string;
    id: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlApi = 'http://localhost:8080/login';

  constructor(private http: HttpClient) { }


  login(email:string, password:string): Observable<any> {
    // Accediendo al método post  de la variable http de HttpClient que recibe como parámetros la url y el body
    return this.http.post(this.urlApi, {
      email: email,
      password: password,
    });
  }


}
