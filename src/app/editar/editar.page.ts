import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../services/database.service";
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  image:string ="/assets/img/avatar/ico0.png"; 
  nombre:string = localStorage.getItem("name");
  correo: string = localStorage.getItem("email");
  

  constructor(public loadingController: LoadingController, public router: Router, public db: DatabaseService) { }

  imagen(obj){
    console.log(obj)
    let objeto = document.getElementById(obj.toString());
    for (let i = 0; i < 10; i++) {
      if(i==obj){
        document.getElementById(obj.toString()).classList.add('select')
      }
      else{
        document.getElementById(i.toString()).classList.remove('select')
      }
      this.image = "/assets/img/avatar/ico"+obj+".png";
    }
  }

  guardar(){

    console.log("nombre: "+ this.nombre+" imagen: "+this.image)

    let d = this.db.EditUser(this.nombre, this.correo, this.image)
    
    localStorage.setItem("email", this.correo);
    localStorage.setItem("name", this.nombre);
    localStorage.setItem("imagen", this.image);
    
    this.presentLoading()

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Actualizando',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
    await this.router.navigateByUrl('/tabs/inicio');
  }

  ngOnInit() {
  }

}
