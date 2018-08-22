import { Injectable } from '@angular/core';
import {
    LoadingController,
    AlertController,
    ModalController,
    ToastController,
    Loading,
    Alert,
    Toast,
    Modal,
    LoadingOptions,
    AlertOptions,
    AlertButton
} from 'ionic-angular';

@Injectable()
export class DialogoProvider {
    private loading: Loading;
    private alert: Alert;
    private modal: Modal;
    private toast: Toast;
    constructor(
        private loadingCtrl: LoadingController,
        private alertCtrl: AlertController,
        private modalCtrl: ModalController,
        private toastCtrl: ToastController
    ) { }

    showLoading(opts?: LoadingOptions): void {
        if (!!this.loading) return;
        // this.loading = this.loadingCtrl.create(opts);
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<div> <img width="400px" height="400px" src="assets/imgs/loadCesMobile.gif" /> </div>'
        });
        this.loading.present();
    }
    hideLoading(): void {
        if (!this.loading) return;
        this.loading.dismiss();
        this.loading = null;
    }
    showMessage(message: string, title?: string, button?: AlertButton): void {
        var opts: AlertOptions = {
            message: message,
            title: title,
            buttons: [button || "OK"]
        }
        this.showAlert(opts);
    }
    showConfirm(message: string, title?: string, confirm?: AlertButton, cancel?: AlertButton): void {
        var opts: AlertOptions = {
            message: message,
            title: title,
            buttons: [
                cancel || "Cancelar",
                confirm || "OK"
            ]
        }
        this.showAlert(opts);
    }
    // private showAlert(opts: AlertOptions): void {
    //     if (!!this.loading) this.hideLoading();
    //     if (!!this.alert) this.hideAlert();
    //     this.alert = this.alertCtrl.create(opts);
    //     this.alert.present();
    // }

    showAlert(opts: AlertOptions, hasCancel: boolean = false, handler?: (value) => void): void {
        if (this.alert) this.hideAlert();
        if (this.loading) this.hideLoading();
        this.alert = this.alertCtrl.create();
        if (opts.title) this.alert.setMessage(opts.message);
        if (opts.message) this.alert.setMessage(opts.message);
        if (hasCancel) this.alert.addButton({ text: 'Cancelar', cssClass: 'cancel' });
        this.alert.addButton({ text: 'OK', handler: handler });
        this.alert.present();
    }
    private hideAlert(): void {
        this.alert.dismiss();
        this.alert = null;
    }
}

