import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService],
    });
    service = TestBed.inject(LoginService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => { //revisar que no haya solicitudes HTTP pendientes después de cada prueba
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a POST request with email and password', () => {
    const email = 'test@example.com';
    const password = 'password';

    service.login(email, password).subscribe((response) => {
      expect(response).toBeDefined(); // verifica que la respuesta no sea undefined
    });

    const req = httpTestingController.expectOne('http://localhost:8080/login');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ email, password });

    req.flush({ // simula la respuesta del servidor
      "accessToken": "string",
      "user": {
        "email": "string",
        "role": "string",
        "id": "string"
      }
    });
  });
});
