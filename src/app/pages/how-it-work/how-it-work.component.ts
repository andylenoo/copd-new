import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-work',
  templateUrl: './how-it-work.component.html',
  styleUrls: ['./how-it-work.component.css'],
  imports: [CommonModule],
})
export class HowItWorkComponent {
  services = [
    {
      id: 1,
      title: 'Send Your COPD Quiz',
      description:
        'After you send your quiz our doctors will prepare your detailed paper and check your current health state.',
      image: 'assets/images/photo-1576091160550-2173dba999ef.jpg',
      active: true,
    },
    {
      id: 2,
      title: 'Preparing',
      description:
        'We will send your paper and reach you to discuss how to proceed.',
      image: 'assets/images/medical-equipment.CCVd0Z7o.jpg',
    },
    {
      id: 3,
      title: 'Finding You The Best Treatment Facility',
      description:
        'We will find the best hospital for you in the best country that suits you.',
      image: 'assets/images/medical-team.C62XoM_c.jpg',
    },
    {
      id: 4,
      title: 'To the Treatment',
      description:
        'We will handle the travel, hotel and local transfers end while you focus on your treatment.',
      image: 'assets/images/hospital-facade.BhF4unxP.jpg',
    },
  ];
}
