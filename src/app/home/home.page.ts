import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Router } from '@angular/router';
import { DatabaseService } from "../services/database.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  databaseObj: SQLiteObject; // Database instance object
  name_model:string = ""; // Input field model
  row_data: any = []; // Table rows
  usuarioTabla:string = "CREATE TABLE IF NOT EXISTS usuario(id INTEGER PRIMARY KEY AUTOINCREMENT, name varchar(255), correo varchar(255), img varchar(255), puntos int(255))"; // Table name
  trofeoTabla:string = "CREATE TABLE IF NOT EXISTS trofeo(id INTEGER PRIMARY KEY AUTOINCREMENT, usuario INTEGER, descripcion TEXT, img TEXT, puntos INTEGER, tiempo TEXT, fecha, TEXT)";
  readonly database_name:string = "data.db"; // DB name
  private lisener: any;


  constructor(private afAuth: AngularFireAuth, private sqlite: SQLite, public router: Router, public db: DatabaseService) {
    //this.createDB()
    //this.createTable()
    //this.createTable(this.trofeoTabla) 
  }

  async inicio(){
    //this.router.navigateByUrl('/tabs');
    let ema = this.afAuth.auth.currentUser.email;
    
    localStorage.setItem("email", this.afAuth.auth.currentUser.email);
    localStorage.setItem("name", this.afAuth.auth.currentUser.displayName);
    
    console.log(ema);
    let s = this.db.GetUsuario(ema);
    console.log(s);
    if (await s == true){
      
      let datU = this.db.GetUserInfo(ema).then((data: any) =>{
        this.lisener = data
      }, (error) =>{
        console.log(error)
      });
      let tro = this.db.GetCanTrofeos(ema);
      console.log(await datU)
      
      console.log("trof: "+tro)
      
      let ss = await datU["0"]
      console.log(ss)
      this.router.navigateByUrl('/tabs');
    }else{
      this.router.navigateByUrl('/registro');
    }
    console.log(s);
  }




  CreateUser(nombre:string, correo:string, imagen:string, puntos:number){
    return new Promise ((resolve, reject) => {
      let sql = "INSERT INTO usuario (correo, nombre, imagen, puntos) VALUES ('"+correo+"', '"+nombre+"', '"+imagen+"', '"+puntos+"')";
      this.databaseObj.executeSql(sql, []).then((data) =>{
        resolve(data);
        console.log("SE CREO USUARIO "+nombre)
      }, (error) => {
        console.log("NO SE CREO USUARIO "+nombre)
        reject(error);
      });
    });
  }

  getRows(nombre) {
    this.databaseObj.executeSql("SELECT * FROM " + nombre, [])
      .then((res) => {
        this.row_data = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }
        }
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
  }

  GetUsuario(correo){
    return new Promise ((resolve, reject) => {
      this.databaseObj.executeSql("SELECT * FROM usuario WHERE correo ='"+correo+"'", []).then((data) => {
        let existe = false;
        if (data.rows.length > 0) {
          existe = true;
        }
        console.log(existe)
        resolve(existe);
      }, (error) => {
        console.log(error)
        reject(error);
      })
    })
  }
}

