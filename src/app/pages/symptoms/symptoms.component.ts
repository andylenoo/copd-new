import { Component, OnInit } from '@angular/core';
import { CtaComponent } from '../../containers/cta/cta.component';
import { Cta2Component } from '../../components/cta/cta.component';
import { CompactContactUsComponent } from '../../components/compact-contact-us/compact-contact-us.component';
import { CtaPopupComponent } from '../../components/popup/cta-popup/cta-popup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-symptoms-page',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css'],
  imports: [
    Cta2Component,
    CompactContactUsComponent,
    CtaPopupComponent,
    CommonModule,
  ],
})
export class SymptomsPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.showPopup();
    }, 5000);
  }

  isPopupVisible = false;

  showPopup() {
    this.isPopupVisible = true;
  }

  handlePrimaryAction() {}

  handleSecondaryAction() {}

  handlePopupClosed() {
    this.isPopupVisible = false;
  }
}
