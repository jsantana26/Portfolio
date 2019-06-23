import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ComingSoonComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document) {
    const launchDate = new Date('Jul 1, 2019 00:00:00').getTime();

    //Update every second
    const intvl = setInterval(() => {
      //Get today's date
      const now = new Date().getTime();

      //Distance from now to launchDate
      const distance = launchDate - now;

      //Time calculations for hours, minutes, seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      //Display result
      document.querySelector(".countdown").innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${minutes}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
      `;

      // If launch date passed
      if (distance < 0) {
        clearInterval(intvl);

        document.querySelector(".countdown").style.color = '#17a2b8';
        document.querySelector(".countdown").innerHTML = 'Launched';
      }
    }, 1000);
  }

  ngOnInit() {
  }
}
