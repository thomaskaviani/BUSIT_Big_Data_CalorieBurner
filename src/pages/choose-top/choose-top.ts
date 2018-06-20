import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import { EditChoicePage } from "../edit-choice/edit-choice";
import {Http} from "@angular/http";
import { Food} from "../../classes/food";

/**
 * Generated class for the ChooseTopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-top',
  templateUrl: 'choose-top.html',
})
export class ChooseTopPage {
  editChoicePage = EditChoicePage;
  foods : any[]= [];
  foodsAPI: any;
  constructor(public navCtrl: NavController, public toastCtrl:ToastController, public loadingCtrl: LoadingController,public navParams: NavParams, public http: Http) {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
    /*
    this.http.get('https://service.eu.apiconnect.ibmcloud.com/gws/apigateway/api/7f471770f94d9fe2ad5aa2a1cf2ac2ef5607c615ff39c53d9296f1b1b5547932/foodtracker/foods?userID=1')
      .map(res => res.json())
      .subscribe(data => {
        //console.log(data.docs);
        data.docs.map((f) =>{
          this.http.get('https://trackapi.nutritionix.com/v2/search/item?nix_item_id=' + f.foodID +'&x-app-id=d94fc3b9&x-app-key=a3ae207db5b2c27599009cc7c58e617d')
            .map(res => res.json())
            .subscribe(data =>{
                  data = data.foods[0]
                  let food = new Food(f._id,data.food_name,data.food_name,data.nf_calories,f.amount,"hi",true,data.photo.thumb);
                  this.foods.push(food);
          });

        })
      });
      */
    let food = new Food("20",'Lemon',"1",'1231513a15d1',24,1,1,null,true,"https://d2xdmhkmkbyw75.cloudfront.net/653_thumb.jpg","","");
    this.foods.push(food);
    let food2 = new Food("2020",'Grapefuit',"1",'1231513a15d1qsd',52,1,1,null,false,"https://d2xdmhkmkbyw75.cloudfront.net/589_thumb.jpg","","");
    this.foods.push(food2);
    let food3 = new Food("2020",'Banana',"1",'1231513a15d1qsd',105,2,1,null,false,"https://d2xdmhkmkbyw75.cloudfront.net/399_thumb.jpg","","");
    this.foods.push(food3);
    let food4 = new Food("2020",'Fries',"1",'1231513a15d1qsd',365,26,1,null,false,"https://d2xdmhkmkbyw75.cloudfront.net/564_thumb.jpg","","");
    this.foods.push(food4);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseTopPage');
  }
  itemSelected(food){
    this.showAlert('clicked op iets')
    this.navCtrl.push(this.editChoicePage,food);
  }
  showAlert(text:string) {
  }

}
