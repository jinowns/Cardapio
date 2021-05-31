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
import { CarrinhoPage } from '../pages/carrinho/carrinho';
import { BasedadosProvider } from '../providers/basedados/basedados';
import { ProdutosProvider } from '../providers/produtos/produtos';
import { CategoriasProvider } from '../providers/categorias/categorias';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BebidaPage,
    PratoPage,
    SobremesaPage,
    LanchePage,
    CarrinhoPage
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
    LanchePage,
    CarrinhoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BasedadosProvider,
    BasedadosProvider,
    ProdutosProvider,
    CategoriasProvider
  ]
})
export class AppModule {}
