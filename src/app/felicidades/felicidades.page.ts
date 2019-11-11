import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-felicidades',
  templateUrl: './felicidades.page.html',
  styleUrls: ['./felicidades.page.scss'],
})
export class FelicidadesPage implements OnInit {

  constructor(public router: Router) { }

  scanear(){
    this.router.navigateByUrl('/tabs/trofeos');
  }

  ngOnInit() {
  }

}
