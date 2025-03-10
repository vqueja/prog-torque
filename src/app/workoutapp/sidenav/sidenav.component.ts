import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { NavmenuComponent } from './navmenu/navmenu.component';

@Component({
  selector: 'app-sidenav',
  imports: [CommonModule, NavmenuComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit, AfterViewInit {

  expanded: boolean = false;
  navMenuClass = ['selected-menu', 'selected-menu-hidden'];
  public menuClass = 'selected-menu-hidden';
  constructor() {}

  ngOnInit(): void {
  }

  public expandNav(): void {
    this.expanded = true;
    this.menuClass = this.navMenuClass[1];
  }

  public closeNav(): void {
    this.expanded = false;
  }

  public showExercises(): void {
    this.menuClass = this.navMenuClass[0];
    console.log(this.menuClass);

  }

  ngAfterViewInit(): void {
      
  }

}
