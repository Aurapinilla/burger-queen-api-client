import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usersResponse } from '../../../interfaces/users.interface';
import { UsersService } from '../../../service/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  @Input() user!: usersResponse;
  @Output() userUpdated = new EventEmitter<boolean>();
  @Output() cancelEdit = new EventEmitter<boolean>();

  updateUserForm!: FormGroup;
  userUpdatedData!: usersResponse;
  hideForm: boolean = true;
  userRole: string[] = ['admin', 'waiter', 'chef'];

  constructor(private formBuilder: FormBuilder, private usersService: UsersService) {}

  ngOnInit() {
    // Inicializar el formulario con los datos del usuario actual
    this.updateUserForm = this.formBuilder.group({
      email: [this.user ? this.user.email : '', [Validators.required, Validators.email]],
      password: [this.user ? this.user.password : '', [Validators.required, Validators.minLength(6)]],
      role: [this.user ? this.user.role : '', [Validators.required]],
    });
  }

  hideupdateUserForm() {
    this.hideForm = !this.hideForm;
  }

  async save(event: Event) {
    const updatedUserData = this.updateUserForm.value;
    const userId = this.user.id;
    console.log('userID', userId);
    this.usersService.updateUser(userId, updatedUserData)
      .subscribe((response) => {
        console.log('userID', userId);
       console.log('user updated', response);
       this.hideForm = !this.hideForm;
       this.userUpdated.emit(true);
      });
  }

  get emailInput() {
    return this.updateUserForm.get('email');
  }

  get passwordInput() {
    return this.updateUserForm.get('password');
  }

  get roleSelection() {
    return this.updateUserForm.get('role');
  }
}
