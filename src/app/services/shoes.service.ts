import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globalVars from 'src/assets/globalVars';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {



  constructor(private http: HttpClient) {}

  getShoes(){
    return this.http.get("https://heroshoes-951bb.firebaseio.com/.json");
  }




}