import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { AlertController, Nav, Platform, ToastController, NavController, NavParams} from 'ionic-angular';
import { BebidaPage } from '../bebida/bebida';
import { LanchePage } from '../lanche/lanche';
import { PratoPage } from '../prato/prato';
import { SobremesaPage } from '../sobremesa/sobremesa';

import { ProdutosProvider, Product } from '../../providers/produtos/produtos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  public produto: any = [999];

  pages: Array<{title: string, component: any}>

  constructor(public navCtrl: NavController,
              private productProvider: ProdutosProvider) {

}

  openLanche():void {
      this.navCtrl.push(LanchePage)
    }
  openPrato():void {
    this.navCtrl.push(PratoPage)
  }
  openSobremesa():void {
    this.navCtrl.push(SobremesaPage)
  }
  openBebida():void {
    this.navCtrl.push(BebidaPage)
  }

}
