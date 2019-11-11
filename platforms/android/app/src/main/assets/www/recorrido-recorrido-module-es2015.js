(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recorrido-recorrido-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/recorrido/recorrido.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recorrido/recorrido.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content>\n  <div class=\"contEscaner\">\n    <div class=\"opciones\">\n        <ion-icon class=\"opIco\" (click)=\"presentAlertConfirm()\" name=\"arrow-back\"></ion-icon>\n        <div class=\"poCont\">\n            <ion-icon class=\"opIco\" name=\"trophy\"></ion-icon>\n            <p>{{puntuacion}}</p>\n        </div>  \n        <ion-icon class=\"opIco\" (click)=\"presentAlert()\" name=\"information-circle\"></ion-icon>\n    </div>\n    <div class=\"mont-cont\">\n        <img class=\"img-scan\" src=\"/assets/img/explo.png\" alt=\"\" width=\"250px\">\n        <img class=\"mont\" src=\"/assets/img/montains.png\" alt=\"\" width=\"100%\">\n        <div class=\"glovo\">\n          <p>{{frase}}</p>\n        </div>\n    </div>\n    <div class=\"conBtn\">\n      <button class=\"btn\" (click)=\"scanear()\">Scanear código</button>\n    </div>\n  </div>\n</ion-content>\n  "

/***/ }),

/***/ "./src/app/recorrido/recorrido.module.ts":
/*!***********************************************!*\
  !*** ./src/app/recorrido/recorrido.module.ts ***!
  \***********************************************/
/*! exports provided: RecorridoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecorridoPageModule", function() { return RecorridoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recorrido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recorrido.page */ "./src/app/recorrido/recorrido.page.ts");







const routes = [
    {
        path: '',
        component: _recorrido_page__WEBPACK_IMPORTED_MODULE_6__["RecorridoPage"]
    }
];
let RecorridoPageModule = class RecorridoPageModule {
};
RecorridoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_recorrido_page__WEBPACK_IMPORTED_MODULE_6__["RecorridoPage"]]
    })
], RecorridoPageModule);



/***/ }),

