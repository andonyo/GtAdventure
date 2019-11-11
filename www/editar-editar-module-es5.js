(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editar-editar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/editar/editar.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/editar/editar.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content>\n  <div class=\"contEscaner\">\n    <div style=\"width:100%\">\n        <img class=\"img-scan\" src=\"/assets/img/montain.png\" alt=\"\" width=\"250px\">\n        <div class=\"glovo\">\n            <p>Cambiemos un poco tu look</p>\n        </div>\n    </div>\n    <div class=\"conBtn\">\n      <input class=\"input\" id=\"nombre\" [(ngModel)]=\"nombre\" type=\"text\" placeholder=\"Cual es tu nombre\">\n      <p>Selecciona una imagen:</p>\n      <div class=\"avatar\">\n        <img id=\"0\" src=\"/assets/img/avatar/ico0.png\" (click)=\"imagen(0)\" alt=\"\">\n        <img id=\"1\" src=\"/assets/img/avatar/ico1.png\" (click)=\"imagen(1)\" alt=\"\">\n        <img id=\"2\" src=\"/assets/img/avatar/ico2.png\" (click)=\"imagen(2)\" alt=\"\">\n        <img id=\"3\" src=\"/assets/img/avatar/ico3.png\" (click)=\"imagen(3)\" alt=\"\">\n        <img id=\"4\" src=\"/assets/img/avatar/ico4.png\" (click)=\"imagen(4)\" alt=\"\">\n        <img id=\"5\" src=\"/assets/img/avatar/ico5.png\" (click)=\"imagen(5)\" alt=\"\">\n        <img id=\"6\" src=\"/assets/img/avatar/ico6.png\" (click)=\"imagen(6)\" alt=\"\">\n        <img id=\"7\" src=\"/assets/img/avatar/ico7.png\" (click)=\"imagen(7)\" alt=\"\">\n        <img id=\"8\" src=\"/assets/img/avatar/ico8.png\" (click)=\"imagen(8)\" alt=\"\">\n        <img id=\"9\" src=\"/assets/img/avatar/ico9.png\" (click)=\"imagen(9)\" alt=\"\">\n        <div style=\"width: 10vw;\"></div>\n      </div>\n      <button class=\"btn\" (click)=\"guardar()\">Aceptar</button>\n    </div>\n  </div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/editar/editar.module.ts":
/*!*****************************************!*\
  !*** ./src/app/editar/editar.module.ts ***!
  \*****************************************/
/*! exports provided: EditarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPageModule", function() { return EditarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editar.page */ "./src/app/editar/editar.page.ts");







var routes = [
    {
        path: '',
        component: _editar_page__WEBPACK_IMPORTED_MODULE_6__["EditarPage"]
    }
];
var EditarPageModule = /** @class */ (function () {
    function EditarPageModule() {
    }
    EditarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_editar_page__WEBPACK_IMPORTED_MODULE_6__["EditarPage"]]
        })
    ], EditarPageModule);
    return EditarPageModule;
}());



/***/ }),

