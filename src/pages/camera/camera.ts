import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
import {ChooseTopPage} from "../choose-top/choose-top";
import {Http} from "@angular/http";


@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})

export class CameraPage {

  private image: string;



  constructor(public navCtrl: NavController, private camera: Camera, public alertCtrl: AlertController, private domSanitizer: DomSanitizer, public http: Http) {

  }
  onTakePictureTest(){
	  
	const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: true,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
      
    }, (err) => {
      this.displayErrorAlert(err);
      });



    
	
  }
  onTakePicture() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: true,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
      this.displayErrorAlert(err);
      });

  }

  displayErrorAlert(err) {
    console.log(err);
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Error while trying to capture picture',
      buttons: ['OK']
    });
    alert.present();
  }

  onSendImage() {

    this.http.get('https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=0796c9e49b6cce59294f4ef0c0678ecc8c17c09f&url=https://i.ndtvimg.com/i/2015-08/banana_625x350_61439959915.jpg&version=2016-05-20')
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);;
      });
    this.navCtrl.push(ChooseTopPage);


  }



}
