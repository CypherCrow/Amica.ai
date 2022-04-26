import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderListTestComponent } from './leader-list-test.component';

describe('LeaderListTestComponent', () => {
  let component: LeaderListTestComponent;
  let fixture: ComponentFixture<LeaderListTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderListTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderListTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
