import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loadingCtrl: LoadingController,
              private alertCtrl:AlertController) {
  }

  ir_pagina3(){
      this.navCtrl.push("mi-pagina3");
  }

  ionViewDidLoad(){
      console.log("ionViewDidLoad");

  }
  ionViewWillEnter(){
      console.log("ionViewWillEnter");

  }
  ionViewDidEnter(){
      console.log("ionViewDidEnter");

  }
  ionViewWillLeave(){
      console.log("ionViewWillLeave");

  }
  ionViewDidLeave(){
      console.log("ionViewDidLeave");

  }
  ionViewWillUnload(){
      console.log("ionViewWillUnload");

  }
  ionViewCanEnter(){
      console.log("ionViewCanEnter");

      let promesa = new Promise((resolve, reject)=>{
        let confirm = this.alertCtrl.create({
          title: 'Pasar a página 2?',
          message: 'Estas seguro que quieres pasar a la página 2?',
          buttons: [
            {
              text: 'Cancelar',
              handler: () =>resolve(false)

            },
            {
              text: 'Aceptar',
              handler: () => resolve(true)
            }
          ]
        });
        confirm.present();

      });

      return promesa;

  }
  ionViewCanLeave(){
      console.log("ionViewCanLeave");
      console.log("Espere 2 segundos para salir...");
      //
      // let promesa = new Promise((resolve, reject)=>{
      //
      //   setTimeout(()=>{
      //     resolve(true);
      //   }, 2000);
      //
      // });
      //
      // return promesa;
      let loader = this.loadingCtrl.create({
        content: "Cargando...",
        duration: 2000
      });
        loader.present();

      let promesa = new Promise((resolve, reject)=>{

         setTimeout(()=>{
           loader.dismiss();
           resolve(true);
         }, 2000);

       });
       return promesa;
  }



}
