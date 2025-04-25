import { Injectable } from '@angular/core';
import { Residence } from '../models/Residence';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResidenceService {
  constructor(private http: HttpClient) {}
  url="http://localhost:3000/residences"
//get residence list
  getList() {
    return this.http.get<Residence[]>('http://localhost:3000/residences');
  }

  //get residence By ID
  getById(id:number){
    return this.http.get<Residence>(this.url+ '/'+ id)

  }

  //add new residence 
  add(r:Residence){
    return this.http.post(this.url,r)

  }


   //delete  residence 
   delete(id:number){
    return this.http.delete(this.url+ '/'+ id)

  }


   //update residence 
   update(id:number, r:Residence){
    return this.http.put(this.url+ '/'+ id,r)

  }
}
