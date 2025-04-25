import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../core/services/residence.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-residence-form',
  templateUrl: './residence-form.component.html',
  styleUrls: ['./residence-form.component.css'],
})
export class ResidenceFormComponent {
  residenceForm!: FormGroup;

  constructor(private rs: ResidenceService) {
    this.residenceForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      adress: new FormControl('', Validators.required),
      image: new FormControl('', [
        Validators.required,
        // Validators.pattern('.(.jpg|.svg)$'),
      ]),
      status: new FormControl('', Validators.required),
    });
  }

  getFormValue() {
    // return console.log(this.residenceForm.value);
    return console.log(this.residenceForm.get('name')?.value);
  }

  get name() {
    return this.residenceForm.get('name');
  }

  add() {
    this.rs
      .add(this.residenceForm.value)
      .subscribe(() => alert('added with success'));
  }
}
