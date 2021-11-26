import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { person2} from '../Model/person2';
import { person } from '../Model/person';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor(private http: HttpClient) { }
  listUrl = 'http://localhost:8080/api/list';
  createUrl = 'http://localhost:8080/api/create';
  listPers(){
    return this.http.get<person[]>(this.listUrl);
  }
  createPers(persons:person): Observable<person>{
    return this.http.post<person>(this.createUrl,persons);

  }
}
