import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../services/database.service";

@Component({
  selector: 'app-trofeos',
  templateUrl: './trofeos.page.html',
  styleUrls: ['./trofeos.page.scss'],
})
export class TrofeosPage implements OnInit {

  datos:any;
  correo: string = localStorage.getItem("email");
  imagen: string = "/assets/img/t2.png";
  descrip: string = "Algun Lugar";
  fecha: string = "00/00/0000";
  tiempo: string = "00 Minutos";
  trofeos: string = localStorage.getItem("trofeos");
  trof: number = 0;
  ok: number = 0;
  constructor(public db: DatabaseService) { }
  
  showModal(dato){
    this.imagen = dato.imagen;
    this.descrip = dato.descripcion;
    this.fecha = dato.fecha;
    this.tiempo = dato.tiempo;
    const modal = document.getElementById('modal')
    const blur = document.getElementById('blur')
    modal.classList.toggle('mostrar');
    blur.classList.toggle('blur');
  }

  hideModal(){
    const modal = document.getElementById('modal')
    const blur = document.getElementById('blur')
    modal.classList.toggle('mostrar');
    blur.classList.toggle('blur');
  }

  GetTrof(){
    this.db.GetTrofeos(this.correo).then((data: any) => {
      console.log(data);
      this.datos = data;
    }, (error) => {
      console.log(error);
    })
  }

  numTrof(){
    this.trofeos = localStorage.getItem("trofeos");
    this.trof = parseInt(this.trofeos);
    this.ok = this.trof % 2;

    if(this.trof >= 8 && this.ok == 1 ){
      this.ok = 1;
    }else{
      this.ok = 2;
    }
  }

  async ionViewWillEnter(){
    console.log("estoy entrando trofeos")
    await this.GetTrof()
    await this.numTrof()
  }

  ngOnInit() {
    this.GetTrof()
    this.numTrof()
  }

}
