import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivascontrolComponent } from './activascontrol.component';

describe('ActivascontrolComponent', () => {
  let component: ActivascontrolComponent;
  let fixture: ComponentFixture<ActivascontrolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivascontrolComponent],
    });
    fixture = TestBed.createComponent(ActivascontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
