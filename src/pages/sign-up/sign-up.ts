import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {LoginPage} from "../login/login";

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  userData = {
    email:"",
    password :"",
    confirm_password : ""
  }

  signUp(){
    this.authService.postData(this.userData,"users.json").subscribe(
      data =>{
        console.log(data);
        this.navCtrl.push(LoginPage);
      }
    )
  }

  showNotification(data){

  }

  showError(error):any{

  }
}
