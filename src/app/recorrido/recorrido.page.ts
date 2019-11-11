import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DatabaseService } from "../services/database.service";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recorrido',
  templateUrl: './recorrido.page.html',
  styleUrls: ['./recorrido.page.scss'],
})
export class RecorridoPage implements OnInit {

  id: string = localStorage.getItem("id");
  nombre: string = localStorage.getItem("name");
  correo: string = localStorage.getItem("email");
  points: string = localStorage.getItem("puntos");
  frase: string = localStorage.getItem("frase");
  fini: string = localStorage.getItem("finicio");
  puntuacion: number = 0;
  constructor(public alertController: AlertController, public router: Router, private barcodeScanner: BarcodeScanner, public db: DatabaseService) { }

  scanear(){
    this.barcodeScanner.scan().then(barcodeData =>{
      let scan = JSON.parse(barcodeData.text);

      let id = scan.id.toString();
      let fin = scan.flag.toString();
      let p = scan.points.toString();
      let descip;
      let img;
      let puntos;
      let pUser = 0;
      this.frase = scan.description;

      switch (id) {
        case "1":
            descip="Volcan de Pacaya"
            img = "/assets/img/trofeos/x5.png"
            puntos = 256;
          break;
        case "2":
            descip="Montaña el filon"
            img = "/assets/img/trofeos/x2.png"
            puntos = 200;
          break;
        case "3":
            descip="Mirador rostro maya"
            img = "/assets/img/trofeos/x1.png"
            puntos = 300;
          break;
        case "4":
            descip="Cerro mirandilla"
            img = "/assets/img/trofeos/x3.png"
            puntos = 250;
          break;
        case "5":
            descip="Volcan de fuego"
            img = "/assets/img/trofeos/x6.png"
            puntos = 351;
          break;
        case "6":
            descip="Volcan de acatenango"
            img = "/assets/img/trofeos/x4.png"
            puntos = 416;
          break;
        case "7":
            descip="Puente de Ixpanpajul"
            img = "/assets/img/trofeos/x8.png"
            puntos = 163;
          break;
        case "8":
            descip="Cuevas de bombil pek"
            img = "/assets/img/trofeos/x10.png"
            puntos = 260;
          break;
        case "9":
            descip="Cuevas de caxlampon"
            img = "/assets/img/trofeos/x9.png"
            puntos = 375;
          break;
        case "10":
            descip="Catarata la rinconada"
            img = "/assets/img/trofeos/x7.png"
            puntos = 201;
          break;
        case "11":
            descip="Umes tour"
            img = "/assets/img/trofeos/s1.png"
            puntos = 120;
          break;
      
        default:
            this.router.navigateByUrl('/home');
          break;
      }

      if(id == this.id && fin=="1"){
        this.puntuacion += parseInt(p);
        
      }else if(id == this.id && fin=="2"){
        let fi = new Date(this.fini)
        let ff = new Date()
        let resta = ff.getTime() - fi.getTime();
        let final = ff.getDate() + "/" + (ff.getMonth() +1) + "/" + ff.getFullYear()
        let tiempo = resta / 1000 / 60;
        let time = tiempo.toFixed(2);
        puntos += this.puntuacion; 
        pUser = parseInt(this.points)+puntos
        this.points = pUser.toString();
        let d = this.db.CreatePremio(this.correo, descip, img, puntos, time+" Minutos", final);
        let p = this.db.SumarPuntos(this.correo, this.points);
        let t = this.db.GetCanTrofeos(this.correo); 
        localStorage.setItem("puntos", this.points);
        this.router.navigateByUrl('/felicidades');
        
      }
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Informacion',
      message: 'En el camino encontraras códigos QR, los cuales tendrás que escanear para sumar puntos. Sigue las instrucciones que te dan los códigos escaneados para encontrar otros códigos.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: '¿estas seguro que deseas abandonar el recorrido?',
      message: 'Si abandonas se perderá el progreso y tus puntos no serán acreditados.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.router.navigateByUrl('/triste');
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
    console.log(this.id)
  }

}
