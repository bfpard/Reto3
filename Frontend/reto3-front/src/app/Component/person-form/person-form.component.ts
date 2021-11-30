
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/Model/person';
import { PersonServiceService } from 'src/app/Service/person-service.service';
@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  fg !: FormGroup;
  persons: Person = new Person();
  personList: Person[] = [];
  constructor(private fb:FormBuilder, private perservice: PersonServiceService,private route: Router) { }

  ngOnInit(): void {
    this.listarPersona();
    this.fg = this.fb.group({
      id: [''],
      fullName: [''],
      birth: ['']
    });

    }

    crearPersona(){
      console.log(this.fg);
      this.persons.id = this.fg.value.id;
      this.persons.fullName = this.fg.value.fullName;
      this.persons.birth = this.fg.value.birth;
      this.perservice.crearPerson(this.persons)
      .subscribe(data=>{
        console.log(data);
        this.listarPersona();
        alert("La persona "+this.persons.fullName+" ha sido creada")
      });
    }

    listarPersona(){
      this.perservice.listarPerson()
      .subscribe(datos=>{
        this.personList = datos;
      });
    }

    clickEditPersona(per: Person){
      this.fg.controls['id'].setValue(per.id);
      this.fg.controls['fullName'].setValue(per.fullName);
      this.fg.controls['birth'].setValue(per.birth);
    }

    editarPersona(){
      this.persons.id = this.fg.value.id;
      this.persons.fullName = this.fg.value.fullName;
      this.persons.birth = this.fg.value.birth;
      console.log(typeof(this.persons.id));
        console.log(this.persons.id);
      this.perservice.editarPerson(this.persons).subscribe(res=>{
        this.listarPersona();
      });
    }

    eliminarPersona(per:Person){
      this.perservice.eliminarPerson(per).subscribe(res=>{
        this.listarPersona();
        alert("La persona ha sido eliminada");
      })

    }
}


