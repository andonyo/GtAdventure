import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  name: string = localStorage.getItem("name");
  imagen: string = localStorage.getItem("imagen");
  correo: string = localStorage.getItem("email");
  puntos: string = localStorage.getItem("puntos");
  trofeos: string = localStorage.getItem("trofeos");
  

  constructor(public router: Router, private afAuth: AngularFireAuth) { }

  logout(){
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/home');
  }

  editar(){
    this.router.navigateByUrl('/editar');
  }

  ionViewWillEnter(){
    console.log("estoy entrando perfil")
    this.name= localStorage.getItem("name");
    this.imagen= localStorage.getItem("imagen");
    this.correo = localStorage.getItem("email");
    this.puntos= localStorage.getItem("puntos");
    this.trofeos = localStorage.getItem("trofeos");
  }

  ngOnInit() {
    
  }

}
