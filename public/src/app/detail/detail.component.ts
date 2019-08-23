import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';


import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  animal : any = [];
  id : any ;
  errors : any ;

  constructor(private _httpService : HttpService, private _active : ActivatedRoute, private _router : Router) { }

  ngOnInit() {
    
    let observable : Observable<any> = this._active.params;
    observable.subscribe(data => {
      this.id = data._id;
    })

    this.getPet();
  }

  getPet() {
    let observable = this._httpService.getOneAnimal(this.id);
    observable.subscribe(data => {
      this.animal = data;
      
    });
  }

  removeAnimal() {
    let newObservable = this._httpService.removeAnimal(this.id);
      newObservable.subscribe(data => {
      if(data['errors']) {
        this.errors = data['errors'];
      } else {
        this._router.navigate(["/home"]);
      };
    });
  }

  like() {
    this.animal.isDisabled = !this.animal.isDisabled;
    this._httpService.changeAnimalStatus(this.id, this.animal).subscribe(data => {});
  }
}
