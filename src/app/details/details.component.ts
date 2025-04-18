import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../core/models/Residence';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  name!:string;
  residence!:Residence;
  listResidences:Residence[]=[
      {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/R4.jpg", status: "Disponible"},
       {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/R4.jpg", status: "Disponible" },
       {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R4.jpg", status: "Vendu"},
       {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/R4.jpg", status: "En Construction"}
     ];
  constructor(private acr:ActivatedRoute){}
  
  ngOnInit(){
    this.name=this.acr.snapshot.params['param'];
    this.residence=this.listResidences.filter(res=>res.name==this.name)[0]
  }

}
