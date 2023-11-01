import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckProfileComponent } from './check-profile.component';

describe('CheckProfileComponent', () => {
  let component: CheckProfileComponent;
  let fixture: ComponentFixture<CheckProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckProfileComponent]
    });
    fixture = TestBed.createComponent(CheckProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
