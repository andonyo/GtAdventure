(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scaner-scaner-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/scaner/scaner.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/scaner/scaner.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content>\n  <div class=\"contEscaner\">\n    <div class=\"mont-cont\">\n        <img class=\"img-scan\" src=\"/assets/img/explo.png\" alt=\"\" width=\"250px\">\n        <img class=\"mont\" src=\"/assets/img/montains.png\" alt=\"\" width=\"100%\">\n        <div class=\"glovo\">\n          <p>Antes de empezar una aventura recuerda revisar si tienes todo lo necesario</p>\n        </div>\n    </div>\n    <div class=\"conBtn\">\n      <button class=\"btn\" (click)=\"scanear()\">Iniciar aventura</button>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/scaner/scaner.module.ts":
/*!*****************************************!*\
  !*** ./src/app/scaner/scaner.module.ts ***!
  \*****************************************/
/*! exports provided: ScanerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanerPageModule", function() { return ScanerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _scaner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scaner.page */ "./src/app/scaner/scaner.page.ts");







var routes = [
    {
        path: '',
        component: _scaner_page__WEBPACK_IMPORTED_MODULE_6__["ScanerPage"]
    }
];
var ScanerPageModule = /** @class */ (function () {
    function ScanerPageModule() {
    }
    ScanerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_scaner_page__WEBPACK_IMPORTED_MODULE_6__["ScanerPage"]]
        })
    ], ScanerPageModule);
    return ScanerPageModule;
}());



/***/ }),

/***/ "./src/app/scaner/scaner.page.scss":
/*!*****************************************!*\
  !*** ./src/app/scaner/scaner.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contEscaner {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n  height: calc(100vh - 56px);\n  background: -webkit-gradient(linear, left top, right top, from(#0099ff), to(rgba(0, 145, 255, 0.74)));\n  background: linear-gradient(left, #0099ff, rgba(0, 145, 255, 0.74) 100%);\n}\n\n.img-scan {\n  position: relative;\n  bottom: -20px;\n  z-index: 5;\n}\n\n.glovo {\n  background: #3880ff;\n  position: absolute;\n  left: 40%;\n  top: -20%;\n  text-align: center;\n  color: white;\n  border-radius: 50%;\n}\n\n.glovo::after {\n  content: \"\";\n  border-left: 27px solid #3880ff;\n  border-top: 0px solid transparent;\n  border-bottom: 31px solid transparent;\n  position: absolute;\n  top: 97%;\n  left: 40%;\n  -webkit-transform: rotate(5deg);\n          transform: rotate(5deg);\n}\n\n.mont-cont {\n  position: relative;\n  width: 100%;\n}\n\n.mont {\n  position: absolute;\n  left: -10px;\n  bottom: -1px;\n  max-width: none;\n  width: 105%;\n}\n\n.conBtn {\n  width: 100%;\n  text-align: center;\n  background: #00882d;\n}\n\n.btn {\n  background: #c89800;\n  color: white;\n  font-weight: bold;\n  font-size: 17px;\n  padding: 15px;\n  border-radius: 30px;\n  width: 45%;\n  box-shadow: #807300 0 7px 0px;\n  margin: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZG9ueS9Eb2N1bWVudG9zL2lvbmljL2d0QWR2ZW50dXJlMi9zcmMvYXBwL3NjYW5lci9zY2FuZXIucGFnZS5zY3NzIiwic3JjL2FwcC9zY2FuZXIvc2NhbmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHFHQUFBO0VBQUEsd0VBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2NhbmVyL3NjYW5lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udEVzY2FuZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYigwLCAxNTMsIDI1NSksIHJnYmEoMCwgMTQ1LCAyNTUsIDAuNzQpIDEwMCUpO1xufVxuXG4uaW1nLXNjYW57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogLTIwcHg7XG4gICAgei1pbmRleDogNTtcbn1cblxuLmdsb3ZvIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0MCU7XG4gICAgdG9wOiAtMjAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZ2xvdm86OmFmdGVye1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm9yZGVyLWxlZnQ6IDI3cHggc29saWQgIzM4ODBmZjtcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMzFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA5NyU7XG4gICAgbGVmdDogNDAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xufVxuXG4ubW9udC1jb250e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1vbnR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xMHB4O1xuICAgIGJvdHRvbTogLTFweDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgd2lkdGg6IDEwNSU7XG59XG5cbi5jb25CdG57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICMwMDg4MmQ7XG59XG5cbi5idG57XG4gICAgYmFja2dyb3VuZDogI2M4OTgwMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB3aWR0aDogNDUlO1xuICAgIGJveC1zaGFkb3c6ICM4MDczMDAgMCA3cHggMHB4O1xuICAgIG1hcmdpbjogNTBweDtcbn0iLCIuY29udEVzY2FuZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGxlZnQsICMwMDk5ZmYsIHJnYmEoMCwgMTQ1LCAyNTUsIDAuNzQpIDEwMCUpO1xufVxuXG4uaW1nLXNjYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTIwcHg7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5nbG92byB7XG4gIGJhY2tncm91bmQ6ICMzODgwZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDAlO1xuICB0b3A6IC0yMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5nbG92bzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItbGVmdDogMjdweCBzb2xpZCAjMzg4MGZmO1xuICBib3JkZXItdG9wOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDMxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5NyU7XG4gIGxlZnQ6IDQwJTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG59XG5cbi5tb250LWNvbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9udCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwcHg7XG4gIGJvdHRvbTogLTFweDtcbiAgbWF4LXdpZHRoOiBub25lO1xuICB3aWR0aDogMTA1JTtcbn1cblxuLmNvbkJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDg4MmQ7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kOiAjYzg5ODAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHdpZHRoOiA0NSU7XG4gIGJveC1zaGFkb3c6ICM4MDczMDAgMCA3cHggMHB4O1xuICBtYXJnaW46IDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/scaner/scaner.page.ts":
/*!***************************************!*\
  !*** ./src/app/scaner/scaner.page.ts ***!
  \***************************************/
/*! exports provided: ScanerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanerPage", function() { return ScanerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ScanerPage = /** @class */ (function () {
    function ScanerPage(router, barcodeScanner) {
        this.router = router;
        this.barcodeScanner = barcodeScanner;
        this.Scancode = null;
    }
    ScanerPage.prototype.scanear = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            var scan = JSON.parse(barcodeData.text);
            var date = new Date();
            if (scan.flag == "0") {
                localStorage.setItem("id", scan.id);
                localStorage.setItem("frase", scan.description);
                localStorage.setItem("finicio", date.toString());
                _this.router.navigateByUrl('/recorrido');
            }
        }, function (error) {
            console.log(error);
        });
    };
    ScanerPage.prototype.ngOnInit = function () {
    };
    ScanerPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"] }
    ]; };
    ScanerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scaner',
            template: __webpack_require__(/*! raw-loader!./scaner.page.html */ "./node_modules/raw-loader/index.js!./src/app/scaner/scaner.page.html"),
            styles: [__webpack_require__(/*! ./scaner.page.scss */ "./src/app/scaner/scaner.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"]])
    ], ScanerPage);
    return ScanerPage;
}());



/***/ })

}]);
//# sourceMappingURL=scaner-scaner-module-es5.js.map