import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCompanyComponent } from './popular-company.component';

describe('PopularCompanyComponent', () => {
  let component: PopularCompanyComponent;
  let fixture: ComponentFixture<PopularCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
