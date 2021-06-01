import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { ProdutosProvider, Product } from '../../providers/produtos/produtos';
import { CategoriasProvider } from '../../providers/categorias/categorias';
@IonicPage()
@Component({
selector: 'page-editproduto',
templateUrl: 'editproduto.html',
})
export class EditprodutosPage {
  model: Product;
  categories: any[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private toast: ToastController, 
              private productProvider:ProdutosProvider,
              private categoryProvider: CategoriasProvider) {
    this.model = new Product();
    if (this.navParams.data.id) {
      this.productProvider.get(this.navParams.data.id)
      .then((result: any) => {
        this.model = result;
      })
    }
  }
  ionViewDidLoad() {
    this.categoryProvider.getAll()
    .then((result: any[]) => {
      this.categories = result;
    })
    .catch(() => {
      this.toast.create({ message: 'Erro ao carregar as categorias.', duration: 3000, position: 'botton' }).present();
    });
  }
  save() {
    this.saveProduct()
    .then(() => {
      this.toast.create({ message: 'Produto salvo.', duration: 3000, position: 'botton' }).present();
      this.navCtrl.pop();
    })
    .catch(() => {
      this.toast.create({ message: 'Erro ao salvar o produto.', duration: 3000, position: 'botton' }).present();
    });
  }
  private saveProduct() {
    if (this.model.id) {
      return this.productProvider.update(this.model);
    } else {
      return this.productProvider.insert(this.model);
    }
  }
}