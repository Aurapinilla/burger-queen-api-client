import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productResponse } from '../interfaces/products.interface';

export interface ProductsQty {
  qty: number;
  product: productResponse;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private accessToken = sessionStorage.getItem('token');

  constructor(private http: HttpClient) {

    console.log('Valor de accessToken:', this.accessToken);
  }

  private urlApi:string = 'http://localhost:8080/products';
  
  httpOptions = {
    // Se decalra variable y se inicializa con un objeto para la autorización
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    }),
  };

  getProducts(): Observable<productResponse[]> {
    console.log('token', this.httpOptions.headers);
    
    return this.http.get<productResponse[]>(this.urlApi, this.httpOptions);
  }
}
