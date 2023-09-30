import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from '../../service/orders.service';
import { ordersResponse } from 'src/app/interfaces/orders.interface';

@Component({
  selector: 'app-kitchen-view',
  templateUrl: './kitchen-view.component.html',
  styleUrls: ['./kitchen-view.component.css']
})
export class KitchenViewComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['client', 'status', 'products', 'timer', 'action'];

  orders: ordersResponse[] = [];
  orderStatusMap: { [orderId: number]: boolean } = {};
  orderTimers: { [orderId: number]: any } = {}; // Cambiamos el tipo de orderTimers

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
        this.orders = data.map((order) => {
          return { ...order, timer: this.setTimer(order) };
        });

        // Iniciar y actualizar los temporizadores
        this.orders.forEach((order) => {
          if (order.status === 'pending' && !this.orderTimers[order.id]) {
            this.startTimer(order);
          }
        });
      },
      (error) => {
        console.error('Error al obtener las órdenes:', error);
      }
    );
  }

  orderStatus(order: ordersResponse): string {
    return order.status === 'pending' ? 'pending' : 'delivered';
  }

  setTimer(order: ordersResponse): number {
    if (order.status === 'delivered') {
      return 0;
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
        console.log(`Timer for order ${order.id} updated to ${order.timer} mins.`);
      }, 1000);
    }
  }

  stopTimer(orderId: number) {
    clearInterval(this.orderTimers[orderId]);
    delete this.orderTimers[orderId]; // Elimina el temporizador
  }

  markOrderReady(order: ordersResponse) {

    this.ordersService.updateOrderStatus(order.id, 'ready').subscribe(
      (updatedOrder) => {

        const orderIndex = this.orders.findIndex((o) => o.id === order.id);
        if (orderIndex !== -1) {
          this.orders[orderIndex] = updatedOrder;
        }
        // Detén el temporizador para esta orden
        this.stopTimer(order.id);
        console.log(`Order ${order.id} marked as ready.`);
      },
      (error) => {
        console.error('Error al marcar la orden como lista:', error);
      }
    );
  }


  buttonClass(order: ordersResponse): string {
    return this.orderStatusMap[order.id] ? 'orderReady' : 'orderNotReady';
  }
}
