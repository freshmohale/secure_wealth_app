import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationWelcomeComponent } from './registration-welcome.component';

describe('RegistrationWelcomeComponent', () => {
  let component: RegistrationWelcomeComponent;
  let fixture: ComponentFixture<RegistrationWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
