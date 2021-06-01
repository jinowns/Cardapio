import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BebidaPage } from '../pages/bebida/bebida';
import { PratoPage } from '../pages/prato/prato';
import { SobremesaPage } from '../pages/sobremesa/sobremesa';
import { LanchePage } from '../pages/lanche/lanche';
import { CarrinhoPage } from '../pages/carrinho/carrinho';

import { BasedadosProvider } from '../providers/basedados/basedados';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              dbProvider:BasedadosProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
         //Criando o banco de dados
         dbProvider.createDatabase()
         .then(() => {
            // fechando a SplashScreen somente quando o banco for criado
            this.openHomePage(splashScreen);
         })
         .catch(() => {
            // Caso ocorrer erro na criação do banco
            this.openHomePage(splashScreen);
         });
    });
    platform.ready().then(() =>{
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  private openHomePage(splashScreen: SplashScreen) {
    splashScreen.hide();
    this.rootPage = HomePage;
 }
}
  

