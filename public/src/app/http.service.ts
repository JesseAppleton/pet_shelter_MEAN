import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _httpClient :  HttpClient) { }

  createAnimal(animal) {
    return this._httpClient.post("/animals", animal);
  }

  getAnimals() {
    return this._httpClient.get("/animals");
  }

  getOneAnimal(_id) {
    return this._httpClient.get(`/animals/${_id}`);
  } 

  updateAnimal(_id, animal) {
    return this._httpClient.put(`/animals/${_id}`, animal);
  }

  removeAnimal(_id) {
    return this._httpClient.delete(`/animals/${_id}`);
  }

  changeAnimalStatus(_id, status) {
    return this._httpClient.put(`/animals/${_id}`, status);
  }
}
