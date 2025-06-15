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
    if (this.form.invalid) return;

    const formData = new FormData();
    Object.entries(this.form.value).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    fetch('https://formsubmit.co/timurleno1@gmail.com', {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          window.scrollTo(0, 0);
          this.formSubmitted = true;
        }
      })
      .catch(() => alert('Error sending form'));
  }
}
