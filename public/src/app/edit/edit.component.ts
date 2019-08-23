import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  animal : any = {} ;
  id : any ;
  errors : any = {} ;

  constructor(private _httpService : HttpService, private _active : ActivatedRoute, private _router : Router) { }

  ngOnInit() {

    let observable : Observable<any> = this._active.params;
    observable.subscribe(data => {
      this.id = data._id;
      this.getPet();
  
    })

  }

  getPet() {
    let observable = this._httpService.getOneAnimal(this.id);
    observable.subscribe(data => {
      this.animal = data;      
    });
  }

  updateAnimal() {
    let newObservable = this._httpService.updateAnimal(this.id, this.animal);
    newObservable.subscribe(data => {
      if(data['errors']) {
        this.errors = data['errors'];
      } else {
        this._router.navigate([`/detail/${this.id}`]);
      }
    })
  }

}
