import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { usersResponse } from '../interfaces/users.interface';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });
    service = TestBed.inject(UsersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => { //revisar que no haya solicitudes HTTP pendientes después de cada prueba
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const users: usersResponse[] = [
    {
      email: 'example@gmail.com',
      password: '123456',
      role: 'admin',
      id: '5'
    },
    {
      email: 'waiter@gmail.com',
      password: '123456',
      role: 'waiter',
      id: '6'
    }
  ]

  const user: usersResponse = {
    email: 'example@gmail.com',
    password: '123456',
    role: 'admin',
    id: '5'
  }

  it('should send a GET request to get all the existing users', () => {

    service.getUsers().subscribe((response) => {
      expect(response).toBeDefined();
    });

    const req = httpTestingController.expectOne('http://localhost:8080/users');
    expect(req.request.method).toBe('GET');

    req.flush({ users })
  });

  it('should send a POST request to create a new user', () => {

    service.postUser(user).subscribe((response) => {
      expect(response).toBeDefined();
    });

    const req = httpTestingController.expectOne('http://localhost:8080/users');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(user);

    req.flush({user});
  });

  it('should send a PUT request to update aspects of an user', () => {

    service.updateUser(user.id, user).subscribe((response) => {
      expect(response).toBeDefined();
    });

    const req = httpTestingController.expectOne('http://localhost:8080/users/5');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(user);

    req.flush({user});
  });

  it('should send a DELETE request to remove a specific user', () => {

    service.deleteUser(user.id).subscribe((response) => {
      expect(response).toBeDefined();
    });

    const req = httpTestingController.expectOne('http://localhost:8080/users/5');
    expect(req.request.method).toBe('DELETE');
  });
});
