import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-triste',
  templateUrl: './triste.page.html',
  styleUrls: ['./triste.page.scss'],
})
export class TristePage implements OnInit {

  constructor(public router: Router) { }

  scanear(){
    this.router.navigateByUrl('/tabs/scaner');
  }

  ngOnInit() {
  }

}
