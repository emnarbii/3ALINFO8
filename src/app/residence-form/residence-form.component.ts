import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-residence-form',
  templateUrl: './residence-form.component.html',
  styleUrls: ['./residence-form.component.css'],
})
export class ResidenceFormComponent {
  residenceForm!: FormGroup;

  constructor() {
    this.residenceForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(15)]),
      adress: new FormControl('', Validators.required),
      image: new FormControl('', [Validators.required, Validators.pattern("\.(.jpg|.svg)$")]),
      status: new FormControl('', Validators.required),
    });
  }

  getFormValue() {
    // return console.log(this.residenceForm.value);
    return console.log(this.residenceForm.get('name')?.value)
  }

  get name(){
    return this.residenceForm.get('name')
  }
}
