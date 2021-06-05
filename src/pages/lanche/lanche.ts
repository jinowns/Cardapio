import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarrinhoPage } from '../carrinho/carrinho';

/**
 * Generated class for the LanchePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-lanche',
  templateUrl: 'lanche.html',
})
export class LanchePage {
  produto     : string = '';
  valor       : string = '';
  ingrediente : string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanchePage');
  }
  openCarrinho():void {
    this.navCtrl.push(CarrinhoPage)
  }
  selectHamburger():void {
    this.produto     = 'Hamburger';
    this.valor       = '13';
    this.ingrediente =  'Carne, bacon, queijo, catchup, maionese e orégano';
  }

}
