import { Component, OnInit } from '@angular/core';
import { CompactContactUsComponent } from '../../components/compact-contact-us/compact-contact-us.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CompactContactUsComponent, RouterModule, TranslateModule],
})
export class AboutPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
