import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendbuttComponent } from './backendbutt.component';

describe('BackendbuttComponent', () => {
  let component: BackendbuttComponent;
  let fixture: ComponentFixture<BackendbuttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackendbuttComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BackendbuttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