/***/ "./src/app/recorrido/recorrido.page.scss":
/*!***********************************************!*\
  !*** ./src/app/recorrido/recorrido.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contEscaner {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n  height: 100vh;\n  background: -webkit-gradient(linear, left top, right top, from(#0099ff), to(rgba(0, 145, 255, 0.74)));\n  background: linear-gradient(left, #0099ff, rgba(0, 145, 255, 0.74) 100%);\n}\n\n.opciones {\n  position: absolute;\n  top: 15px;\n  left: 10px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  font-size: 40px;\n  color: white;\n}\n\n.opIco {\n  margin: 5px 0;\n}\n\n.poCont {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.poCont p {\n  margin: 0;\n  font-size: 20px;\n}\n\n.img-scan {\n  position: relative;\n  bottom: -20px;\n  z-index: 5;\n}\n\n.glovo {\n  background: #3880ff;\n  position: absolute;\n  left: 40%;\n  top: -40%;\n  text-align: center;\n  color: white;\n  border-radius: 50%;\n}\n\n.glovo::after {\n  content: \"\";\n  border-left: 27px solid #3880ff;\n  border-top: 0px solid transparent;\n  border-bottom: 31px solid transparent;\n  position: absolute;\n  top: 97%;\n  left: 40%;\n  -webkit-transform: rotate(5deg);\n          transform: rotate(5deg);\n}\n\n.glovo p {\n  background: #3880ff;\n  border-radius: 50%;\n  padding: 10px;\n}\n\n.mont-cont {\n  position: relative;\n  width: 100%;\n}\n\n.mont {\n  position: absolute;\n  left: -10px;\n  bottom: -1px;\n  max-width: none;\n  width: 105%;\n}\n\n.conBtn {\n  width: 100%;\n  text-align: center;\n  background: #00882d;\n}\n\n.btn {\n  background: #c89800;\n  color: white;\n  font-weight: bold;\n  font-size: 17px;\n  padding: 15px;\n  border-radius: 30px;\n  width: 45%;\n  box-shadow: #807300 0 7px 0px;\n  margin: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZG9ueS9Eb2N1bWVudG9zL2lvbmljL2d0QWR2ZW50dXJlMi9zcmMvYXBwL3JlY29ycmlkby9yZWNvcnJpZG8ucGFnZS5zY3NzIiwic3JjL2FwcC9yZWNvcnJpZG8vcmVjb3JyaWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUdBQUE7RUFBQSx3RUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3JlY29ycmlkby9yZWNvcnJpZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRFc2NhbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYigwLCAxNTMsIDI1NSksIHJnYmEoMCwgMTQ1LCAyNTUsIDAuNzQpIDEwMCUpO1xufVxuXG4ub3BjaW9uZXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5vcEljb3tcbiAgICBtYXJnaW46IDVweCAwO1xufVxuXG4ucG9Db250e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBvQ29udCBwe1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pbWctc2NhbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAtMjBweDtcbiAgICB6LWluZGV4OiA1O1xufVxuXG4uZ2xvdm8ge1xuICAgIGJhY2tncm91bmQ6ICMzODgwZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICB0b3A6IC00MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5nbG92bzo6YWZ0ZXJ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBib3JkZXItbGVmdDogMjdweCBzb2xpZCAjMzg4MGZmO1xuICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAzMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDk3JTtcbiAgICBsZWZ0OiA0MCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG59XG5cbi5nbG92byBwIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubW9udC1jb250e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1vbnR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xMHB4O1xuICAgIGJvdHRvbTogLTFweDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgd2lkdGg6IDEwNSU7XG59XG5cbi5jb25CdG57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICMwMDg4MmQ7XG59XG5cbi5idG57XG4gICAgYmFja2dyb3VuZDogI2M4OTgwMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB3aWR0aDogNDUlO1xuICAgIGJveC1zaGFkb3c6ICM4MDczMDAgMCA3cHggMHB4O1xuICAgIG1hcmdpbjogNTBweDtcbn0iLCIuY29udEVzY2FuZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQobGVmdCwgIzAwOTlmZiwgcmdiYSgwLCAxNDUsIDI1NSwgMC43NCkgMTAwJSk7XG59XG5cbi5vcGNpb25lcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ub3BJY28ge1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4ucG9Db250IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBvQ29udCBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pbWctc2NhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtMjBweDtcbiAgei1pbmRleDogNTtcbn1cblxuLmdsb3ZvIHtcbiAgYmFja2dyb3VuZDogIzM4ODBmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0MCU7XG4gIHRvcDogLTQwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmdsb3ZvOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1sZWZ0OiAyN3B4IHNvbGlkICMzODgwZmY7XG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMzFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDk3JTtcbiAgbGVmdDogNDAlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbn1cblxuLmdsb3ZvIHAge1xuICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5tb250LWNvbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9udCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwcHg7XG4gIGJvdHRvbTogLTFweDtcbiAgbWF4LXdpZHRoOiBub25lO1xuICB3aWR0aDogMTA1JTtcbn1cblxuLmNvbkJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDg4MmQ7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kOiAjYzg5ODAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHdpZHRoOiA0NSU7XG4gIGJveC1zaGFkb3c6ICM4MDczMDAgMCA3cHggMHB4O1xuICBtYXJnaW46IDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/recorrido/recorrido.page.ts":
/*!*********************************************!*\
  !*** ./src/app/recorrido/recorrido.page.ts ***!
  \*********************************************/
