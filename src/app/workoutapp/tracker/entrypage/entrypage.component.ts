import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Days } from '../../common/static/days';

@Component({
  selector: 'app-entrypage',
  imports: [MatCardModule, CommonModule],
  templateUrl: './entrypage.component.html',
  styleUrl: './entrypage.component.scss'
})
export class EntrypageComponent {
  days = Days;
  class = ['card', 'card-today'];
  constructor() {}

  public getToday(): string {
    let date = new Date();
    return this.days[date.getDay()];
  }

  public setClass(date: string): string {
    const index = date.toUpperCase() === this.getToday().toUpperCase() ? 1 : 0;
    return this.class[index];
  }

}
