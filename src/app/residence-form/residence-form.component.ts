import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-residence-form',
  templateUrl: './residence-form.component.html',
  styleUrls: ['./residence-form.component.css']
})
export class ResidenceFormComponent {

  residenceForm!:FormGroup;

constructor(){
  this.residenceForm= new FormGroup({
    id: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    adress: new FormControl('',Validators.required),
    image: new FormControl('',Validators.required),
    status: new FormControl('',Validators.required)
  } 

  )
}
 
getFormValue(){
  
  return console.log(this.residenceForm.value)
}
}
