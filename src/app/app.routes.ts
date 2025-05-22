import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { TreatmentsPageComponent } from './pages/treatments/treatments.component';
import { AboutPageComponent } from './pages/about/about.component';
import { PatientPageComponent } from './pages/patient/patient.component';
import { DoctorPageComponent } from './pages/doctor/doctor.component';
import { TravelGuidePageComponent } from './pages/travel-guide/travel-guide.component';
import { SymptomsPageComponent } from './pages/symptoms/symptoms.component';

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
  { path: 'symptoms', component: SymptomsPageComponent },
  { path: 'patient', component: PatientPageComponent },
  { path: 'doctor', component: DoctorPageComponent },
  { path: 'travel-guide', component: TravelGuidePageComponent },
];
