import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, query, group, animate } from '@angular/animations';

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
    <div [@routeAnimations]="prepareRoute(outlet)" class="router-outlet-container">
        <router-outlet #outlet="outlet"></router-outlet>
    </div>

  `,
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            opacity: 0,
            transform: 'scale(0.8)'
          })
        ],{ optional: true }),
        group([
          query(':enter', [
            animate('0.5s ease-in-out', style({ opacity: 1, transform: 'scale(1)' }))
          ],{ optional: true }),
          query(':leave', [
            animate('0.5s ease-in-out', style({ opacity: 0, transform: 'scale(0.8)' }))
          ],{ optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title: string = 'my-portfolio-website';
  prepareRoute(outlet:any) {
    return outlet.activatedRouteData['animation'] || 'HomePage';
  }
}
