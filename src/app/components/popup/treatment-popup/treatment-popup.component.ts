import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-treatment-popup',
  templateUrl: './treatment-popup.component.html',
  styleUrls: ['./treatment-popup.component.css'],
  imports: [CommonModule, RouterModule],
})
export class TreatmentPopupComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Input() title: string = 'Ready to Get Started?';
  @Input() description: string =
    'Join thousands of users who have already discovered the power of our platform. Take the first step towards transformation today.';
  @Input() primaryButtonText: string = 'Get Started Now';
  @Input() secondaryButtonText: string = 'Learn More';
  @Input() smallText: string = 'No credit card required • Cancel anytime';
  @Input() autoClose: boolean = false;
  @Input() autoCloseDelay: number = 5000;
  @Input() showProgress: boolean = false;

  @Output() primaryAction = new EventEmitter<void>();
  @Output() secondaryAction = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  progressValue: number = 0;
  private autoCloseTimer?: number;
  private progressTimer?: number;

  ngOnInit() {
    // if (this.showProgress) {
    //   this.startProgress();
    // }
  }

  ngOnDestroy() {
    this.clearTimers();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isVisible']?.currentValue && this.autoClose) {
      this.startAutoClose();
    }
  }

  private startAutoClose() {
    if (this.showProgress) {
      this.clearProgressTimer(); // Clear previous timer if any
      this.startProgress();
    }

    if (this.autoCloseTimer) {
      clearTimeout(this.autoCloseTimer);
    }
    this.autoCloseTimer = window.setTimeout(() => {
      this.closePopup();
    }, this.autoCloseDelay);
  }

  private startProgress() {
    const interval = 50;
    const increment = (interval / this.autoCloseDelay) * 100;

    this.progressTimer = window.setInterval(() => {
      this.progressValue += increment;
      if (this.progressValue >= 100) {
        this.progressValue = 100;
        this.clearProgressTimer();
      }
    }, interval);
  }

  private clearTimers() {
    if (this.autoCloseTimer) {
      clearTimeout(this.autoCloseTimer);
      this.autoCloseTimer = undefined;
    }
    this.clearProgressTimer();
  }

  private clearProgressTimer() {
    if (this.progressTimer) {
      clearInterval(this.progressTimer);
      this.progressTimer = undefined;
    }
  }

  closePopup() {
    this.clearTimers();
    this.isVisible = false;
    this.closed.emit();
  }

  onPrimaryAction() {
    this.primaryAction.emit();
    this.closePopup();
  }

  onSecondaryAction() {
    this.secondaryAction.emit();
    this.closePopup();
  }
}
