import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceDetailsComponent } from './assistance-details.component';

describe('AssistanceDetailsComponent', () => {
  let component: AssistanceDetailsComponent;
  let fixture: ComponentFixture<AssistanceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistanceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
