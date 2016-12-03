import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
@Injectable()
export class UtilProvider {
    constructor(public AlertCtrl:AlertController) {}
    doAlert(title, message, buttonText) {
      console.log(message);
      let alert = this.AlertCtrl.create({
          title: title,
          subTitle: message,
          buttons: [buttonText]
      });
      return alert; 
    }
}