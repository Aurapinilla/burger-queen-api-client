import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usersResponse } from '../../../interfaces/users.interface';
import { UsersService } from '../../../service/users.service';

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

  constructor(private formBuilder: FormBuilder, private usersService: UsersService) {
    this.newUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', [Validators.required]],
    })
  }

  hideUserForm() {
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

  async save(event: Event) {
    event.preventDefault();

    const newUser: usersResponse = {
      email: this.emailInput?.value,
      password: this.passwordInput?.value,
      role: this.roleSelection?.value,
      id: ''
    }
    
    this.usersService.postUser(newUser)
      .subscribe((user) => {
        console.log('user created:', user);
        this.userCreated.emit(true);
      });
    this.hideUserForm();
    this.newUserForm.reset();
  }
}
