  import { usersResponse } from '../interfaces/users.interface';
  import { productResponse } from '../interfaces/products.interface';
  

  export interface ordersResponse {
      id: number;
      userId: string;
      client: string;
      products: { qty: number; product: productResponse }[];
      status: string;
      dataEntry: string;
      timer: number;
    }