import { Component } from '@angular/core';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './containers/header/header.component';
import { FooterComponent } from './containers/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    // LandingLayoutComponent,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'copd';
}
