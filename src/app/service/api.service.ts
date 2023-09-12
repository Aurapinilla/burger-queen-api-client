import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    //Revisar si debo especificar la estructura de datos que retorna la api
    return this.http.get<any>(this.urlApi);
  }

  checkUserExists(email: string): Observable<any> {
    const url = `${this.urlApi}/users/${email}`;
  
    // Realiza una solicitud GET al servidor para verificar si el usuario existe
    return this.http.get(url);
  }
}
