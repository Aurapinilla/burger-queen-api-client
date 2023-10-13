import { productResponse } from '../interfaces/products.interface';

export interface ordersResponse {
  id: number;
  userId: string;
  client: string;
  table: string;
  products: { qty: number; product: productResponse }[];
  status: string;
  dataEntry: string;
  timer: number;
}