import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timezones = [
    {name: 'America/New_York', current: true},
    {name: 'Europe/Budapest', current: false}
  ];

  currentChanged(current: boolean, index: number) {
    this.timezones.forEach((t, i) => t.current = i === index ? current : false);
  }

  timezoneAdded() {
    this.timezones.push({name: '', current: false});
  }

  get isAddNewButtonVisible() {
    return this.timezones.length < 5;
  }
}
