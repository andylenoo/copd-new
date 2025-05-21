import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: [],
  },
  { path: 'login', component: LoginComponent },
];
