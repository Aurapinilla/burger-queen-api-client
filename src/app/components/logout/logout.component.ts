import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private router: Router) {}

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/userLogin']);
    console.log('datos usuario', sessionStorage);
    
  }
}
