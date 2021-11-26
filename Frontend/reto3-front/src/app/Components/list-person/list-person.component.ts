import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { person } from 'src/app/Model/person';
import { PersonServiceService } from 'src/app/Service/person-service.service';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  persons!: person[];
  constructor(
    private service: PersonServiceService,
    private router:Router) { }

  ngOnInit(){
    this.service.listPers()
    .subscribe(data=>{
      this.persons=data;
    })
  }

}
