import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CtaPopupComponent } from '../../components/popup/cta-popup/cta-popup.component';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-treatments-page',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css'],
  imports: [RouterModule, CtaPopupComponent, CommonModule, AccordionModule],
})
export class TreatmentsPageComponent implements OnInit {
  tabs: { title: string; value: number; content: string }[] = [];

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
