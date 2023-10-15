import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersService } from '../../../service/users.service';
import { usersResponse } from '../../../interfaces/users.interface';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { UserMenuComponent } from './user-menu.component';

describe('UserMenuComponent', () => {
  let component: UserMenuComponent;
  let fixture: ComponentFixture<UserMenuComponent>;
  let usersService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMenuComponent],
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });
    fixture = TestBed.createComponent(UserMenuComponent);
    component = fixture.componentInstance;
    usersService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the menu', () => {
    expect(component.isOpen).toBe(false);
    component.toggleMenu();

    expect(component.isOpen).toBe(true);

    component.toggleMenu();
    expect(component.isOpen).toBe(false);
  });

  it('should hide the option to cancel the delete', () => {
    expect(component.confirmDelete).toBe(false);
    component.cancelDelete();

    expect(component.confirmDelete).toBe(true);

    component.cancelDelete();
    expect(component.confirmDelete).toBe(false);
  });

  const user = {
    email: 'userexample@gmail.com',
    password: '123456',
    role: 'waiter',
    id: '5',
  };

  it('should call deleteUser and emit yesClicked event', () => {
    const deleteUserSpy = jest.spyOn(usersService, 'deleteUser').mockReturnValue(of({} as usersResponse));
    const yesClickedEmitSpy = jest.spyOn(component.yesClicked, 'emit');

    component.user = user;
    component.deleteUser();

    expect(deleteUserSpy).toHaveBeenCalledWith(user.id);
    expect(yesClickedEmitSpy).toHaveBeenCalledWith(true);
  });

  it('should toggle the menu and emit userUpdated event', () => {
    const toggleMenuSpy = jest.spyOn(component, 'toggleMenu');
    const userUpdatedEmitSpy = jest.spyOn(component.userUpdated, 'emit');

    component.userWasUpdated();

    expect(toggleMenuSpy).toHaveBeenCalled();
    expect(userUpdatedEmitSpy).toHaveBeenCalledWith(true);
  });
});
