import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureTermComponent } from './secure-term.component';

describe('SecureTermComponent', () => {
  let component: SecureTermComponent;
  let fixture: ComponentFixture<SecureTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecureTermComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecureTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
