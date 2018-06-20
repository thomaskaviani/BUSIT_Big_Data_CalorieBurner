import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Food} from "../../classes/food";
import {Http} from "@angular/http";

/**
 * Generated class for the EditChoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-choice',
  templateUrl: 'edit-choice.html',
})
export class EditChoicePage {
  amount = 1;
  food: Food;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.food = this.navParams.data;
  }

  clickedSave(food :Food) {
    console.log('cliked on ',food.name);
    this.http.post('https://service.eu.apiconnect.ibmcloud.com/gws/apigateway/api/7f471770f94d9fe2ad5aa2a1cf2ac2ef5607c615ff39c53d9296f1b1b5547932/foodtracker/foods/create',food).subscribe();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditChoicePage');
  }
  delAmount() {
    if(this.food.amount >0)  this.food.amount--;
  }
  addAmount(){
    this.food.amount++;
  }

}
