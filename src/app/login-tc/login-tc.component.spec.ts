import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTCComponent } from './login-tc.component';

describe('LoginTCComponent', () => {
  let component: LoginTCComponent;
  let fixture: ComponentFixture<LoginTCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
