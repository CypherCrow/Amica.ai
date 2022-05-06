import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosecManageComponent } from './infosec-manage.component';

describe('InfosecManageComponent', () => {
  let component: InfosecManageComponent;
  let fixture: ComponentFixture<InfosecManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosecManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosecManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
