import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, AbstractControl } from '@angular/forms';
import { UsersService } from '../../../service/users.service';
import { of } from 'rxjs';
import { EditUserComponent } from './edit-user.component';

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;
  let usersService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditUserComponent],
      imports: [HttpClientTestingModule],
      providers: [FormBuilder, UsersService],
    });
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    usersService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const userInput = {
    email: 'email@example.com',
    password: '123456',
    role: 'chef',
    id: '3'
  }

  it('should set innitial values', () => {
    expect(component.hideForm).toBe(true);
    expect(component.userRole).toEqual(['admin', 'waiter', 'chef']);
  });

  it('should start the editUserForm with the existing user data ngOnInit', () => {

    component.ngOnInit();

    expect(component.user = userInput)

    expect(component.updateUserForm.contains(userInput.email));
    expect(component.updateUserForm.contains(userInput.password));
    expect(component.updateUserForm.contains(userInput.role));
  });

  it('should hide/show the form to update the user when it should', () => {

    component.hideupdateUserForm();
    expect(component.hideForm).toBe(false);
  });

  it('should update the user data when saving the form', () => {

    let userUpdatedEmitted = false;
    component.user = userInput; // @Input user
    component.ngOnInit();

    expect(component.user).toEqual(userInput);

    expect(component.updateUserForm.get)

    const updatedUser = {
      email: 'email23@example.com',
      password: '123456',
      role: 'waiter',
    };

    const updateUserSpy = jest.spyOn(usersService, 'updateUser').mockReturnValue(of(userInput));

    component.updateUserForm.get('email')?.setValue('email23@example.com');
    component.updateUserForm.get('password')?.setValue('123456');
    component.updateUserForm.get('role')?.setValue('waiter');

    component.userUpdated.subscribe(() => {
      userUpdatedEmitted = true;
    });

    component.save(new Event('click'));

    expect(updateUserSpy).toHaveBeenCalledWith(userInput.id, updatedUser);
    expect(component.hideForm).toBe(false);
    expect(userUpdatedEmitted).toBe(true);
  });

  it('should provide access to emailInput, passwordInput and roleSelection control', () => {
    component.ngOnInit();
    expect(component.emailInput).toBeInstanceOf(AbstractControl);
    expect(component.emailInput?.value).toBe('');
    
    expect(component.passwordInput).toBeInstanceOf(AbstractControl);
    expect(component.passwordInput?.value).toBe('');
    
    expect(component.roleSelection).toBeInstanceOf(AbstractControl);
    expect(component.roleSelection?.value).toBe('');
  });
});
