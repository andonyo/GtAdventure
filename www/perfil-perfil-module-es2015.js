(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/perfil/perfil.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/perfil/perfil.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <div class=\"headerPerfil\">\n    <ion-title>Perfil</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon slot=\"icon-only\" name=\"exit\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"perfilAll\">\n    <div class=\"imgPerfil\">\n      <img class=\"imgPer\" src=\"{{imagen}}\" alt=\"\">\n      <ion-icon class=\"edit\" (click)=\"editar()\" name=\"create\"></ion-icon>\n      <h3>{{name}}</h3>\n      <p>{{correo}}</p>\n    </div>\n    <div class=\"txtPerfil\">\n      <div>\n        <p>{{trofeos}}</p>\n        <p>Trofeos</p>\n      </div>\n      <div>\n        <p>{{trofeos}}</p>\n        <p>Recorridos</p>\n      </div>\n      <div>\n        <p>{{puntos}}</p>\n        <p>Puntos</p>\n      </div>\n      <img class=\"nubes a\" src=\"/assets/img/n1.png\" alt=\"\">\n      <img class=\"nubes b\" src=\"/assets/img/n2.png\" alt=\"\">\n    </div>\n    <div class=\"foot\">\n      <img src=\"/assets/img/montains.png\" alt=\"\">\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/perfil/perfil.module.ts":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.module.ts ***!
  \*****************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "./src/app/perfil/perfil.page.ts");







const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]
    }
];
let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })
], PerfilPageModule);



/***/ }),

/***/ "./src/app/perfil/perfil.page.scss":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headerPerfil {\n  background: #246693 !important;\n  color: white;\n  display: -webkit-box;\n  display: flex;\n}\n\n.perfilAll {\n  background: -webkit-gradient(linear, left top, right top, from(#0099ff), to(rgba(0, 145, 255, 0.74)));\n  background: linear-gradient(left, #0099ff, rgba(0, 145, 255, 0.74) 100%);\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.imgPerfil {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  position: relative;\n  z-index: 5;\n}\n\n.imgPer {\n  width: 105px;\n  height: 105px;\n  border-radius: 50%;\n  border: 5px white solid;\n  box-shadow: black 0 0 5px;\n}\n\n.nubes {\n  position: absolute;\n  width: 150px;\n}\n\n.a {\n  top: 8%;\n  left: 5px;\n}\n\n.b {\n  right: 0;\n  bottom: 40%;\n}\n\n.c {\n  width: 200px;\n  bottom: 0;\n  left: 20%;\n}\n\n.txtPerfil {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  width: 80%;\n}\n\n.edit {\n  font-size: 25px;\n  background: #00cdff;\n  padding: 5px;\n  border-radius: 30px;\n  color: white;\n  position: absolute;\n  left: 55%;\n  bottom: 95px;\n  box-shadow: 0 0 5px grey;\n}\n\n.foot {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  overflow: hidden;\n}\n\n.foot img {\n  position: relative;\n  bottom: -7px;\n  max-width: none;\n  width: 103%;\n  left: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZG9ueS9Eb2N1bWVudG9zL2lvbmljL2d0QWR2ZW50dXJlMi9zcmMvYXBwL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0NKOztBREVBO0VBQ0kscUdBQUE7RUFBQSx3RUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLE9BQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxRQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJQZXJmaWx7XG4gICAgYmFja2dyb3VuZDogIzI0NjY5MyAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucGVyZmlsQWxse1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2IoMCwgMTUzLCAyNTUpLCByZ2JhKDAsIDE0NSwgMjU1LCAwLjc0KSAxMDAlKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaW1nUGVyZmlse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogNTtcbn1cblxuLmltZ1BlciB7XG4gICAgd2lkdGg6IDEwNXB4O1xuICAgIGhlaWdodDogMTA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogNXB4IHdoaXRlIHNvbGlkO1xuICAgIGJveC1zaGFkb3c6IGJsYWNrIDAgMCA1cHg7XG59XG5cbi5udWJlc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG4uYSB7XG4gICAgdG9wOiA4JTtcbiAgICBsZWZ0OiA1cHg7XG59XG5cbi5ie1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogNDAlO1xufVxuXG4uY3tcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDIwJTtcbn1cblxuLnR4dFBlcmZpbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICB3aWR0aDogODAlO1xufVxuXG4uZWRpdCB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGJhY2tncm91bmQ6ICMwMGNkZmY7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1NSU7XG4gICAgYm90dG9tOiA5NXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggZ3JleTtcbn1cblxuLmZvb3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZvb3QgaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAtN3B4O1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICB3aWR0aDogMTAzJTtcbiAgICBsZWZ0OiAtNXB4O1xufSIsIi5oZWFkZXJQZXJmaWwge1xuICBiYWNrZ3JvdW5kOiAjMjQ2NjkzICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnBlcmZpbEFsbCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChsZWZ0LCAjMDA5OWZmLCByZ2JhKDAsIDE0NSwgMjU1LCAwLjc0KSAxMDAlKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaW1nUGVyZmlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNTtcbn1cblxuLmltZ1BlciB7XG4gIHdpZHRoOiAxMDVweDtcbiAgaGVpZ2h0OiAxMDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDVweCB3aGl0ZSBzb2xpZDtcbiAgYm94LXNoYWRvdzogYmxhY2sgMCAwIDVweDtcbn1cblxuLm51YmVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5hIHtcbiAgdG9wOiA4JTtcbiAgbGVmdDogNXB4O1xufVxuXG4uYiB7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDQwJTtcbn1cblxuLmMge1xuICB3aWR0aDogMjAwcHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMjAlO1xufVxuXG4udHh0UGVyZmlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmVkaXQge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICMwMGNkZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDU1JTtcbiAgYm90dG9tOiA5NXB4O1xuICBib3gtc2hhZG93OiAwIDAgNXB4IGdyZXk7XG59XG5cbi5mb290IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZm9vdCBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTdweDtcbiAgbWF4LXdpZHRoOiBub25lO1xuICB3aWR0aDogMTAzJTtcbiAgbGVmdDogLTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/perfil/perfil.page.ts":
/*!***************************************!*\
  !*** ./src/app/perfil/perfil.page.ts ***!
  \***************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");




let PerfilPage = class PerfilPage {
    constructor(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
        this.name = localStorage.getItem("name");
        this.imagen = localStorage.getItem("imagen");
        this.correo = localStorage.getItem("email");
        this.puntos = localStorage.getItem("puntos");
        this.trofeos = localStorage.getItem("trofeos");
    }
    logout() {
        this.afAuth.auth.signOut();
        this.router.navigateByUrl('/home');
    }
    editar() {
        this.router.navigateByUrl('/editar');
    }
    ionViewWillEnter() {
        console.log("estoy entrando perfil");
        this.name = localStorage.getItem("name");
        this.imagen = localStorage.getItem("imagen");
        this.correo = localStorage.getItem("email");
        this.puntos = localStorage.getItem("puntos");
        this.trofeos = localStorage.getItem("trofeos");
    }
    ngOnInit() {
    }
};
PerfilPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
PerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil',
        template: __webpack_require__(/*! raw-loader!./perfil.page.html */ "./node_modules/raw-loader/index.js!./src/app/perfil/perfil.page.html"),
        styles: [__webpack_require__(/*! ./perfil.page.scss */ "./src/app/perfil/perfil.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
], PerfilPage);



/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module-es2015.js.map