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

  postOrder(order: ordersResponse): Observable<ordersResponse[]> {
    return this.http.post<ordersResponse[]>(this.urlApi, order, this.httpOptions);
  }

  getOrders(): Observable<ordersResponse[]> {
    console.log('getorder', this.http.get<ordersResponse[]>(this.urlApi, this.httpOptions));
    
    return this.http.get<ordersResponse[]>(this.urlApi, this.httpOptions);
  }

  updateOrderStatus(orderId: number, newStatus: string): Observable<ordersResponse> {
    const url = 'http://localhost:8080/orders/2';

    const updatedStatus = { status: newStatus };

    return this.http.patch<ordersResponse>(url, updatedStatus, this.httpOptions);
  }
}


//get orders

//update orders

//post orders

//delete orders