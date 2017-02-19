import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage} from '../pages/login/login.page';
import { InputBase } from '../compartilhado/inputbase/inputBase.component';
import {AngularFireModule} from 'angularFire2';

export const fireBaseConfig = {
    apiKey: "AIzaSyBACv__a7FtG3udDmPnTtC-cQyOFC8cLQA",
    authDomain: "njord-22339.firebaseapp.com",
    databaseURL: "https://njord-22339.firebaseio.com",
    storageBucket: "njord-22339.appspot.com",
    messagingSenderId: "282964781528"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    InputBase
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    InputBase
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
