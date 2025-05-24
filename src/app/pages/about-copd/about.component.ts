import { Component, OnInit } from '@angular/core';
import { CompactContactUsComponent } from '../../components/compact-contact-us/compact-contact-us.component';

@Component({
  selector: 'app-about-page',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CompactContactUsComponent],
})
export class AboutPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
