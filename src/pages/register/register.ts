import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InAppBrowser } from "@ionic-native/in-app-browser";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  register : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private formBuilder: FormBuilder, private iab: InAppBrowser) {
    this.register = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  openRegistrationForm(){
    const browser = this.iab.create("https://www.ailbsindiaconference.com/registration");
    browser.show();    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  logForm() {
    console.log(this.register.value);
  }

}
