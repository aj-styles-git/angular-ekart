import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeeMainsChildComponent } from './jee-mains-child.component';

describe('JeeMainsChildComponent', () => {
  let component: JeeMainsChildComponent;
  let fixture: ComponentFixture<JeeMainsChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JeeMainsChildComponent]
    });
    fixture = TestBed.createComponent(JeeMainsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
