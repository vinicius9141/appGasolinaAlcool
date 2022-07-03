import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public resultado = 'Resultado';
  public precoAlcool: number;
  public precoGasolina: number;
  public resulPreco: number;

  constructor(private alertController: AlertController) {}

  public calcAlcoolGas(): void {
    if (this.precoAlcool && this.precoGasolina) {
      this.resulPreco = this.precoGasolina / this.precoAlcool;
    } else {
      this.resultado = 'Preencha os campos corretamente';
    }

    if (this.resulPreco >= 0.7) {
      this.resultado = 'Melhor Utilizar Gasolina';
    } else {
      this.resultado = 'Melhor Utilizar Alcool';
    }
  }

  async presentAlert() {
    this.calcAlcoolGas();
    const alert = await this.alertController.create({
      header: 'Resultado com base nos preços informados',
      subHeader: 'Resultado: ' + this.resulPreco,
      message: this.resultado,
      buttons: ['Esta bem :)'],
    });

    await alert.present();
  }
}
