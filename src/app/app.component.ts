import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './containers/header/header.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { DemoComponent } from './containers/demo/demo.component';
import { SymptomCheckComponent } from './containers/symptom-check/symptom-check.component';
import { TreatmentComponent } from './containers/treatment/treatment.component';
import { StatsComponent } from './containers/stats/stats.component';
import { FeaturesComponent } from './containers/features/features.component';
import { TestimonialsComponent } from './containers/testimonials/testimonials.component';
import { CtaComponent } from './containers/cta/cta.component';
import { FaqComponent } from './containers/faq/faq.component';
import { LiveHelpComponent } from './components/live-help/live-help.component';
import { FooterComponent } from './containers/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroSliderComponent,
    DemoComponent,
    SymptomCheckComponent,
    TreatmentComponent,
    StatsComponent,
    FeaturesComponent,
    TestimonialsComponent,
    CtaComponent,
    FaqComponent,
    LiveHelpComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'copd';
}
