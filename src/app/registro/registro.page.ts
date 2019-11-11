import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DatabaseService } from "../services/database.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  image:string ="/assets/img/avatar/ico0.png"; 
  nombre:string = "";
  correo: string = localStorage.getItem("email");
  databaseObj: SQLiteObject;

  constructor(public router: Router, public db: DatabaseService) { }

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

    let d = this.db.CreateUser(this.nombre, this.correo, this.image, 0)
    
    localStorage.setItem("email", this.correo);
    localStorage.setItem("name", this.nombre);
    localStorage.setItem("imagen", this.image);
    localStorage.setItem("puntos", "0");
    localStorage.setItem("trofeos", "0"); 
    this.router.navigateByUrl('/tabs');

  }



  ngOnInit() {
  }

}
