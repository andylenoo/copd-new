import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-video-consultation',
  templateUrl: './video-consultation.component.html',
  styleUrls: ['./video-consultation.component.css'],
  imports: [RouterModule, TranslateModule],
})
export class VideoConsultationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
