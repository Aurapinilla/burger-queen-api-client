import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { usersResponse } from '../interfaces/users.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private urlApi = 'https://burger-queen-api-mock-wm26.onrender.com/users';

  httpOptions = {
    headers: new HttpHeaders({
      // Authorization es una propiedad, con el valor del token que reicibimos al iniciar sesión en el login
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    }),
  };

  getUsers(): Observable<usersResponse[]> {
    return this.http.get<usersResponse[]>(this.urlApi, this.httpOptions)
  }

  postUser(user: usersResponse): Observable<usersResponse> {
    return this.http.post<usersResponse>(this.urlApi, user, this.httpOptions);
  }

  updateUser(userId: string, user: usersResponse): Observable<usersResponse> {
    return this.http.put<usersResponse>(`${this.urlApi}/${userId}`, user, this.httpOptions);
  }

  deleteUser(userId: string): Observable<usersResponse> {
    console.log('userId received', userId);
    return this.http.delete<usersResponse>(`${this.urlApi}/${userId}`, this.httpOptions);
  }
}
