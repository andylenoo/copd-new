import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-immediate-attention',
  templateUrl: './immediate-attention.component.html',
  styleUrls: ['./immediate-attention.component.css'],
  imports: [AccordionModule],
})
export class ImmediateAttentionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
