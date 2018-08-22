import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalheObjetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-objeto',
  templateUrl: 'detalhe-objeto.html',
})
export class DetalheObjetoPage {
  private objeto: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.objeto = navParams.data.objeto;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheObjetoPage');
    console.log("PAGE DETALHE OBJETO");
    console.log(this.objeto.nomeObjeto);
    console.log(this.objeto.quantidadeObjeto);
  }

}
