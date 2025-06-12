import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';

interface FaqItem {
  title?: string;
  content?: string;
  value: string;
  li1?: string;
  li2?: string;
  li3?: string;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  imports: [AccordionModule, CommonModule],
})
export class FaqComponent {
  tabs: FaqItem[] = [
    {
      title: 'Is this treatment safe?',
      content:
        'Yes. All procedures are performed in internationally accredited hospitals by certified pulmonologists using FDA- or CE-approved protocols. Safety and outcomes are our top priority.',
      value: '0',
    },
    {
      title: "How do I know if I'm eligible?",
      content:
        'Eligibility depends on your COPD stage, medical history, and lung imaging. Start with a free WhatsApp assessment — we’ll guide you step by step.',
      value: '1',
    },
    {
      title: 'What treatments do you offer?',
      content: 'We provide both surgical and non-surgical options including:',
      value: '2',
      li1: 'Lung volume reduction (minimally invasive)',
      li2: 'Regenerative therapy (including stem cell-based options)',
      li3: 'Advanced pulmonary rehab treatment plans are customized for each patient.',
    },
    {
      title: 'How much does it cost?',
      content:
        'Costs vary by location and treatment type, but most of our patients save 50–70% compared to US or EU hospitals. You’ll receive a fixed quote after your evaluation.',
      value: '3',
    },
    {
      title: 'Do you offer payment plans?',
      content: 'Yes. We offer staged payments:',
      value: '4',
      li1: '30% deposit to reserve your date',
      li2: '60% before surgery',
      li3: '10% after post-treatment follow-up',
    },
    {
      title: 'How long do I stay in-country?',
      content:
        'Typical stays are 7–14 days, depending on the procedure. This includes full recovery, medical supervision, and your first follow-up.',
      value: '5',
    },
    {
      title: 'Can I bring a family member?',
      content:
        'Yes. Many patients bring a spouse or caregiver. We assist with travel, hotel, and accommodation for companions.',
      value: '6',
    },
    {
      title: 'What support is available after I return home?',
      content:
        'You’ll receive 12 months of follow-up via video calls, medical reviews, and WhatsApp support. Your care doesn’t end when your flight departs.',
      value: '7',
    },
    {
      title: 'Is the communication only in English?',
      content:
        'No. Our team speaks Arabic, Russian, Spanish, and English. All consultations and case management can be provided in your preferred language.',
      value: '8',
    },
  ];
}
