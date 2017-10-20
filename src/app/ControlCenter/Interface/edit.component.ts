import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './edit.component.html',
})
export class FormComponent {
  gateForm = new FormGroup({
    description: new FormControl(),
    status: new FormControl(),
    schedule: new FormControl(),
  });
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.gateForm = this.fb.group({
    });
  }
}
