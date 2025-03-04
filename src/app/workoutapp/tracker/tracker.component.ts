import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { Days } from '../common/static/days';

@Component({
  selector: 'app-tracker',
  imports: [MatCardModule, FooterComponent, CommonModule],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.scss'
})
export class TrackerComponent implements OnInit {
  editUser: Boolean = false;
  bSeeExercises: Boolean = false;
  days = Days;
  constructor(){}

  ngOnInit(): void {
  }

  public getToday(): string {
    const date = new Date();
    return this.days[date.getDay()];
  }

  
}
