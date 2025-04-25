import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';
import { ResidenceService } from '../core/services/residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
  adress = '';
  alt: string = 'image non dispo';
  listByAdress: Residence[] = [];
  listFavories: Residence[] = [];
  listResidences: Residence[] = [];
  // listResidences:Residence[]=[
  //   {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/R4.jpg", status: "Disponible"},
  //    {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/R4.jpg", status: "Disponible" },
  //    {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R4.jpg", status: "Vendu"},
  //    {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/R4.jpg", status: "En Construction"}
  //  ];

  constructor(private rs: ResidenceService) {}
  showLocation(res: Residence) {
    if (res.address === 'inconnu') {
      alert("l'adresse est inconnue");
    } else {
      alert("l'adresse est   " + res.address);
    }
  }

  addToFavorite(res: Residence) {
    if (!this.listFavories.includes(res)) {
      this.listFavories.push(res);
    }
  }

  ngOnInit() {
    this.rs.getList().subscribe((res) => (this.listResidences = res));
  }
  filterByAdress() {
    console.log(this.adress);
    return this.listResidences.filter((res) =>
      res.address.toLocaleLowerCase().includes(this.adress.toLocaleLowerCase())
    );
  }
}
