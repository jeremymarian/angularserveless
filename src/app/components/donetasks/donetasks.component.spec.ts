import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonetasksComponent } from './donetasks.component';

describe('DonetasksComponent', () => {
  let component: DonetasksComponent;
  let fixture: ComponentFixture<DonetasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonetasksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DonetasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
