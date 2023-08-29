import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnbonusComponent } from './learnbonus.component';

describe('LearnbonusComponent', () => {
  let component: LearnbonusComponent;
  let fixture: ComponentFixture<LearnbonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnbonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnbonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
