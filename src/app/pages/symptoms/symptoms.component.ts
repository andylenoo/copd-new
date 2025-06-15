import { Component, OnInit } from '@angular/core';
import { CtaComponent } from '../../containers/cta/cta.component';
import { Cta2Component } from '../../components/cta/cta.component';
import { CompactContactUsComponent } from '../../components/compact-contact-us/compact-contact-us.component';
import { CtaPopupComponent } from '../../components/popup/cta-popup/cta-popup.component';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-symptoms-page',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css'],
  imports: [
    Cta2Component,
    CompactContactUsComponent,
    CtaPopupComponent,
    CommonModule,
    AccordionModule,
    ReactiveFormsModule,
  ],
})
export class SymptomsPageComponent implements OnInit {
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

  form: FormGroup;
  formSubmitted: boolean = false;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.pattern(/^[0-9\+\-\s]+$/), Validators.minLength(7)],
      ],
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.formSubmitted = true;

    if (this.form.invalid) {
      return;
    }

    // Convert form data to URL-encoded format (what FormSubmit expects)
    const formData = new URLSearchParams();
    Object.entries(this.form.value).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    fetch('https://formsubmit.co/ajax/eb88825f966d55c1a8b2a9094e418fa1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        console.log('Success:', data);
        this.formSubmitted = true;
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error sending form. Please try again later.');
      });
  }
}
