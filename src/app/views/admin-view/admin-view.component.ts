import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent {

  manageUsersActive: boolean = false;
  manageProductsActive: boolean = false;

  usersTab() {
    this.manageProductsActive = false;
    this.manageUsersActive = true;
  }

  productsTab() {
    this.manageProductsActive = true;
    this.manageUsersActive = false;
  }

}
