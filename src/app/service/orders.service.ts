import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ordersResponse } from '../interfaces/orders.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  private urlApi = 'http://localhost:8080/orders';

  httpOptions = {
    headers: new HttpHeaders({
      // Authorization es una propiedad, con el valor del token que reicibimos al iniciar sesión en el login
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    }),
  };

  postOrder(order: ordersResponse): Observable<any> {
    return this.http.post(this.urlApi, order, this.httpOptions)
  }
}


//get orders

//update orders

//post orders

//delete orders