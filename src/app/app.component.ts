import { Component } from '@angular/core';
import { NavComponent} from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { UnderConstructionComponent} from "./under-construction/under-construction.component";
import { NotificationComponent} from "./notification/notification.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NotificationComponent, NavComponent, HomeComponent, AboutComponent, PortfolioComponent, ContactComponent, FooterComponent, UnderConstructionComponent],
  template: `
    <div class="app-container">
      <!-- Navigation -->
      <app-notification></app-notification>
      <app-nav></app-nav>

      <div class="waviy">
        <span style="--i:1">V</span>
        <span style="--i:2">i</span>
        <span style="--i:3">c</span>
        <span style="--i:4">t</span>
        <span style="--i:5">o</span>
        <span style="--i:6">r</span>
        <span style="--i:7">&nbsp;</span>
        <span style="--i:8">F</span>
        <span style="--i:9">e</span>
        <span style="--i:10">l</span>
        <span style="--i:11">i</span>
        <span style="--i:12">p</span>
        <span style="--i:13">e</span>
        <span style="--i:14">&nbsp;</span>
        <span style="--i:15">J</span>
        <span style="--i:16">r</span>
      </div>

           <!-- Main Content Sections -->
      <div class="content-container">
        <section id="home">
          <app-home></app-home>
        </section>

        <section id="about">
          <app-about></app-about>
        </section>

        <section id="portfolio">
<!--          <app-portfolio></app-portfolio>-->
          <app-under-construction></app-under-construction>
        </section>

        <section id="contact">
<!--          <app-contact></app-contact>-->
          <app-under-construction></app-under-construction>
        </section>
      </div>


      <!-- Loading Indicator -->
      <div class="loading-spinner" *ngIf="isLoading">
        Loading more content...
      </div>

      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'my-portfolio-website';

}
