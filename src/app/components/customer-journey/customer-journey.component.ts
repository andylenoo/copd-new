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
  events: EventItem[];

  constructor() {
    this.events = [
      {
        status: 'Free WhatsApp Medical Assessment',
        // date: '15/10/2020 10:30',
        icon: 'pi pi-shopping-cart',
        color: '#9C27B0',
        description:
          'Chat directly with a multilingual medical coordinator to discuss your symptoms, history, and goals — no commitment required.',
      },
      {
        status: 'Upload CT Scans & Pulmonary Tests',
        // date: '15/10/2020 14:00',
        icon: 'pi pi-cog',
        color: '#673AB7',
        description:
          'Securely submit any recent medical imaging or lung function tests. If you don’t have these yet, we’ll guide you through how to get them locally.',
      },
      {
        status: 'Doctor Review + Treatment Plan Sent in 48h',
        // date: '15/10/2020 16:15',
        icon: 'pi pi-shopping-cart',
        color: '#FF9800',
        description:
          'Our pulmonology experts review your case and deliver a personalized treatment plan — including medical options, costs, and travel timeline — all within 2 business days.',
      },
      {
        status: 'Pay 30% Deposit – Secure Reservation',
        // date: '16/10/2020 10:00',
        icon: 'pi pi-check',
        color: '#BBDB9B',
        description:
          'Lock in your treatment date and hospital slot with a 30% deposit. You’ll receive confirmation and pre-travel instructions immediately.',
      },
      {
        status: 'Travel Assistance & Concierge Setup',
        // date: '16/10/2020 10:00',
        icon: 'pi pi-check',
        color: '#FFE66D',
        description:
          'We arrange airport pickup, hotel booking, translation support, and hospital coordination. Just book your flight — we handle the rest.',
      },
      {
        status: 'Surgery / Regenerative Protocols',
        // date: '16/10/2020 10:00',
        icon: 'pi pi-check',
        color: '#DB3A34',
        description:
          'Receive patented, minimally invasive treatment in a world-class facility. All procedures are performed by certified COPD specialists.',
      },
      {
        status: '10-Day In-Country Recovery + 1-Year Follow-Up',
        // date: '16/10/2020 10:00',
        icon: 'pi pi-check',
        color: '#6CA6C1',
        description:
          'Recover under supervised care before returning home. Follow-up appointments (virtual or in-person) are included for 12 months.',
      },
    ];
  }
}
