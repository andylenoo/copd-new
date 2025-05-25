import { Component } from '@angular/core';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './containers/header/header.component';
import { FooterComponent } from './containers/footer/footer.component';
import { Cta2Component } from './components/cta/cta.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    // LandingLayoutComponent,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    Cta2Component,
  ],
  // standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'copd';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
      });
  }
}
