import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface loginResponse {
  accessToken: string;
  user: string;
  email: string;
  role: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    console.log('getting data', this.http.get<any>(this.urlApi));
    return this.http.get<any>(this.urlApi);
    
  }

  public login(email:string, password:string): Observable<loginResponse> {
    const url = `${this.urlApi}login`;
    const body = { email, password };
    console.log('url', url);
    console.log('body', body);
    
    
    return this.http.post<loginResponse>(url, body);
  }
}
