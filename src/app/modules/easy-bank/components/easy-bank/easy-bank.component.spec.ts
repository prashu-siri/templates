import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyBankComponent } from './easy-bank.component';

describe('EasyBankComponent', () => {
  let component: EasyBankComponent;
  let fixture: ComponentFixture<EasyBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
