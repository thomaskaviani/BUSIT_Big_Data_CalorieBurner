
import { Injectable } from '@angular/core';
import {Food} from "../../classes/food";
import {Http} from "@angular/http";

/*
  Generated class for the FoodServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoodService {
  foods : any;
  constructor(public http: Http) {
    console.log('Hello FoodServiceProvider Provider');
  }
  add(food:Food){
    this.http.post('https://service.eu.apiconnect.ibmcloud.com/gws/apigateway/api/7f471770f94d9fe2ad5aa2a1cf2ac2ef5607c615ff39c53d9296f1b1b5547932/foodtracker/foods/create',food).subscribe();
  }
  update(food:Food){
    this.delete(food);
    this.add(food);
  }
  delete(food:Food){
    this.http.delete('https://service.eu.apiconnect.ibmcloud.com/gws/apigateway/api/7f471770f94d9fe2ad5aa2a1cf2ac2ef5607c615ff39c53d9296f1b1b5547932/foodtracker/foods?_id=' + food._id+'&_rev=' + food._rev).subscribe();
  }
  get(){
    this.http.get('https://service.eu.apiconnect.ibmcloud.com/gws/apigateway/api/7f471770f94d9fe2ad5aa2a1cf2ac2ef5607c615ff39c53d9296f1b1b5547932/foodtracker/foods?userID=1')
      .map(res => res.json())
      .subscribe(data => {
        this.foods = data.docs;
      });

    return this.foods
  }

}
