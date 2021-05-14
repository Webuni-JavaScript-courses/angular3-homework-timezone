import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timezone1 = 'America/New_York';
  timezone2 = 'Europe/Budapest';
  current1 = false;
  current2 = true;

  current1Changed(newValue: boolean) {
    this.current1 = newValue;
    this.current2 = !this.current1;
  }

  current2Changed(newValue: boolean) {
    this.current2 = newValue;
    this.current1 = !this.current2;
  }
}
