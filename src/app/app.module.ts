import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

import { MyApp } from './app.component';
import { BuscaProvider } from '../providers/busca/busca';
import { HttpClientModule } from '@angular/common/http';
import { DialogoProvider } from '../providers/dialogo/dialogo';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BuscaProvider,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DialogoProvider,
    FingerprintAIO,
  ]
})
export class AppModule {}
