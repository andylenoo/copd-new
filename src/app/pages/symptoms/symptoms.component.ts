import { Component, OnInit } from '@angular/core';
import { CtaComponent } from '../../containers/cta/cta.component';
import { Cta2Component } from '../../components/cta/cta.component';

@Component({
  selector: 'app-symptoms-page',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css'],
  imports: [Cta2Component],
})
export class SymptomsPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
