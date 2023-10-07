import { Component, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { usersResponse } from '../../../interfaces/users.interface';
import { UsersService } from '../../../service/users.service';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent {
  @ViewChild('editUserComponent') editUserComponent!: EditUserComponent;
  @Input() user!: usersResponse;
  @Output() yesClicked = new EventEmitter<boolean>();
  @Output() userUpdated = new EventEmitter<boolean>();
  isOpen = false;
  confirmDelete = false;

  constructor(private usersService: UsersService) { }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  cancelDelete() {
    this.confirmDelete = !this.confirmDelete;
  }

  deleteUser() {
    this.usersService.deleteUser(this.user.id)
      .subscribe(() => {
        this.yesClicked.emit(true);
      },
        (error) => {
          console.error('Error deleting user:', error)
      });
  }

  userWasUpdated() {
      this.toggleMenu();
      this.userUpdated.emit(true);
  }

}
