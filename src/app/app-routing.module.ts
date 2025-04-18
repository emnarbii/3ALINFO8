import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './residences/residences.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';
import { ResidenceFormComponent } from './residence-form/residence-form.component';

const routes: Routes = [

  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"residences", component:ResidencesComponent,
  //    children:[
  //   {path:':id', component:DetailsComponent}
  // ]
},
{path:'add',component:ResidenceFormComponent},
{path:'test',component:HomeComponent},
  {path:"details/:param", component:DetailsComponent},
  {path:"**", component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
