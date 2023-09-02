import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateobsComponent } from './createobs.component';

describe('CreateobsComponent', () => {
  let component: CreateobsComponent;
  let fixture: ComponentFixture<CreateobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateobsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
