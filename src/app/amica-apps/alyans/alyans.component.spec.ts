import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlyansComponent } from './alyans.component';

describe('AlyansComponent', () => {
  let component: AlyansComponent;
  let fixture: ComponentFixture<AlyansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlyansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlyansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
