import { Timeline } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
  description?: string;
}

@Component({
  selector: 'app-customer-journey',
  templateUrl: './customer-journey.component.html',
  styleUrls: ['./customer-journey.component.css'],
  imports: [Timeline, CardModule, ButtonModule, CommonModule],
})
export class CustomerJourneyComponent {
  isServiceActive: boolean = false;

  services = [
    {
      id: 1,
      title: 'Free Medical Assessment',
      description:
        'Fill out our quick form and a multilingual medical coordinator will contact you to discuss your symptoms, history, and treatment options — no commitment required.',
      image: 'assets/images/customer-journey/medical-assesment.jpg',
      active: this.isServiceActive,
    },
    {
      id: 2,
      title: 'Upload CT Scans & Pulmonary Tests',
      description:
        'Securely submit any recent medical imaging or lung function tests. If you don’t have these yet, we’ll guide you through how to get them locally.',
      image: 'assets/images/customer-journey/files.jpg',
      active: this.isServiceActive,
    },
    {
      id: 3,
      title: 'Doctor Review + Treatment Plan Sent in 48h',
      description:
        'We will find the best hospital for you in the best country that suits you.',
      image: 'assets/images/customer-journey/review.jpg',
      active: this.isServiceActive,
    },
    {
      id: 4,
      title: 'Pay 30% Deposit – Secure Reservation',
      description:
        'Lock in your treatment date and hospital slot with a 30% deposit. You’ll receive confirmation and pre-travel instructions immediately.',
      image: 'assets/images/customer-journey/booking.jpg',
      active: this.isServiceActive,
    },
    {
      id: 5,
      title: 'Travel Assistance & Concierge Setup',
      description:
        'We arrange airport pickup, hotel booking, translation support, and hospital coordination. Just book your flight — we handle the rest.',
      image: 'assets/images/customer-journey/travel.jpg',
      active: this.isServiceActive,
    },
    {
      id: 6,
      title: 'Surgery / Regenerative Protocols',
      description:
        'Receive patented, minimally invasive treatment in a world-class facility. All procedures are performed by certified COPD specialists.',
      image: 'assets/images/customer-journey/surgery.jpg',
      active: this.isServiceActive,
    },
    {
      id: 7,
      title: '10-Day In-Country Recovery + 1-Year Follow-Up',
      description:
        'Recover under supervised care before returning home. Follow-up appointments (virtual or in-person) are included for 12 months.',
      image: 'assets/images/customer-journey/rest.jpg',
      active: this.isServiceActive,
    },
  ];

  onClickStep(id: number) {
    this.services.forEach((service) => (service.active = service.id === id));
  }
}
