import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../containers/footer/footer.component';
import { LiveHelpComponent } from '../../components/live-help/live-help.component';
import { FaqComponent } from '../../containers/faq/faq.component';
import { CtaComponent } from '../../containers/cta/cta.component';
import { TestimonialsComponent } from '../../containers/testimonials/testimonials.component';
import { FeaturesComponent } from '../../containers/features/features.component';
import { StatsComponent } from '../../containers/stats/stats.component';
import { TreatmentComponent } from '../../containers/treatment/treatment.component';
import { SymptomCheckComponent } from '../../containers/symptom-check/symptom-check.component';
import { DemoComponent } from '../../containers/demo/demo.component';
import { HeroSliderComponent } from '../../components/hero-slider/hero-slider.component';
import { HeaderComponent } from '../../containers/header/header.component';
import { RouterOutlet } from '@angular/router';
import { VideoComponent } from '../../components/video/video.component';
import { VideoConsultationComponent } from '../../components/video-consultation/video-consultation.component';
import { CompactContactUsComponent } from '../../components/compact-contact-us/compact-contact-us.component';
import { HospitalsComponent } from '../../components/hospitals/hospitals.component';
import { WhyUsComponent } from '../../components/why-us/why-us.component';
import { ButtonDemo } from '../../components/ui/button/button.component';

@Component({
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.css'],
  imports: [
    // HeaderComponent,
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
    // FooterComponent,
    CommonModule,
    RouterOutlet,
    VideoComponent,
    VideoConsultationComponent,
    CompactContactUsComponent,
    HospitalsComponent,
    WhyUsComponent,
    ButtonDemo,
  ],
})
export class LandingLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
