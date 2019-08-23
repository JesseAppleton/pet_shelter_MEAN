import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  animal : any = {};
  errors : any = {};

  constructor(private _httpService : HttpService, private _router: Router) { }

  ngOnInit() { }

  addAnimal() {
    let observable = this._httpService.createAnimal(this.animal);
    observable.subscribe(data => {
      console.log(data);
      if(data['errors']) {
        this.errors = data['errors'];
      } else {
        this._router.navigate(["/home"]);
      }
    });
  }
}
