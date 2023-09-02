import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendientestableComponent } from './pendientestable.component';

describe('PendientestableComponent', () => {
  let component: PendientestableComponent;
  let fixture: ComponentFixture<PendientestableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendientestableComponent],
    });
    fixture = TestBed.createComponent(PendientestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
