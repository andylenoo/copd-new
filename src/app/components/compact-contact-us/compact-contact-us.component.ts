import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-compact-contact-us',
  templateUrl: './compact-contact-us.component.html',
  styleUrls: ['./compact-contact-us.component.css'],
  imports: [ReactiveFormsModule],
})
export class CompactContactUsComponent {
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
    console.log('sa');

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
