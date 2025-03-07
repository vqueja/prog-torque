import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TrackerComponent } from './tracker/tracker.component';
import { StartComponent } from './start/start.component';

@Component({
  selector: 'app-workoutapp',
  standalone: true,
  imports: [HeaderComponent, SidenavComponent, TrackerComponent, StartComponent],
  templateUrl: './workoutapp.component.html',
  styleUrl: './workoutapp.component.scss'
})
export class WorkoutappComponent {

}
