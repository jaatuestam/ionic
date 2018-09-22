import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {HomePage} from "../home/home";
import {SignUpPage} from "../sign-up/sign-up";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private credentials: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,private fB:FormBuilder) {
    this.credentials = this.fB.group({
        email: new FormControl('',Validators.compose( [
          Validators.required,Validators.pattern('')
      ])),
        password: ['',Validators.required]
    });
  }

  login(){
    console.log(this.credentials);
    this.navCtrl.push(HomePage);
  }

  goSignUp(){
    this.navCtrl.push(SignUpPage);
  }


  miTitulo = "Puede acceder desde aqui";



  ionViewDidLoad() {
    console.log(this.miTitulo);
  }

}
