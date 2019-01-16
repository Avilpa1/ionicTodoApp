import { ErrorHandler, Inject } from '@angular/core';
import { AlertController } from 'ionic-angular';

export class MyErrorHandler implements ErrorHandler {

    constructor(@Inject(AlertController) public alertCtrl: AlertController) {}

    handleError(error: any) {
        let alert = this.alertCtrl.create({
            title: "An error has occured",
            subTitle: "Something went terribly wrong, and now the world is ending.",
            buttons: ["Dismiss"]
        });
        alert.present();
        console.error(error);
    }
}