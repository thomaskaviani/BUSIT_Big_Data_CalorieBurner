import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {Food} from "../../classes/food";
import {EditFoodPage} from "../edit-food/edit-food";
import {Http} from "@angular/http";

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  food: any;
  editFoodPage: EditFoodPage;
  constructor(public navCtrl: NavController, public toastCtrl:ToastController, public navParams: NavParams, public http:Http) {
    this.food = this.navParams.data;
    console.log(this.navParams.data);

  }
  favorate(food : Food) {
    this.food.favorite = !this.food.favorite
    this.http.delete('https://service.eu.apiconnect.ibmcloud.com/gws/apigateway/api/7f471770f94d9fe2ad5aa2a1cf2ac2ef5607c615ff39c53d9296f1b1b5547932/foodtracker/foods?_id=' + food._id+'&_rev=' + food._rev).subscribe();

    this.http.post('https://service.eu.apiconnect.ibmcloud.com/gws/apigateway/api/7f471770f94d9fe2ad5aa2a1cf2ac2ef5607c615ff39c53d9296f1b1b5547932/foodtracker/foods/create',food).subscribe();


    this.showAlert("favorate");
  }
  edit(food : Food) {
    this.showAlert("edit");
    this.navCtrl.push(EditFoodPage,food);

  }
  delete(food : Food) {
    this.http.delete('https://service.eu.apiconnect.ibmcloud.com/gws/apigateway/api/7f471770f94d9fe2ad5aa2a1cf2ac2ef5607c615ff39c53d9296f1b1b5547932/foodtracker/foods?_id=' + food._id+'&_rev=' + food._rev).subscribe();

    this.showAlert("delete");

  }
  showAlert(text:string) {
    const toast = this.toastCtrl.create({
      message: text,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

}
