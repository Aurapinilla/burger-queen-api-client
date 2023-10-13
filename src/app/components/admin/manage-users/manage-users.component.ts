import { Component, ViewChild } from '@angular/core';
import { usersResponse } from '../../../interfaces/users.interface';
import { UsersService } from '../../../service/users.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {
  @ViewChild('addUserComponent') addUserComponent!: AddUserComponent;
  @ViewChild('userMenuComponent') userMenuComponent!: UserMenuComponent;

  createNewUser: boolean = false;

  users: usersResponse[] = [];

  displayedColumns: string[] = ['email', 'password', 'role', 'id', 'actions'];

  constructor(private usersService: UsersService) {};

  ngOnInit() {
    this.usersList();
  }

  usersList() {
    this.usersService.getUsers()
      .subscribe((data: usersResponse[]) => {
        this.users = data;
      });
  }

  newUserForm() {
    this.createNewUser = true;
    this.addUserComponent.hideForm = false;
  }

  updateUsersList(){
    this.usersList();
  }
}
