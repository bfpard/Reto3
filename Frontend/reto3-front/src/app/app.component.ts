import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reto3-front';

  constructor(private router: Router){}

  list(){
    this.router.navigate(["listPerson"]);
  }

  create(){
    this.router.navigate(["createPerson"]);
  }
}
