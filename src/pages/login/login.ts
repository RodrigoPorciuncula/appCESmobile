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
    this.fingerprintOptions = {
      clientId: 'fingerprint-demo',
      clientSecret: 'password',
      disableBackup: true
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async showFingerprintDialog() {
    try {
      await this.platform.ready();
      const available = await this.fingerprint.isAvailable();
      console.log(available);
      if(available === "OK") {
        const result = await this.fingerprint.show(this.fingerprintOptions);
        console.log(result);
      }

    }
    catch (e) {
      console.log(e);
    }
  }

}
