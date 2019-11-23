import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceMapComponent } from './assistance-map.component';

describe('AssistanceMapComponent', () => {
  let component: AssistanceMapComponent;
  let fixture: ComponentFixture<AssistanceMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistanceMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
