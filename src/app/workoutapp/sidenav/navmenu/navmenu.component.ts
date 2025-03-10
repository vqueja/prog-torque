import { Component } from '@angular/core';
import { ExercisesComponent } from '../../tracker/exercises/exercises.component';

@Component({
  selector: 'app-navmenu',
  imports: [ExercisesComponent],
  templateUrl: './navmenu.component.html',
  styleUrl: './navmenu.component.scss'
})
export class NavmenuComponent {

}