/*! exports provided: RecorridoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecorridoPage", function() { return RecorridoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let RecorridoPage = class RecorridoPage {
    constructor(alertController, router, barcodeScanner, db) {
        this.alertController = alertController;
        this.router = router;
        this.barcodeScanner = barcodeScanner;
        this.db = db;
        this.id = localStorage.getItem("id");
        this.nombre = localStorage.getItem("name");
        this.correo = localStorage.getItem("email");
        this.points = localStorage.getItem("puntos");
        this.frase = localStorage.getItem("frase");
        this.fini = localStorage.getItem("finicio");
        this.puntuacion = 0;
    }
    scanear() {
        this.barcodeScanner.scan().then(barcodeData => {
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
                    descip = "Volcan de Pacaya";
                    img = "/assets/img/trofeos/x5.png";
                    puntos = 256;
                    break;
                case "2":
                    descip = "Montaña el filon";
                    img = "/assets/img/trofeos/x2.png";
                    puntos = 200;
                    break;
                case "3":
                    descip = "Mirador rostro maya";
                    img = "/assets/img/trofeos/x1.png";
                    puntos = 300;
                    break;
                case "4":
                    descip = "Cerro mirandilla";
                    img = "/assets/img/trofeos/x3.png";
                    puntos = 250;
                    break;
                case "5":
                    descip = "Volcan de fuego";
                    img = "/assets/img/trofeos/x6.png";
                    puntos = 351;
                    break;
                case "6":
                    descip = "Volcan de acatenango";
                    img = "/assets/img/trofeos/x4.png";
                    puntos = 416;
                    break;
                case "7":
                    descip = "Puente de Ixpanpajul";
                    img = "/assets/img/trofeos/x8.png";
                    puntos = 163;
                    break;
                case "8":
                    descip = "Cuevas de bombil pek";
                    img = "/assets/img/trofeos/x10.png";
                    puntos = 260;
                    break;
                case "9":
                    descip = "Cuevas de caxlampon";
                    img = "/assets/img/trofeos/x9.png";
                    puntos = 375;
                    break;
                case "10":
                    descip = "Catarata la rinconada";
                    img = "/assets/img/trofeos/x7.png";
                    puntos = 201;
                    break;
                case "11":
                    descip = "Umes tour";
                    img = "/assets/img/trofeos/s1.png";
                    puntos = 120;
                    break;
                default:
                    this.router.navigateByUrl('/home');
                    break;
            }
            if (id == this.id && fin == "1") {
                this.puntuacion += parseInt(p);
            }
            else if (id == this.id && fin == "2") {
                let fi = new Date(this.fini);
                let ff = new Date();
                let resta = ff.getTime() - fi.getTime();
                let final = ff.getDate() + "/" + (ff.getMonth() + 1) + "/" + ff.getFullYear();
                let tiempo = resta / 1000 / 60;
                let time = tiempo.toFixed(2);
                puntos += this.puntuacion;
                pUser = parseInt(this.points) + puntos;
                this.points = pUser.toString();
                let d = this.db.CreatePremio(this.correo, descip, img, puntos, time + " Minutos", final);
                let p = this.db.SumarPuntos(this.correo, this.points);
                let t = this.db.GetCanTrofeos(this.correo);
                localStorage.setItem("puntos", this.points);
                this.router.navigateByUrl('/felicidades');
            }
        });
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Informacion',
                message: 'En el camino encontraras códigos QR, los cuales tendrás que escanear para sumar puntos. Sigue las instrucciones que te dan los códigos escaneados para encontrar otros códigos.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
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
            yield alert.present();
        });
    }
    ngOnInit() {
        console.log(this.id);
    }
};
RecorridoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"] },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] }
];
RecorridoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recorrido',
        template: __webpack_require__(/*! raw-loader!./recorrido.page.html */ "./node_modules/raw-loader/index.js!./src/app/recorrido/recorrido.page.html"),
        styles: [__webpack_require__(/*! ./recorrido.page.scss */ "./src/app/recorrido/recorrido.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"], _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]])
], RecorridoPage);



/***/ })

}]);
//# sourceMappingURL=recorrido-recorrido-module-es2015.js.map