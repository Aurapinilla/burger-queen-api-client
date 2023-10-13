import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from '../../../service/users.service';
import { of } from 'rxjs';
import { ManageUsersComponent } from './manage-users.component';

describe('ManageUsersComponent', () => {
  let component: ManageUsersComponent;
  let fixture: ComponentFixture<ManageUsersComponent>;
  let usersService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageUsersComponent],
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });
    fixture = TestBed.createComponent(ManageUsersComponent);
    component = fixture.componentInstance;
    usersService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const usersData = 
  [
    {
      email: 'admin@systers.xyz',
      password: '$2a$10$kbIC2Wo5f3YXV888O5KYfuDmhDuJr/GW.Vu7jCdDSaR8sdaz.ZoN6',
      role: 'admin',
      id: '1'
    },
    {
      email: 'waiter@systers.xyz',
      password: '$2a$10$JABwR1UAtJqr2DCJ41ypMOgOqlh8eRXmTBO6DXfKG3ybxhABY4rey',
      role: 'waiter',
      id: '2'
    },
  ];

  it('should set innitial values', () => {

    expect(component.createNewUser).toBe(false);
    expect(component.users).toEqual([]);
    expect(component.displayedColumns).toEqual(['email', 'password', 'role', 'id', 'actions']);

  });

  it('should get the users list ngOninit', () => {

    const usersListSpy = jest.spyOn(component, 'usersList');

    component.ngOnInit();
    expect(usersListSpy).toHaveBeenCalled();
  });

  it('should set the value of users with the response of usersService getUsers', () => {

    const getUsersSpy = jest.spyOn(usersService, 'getUsers').mockReturnValue(of(usersData));

    component.usersList();
    expect(getUsersSpy).toHaveBeenCalled();
    component.users = usersData;
  });

  it('should update the users list', () => {
    const usersListSpy = jest.spyOn(component, 'usersList');

    component.updateUsersList();
    expect(usersListSpy).toHaveBeenCalled();
  });
});
