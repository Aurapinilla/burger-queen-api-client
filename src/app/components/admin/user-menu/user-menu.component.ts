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

  constructor(private usersService: UsersService) { }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  cancelDelete() {
    console.log('antes', this.confirmDelete);

    this.confirmDelete = !this.confirmDelete;
    console.log('after', this.confirmDelete);

  }

  deleteUser() {
    this.usersService.deleteUser(this.userId)
      .subscribe((userDeleted) => {
        console.log('userDeleted:', userDeleted);
        this.yesClicked.emit(true);
      },
        (error) => {
          console.error('Error deleting user:', error)
      });
  }

}
