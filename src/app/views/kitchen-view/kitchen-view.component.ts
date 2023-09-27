import { Component } from '@angular/core';
import { OrdersService } from '../../service/orders.service';
import { ordersResponse } from 'src/app/interfaces/orders.interface';

@Component({
  selector: 'app-kitchen-view',
  templateUrl: './kitchen-view.component.html',
  styleUrls: ['./kitchen-view.component.css']
})
export class KitchenViewComponent {

  orders: ordersResponse[] = [];

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.ordersList();
  }

  ordersList() {
    this.ordersService.getOrders().subscribe(
      (data) => {
        this.orders = data;
        
        const orderedData = data.sort((a, b) => {
          const dateA = new Date(a.dataEntry).getTime();
          const dateB = new Date(b.dataEntry).getTime();
          return dateB - dateA;
        });
        
        for (const order of orderedData) {
          console.log('Orden:', order.client);
        
          for (const productInfo of order.products) {
            const quantity = productInfo.qty;
            const productName = productInfo.product.name;
            
            console.log(`Cantidad: ${quantity}, Producto: ${productName}`);
          }
        }
      },
      (error) => {
        console.error('Error al obtener las órdenes:', error);
      }
    );
  }
  
  orderStatus(order: ordersResponse): string {
    if (order.status === 'pending') {
      return 'pending';
    } else {
      return 'delivered';
    }
  }
}
