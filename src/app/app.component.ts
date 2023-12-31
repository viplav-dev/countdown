import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'countdownApp';

  endDate = new Date('2024-06-30');

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  constructor() {
    setInterval(() => {
      this.getTimeDifference();
    }, 1000);
  }
  getTimeDifference() {
    const difference = +this.endDate - +new Date() - 19800000;
    if (difference > 0) {
      this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      this.minutes = Math.floor((difference / 1000 / 60) % 60);
      this.seconds = Math.floor((difference / 1000) % 60);
    } else {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  }
}
