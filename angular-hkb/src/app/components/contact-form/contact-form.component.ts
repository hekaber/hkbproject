import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MailService } from '../../shared/providers/mail.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  formData: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mailService: MailService
  ) { }

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      firstName: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      lastName: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      company: new FormControl(""),
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      phone: new FormControl(""),
      message: new FormControl("", Validators.required)
    });
  }

  get firstName() { return this.formData.get('firstName'); }

  get lastName() { return this.formData.get('lastName'); }

  get email() { return this.formData.get('email'); }

  get message() { return this.formData.get('message'); }

  onSubmit() {

    if (this.formData.valid) {
      this.mailService.send(this.formData.value);
    }
  }
}
