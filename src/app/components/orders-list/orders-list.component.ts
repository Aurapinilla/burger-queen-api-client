import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { OrdersService } from '../../service/orders.service';
import { ordersResponse } from 'src/app/interfaces/orders.interface';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['client', 'status', 'products', 'timer', 'action'];

  isOrderDelivered: boolean = false;

  @Input() orders: ordersResponse[] = [];
  orderStatusMap: { [orderId: number]: boolean } = {};
  orderTimers: { [orderId: number]: any } = {};

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.ordersList();
  }

  ngOnDestroy() {
    for (const orderId in this.orderTimers) {
      if (this.orderTimers.hasOwnProperty(orderId)) {
        clearInterval(this.orderTimers[orderId]);
        console.log(`Timer for order ${orderId} stopped.`);
      }
    }
  }


  ordersList() {
    this.ordersService.getOrders().subscribe(
      (data) => {

        const orderedData = data.sort((a, b) => {
          const dateA = new Date(a.dataEntry).getTime();
          const dateB = new Date(b.dataEntry).getTime();
          return dateB - dateA;
        });

        this.orders = orderedData.map((order) => {
          return { ...order, timer: this.setTimer(order) };
        });

        this.orders.forEach((order) => {
          if (order.status === 'pending' && !this.orderTimers[order.id]) {
            this.startTimer(order);
          }
        });
      }
    );
  }

  orderStatus(order: ordersResponse): string {
    if(order.status === 'pending') {
      return 'pending';
    } else if (order.status === 'ready to deliver') {
      return 'ready';
    } else {
      return 'delivered' 
    }
  }

  setTimer(order: ordersResponse): number {
    if (order.status === 'delivered' || order.status === 'ready to deliver') {
      return order.timer;
    }

    const currentTime = new Date().getTime();
    const orderTime = new Date(order.dataEntry).getTime();
    const timeDiff = currentTime - orderTime;

    return Math.floor(timeDiff / (1000 * 60));
  }

  startTimer(order: ordersResponse) {
    if (!this.orderTimers[order.id]) {
      this.orderTimers[order.id] = setInterval(() => {
        order.timer = this.setTimer(order);
      }, 1000);
    }
  }

  stopTimer(order: ordersResponse) {
    const timerId = this.orderTimers[order.id];
    clearInterval(timerId);

    return order.timer = this.setTimer(order);
  }

  markOrderReady(order: ordersResponse) {

    if (order.status === 'ready to deliver') {
    
      order.status = 'pending';
      this.startTimer(order); // Reanudar el temporizador
    } else if (order.status === 'pending'){
      // Detener el temporizador
      order.status = 'ready to deliver';
      this.stopTimer(order);
      order.timer = this.setTimer(order);
    }

    this.ordersService.updateOrderStatus(order.id, order.status).subscribe(
      (updatedOrder) => {

        const orderIndex = this.orders.findIndex((o) => o.id === order.id);
        if (orderIndex !== -1) {
          this.orders[orderIndex] = updatedOrder;
        }
        // Actualizar timer de la orden en la API
        this.ordersService.updateOrderTime(order.id, order.timer).subscribe(
          () => {
            console.log(`Order ${order.id} timer updated to ${order.timer} mins.`);
          }
        );
        this.ordersList();
        console.log('this stop timer', this.stopTimer(order));
        console.log(`Order ${order.id} marked as ready.`);
        console.log('timer aqui', this.orderTimers[order.id]);
      }
    );
  }
}
