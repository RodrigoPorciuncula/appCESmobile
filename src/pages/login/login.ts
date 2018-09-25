import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  fingerprintOptions: FingerprintOptions

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private fingerprint: FingerprintAIO, private platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async showFingerprintDialog() {
    this.fingerprint.show({
      clientId: 'Fingerprint-demo',
      clientSecret: 'password'
    })
    .then(result => {
      console.log(result);
      this.navCtrl.push('HomePage');
    })
    .catch(erro => {
      console.log('Erro: ', erro);
    })
  }

}
