import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { AddUserComponent } from './add-user.component';
import { UsersService } from '../../../service/users.service';
import { of } from 'rxjs';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;
  let usersService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserComponent],
      imports: [HttpClientTestingModule],
      providers: [FormBuilder, UsersService],
    });
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    usersService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set innitial values', () => {
    expect(component.hideForm).toBe(false);
    expect(component.userRole).toEqual(['admin', 'waiter', 'chef']);
  });

  it('should create a new user when saving the form', () => {

    const newUser = {
      email: 'email@example.com',
      password: '123456',
      role: 'chef',
      id: ''
    };

    const newUserSpy = jest.spyOn(usersService, 'postUser').mockReturnValue(of(newUser));

    component.newUserForm.get('email')?.setValue('email@example.com');
    component.newUserForm.get('password')?.setValue('123456');
    component.newUserForm.get('role')?.setValue('chef');

    component.save(new Event('click'));

    expect(newUserSpy).toHaveBeenCalledWith(newUser);
    expect(component.hideForm).toBe(true);
    expect(component.newUserForm.reset);
  });
});
