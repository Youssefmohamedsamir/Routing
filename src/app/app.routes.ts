import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'About', component: AboutComponent, title: 'about' },
  { path: 'Contact', component: ContactComponent, title: 'contact' },
  { path: 'Portfolio', component: PortfolioComponent, title: 'Portfolio' },
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: '**', component: NotFoundComponent, title: 'NotFound' }
];
