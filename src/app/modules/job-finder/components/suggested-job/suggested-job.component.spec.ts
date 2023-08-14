import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedJobComponent } from './suggested-job.component';

describe('SuggestedJobComponent', () => {
  let component: SuggestedJobComponent;
  let fixture: ComponentFixture<SuggestedJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestedJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
