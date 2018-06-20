import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';
//import { CameraMock } from './mocks/CameraMock';
import { HttpClientModule } from '@angular/common/http';

import { CloudPage } from '../pages/cloud/cloud';
import { HomePage } from '../pages/home/home';
import { CameraPage } from '../pages/camera/camera';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DetailPage } from "../pages/detail/detail";
import { ChooseTopPage } from "../pages/choose-top/choose-top";
import {EditChoicePage} from "../pages/edit-choice/edit-choice";
import {UserService} from '../providers/user-service/user-service';
import { HttpClient } from '@angular/common/http';
import {EditFoodPage} from "../pages/edit-food/edit-food";
import {FoodService} from '../providers/food-service/food-service';

@NgModule({
  declarations: [
    MyApp,
    CloudPage,
    DetailPage,
    HomePage,
    CameraPage,
    EditChoicePage,
    EditFoodPage,
    ChooseTopPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CloudPage,
    DetailPage,
    HomePage,
    CameraPage,
    EditChoicePage,
    EditFoodPage,
    ChooseTopPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    HttpClient,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Camera,
    UserService,
    FoodService
  //{ provide: Camera, useClass: CameraMock} //if running on browser
  ]
})
export class AppModule {}