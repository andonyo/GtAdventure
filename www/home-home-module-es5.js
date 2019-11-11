(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <link href=\"https://fonts.googleapis.com/css?family=Montserrat&display=swap\" rel=\"stylesheet\">\n</ion-header>\n\n<ion-content>\n<div class=\"fondo_Home\">\n  <form class=\"formulario_home\" action=\"inicio()\" method=\"post\">\n      <img class=\"vuelo\" src=\"/assets/img/vuela.png\" alt=\"\" width=\"200px\">\n      <img class=\"nubes a\" src=\"/assets/img/n1.png\" alt=\"\">\n      <img class=\"nubes b\" src=\"/assets/img/n2.png\" alt=\"\">\n      <img class=\"nubes c\" src=\"/assets/img/n3.png\" alt=\"\">\n      <h1 class=\"titulo_home\">Gt Adventure</h1>\n      <p class=\"descrip_home\">¿Estas preparado para vivir muchas aventuras de manera diferente?</p>\n      <firebase-ui (signInSuccessWithAuthResult)=\"successCallback($event)\"></firebase-ui>\n      <div class=\"botones_home\" *ngIf=\"afAuth.auth.currentUser\">\n        <button class=\"btn_login\" (click)=\"inicio()\" type=\"submit\">Ingresar</button>\n      </div>\n  </form>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var firebaseui_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebaseui-angular */ "./node_modules/firebaseui-angular/fesm5/firebaseui-angular.js");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                firebaseui_angular__WEBPACK_IMPORTED_MODULE_7__["FirebaseUIModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.fondo_Home {\n  width: 100%;\n  height: 100%;\n  background: -webkit-gradient(linear, left top, right top, from(#0099ff), to(rgba(0, 145, 255, 0.74)));\n  background: linear-gradient(left, #0099ff, rgba(0, 145, 255, 0.74) 100%);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.nubes {\n  position: absolute;\n  width: 150px;\n}\n\n.a {\n  top: 0;\n  left: 27px;\n}\n\n.b {\n  top: 150px;\n  right: 0px;\n}\n\n.c {\n  width: 200px;\n  bottom: 0;\n  left: 20%;\n}\n\n.vuelo {\n  position: relative;\n  z-index: 5;\n}\n\n.titulo_home {\n  color: white;\n  text-align: center;\n  margin: 0;\n  font-weight: bold;\n}\n\n.descrip_home {\n  color: white;\n  text-align: justify;\n  margin: 0;\n  padding: 10px 0;\n}\n\n.formulario_home {\n  width: 80%;\n  text-align: center;\n}\n\n.input {\n  background: white;\n  border-radius: 20px;\n  padding: 0 15px !important;\n  margin-top: 15px;\n}\n\n.botones_home {\n  width: 100%;\n  text-align: center;\n  padding-top: 10px;\n}\n\n.btn_login {\n  background: #00c853;\n  color: white;\n  font-weight: bold;\n  font-size: 17px;\n  padding: 15px;\n  border-radius: 30px;\n  width: 45%;\n  box-shadow: green 0 7px 0px;\n  position: relative;\n  z-index: 5;\n}\n\n.btn_login:active {\n  box-shadow: none;\n}\n\n.btn_cuenta {\n  text-decoration: none;\n  color: white;\n  font-weight: bold;\n}\n\n.footer_home {\n  background: -webkit-gradient(linear, left top, right top, from(#0099ff), to(rgba(0, 145, 255, 0.74)));\n  background: linear-gradient(left, #0099ff, rgba(0, 145, 255, 0.74) 100%);\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZG9ueS9Eb2N1bWVudG9zL2lvbmljL2d0QWR2ZW50dXJlMi9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxR0FBQTtFQUFBLHdFQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksTUFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUM7RUFDSSxxR0FBQTtFQUFBLHdFQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0wiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG4uZm9uZG9fSG9tZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYigwLCAxNTMsIDI1NSksIHJnYmEoMCwgMTQ1LCAyNTUsIDAuNzQpIDEwMCUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xufVxuXG4ubnViZXN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxNTBweDtcbn1cblxuLmEge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAyN3B4O1xufVxuXG4uYntcbiAgICB0b3A6IDE1MHB4O1xuICAgIHJpZ2h0OiAwcHg7XG59XG5cbi5je1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMjAlO1xufVxuXG4udnVlbG8ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA1O1xufVxuXG4udGl0dWxvX2hvbWV7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kZXNjcmlwX2hvbWV7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLmZvcm11bGFyaW9faG9tZXtcbiAgICB3aWR0aDogODAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlucHV0e1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmJvdG9uZXNfaG9tZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5idG5fbG9naW57XG4gICAgYmFja2dyb3VuZDogIzAwYzg1MztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB3aWR0aDogNDUlO1xuICAgIGJveC1zaGFkb3c6IGdyZWVuIDAgN3B4IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogNTtcbn1cblxuLmJ0bl9sb2dpbjphY3RpdmV7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJ0bl9jdWVudGF7IFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gfSBcblxuIC5mb290ZXJfaG9tZXtcbiAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYigwLCAxNTMsIDI1NSksIHJnYmEoMCwgMTQ1LCAyNTUsIDAuNzQpIDEwMCUpO1xuICAgICBjb2xvcjogd2hpdGU7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG4iLCIqIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xufVxuXG4uZm9uZG9fSG9tZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChsZWZ0LCAjMDA5OWZmLCByZ2JhKDAsIDE0NSwgMjU1LCAwLjc0KSAxMDAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5udWJlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4uYSB7XG4gIHRvcDogMDtcbiAgbGVmdDogMjdweDtcbn1cblxuLmIge1xuICB0b3A6IDE1MHB4O1xuICByaWdodDogMHB4O1xufVxuXG4uYyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAyMCU7XG59XG5cbi52dWVsbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNTtcbn1cblxuLnRpdHVsb19ob21lIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kZXNjcmlwX2hvbWUge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG4uZm9ybXVsYXJpb19ob21lIHtcbiAgd2lkdGg6IDgwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5ib3RvbmVzX2hvbWUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmJ0bl9sb2dpbiB7XG4gIGJhY2tncm91bmQ6ICMwMGM4NTM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgd2lkdGg6IDQ1JTtcbiAgYm94LXNoYWRvdzogZ3JlZW4gMCA3cHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5idG5fbG9naW46YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJ0bl9jdWVudGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb290ZXJfaG9tZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChsZWZ0LCAjMDA5OWZmLCByZ2JhKDAsIDE0NSwgMjU1LCAwLjc0KSAxMDAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");






var HomePage = /** @class */ (function () {
    function HomePage(afAuth, sqlite, router, db) {
        this.afAuth = afAuth;
        this.sqlite = sqlite;
        this.router = router;
        this.db = db;
        this.name_model = ""; // Input field model
        this.row_data = []; // Table rows
        this.usuarioTabla = "CREATE TABLE IF NOT EXISTS usuario(id INTEGER PRIMARY KEY AUTOINCREMENT, name varchar(255), correo varchar(255), img varchar(255), puntos int(255))"; // Table name
        this.trofeoTabla = "CREATE TABLE IF NOT EXISTS trofeo(id INTEGER PRIMARY KEY AUTOINCREMENT, usuario INTEGER, descripcion TEXT, img TEXT, puntos INTEGER, tiempo TEXT, fecha, TEXT)";
        this.database_name = "data.db"; // DB name
        //this.createDB()
        //this.createTable()
        //this.createTable(this.trofeoTabla) 
    }
    HomePage.prototype.inicio = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ema, s, datU, tro, _a, _b, ss;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        ema = this.afAuth.auth.currentUser.email;
                        localStorage.setItem("email", this.afAuth.auth.currentUser.email);
                        localStorage.setItem("name", this.afAuth.auth.currentUser.displayName);
                        console.log(ema);
                        s = this.db.GetUsuario(ema);
                        console.log(s);
                        return [4 /*yield*/, s];
                    case 1:
                        if (!((_c.sent()) == true)) return [3 /*break*/, 4];
                        datU = this.db.GetUserInfo(ema).then(function (data) {
                            _this.lisener = data;
                        }, function (error) {
                            console.log(error);
                        });
                        tro = this.db.GetCanTrofeos(ema);
                        _b = (_a = console).log;
                        return [4 /*yield*/, datU];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        console.log("trof: " + tro);
                        return [4 /*yield*/, datU["0"]];
                    case 3:
                        ss = _c.sent();
                        console.log(ss);
                        this.router.navigateByUrl('/tabs');
                        return [3 /*break*/, 5];
                    case 4:
                        this.router.navigateByUrl('/registro');
                        _c.label = 5;
                    case 5:
                        console.log(s);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.CreateUser = function (nombre, correo, imagen, puntos) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var sql = "INSERT INTO usuario (correo, nombre, imagen, puntos) VALUES ('" + correo + "', '" + nombre + "', '" + imagen + "', '" + puntos + "')";
            _this.databaseObj.executeSql(sql, []).then(function (data) {
                resolve(data);
                console.log("SE CREO USUARIO " + nombre);
            }, function (error) {
                console.log("NO SE CREO USUARIO " + nombre);
                reject(error);
            });
        });
    };
    HomePage.prototype.getRows = function (nombre) {
        var _this = this;
        this.databaseObj.executeSql("SELECT * FROM " + nombre, [])
            .then(function (res) {
            _this.row_data = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.row_data.push(res.rows.item(i));
                }
            }
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    HomePage.prototype.GetUsuario = function (correo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.databaseObj.executeSql("SELECT * FROM usuario WHERE correo ='" + correo + "'", []).then(function (data) {
                var existe = false;
                if (data.rows.length > 0) {
                    existe = true;
                }
                console.log(existe);
                resolve(existe);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLite"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLite"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map