import { Routes } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import { AboutComponent} from "./about/about.component";
import { PortfolioComponent} from "./portfolio/portfolio.component";
import { ContactComponent} from "./contact/contact.component";
import { UnderConstructionComponent} from "./under-construction/under-construction.component";


export const routes: Routes = [
  {path: '', component: HomeComponent, data: {animation: 'HomePage'}},
  {path: 'about', component: AboutComponent, data: {animation: 'AboutPage'}},
  {path: 'portfolio', component: PortfolioComponent, data : {animation: 'PortfolioPage'}},
  {path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'}},
  {path: 'under-construction', component: UnderConstructionComponent, data: {animation: 'UnderConstructionPage'}},
];
