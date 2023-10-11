import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginFormComponent } from './login-form.component';
import { LoginService } from '../../../service/login.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Observable, of, throwError } from 'rxjs';

class LoginServiceMock {
  login(email: string, password: string): Observable<any> {
    // Simular respuesta exitosa
    return of({
      accessToken: 'mockedAccessToken',
      user: {
        id: '1',
        role: 'admin',
        email: 'email@example.com',
      },
    });
  }
}

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let loginService: LoginService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        { provide: LoginService, useClass: LoginServiceMock },
        { provide: Router, useValue: { navigate: jest.fn() } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should store data in sessionStorage and navigate based on user role', () => {
    const userRoles = ['admin', 'waiter', 'chef'];
    userRoles.forEach((role) => {
      const userData = {
        accessToken: 'TOKEN123456',
        user: {
          id: '1',
          role: role,
          email: 'email@example.com',
        },
      };

      jest.spyOn(loginService, 'login').mockReturnValue(of(userData));
      component.loginForm.patchValue({
        email: `${role}@example.com`,
        password: '123456',
      });

      jest.spyOn(router, 'navigate');
      component.save(new Event('click'));

      expect(sessionStorage.getItem('token')).toBe(userData.accessToken);
      expect(sessionStorage.getItem('idUser')).toBe(userData.user.id);
      expect(sessionStorage.getItem('role')).toBe(userData.user.role);
      expect(sessionStorage.getItem('email')).toBe(userData.user.email);

      switch (role) {
        case 'admin':
          expect(router.navigate).toHaveBeenCalledWith(['/admin']);
          break;
        case 'waiter':
          expect(router.navigate).toHaveBeenCalledWith(['/orders']);
          break;
        case 'chef':
          expect(router.navigate).toHaveBeenCalledWith(['/kitchen']);
          break;
        default:
          expect(router.navigate).toHaveBeenCalledWith(['']);
      }
      sessionStorage.clear();
    });
  });


  it('should handle errors and show error message', () => {

    jest.spyOn(loginService, 'login').mockReturnValue(throwError({ error: 'Incorrect password' }));

    component.save(new Event('click'));

    expect(component.errorMessage).toEqual('Incorrect password');
  });
});
