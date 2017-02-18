import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InputBase } from '../compartilhado/inputBase.component'

@Component({
    selector:"page-login",
    templateUrl:"login.view.html"
})

export class LoginPage{
  constructor(
    public navCtrl:NavController
  ){

  }
}
