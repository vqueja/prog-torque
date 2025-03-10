import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkoutappComponent } from './workoutapp/workoutapp.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WorkoutappComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'workoutapp';
}
