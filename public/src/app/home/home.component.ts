import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  animals : any = [];
  

  constructor(private _httpService : HttpService) { }

  ngOnInit() {
    this.getPets();
  }

  getPets() {
    let observable = this._httpService.getAnimals();
    observable.subscribe(data => {
      this.animals = data;
      
    });
  }
}
