import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ready-orders-btn',
  templateUrl: './ready-orders-btn.component.html',
  styleUrls: ['./ready-orders-btn.component.css']
})
export class ReadyOrdersBtnComponent {

  constructor(private router: Router) {}

  readyOrders() {
    this.router.navigate(['ready-to-deliver']);
  }
}
