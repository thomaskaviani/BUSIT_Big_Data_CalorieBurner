import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Food} from "../../classes/food";
import {Http} from "@angular/http";
import {HomePage} from "../home/home";

/**
 * Generated class for the EditFoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-food',
  templateUrl: 'edit-food.html',
})
export class EditFoodPage {
  food: Food;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.food = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditFoodPage');
  }
  clickedSave(food :Food) {
    console.log('cliked on ',food.name);
    this.http.delete('https://service.eu.apiconnect.ibmcloud.com/gws/apigateway/api/7f471770f94d9fe2ad5aa2a1cf2ac2ef5607c615ff39c53d9296f1b1b5547932/foodtracker/foods?_id=' + food._id+'&_rev=' + food._rev).subscribe();

    this.http.post('https://service.eu.apiconnect.ibmcloud.com/gws/apigateway/api/7f471770f94d9fe2ad5aa2a1cf2ac2ef5607c615ff39c53d9296f1b1b5547932/foodtracker/foods/create',food).subscribe();

    this.navCtrl.push(HomePage);

  }
  delAmount() {
    if(this.food.amount >0)  this.food.amount--;
  }
  addAmount(){
    this.food.amount++;
  }

}
