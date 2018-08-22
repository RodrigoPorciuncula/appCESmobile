import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BuscaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BuscaProvider {

  items: any;

  constructor(public http: HttpClientModule) {
    console.log('Hello BuscaProvider Provider');
  }

  filtrarItens(termoBusca) {
    return this.items.filter((item) => {
      return item.nomeObjeto.toLowerCase().indexOf(termoBusca.toLowerCase()) > -1;
    });
  }

  setItems(listaItens) {
    this.items = listaItens;
  }

}
