import { Injectable } from '@angular/core';
import { productResponse } from './products.service';
import { usersResponse } from './users.service';

interface ordersResponse {
  id: number;
  userId: usersResponse["id"];
  client: string;
  products: [
    qty: number,
    product: productResponse
  ];
  status: string;
  dataEntry: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }
}

//get orders

//update orders

//post orders

//delete orders