import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  
  databaseObj: SQLiteObject;

  constructor(private sqlite: SQLite) { 
    this.createTable()
  }

  createTable() {
    this.sqlite = new SQLite();
    this.sqlite.create({ name: "data.db", location: "default" }).then((db: SQLiteObject) => {
      this.databaseObj = db;
      db.executeSql("CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, correo TEXT, nombre TEXT, imagen TEXT, puntos TEXT)", []);
      db.executeSql("CREATE TABLE IF NOT EXISTS trofeo (id INTEGER PRIMARY KEY AUTOINCREMENT, usuario TEXT, descripcion TEXT, imagen TEXT, puntos TEXT, tiempo TEXT, fecha TEXT)", []);
      db.executeSql("CREATE TABLE IF NOT EXISTS comentario (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, imagen TEXT, texto TEXT, lugar TEXT)", []);
      console.log("se crearon las tablas")
    }).catch((error) => {
      console.log(error);
    }) 
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

  EditUser(nombre:string, correo:string, imagen:string){
    return new Promise ((resolve, reject) => {
      let sql = "UPDATE usuario SET nombre ='"+nombre+"', imagen ='"+imagen+"' WHERE correo ='"+correo+"'";
      this.databaseObj.executeSql(sql, []).then((data) =>{
        resolve(data);
        console.log("SE CREO USUARIO "+nombre)
      }, (error) => {
        console.log("NO SE CREO USUARIO "+nombre)
        reject(error);
      });
    });
  }

  CreatePremio(usuario:string, descripcion:string, imagen:string, puntos:number, tiempo:string, fecha:string){
    return new Promise ((resolve, reject) => {
      let sql = "INSERT INTO trofeo (usuario, descripcion, imagen, puntos, tiempo, fecha) VALUES ('"+usuario+"', '"+descripcion+"', '"+imagen+"', '"+puntos+"', '"+tiempo+"', '"+fecha+"')";
      this.databaseObj.executeSql(sql, []).then((data) =>{
        resolve(data);
        console.log("SE CREO Trofeo "+descripcion)
      }, (error) => {
        console.log("NO SE CREO Trofeo")
        reject(error);
      });
    });
  }

  CreateComent(usuario:string, descripcion:string, imagen:string, lugar:string){
    return new Promise ((resolve, reject) => {
      let sql = "INSERT INTO comentario (nombre, imagen, texto, lugar) VALUES ('"+usuario+"', '"+imagen+"', '"+descripcion+"', '"+lugar+"')";
      this.databaseObj.executeSql(sql, []).then((data) =>{
        resolve(data);
        console.log("SE CREO el comentario "+descripcion)
      }, (error) => {
        console.log("NO SE CREO el comentario")
        reject(error);
      });
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

  GetUserInfo(correo){
    return new Promise ((resolve, reject) => {
      this.databaseObj.executeSql("SELECT * FROM usuario WHERE correo ='"+correo+"'", []).then((data) => {
        let arrayBloqueo = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            arrayBloqueo.push({
              correo: data.rows.item(i).correo,
              nombre: data.rows.item(i).nombre,
              imagen: data.rows.item(i).imagen,
              puntos: data.rows.item(i).puntos
            });      
            localStorage.setItem("email", data.rows.item(i).correo);
            localStorage.setItem("name", data.rows.item(i).nombre);
            localStorage.setItem("imagen", data.rows.item(i).imagen);
            localStorage.setItem("puntos", data.rows.item(i).puntos);      
          } 
        }
        
        resolve(arrayBloqueo);
      }, (error) => {
        reject(error);
      })
    })
  }

  SumarPuntos(correo, puntos){
    return new Promise ((resolve, reject) => {
      this.databaseObj.executeSql("UPDATE usuario SET puntos ='"+puntos+"' WHERE correo = '"+correo+"'", []).then((data) => {        
        console.log("se sumaron los puntos")
        resolve(data);
      }, (error) => {
        console.log(error)
        reject(error);
      })
    })
  }

  GetCanTrofeos(correo){
    return new Promise ((resolve, reject) => {
      this.databaseObj.executeSql("SELECT * FROM trofeo WHERE usuario ='"+correo+"'", []).then((data) => {
        let arrayBloqueo = [];
        localStorage.setItem("trofeos", data.rows.length);
               
        resolve(arrayBloqueo);
      }, (error) => {
        reject(error);
      })
    })
  }

  GetComent(coment){
    return new Promise ((resolve, reject) => {
      this.databaseObj.executeSql("SELECT * FROM comentario WHERE lugar ='"+coment+"'", []).then((data) => {
        let arrayBloqueo = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            arrayBloqueo.push({
              id: data.rows.item(i).id,
              nombre: data.rows.item(i).nombre,
              imagen: data.rows.item(i).imagen,
              texto: data.rows.item(i).texto,
              lugar: data.rows.item(i).lugar
            });            
          } 
        }
        resolve(arrayBloqueo);
      }, (error) => {
        reject(error);
      })
    })
  }

  GetTrofeos(usuario){
    return new Promise ((resolve, reject) => {
      this.databaseObj.executeSql("SELECT * FROM trofeo WHERE usuario ='"+usuario+"'", []).then((data) => {
        let arrayBloqueo = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            arrayBloqueo.push({
              id: data.rows.item(i).id,
              usuario: data.rows.item(i).usuario,
              descripcion: data.rows.item(i).descripcion,
              imagen: data.rows.item(i).imagen,
              puntos: data.rows.item(i).puntos,
              tiempo: data.rows.item(i).tiempo,
              fecha: data.rows.item(i).fecha
            });            
          } 
        }
        resolve(arrayBloqueo);
      }, (error) => {
        reject(error);
      })
    })
  }

}
