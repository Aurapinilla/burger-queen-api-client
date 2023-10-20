import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlApi = 'https://vercel.com/aura-pinillas-projects/burger-queen-api-mock/2MywN9ayihtjFdeHnfZzCxLJq7qR/login';

  constructor(private http: HttpClient) { }


  login(email:string, password:string): Observable<any> {

    return this.http.post(this.urlApi, {
      email: email,
      password: password,
    });
  }
}
