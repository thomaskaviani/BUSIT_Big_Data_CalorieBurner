import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from "../../providers/user-service/user-service";

@Component({
  selector: 'page-cloud',
  templateUrl: 'cloud.html'
})
export class CloudPage {


  constructor(public navCtrl: NavController, public UserService:UserService) {


  }


}
