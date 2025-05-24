import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TreatmentPopupComponent } from '../../components/popup/treatment-popup/treatment-popup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-treatments-page',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css'],
  imports: [RouterModule, TreatmentPopupComponent, CommonModule],
})
export class TreatmentsPageComponent implements OnInit {
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
