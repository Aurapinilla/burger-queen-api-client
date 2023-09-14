import { Injectable } from '@angular/core';

export interface productResponse {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  dateEntry: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
}
