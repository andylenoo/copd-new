import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { TreatmentsPageComponent } from './pages/treatments/treatments.component';
import { AboutPageComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: 'home',
    component: LandingLayoutComponent,
    children: [],
  },
  { path: 'login', component: LoginComponent },
  { path: 'treatments', component: TreatmentsPageComponent },
  { path: 'about', component: AboutPageComponent },
];
