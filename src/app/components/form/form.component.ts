import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class DiagnoseFormComponent {
  form: FormGroup;
  formSubmitted: boolean = false;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      breath_level: ['', Validators.required],
      coughing_frequency: [0, Validators.min(0)],
      phlegm_amount: [0, Validators.min(0)],
      breathlessness: [0, [Validators.min(0), Validators.max(10)]],
      sleep_quality: [0, [Validators.min(0), Validators.max(10)]],
      energy_levels: [0, [Validators.min(0), Validators.max(10)]],
      flare_count: ['', Validators.required],
      spirometry: ['', Validators.required],
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