/***/ "./src/app/editar/editar.page.scss":
/*!*****************************************!*\
  !*** ./src/app/editar/editar.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contEscaner {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n  height: 100vh;\n  background: -webkit-gradient(linear, left top, right top, from(#0099ff), to(rgba(0, 145, 255, 0.74)));\n  background: linear-gradient(left, #0099ff, rgba(0, 145, 255, 0.74) 100%);\n}\n\n.img-scan {\n  position: relative;\n  bottom: -5px;\n  left: 0;\n}\n\n.conBtn {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  text-align: center;\n  background: #00882d;\n}\n\n.btn {\n  background: #c89800;\n  color: white;\n  font-weight: bold;\n  font-size: 17px;\n  padding: 15px;\n  border-radius: 30px;\n  width: 45%;\n  box-shadow: #807300 0 7px 0px;\n  margin: 50px;\n}\n\n.avatar {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  overflow: scroll;\n}\n\n.avatar img {\n  margin-left: 20px;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  border: 3px white solid;\n}\n\n.select {\n  border: 3px solid #30a8ff !important;\n}\n\n.input {\n  background: white;\n  border-radius: 20px;\n  padding: 5px 15px !important;\n  margin-top: 15px;\n  font-size: 20px;\n  text-align: center;\n  border: none;\n  margin-bottom: 20px;\n}\n\n.glovo {\n  background: #3880ff;\n  position: absolute;\n  left: 39%;\n  top: 16%;\n  text-align: center;\n  color: white;\n  border-radius: 50%;\n}\n\n.glovo::after {\n  content: \"\";\n  border-left: 27px solid #3880ff;\n  border-top: 0px solid transparent;\n  border-bottom: 31px solid transparent;\n  position: absolute;\n  top: 79%;\n  left: 8%;\n  -webkit-transform: rotate(28deg);\n          transform: rotate(28deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZG9ueS9Eb2N1bWVudG9zL2lvbmljL2d0QWR2ZW50dXJlMi9zcmMvYXBwL2VkaXRhci9lZGl0YXIucGFnZS5zY3NzIiwic3JjL2FwcC9lZGl0YXIvZWRpdGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUdBQUE7RUFBQSx3RUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZWRpdGFyL2VkaXRhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udEVzY2FuZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQobGVmdCwgcmdiKDAsIDE1MywgMjU1KSwgcmdiYSgwLCAxNDUsIDI1NSwgMC43NCkgMTAwJSk7XG59XG5cbi5pbWctc2NhbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAtNXB4O1xuICAgIGxlZnQ6MDtcbn1cblxuLmNvbkJ0bntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICMwMDg4MmQ7XG59XG5cbi5idG57XG4gICAgYmFja2dyb3VuZDogI2M4OTgwMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB3aWR0aDogNDUlO1xuICAgIGJveC1zaGFkb3c6ICM4MDczMDAgMCA3cHggMHB4O1xuICAgIG1hcmdpbjogNTBweDtcbn1cblxuLmF2YXRhcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5hdmF0YXIgaW1nIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogM3B4IHdoaXRlIHNvbGlkO1xufVxuXG4uc2VsZWN0IHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMzBhOGZmICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDVweCAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZ2xvdm8ge1xuICAgIGJhY2tncm91bmQ6ICMzODgwZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDM5JTtcbiAgICB0b3A6IDE2JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmdsb3ZvOjphZnRlcntcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvcmRlci1sZWZ0OiAyN3B4IHNvbGlkICMzODgwZmY7XG4gICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDMxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNzklO1xuICAgIGxlZnQ6IDglO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI4ZGVnKTtcbn0iLCIuY29udEVzY2FuZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQobGVmdCwgIzAwOTlmZiwgcmdiYSgwLCAxNDUsIDI1NSwgMC43NCkgMTAwJSk7XG59XG5cbi5pbWctc2NhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtNXB4O1xuICBsZWZ0OiAwO1xufVxuXG4uY29uQnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzAwODgyZDtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQ6ICNjODk4MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgd2lkdGg6IDQ1JTtcbiAgYm94LXNoYWRvdzogIzgwNzMwMCAwIDdweCAwcHg7XG4gIG1hcmdpbjogNTBweDtcbn1cblxuLmF2YXRhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uYXZhdGFyIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHdoaXRlIHNvbGlkO1xufVxuXG4uc2VsZWN0IHtcbiAgYm9yZGVyOiAzcHggc29saWQgIzMwYThmZiAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNXB4IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmdsb3ZvIHtcbiAgYmFja2dyb3VuZDogIzM4ODBmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzOSU7XG4gIHRvcDogMTYlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZ2xvdm86OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLWxlZnQ6IDI3cHggc29saWQgIzM4ODBmZjtcbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAzMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzklO1xuICBsZWZ0OiA4JTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjhkZWcpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/editar/editar.page.ts":
/*!***************************************!*\
  !*** ./src/app/editar/editar.page.ts ***!
  \***************************************/
/*! exports provided: EditarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPage", function() { return EditarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var EditarPage = /** @class */ (function () {
    function EditarPage(loadingController, router, db) {
        this.loadingController = loadingController;
        this.router = router;
        this.db = db;
        this.image = "/assets/img/avatar/ico0.png";
        this.nombre = localStorage.getItem("name");
        this.correo = localStorage.getItem("email");
    }
    EditarPage.prototype.imagen = function (obj) {
        console.log(obj);
        var objeto = document.getElementById(obj.toString());
        for (var i = 0; i < 10; i++) {
            if (i == obj) {
                document.getElementById(obj.toString()).classList.add('select');
            }
            else {
                document.getElementById(i.toString()).classList.remove('select');
            }
            this.image = "/assets/img/avatar/ico" + obj + ".png";
        }
    };
    EditarPage.prototype.guardar = function () {
        console.log("nombre: " + this.nombre + " imagen: " + this.image);
        var d = this.db.EditUser(this.nombre, this.correo, this.image);
        localStorage.setItem("email", this.correo);
        localStorage.setItem("name", this.nombre);
        localStorage.setItem("imagen", this.image);
        this.presentLoading();
    };
    EditarPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Actualizando',
                            duration: 1000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        return [4 /*yield*/, this.router.navigateByUrl('/tabs/inicio')];
                    case 4:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditarPage.prototype.ngOnInit = function () {
    };
    EditarPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }
    ]; };
    EditarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editar',
            template: __webpack_require__(/*! raw-loader!./editar.page.html */ "./node_modules/raw-loader/index.js!./src/app/editar/editar.page.html"),
            styles: [__webpack_require__(/*! ./editar.page.scss */ "./src/app/editar/editar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
    ], EditarPage);
    return EditarPage;
}());



/***/ })

}]);
//# sourceMappingURL=editar-editar-module-es5.js.map