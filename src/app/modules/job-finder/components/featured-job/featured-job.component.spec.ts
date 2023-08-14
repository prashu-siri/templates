import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedJobComponent } from './featured-job.component';

describe('FeaturedJobComponent', () => {
  let component: FeaturedJobComponent;
  let fixture: ComponentFixture<FeaturedJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
