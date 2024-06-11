import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLoanComponent } from './page-loan.component';

describe('PageLoanComponent', () => {
  let component: PageLoanComponent;
  let fixture: ComponentFixture<PageLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLoanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
