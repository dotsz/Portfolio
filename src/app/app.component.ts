import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, FooterComponent],
  template: `
    <div class="app-container">
      <nav class="desktop-nav">
          <a class="meHome" routerLink="/">Victor Felipe Jr</a>
        <ul>
          <li><a routerLink="/about">About</a></li>
          <li><a routerLink="/portfolio">Portfolio</a></li>
          <li><a routerLink="/contact">Contact</a></li>
        </ul>
      </nav>
      <div class="mobile-nav">
        <ul>
          <li><a routerLink="/"><img src="../assets/home-100.png" alt="Home"></a></li>
          <li><a routerLink="/about"><img class="aboutMe" src="../assets/about-me-100.png" alt="About Me"></a></li>
          <li><a routerLink="/portfolio"><img src="../assets/portfolio-100.png" alt="Portfolio"></a></li>
          <li><a routerLink="/contact"><img src="../assets/connect-100.png" alt="Connect with Me"></a></li>
        </ul>
      </div>
      <div class="router-outlet-container">
          <router-outlet></router-outlet>
      </div>
      <app-footer></app-footer>
    </div>

  `,
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title: string = 'my-portfolio-website';
}
