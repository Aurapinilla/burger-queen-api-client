import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usersResponse } from '../../../interfaces/users.interface';
import { UsersService } from '../../../service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  hideForm: boolean = false;

  newUserForm: FormGroup;

  @Output() userCreated = new EventEmitter<boolean>();

  userRole: string[] = ['admin', 'waiter', 'chef'];
  selectedRole: string = '';

  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private router: Router) {
    this.newUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: [this.selectedRole, [Validators.required]],
    })
  }

  hideUserForm() {
    this.hideForm = true;
  }

  async save(event: Event) {
    event.preventDefault();

    const emailValue = this.newUserForm.get('email')?.value;
    const passwordValue = this.newUserForm.get('password')?.value;
    const roleValue = this.newUserForm.get('role')?.value;

    const newUser: usersResponse = {
      email: emailValue,
      password: passwordValue,
      role: roleValue,
      id: 0
    }

    this.usersService.postUser(newUser)
      .subscribe((user) => {
        console.log('user created:', user);
        this.userCreated.emit(true);
      });
    this.hideForm = true;
  }

  get emailInput() {
    return this.newUserForm.get('email');
  }

  get passwordInput() {
    return this.newUserForm.get('password');
  }

  get roleSelection() {
    return this.newUserForm.get('role');
  }
}
