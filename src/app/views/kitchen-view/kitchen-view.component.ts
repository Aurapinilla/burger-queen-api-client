import { Component } from '@angular/core';
import { OrdersService } from '../../service/orders.service';
import { ordersResponse } from 'src/app/interfaces/orders.interface';

@Component({
  selector: 'app-kitchen-view',
  templateUrl: './kitchen-view.component.html',
  styleUrls: ['./kitchen-view.component.css']
})
export class KitchenViewComponent {
  displayedColumns: string[] = ['client', 'status', 'products', 'timer', 'action']

  orderStatusMap: { [orderId: number]: boolean } = {};

  orders: ordersResponse[] = [];

  timer: number = 0;

  isOrderReady: string = 'Mark as ready';

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

  setTimer(order: ordersResponse) {

    const currentTime = new Date().getTime();
    console.log('hora actual', currentTime);
    console.log('hora orden', order.dataEntry);
    const orderTime = new Date(order.dataEntry).getTime();
    const timeDiff = currentTime - orderTime;

    const minutesDiff = Math.floor(timeDiff / (1000 * 60));
    console.log('diff', minutesDiff);
    
    return this.timer = minutesDiff;
  }

  markOrderReady(orderId: number) {
    this.orderStatusMap[orderId] = !this.orderStatusMap[orderId];
  }

  buttonClass(orderId: number) {
    if(this.orderStatusMap[orderId]) {
      return 'orderReady';
    } else {
      return 'orderNotReady';
    }
  }
}
