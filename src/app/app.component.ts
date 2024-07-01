import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
        <a class="meHome" routerLink="/">Victor Felipe Jr</a>
      <ul>
        <li><a routerLink="/under-construction">About</a></li>
        <li><a routerLink="/under-construction">Portfolio</a></li>
        <li><a routerLink="/under-construction">Contact</a></li>
      </ul>
    </nav>
    <div class="mobile-nav">
      <ul>
        <li><a routerLink="/"><img src="../assets/home-100.png" alt="Home"></a></li>
        <li><a routerLink="/under-construction"><img class="aboutMe" src="../assets/about-me-100.png" alt="About Me"></a></li>
        <li><a routerLink="/under-construction"><img src="../assets/portfolio-100.png" alt="Portfolio"></a></li>
        <li><a routerLink="/under-construction"><img src="../assets/connect-100.png" alt="Connect with Me"></a></li>
      </ul>
    </div>
    <router-outlet></router-outlet>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'my-portfolio-website';
}
