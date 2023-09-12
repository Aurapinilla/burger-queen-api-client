import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../service/api.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  async save(event: Event) {
    event.preventDefault();
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      
      try {
        const loginResponse = await firstValueFrom(this.apiService.login(formData.email, formData.password));
        console.log('loginresponse', loginResponse);
        console.log('token', loginResponse.accessToken);
        
        if (loginResponse && loginResponse.accessToken) {
          console.log('Inicio de sesión exitoso! Token:', loginResponse.accessToken);
        } else {
          console.log('Error al iniciar sesión.');
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
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

