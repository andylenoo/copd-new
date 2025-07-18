import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { TreatmentsPageComponent } from './pages/treatments/treatments.component';
import { SymptomsPageComponent } from './pages/symptoms/symptoms.component';
import { DiagnoseFormComponent } from './components/form/form.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AboutPageComponent } from './pages/about-copd/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LandingLayoutComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'treatments', component: TreatmentsPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'diagnose', component: DiagnoseFormComponent },
  { path: 'symptoms', component: SymptomsPageComponent },
  // { path: 'patient', component: PatientPageComponent },
  // { path: 'doctor', component: DoctorPageComponent },
  // { path: 'travel-guide', component: TravelGuidePageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
];
