import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerProgressSidebarComponent } from './player-progress-sidebar.component';

describe('PlayerProgressSidebarComponent', () => {
  let component: PlayerProgressSidebarComponent;
  let fixture: ComponentFixture<PlayerProgressSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerProgressSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerProgressSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
