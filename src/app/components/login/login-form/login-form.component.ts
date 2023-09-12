import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../service/api.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  errorMessage: string = '';


  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router:Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() { }

  async save(event: Event) {
    event.preventDefault();
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

      try {
        const loginResponse = await firstValueFrom(this.apiService.login(formData.email, formData.password));
        console.log('loginresponse', loginResponse);
        console.log('token', loginResponse.accessToken);

        if (loginResponse && loginResponse.accessToken) {  
          console.log('Login was successful! Token:', loginResponse.accessToken);
          this.router.navigate(['/orders']);
        } else {
          console.log('Error trying to login.');
        }
      } catch (error: any) {
        const errMessage: string = error.error;
        if (errMessage === 'Incorrect password') {
          this.errorMessage = 'Incorrect Passowrd';
          console.error(this.errorMessage);
        }
        else if (errMessage === 'Cannot find user') {
          this.errorMessage = 'User not found';
          console.error(this.errorMessage);
        }
        else {
          console.error(error);
        }

        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
      }
    }
  }

  get emailInput() {
    return this.loginForm.get('email');
  }

  get passwordInput() {
    return this.loginForm.get('password');
  }
}

