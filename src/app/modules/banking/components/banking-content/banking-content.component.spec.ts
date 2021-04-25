import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingContentComponent } from './banking-content.component';

describe('BankingContentComponent', () => {
  let component: BankingContentComponent;
  let fixture: ComponentFixture<BankingContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
