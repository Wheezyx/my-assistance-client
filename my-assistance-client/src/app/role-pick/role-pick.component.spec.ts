import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolePickComponent } from './role-pick.component';

describe('RolePickComponent', () => {
  let component: RolePickComponent;
  let fixture: ComponentFixture<RolePickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolePickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolePickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
