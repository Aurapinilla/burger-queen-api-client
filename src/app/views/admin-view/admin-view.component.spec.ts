import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewComponent } from './admin-view.component';

describe('AdminViewComponent', () => {
  let component: AdminViewComponent;
  let fixture: ComponentFixture<AdminViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminViewComponent]
    });
    fixture = TestBed.createComponent(AdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show/hide corresponding tabs to manage users or products', () => {
    component.usersTab();
    expect(component.manageUsersActive).toBe(true);
    expect(component.manageProductsActive).toBe(false);
  });

  it('shold show the tab to manage products and hide the one to manage users', () => {
    component.productsTab();
    expect(component.manageUsersActive).toBe(false);
    expect(component.manageProductsActive).toBe(true);
  })
});
