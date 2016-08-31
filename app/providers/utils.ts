import {Injectable, Inject} from '@angular/core';
import {Alert} from 'ionic-angular';
@Injectable()
export class UtilProvider {
    doAlert(title, message, buttonText) {
      console.log(message);
      let alert = Alert.create({
          title: title,
          subTitle: message,
          buttons: [buttonText]
      });
      return alert; 
    }
}