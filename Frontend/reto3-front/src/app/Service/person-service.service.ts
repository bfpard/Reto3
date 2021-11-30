import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../Model/person';
@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  crearURL: string;
  listarURL: string;
  eliminaURL: string;
  editarURL: string;
  constructor(private http: HttpClient) { 
    this.crearURL= "http://localhost:8080/api/create";
    this.listarURL = "http://localhost:8080/api/list";
    this.editarURL = "http://localhost:8080/api/edit";
    this.eliminaURL = "http://localhost:8080/api/delete";
  }

  crearPerson(per:Person): Observable<Person>{
    return this.http.post<Person>(this.crearURL,per);
  }

  listarPerson(): Observable<Person[]>{
    return this.http.get<Person[]>(this.listarURL);
  }

  editarPerson(per:Person): Observable<Person> {
    return this.http.put<Person>(this.editarURL+"/"+per.id,per);
  }

  eliminarPerson(per:Person): Observable<Person>{
    return this.http.delete<Person>(this.eliminaURL+"/"+per.id);
  }

}
