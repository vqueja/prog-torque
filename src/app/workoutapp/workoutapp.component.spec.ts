import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutappComponent } from './workoutapp.component';

describe('WorkoutappComponent', () => {
  let component: WorkoutappComponent;
  let fixture: ComponentFixture<WorkoutappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
