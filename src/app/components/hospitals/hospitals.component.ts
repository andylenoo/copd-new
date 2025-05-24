import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Destination {
  title: string;
  backgroundImage: string;
  customClass: string;
}

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css'],
  imports: [CommonModule],
})
export class HospitalsComponent {
  currentSlide = 0;

  destinations: Destination[] = [
    {
      title: 'ACIBADEM',
      backgroundImage: 'assets/images/acibadem.jpg',
      customClass:
        'absolute inset-0 bg-gradient-to-br from-green-900/60 via-green-800/40 to-transparent',
    },
    {
      title: 'MEMORIAL',
      backgroundImage: 'assets/images/acibadem.jpg',
      customClass:
        'absolute inset-0 bg-gradient-to-br from-purple-900/60 via-purple-800/40 to-transparent',
    },
    {
      title: 'MEDICANA',
      backgroundImage: 'assets/images/acibadem.jpg',
      customClass:
        'absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/40 to-transparent',
    },
    {
      title: 'LIV',
      backgroundImage: 'assets/images/liv.jpg',
      customClass:
        'absolute inset-0 bg-gradient-to-br from-red-900/60 via-red-800/40 to-transparent',
    },
    {
      title: 'EXPLORE MORE',
      backgroundImage: '',
      customClass:
        'absolute inset-0 bg-gradient-to-br from-orange-900/60 via-transparent to-orange-800/40 ',
    },
  ];

  get maxSlides(): number {
    return Math.max(0, this.destinations.length - 3);
  }

  nextSlide(): void {
    if (this.currentSlide < this.maxSlides) {
      this.currentSlide++;
    }
  }

  previousSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  goToSlide(slideIndex: number): void {
    this.currentSlide = slideIndex;
  }

  showNextButton(): boolean {
    return this.destinations.length > 3 && this.currentSlide < this.maxSlides;
  }

  showPrevButton(): boolean {
    return this.destinations.length > 3 && this.currentSlide > 0;
  }

  getSlideIndicators(): number[] {
    return Array(this.maxSlides + 1)
      .fill(0)
      .map((_, i) => i);
  }

  onDestinationClick(destination: string): void {}

  onImageError(event: any): void {}
}
