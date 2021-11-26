import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonComponent } from './Components/create-person/create-person.component';
import {ListPersonComponent} from './Components/list-person/list-person.component';
const routes: Routes = [
  {path:'listPerson', component: ListPersonComponent},
  {path:'createPerson',component: CreatePersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
