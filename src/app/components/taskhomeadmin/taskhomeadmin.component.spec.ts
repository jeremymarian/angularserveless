import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskhomeadminComponent } from './taskhomeadmin.component';

describe('TaskhomeadminComponent', () => {
  let component: TaskhomeadminComponent;
  let fixture: ComponentFixture<TaskhomeadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskhomeadminComponent],
    });
    fixture = TestBed.createComponent(TaskhomeadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
