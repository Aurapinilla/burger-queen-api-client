import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeworderFormComponent } from './neworder-form.component';

describe('NeworderFormComponent', () => {
  let component: NeworderFormComponent;
  let fixture: ComponentFixture<NeworderFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeworderFormComponent]
    });
    fixture = TestBed.createComponent(NeworderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
