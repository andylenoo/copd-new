import { Component } from '@angular/core';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [LandingLayoutComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'copd';
}
