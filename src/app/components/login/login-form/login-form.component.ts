import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  errorMessage: string = '';


  constructor(private formBuilder: FormBuilder, private apiService: LoginService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() { }

  async save(event: Event) {
    event.preventDefault();

    const formData = this.loginForm.value;

    this.apiService.login(formData.email, formData.password)
      .subscribe({
        next: (result) => {
          sessionStorage.setItem('token', result.accessToken);
          sessionStorage.setItem('idUser', result.user.id);
          sessionStorage.setItem('role', result.user.role);
          sessionStorage.setItem('userName', result.name)

          const role = sessionStorage.getItem('role');

          switch (role) {
            case 'admin':
              this.router.navigate(['/admin']);
              break;

            case 'chef':
              this.router.navigate(['/kitchen']);
              break;

            case 'waiter':
              this.router.navigate(['/orders']);
              break;

            default:
              console.log('Unexpected Error');
          }
        },
        error: (error) => {

          if (error.error === 'Cannot find user') {
            this.errorMessage = 'Cannot find user';
          }
          else if (error.error === 'Incorrect password') {
            this.errorMessage = 'Incorrect password';
          }
        },
      });

    setTimeout(() => {
      this.errorMessage = '';
    }, 3000);
  }

  get emailInput() {
    return this.loginForm.get('email');
  }

  get passwordInput() {
    return this.loginForm.get('password');
  }
}


