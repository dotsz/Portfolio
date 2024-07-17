import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import { trigger, transition, style, query, group, animate } from '@angular/animations';
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
      <div [@routeAnimations]="prepareRoute(outlet)" class="router-outlet-container">
          <router-outlet #outlet="outlet"></router-outlet>
      </div>
      <app-footer></app-footer>
    </div>

  `,
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            width: '100%',
            opacity: 0,
            transform: 'scale(0.8)'
          })
        ],{ optional: true }),
        group([
          query(':enter', [
            animate('0.8s ease-in-out', style({ opacity: 1, transform: 'scale(1)' }))
          ],{ optional: true }),
          query(':leave', [
            animate('0.8s ease-in-out', style({ opacity: 0, transform: 'scale(0.8)' }))
          ],{ optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title: string = 'my-portfolio-website';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
