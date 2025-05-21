import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './containers/header/header.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { DemoComponent } from './containers/demo/demo.component';
import { SymptomCheckComponent } from './containers/symptom-check/symptom-check.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroSliderComponent,
    DemoComponent,
    SymptomCheckComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'copd';
}
