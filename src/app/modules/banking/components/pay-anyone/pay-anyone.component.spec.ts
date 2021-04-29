import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayAnyoneComponent } from './pay-anyone.component';

describe('PayAnyoneComponent', () => {
  let component: PayAnyoneComponent;
  let fixture: ComponentFixture<PayAnyoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayAnyoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayAnyoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
