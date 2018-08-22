import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { BuscaProvider } from '../../providers/busca/busca';
import { DialogoProvider } from '../../providers/dialogo/dialogo';
import _ from 'lodash';

@IonicPage({
  name: 'HomePage'
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private listaObjetos: any;
  private nomeUsuario: string;
  private termoBusca: string = '';
  private items: any;

  constructor(public navCtrl: NavController, private buscaProvider: BuscaProvider,
              private dialogo: DialogoProvider) {
    this.nomeUsuario = 'Rodrigo';
    this.listaObjetos = [
      {
        nomeObjeto: 'Computador',
        quantidadeObjeto: 5
      }, 
      {
        nomeObjeto: "Projetor",
        quantidadeObjeto: 10
      },
      {
        nomeObjeto: "Mesa",
        quantidadeObjeto: 12
      },
      {
        nomeObjeto: "Cadeira",
        quantidadeObjeto: 8
      },
      {
        nomeObjeto: "Cadeira de Rodas",
        quantidadeObjeto: 4
      },
      {
        nomeObjeto: "Cantina",
        quantidadeObjeto: 2
      }
    ];
    buscaProvider.setItems(this.listaObjetos);
  }

  ionViewDidLoad() {
    this.setFiltrarItens();
  }

  setFiltrarItens() {
    this.listaObjetos = this.buscaProvider.filtrarItens(this.termoBusca);
  }

  detalharObjetoDisp(item: any) {
    console.log("detalharObjetoDisp()");
    console.log(item.nomeObjeto + "Detalhar Objeto HOME");
    console.log(item.quantidadeObjeto + "Detalhar Objeto HOME");
    this.navCtrl.push("DetalheObjetoPage", {objeto: item});
  }

}
