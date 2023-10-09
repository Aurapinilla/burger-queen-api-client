import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../service/orders.service';
import { ordersResponse } from 'src/app/interfaces/orders.interface';

@Component({
  selector: 'app-orders-to-deliver',
  templateUrl: './orders-to-deliver.component.html',
  styleUrls: ['./orders-to-deliver.component.css']
})
export class OrdersToDeliverComponent implements OnInit{
  displayedColumns: string[] = ['client', 'table', 'products', 'delivery'];

  orders: ordersResponse[] = [];

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.readyOrders();
  }

  readyOrders() {
    this.ordersService.getOrders().subscribe(
      (data) => {

        const readyOrders = data.filter((order) => {
          return order.status === 'ready to deliver';
        });
        this.orders = readyOrders;
      });
  }

  markDelivered(order:ordersResponse) {
    order.status = 'delivered';
    this.ordersService.updateOrderStatus(order.id, order.status).subscribe(() => {
    this.readyOrders();
      console.log(`Order ${order.client} status updated to ${order.status}`);
    },
    (error) => {
      console.error('Error actualizando el status:', error);
    }
    );
  };
}
