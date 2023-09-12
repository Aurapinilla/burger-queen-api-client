import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../service/api.service';

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
        // Verificar si el correo electrónico ya existe
        const emailExists = await this.apiService.checkUserExists(formData.email).toPromise();
  
        if (emailExists) {
          // El correo electrónico existe, puedes manejar esto como desees
          console.log('El correo electrónico ya existe.');
        } else {
          // El correo electrónico no existe, continúa con el envío del formulario o lo que necesites hacer.
          console.log('El correo electrónico no existe. Continuar con el envío del formulario o acción deseada.');
        }
      } catch (error) {
        // Manejar errores de solicitud, como conexión fallida, 404 Not Found, etc.
        console.error('Error al verificar el correo electrónico:', error);
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

