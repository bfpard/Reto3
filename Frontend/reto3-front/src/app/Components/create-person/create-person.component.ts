import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder,FormControl} from '@angular/forms'
import { person} from 'src/app/Model/person';
import { PersonServiceService } from 'src/app/Service/person-service.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {
  persons: person = new person();
  control!: FormGroup;
  constructor(private router:Router, private service:PersonServiceService,private fb:FormBuilder) { }

  ngOnInit():void {
    this.control = this.fb.group({
      id: '',
      fullName: '',
      birth: ''
    })
  }

  Save(){
    this.persons.fullName = this.control.value.fullName;
    this.persons.birth = this.control.value.birth;
    this.service.createPers(this.persons)
    .subscribe(data=>{
      alert("Se agrego con exito");
    })
  }

}
