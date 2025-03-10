import { Component, Signal, signal, computed, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { testUser } from '../common/static/testData';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-header',
  imports: [MatCardModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit, AfterViewInit {
  user = testUser;
  fName: Signal<string> = signal(this.user.firstName);
  lName: Signal<string> = signal(this.user.lastName);
  fullUserName = computed(() => `${this.fName()} ${this.lName()}`);
  bUserIconClicked: Boolean = false;

  constructor() {}

  ngOnInit(): void {
      
  }

  public clickUserIcon(): void {
    this.bUserIconClicked = !this.bUserIconClicked;
  }

  ngAfterViewInit(): void {
       
  }

}
