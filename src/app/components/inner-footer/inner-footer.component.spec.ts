import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerFooterComponent } from './inner-footer.component';

describe('InnerFooterComponent', () => {
  let component: InnerFooterComponent;
  let fixture: ComponentFixture<InnerFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
