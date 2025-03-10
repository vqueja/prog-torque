import { AfterViewInit, ChangeDetectorRef, Component, OnInit, signal} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';
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

export class TrackerComponent implements OnInit, AfterViewInit {
  editUser: Boolean = false;
  days = Days;
  class = ['card', 'card-today'];

  constructor(private ref: ChangeDetectorRef){}

  ngOnInit(): void {
  }

  public getToday(): string {
    let date = new Date();
    return this.days[date.getDay()];
  }

  public setClass(date: string): string {
    const index = date.toUpperCase() === this.getToday().toUpperCase() ? 1 : 0;
    return this.class[index];
  }

  ngAfterViewInit(): void {
  
  }

  
}
