import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarrinhoPage } from '../carrinho/carrinho';

import { ProdutosProvider, Product } from '../../providers/produtos/produtos';

@IonicPage()
@Component({
  selector: 'page-lanche',
  templateUrl: 'lanche.html',
})
export class LanchePage {
  products: any[] = [];
  onlyInactives: boolean = false;
  searchText: string = null;
  //produto     : string = '';
  //valor       : string = '';
  //ingrediente : string = '';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private productProvider: ProdutosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanchePage');
  }
  getAllProducts() {
    this.productProvider.getAll(!this.onlyInactives, this.searchText)
    .then((result: any[]) => {
        this.products = result;
    });
}
  openCarrinho():void {
    this.navCtrl.push(CarrinhoPage)
  }

}
