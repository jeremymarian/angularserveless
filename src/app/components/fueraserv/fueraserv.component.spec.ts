import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FueraservComponent } from './fueraserv.component';

describe('FueraservComponent', () => {
  let component: FueraservComponent;
  let fixture: ComponentFixture<FueraservComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FueraservComponent],
    });
    fixture = TestBed.createComponent(FueraservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
