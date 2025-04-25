import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../core/models/Residence';
import { ResidenceService } from '../core/services/residence.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id!:number;
  residence!:Residence;

  constructor(private acr:ActivatedRoute, private rs:ResidenceService){}
  
  ngOnInit(){
    this.id=this.acr.snapshot.params['id'];
    this.rs.getById(this.id).subscribe(res=>this.residence=res)
  }

}
