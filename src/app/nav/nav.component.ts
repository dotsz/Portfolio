import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    if (hamburger && menu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        menu.classList.toggle('show');
      });
    }
  }
}
