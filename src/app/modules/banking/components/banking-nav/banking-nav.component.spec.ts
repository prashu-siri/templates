import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingNavComponent } from './banking-nav.component';

describe('BankingNavComponent', () => {
  let component: BankingNavComponent;
  let fixture: ComponentFixture<BankingNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
