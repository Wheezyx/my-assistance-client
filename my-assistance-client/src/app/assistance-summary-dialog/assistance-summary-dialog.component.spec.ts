import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceSummaryDialogComponent } from './assistance-summary-dialog.component';

describe('AssistanceSummaryDialogComponent', () => {
  let component: AssistanceSummaryDialogComponent;
  let fixture: ComponentFixture<AssistanceSummaryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistanceSummaryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceSummaryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
