import { Component } from '@angular/core';
import { usersResponse } from '../../../interfaces/users.interface';
import { UsersService } from '../../../service/users.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {

  users: usersResponse[] = [];

  displayedColumns: string[] = ['email', 'password', 'role', 'id'];

  constructor(private usersService: UsersService) { };

  ngOnInit() {
    this.usersList();
  }

  usersList() {
    this.usersService.getUsers()
      .subscribe((data: usersResponse[]) => {
        this.users = data;
        console.log('users:', this.users);
      },
        (error) => {
          console.error('Error getting users:', error);
      });
  }
}
