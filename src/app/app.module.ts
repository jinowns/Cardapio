import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BebidaPage } from '../pages/bebida/bebida';
import { PratoPage } from '../pages/prato/prato';
import { SobremesaPage } from '../pages/sobremesa/sobremesa';
import { LanchePage } from '../pages/lanche/lanche';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BebidaPage,
    PratoPage,
    SobremesaPage,
    LanchePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BebidaPage,
    PratoPage,
    SobremesaPage,
    LanchePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
