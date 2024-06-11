import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDepositComponent } from './page-deposit.component';

describe('PageDepositComponent', () => {
  let component: PageDepositComponent;
  let fixture: ComponentFixture<PageDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDepositComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
