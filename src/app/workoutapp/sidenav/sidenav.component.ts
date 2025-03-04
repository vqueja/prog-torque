import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit, AfterViewInit {

  expanded: boolean = false;

  constructor() {}

  ngOnInit(): void {
      
  }

  public expandNav(): void {
    this.expanded = true;
  }

  public closeNav(): void {
    this.expanded = false;
  }

  ngAfterViewInit(): void {
      
  }

}
