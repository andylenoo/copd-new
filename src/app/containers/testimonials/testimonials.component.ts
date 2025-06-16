import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  imports: [TranslateModule],
})
export class TestimonialsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
