import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productResponse } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private accessToken = sessionStorage.getItem('token');

  constructor(private http: HttpClient) {

    console.log('Valor de accessToken:', this.accessToken);
  }

  private urlApi:string = 'https://burger-queen-api-mock-wm26.onrender.com/products';
  
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    }),
  };

  getProducts(): Observable<productResponse[]> {
    console.log('token', this.httpOptions.headers);
    
    return this.http.get<productResponse[]>(this.urlApi, this.httpOptions);
  }

  postProducts(product: productResponse): Observable<productResponse> {
    return this.http.post<productResponse>(this.urlApi, product, this.httpOptions);
  }

  updateProduct(productId:string, product:productResponse): Observable<productResponse> {
    return this.http.put<productResponse>(`${this.urlApi}/${productId}`, product, this.httpOptions);
  }

  deleteProduct(productId: string): Observable<productResponse> {
    return this.http.delete<productResponse>(`${this.urlApi}/${productId}`, this.httpOptions);
  }
}
