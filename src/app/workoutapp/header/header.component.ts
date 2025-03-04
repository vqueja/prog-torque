import { Component, Signal, signal, computed } from '@angular/core';
import { testUser } from '../common/static/testData';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  user = testUser;
  fName: Signal<string> = signal(this.user.firstName);
  lName: Signal<string> = signal(this.user.lastName);
  fullUserName = computed(() => `${this.fName()} ${this.lName()}`);
}
