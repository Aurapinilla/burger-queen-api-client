import { Component, Output, Input, EventEmitter } from '@angular/core';
import { usersResponse } from '../../../interfaces/users.interface';
import { UsersService } from '../../../service/users.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent {
  isOpen = false;
  confirmDelete = false;

  @Input() userId!: string;
  @Output() yesClicked = new EventEmitter<boolean>();

  constructor(private usersService: UsersService){}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  cancelDelete() {
    console.log('antes', this.confirmDelete);
    
    this.confirmDelete = !this.confirmDelete;
    console.log('after', this.confirmDelete);
    
  }

  async deleteUser(userId:string) {
    try {
      console.log('userId', userId);
      
      // Espera a que se elimine el usuario antes de continuar
      await this.usersService.deteleUser(userId);
      
      // Emite el evento una vez que se haya eliminado el usuario
      this.yesClicked.emit(true);
  
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
  
}
