import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-to-deliver-view',
  templateUrl: './orders-to-deliver-view.component.html',
  styleUrls: ['./orders-to-deliver-view.component.css']
})
export class OrdersToDeliverViewComponent {

  constructor(private router: Router) {}

  navigatetoCreateOrder() {
    this.router.navigate(['orders']);
  }
}
