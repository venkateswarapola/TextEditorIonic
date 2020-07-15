import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  textFormat : any;
  constructor(private storage: Storage,public alertController: AlertController) {
    this.storage.get('textFormat').then((val) => {
      if(val===null)
      {
        this.textFormat = "";
      }
      else{
        this.textFormat = val;
      }
    });
  }

  save(){
    this.storage.set('textFormat', this.textFormat);
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Saved Successfully !!',
      subHeader: '',
      message: 'Your changes are Saved ThankYou.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
