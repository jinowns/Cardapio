import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ToastController} from 'ionic-angular';
import { CarrinhoPage } from '../carrinho/carrinho';

import { ProdutosProvider, Product } from '../../providers/produtos/produtos';
import { EditprodutosPage } from '../../pages/editproduto/editproduto';

@IonicPage()
@Component({
  selector: 'page-lanche',
  templateUrl: 'lanche.html',
})
export class LanchePage {
  products: any[] = [];
  onlyInactives: boolean = false;
  searchText: string = '';
  model: Product;
  categories: any[];
  //produto     : string = '';
  //valor       : string = '';
  //ingrediente : string = '';
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private toast: ToastController,
              private productProvider: ProdutosProvider) {
    this.model = new Product();
    if (this.navParams.data.id) {
      this.productProvider.get(this.navParams.data.id)
      .then((result: any) => {
        this.model = result;
      })
    }
  }

  ionViewDidLoad() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productProvider.getAll(!this.onlyInactives, this.searchText)
    .then((result: any[]) => {
        this.products = result;
    });
  }

  addProduct() {
      this.navCtrl.push(EditprodutosPage);
  }

  editProduct(id: number) {
      this.navCtrl.push(EditprodutosPage, { id: id });
  }

  removeProduct(product: Product) {
  this.productProvider.remove(product.id)
      .then(() => {
      // Removendo o produto do array de produtos
        var index = this.products.indexOf(product);
        this.products.splice(index, 1);
        this.toast.create({ message: 'Produto removido.', duration: 3000, position: 'botton' }).present();
      })
  }
  filterProducts(ev: any) {
    this.getAllProducts();
  }
  openCarrinho():void {
    this.navCtrl.push(CarrinhoPage)
  }
  SelecionadoHamburger(){
    
  }
  SelecionadoXBacon(){
   
  }
}
