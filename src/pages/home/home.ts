import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { DetailPage } from "../detail/detail";
import {FoodService} from "../../providers/food-service/food-service";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  foods: any;
  detailPage : any;
  constructor(public navCtrl: NavController, public http: Http,public foodService:FoodService) {
    this.detailPage = DetailPage;
    this.http.get('https://service.eu.apiconnect.ibmcloud.com/gws/apigateway/api/7f471770f94d9fe2ad5aa2a1cf2ac2ef5607c615ff39c53d9296f1b1b5547932/foodtracker/foods?userID=1')
      .map(res => res.json())
      .subscribe(data => {
        this.foods = data.docs;
      });

  }
  ngOnInit(){
    this.reload();
  }
  itemSelected(food: any){
    console.log("Clicked on ", food.name)
    this.navCtrl.push(this.detailPage, food)
  }
  reload(){
    this.foods = [];
    this.http.get('https://service.eu.apiconnect.ibmcloud.com/gws/apigateway/api/7f471770f94d9fe2ad5aa2a1cf2ac2ef5607c615ff39c53d9296f1b1b5547932/foodtracker/foods?userID=1')
      .map(res => res.json())
      .subscribe(data => {
        this.foods = data.docs;
      });
  }
  //https://jsonplaceholder.typicode.com/users

}
