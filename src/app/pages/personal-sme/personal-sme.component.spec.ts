import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSmeComponent } from './personal-sme.component';

describe('PersonalSmeComponent', () => {
  let component: PersonalSmeComponent;
  let fixture: ComponentFixture<PersonalSmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalSmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalSmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
