import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scaner',
  templateUrl: './scaner.page.html',
  styleUrls: ['./scaner.page.scss'],
})
export class ScanerPage implements OnInit {

  Scancode = null;

  constructor(public router: Router, private barcodeScanner: BarcodeScanner) { }

  scanear(){
    this.barcodeScanner.scan().then(barcodeData =>{
      let scan = JSON.parse(barcodeData.text);
      let date = new Date();
      if(scan.flag == "0"){
        localStorage.setItem("id", scan.id);
        localStorage.setItem("frase", scan.description);
        localStorage.setItem("finicio", date.toString());
        this.router.navigateByUrl('/recorrido');
      }
    },(error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
