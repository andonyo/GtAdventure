(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trofeos-trofeos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/trofeos/trofeos.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/trofeos/trofeos.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<div id=\"modal\" (click)=\"hideModal()\" class=\"modal_trofeo\">\n  <div class=\"modalInterno\">\n    <div class=\"mTrofeo\">\n        <img src=\"{{imagen}}\" alt=\"\">\n    </div>\n    <div class=\"mTitulo\">\n      <h3>{{descrip}}</h3>\n      <p>Fecha: {{fecha}}</p>\n      <p>Tiempo: {{tiempo}}</p>\n    </div>\n  </div>\n</div>\n\n<ion-content>\n  <div id=\"blur\" class=\"todo_trofeos\">\n    <div class=\"titulo\">\n      <img src=\"/assets/img/trofeosTxt.png\" alt=\"\">\n    </div>\n    <div class=\"content_trofeos\">\n      <div class=\"caja_trofeos\" *ngFor=\"let item of datos\">\n        <img class=\"trofeo\" (click)=\"showModal(item)\" src=\"{{item.imagen}}\" alt=\"\">\n      </div>\n      <div class=\"caja_trofeos\" *ngIf=\"trof < 1\">\n        <img class=\"trofeo\" src=\"\" alt=\"\">\n      </div>\n      <div class=\"caja_trofeos\" *ngIf=\"trof < 2\">\n        <img class=\"trofeo\" src=\"\" alt=\"\">\n      </div>\n      <div class=\"caja_trofeos\" *ngIf=\"trof < 3\">\n        <img class=\"trofeo\" src=\"\" alt=\"\">\n      </div>\n      <div class=\"caja_trofeos\" *ngIf=\"trof < 4\">\n        <img class=\"trofeo\" src=\"\" alt=\"\">\n      </div>\n      <div class=\"caja_trofeos\" *ngIf=\"trof < 5\">\n        <img class=\"trofeo\" src=\"\" alt=\"\">\n      </div>\n      <div class=\"caja_trofeos\" *ngIf=\"trof < 6\">\n        <img class=\"trofeo\" src=\"\" alt=\"\">\n      </div>\n      <div class=\"caja_trofeos\" *ngIf=\"trof < 7\">\n        <img class=\"trofeo\" src=\"\" alt=\"\">\n      </div>\n      <div class=\"caja_trofeos\" *ngIf=\"trof < 8\">\n        <img class=\"trofeo\" src=\"\" alt=\"\">\n      </div>\n      <div class=\"caja_trofeos\" *ngIf=\"ok == 1\">\n        <img class=\"trofeo\" src=\"\" alt=\"\">\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/trofeos/trofeos.module.ts":
/*!*******************************************!*\
  !*** ./src/app/trofeos/trofeos.module.ts ***!
  \*******************************************/
/*! exports provided: TrofeosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrofeosPageModule", function() { return TrofeosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trofeos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trofeos.page */ "./src/app/trofeos/trofeos.page.ts");







var routes = [
    {
        path: '',
        component: _trofeos_page__WEBPACK_IMPORTED_MODULE_6__["TrofeosPage"]
    }
];
var TrofeosPageModule = /** @class */ (function () {
    function TrofeosPageModule() {
    }
    TrofeosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_trofeos_page__WEBPACK_IMPORTED_MODULE_6__["TrofeosPage"]]
        })
    ], TrofeosPageModule);
    return TrofeosPageModule;
}());



/***/ }),

/***/ "./src/app/trofeos/trofeos.page.scss":
/*!*******************************************!*\
  !*** ./src/app/trofeos/trofeos.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo_trofeos {\n  background: #181857;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n\n.content_trofeos {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.mTitulo {\n  color: white;\n  text-shadow: 0 0 5px #e28d10;\n}\n\n.caja_trofeos {\n  width: 50vw;\n  height: 50vw;\n  background-image: url(\"/assets/img/caj.png\");\n  background-size: cover;\n  position: relative;\n}\n\n.trofeo {\n  position: absolute;\n  bottom: -3px;\n  width: 150px;\n  left: 15px;\n}\n\n.modal_trofeo {\n  position: absolute;\n  z-index: 5;\n  width: 100%;\n  height: 100vh;\n  border-radius: 20px;\n  text-align: center;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\n.modalInterno {\n  width: 75vw;\n  height: 50vh;\n}\n\n.mostrar {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.blur {\n  -webkit-filter: blur(2px);\n          filter: blur(2px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZG9ueS9Eb2N1bWVudG9zL2lvbmljL2d0QWR2ZW50dXJlMi9zcmMvYXBwL3Ryb2Zlb3MvdHJvZmVvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Ryb2Zlb3MvdHJvZmVvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtVQUFBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90cm9mZW9zL3Ryb2Zlb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZG9fdHJvZmVvcyB7XG4gICAgYmFja2dyb3VuZDogcmdiKDI0LCAyNCwgODcpO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5jb250ZW50X3Ryb2Zlb3N7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ubVRpdHVsb3tcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiKDIyNiwgMTQxLCAxNik7XG59XG5cbi5jYWphX3Ryb2Zlb3N7XG4gICAgd2lkdGg6IDUwdnc7XG4gICAgaGVpZ2h0OiA1MHZ3O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2Nhai5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50cm9mZW8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0zcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGxlZnQ6IDE1cHg7XG59XG5cbi5tb2RhbF90cm9mZW8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA1O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG4ubW9kYWxJbnRlcm5ve1xuICAgIHdpZHRoOiA3NXZ3O1xuICAgIGhlaWdodDogNTB2aDtcbn1cblxuLm1vc3RyYXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLmJsdXIge1xuICAgIGZpbHRlcjogYmx1cigycHgpO1xufSIsIi50b2RvX3Ryb2Zlb3Mge1xuICBiYWNrZ3JvdW5kOiAjMTgxODU3O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uY29udGVudF90cm9mZW9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLm1UaXR1bG8ge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICNlMjhkMTA7XG59XG5cbi5jYWphX3Ryb2Zlb3Mge1xuICB3aWR0aDogNTB2dztcbiAgaGVpZ2h0OiA1MHZ3O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9jYWoucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50cm9mZW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTNweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBsZWZ0OiAxNXB4O1xufVxuXG4ubW9kYWxfdHJvZmVvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA1O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuLm1vZGFsSW50ZXJubyB7XG4gIHdpZHRoOiA3NXZ3O1xuICBoZWlnaHQ6IDUwdmg7XG59XG5cbi5tb3N0cmFyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLmJsdXIge1xuICBmaWx0ZXI6IGJsdXIoMnB4KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/trofeos/trofeos.page.ts":
/*!*****************************************!*\
  !*** ./src/app/trofeos/trofeos.page.ts ***!
  \*****************************************/
/*! exports provided: TrofeosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrofeosPage", function() { return TrofeosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");



var TrofeosPage = /** @class */ (function () {
    function TrofeosPage(db) {
        this.db = db;
        this.correo = localStorage.getItem("email");
        this.imagen = "/assets/img/t2.png";
        this.descrip = "Algun Lugar";
        this.fecha = "00/00/0000";
        this.tiempo = "00 Minutos";
        this.trofeos = localStorage.getItem("trofeos");
        this.trof = 0;
        this.ok = 0;
    }
    TrofeosPage.prototype.showModal = function (dato) {
        this.imagen = dato.imagen;
        this.descrip = dato.descripcion;
        this.fecha = dato.fecha;
        this.tiempo = dato.tiempo;
        var modal = document.getElementById('modal');
        var blur = document.getElementById('blur');
        modal.classList.toggle('mostrar');
        blur.classList.toggle('blur');
    };
    TrofeosPage.prototype.hideModal = function () {
        var modal = document.getElementById('modal');
        var blur = document.getElementById('blur');
        modal.classList.toggle('mostrar');
        blur.classList.toggle('blur');
    };
    TrofeosPage.prototype.GetTrof = function () {
        var _this = this;
        this.db.GetTrofeos(this.correo).then(function (data) {
            console.log(data);
            _this.datos = data;
        }, function (error) {
            console.log(error);
        });
    };
    TrofeosPage.prototype.numTrof = function () {
        this.trofeos = localStorage.getItem("trofeos");
        this.trof = parseInt(this.trofeos);
        this.ok = this.trof % 2;
        if (this.trof >= 8 && this.ok == 1) {
            this.ok = 1;
        }
        else {
            this.ok = 2;
        }
    };
    TrofeosPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("estoy entrando trofeos");
                        return [4 /*yield*/, this.GetTrof()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.numTrof()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TrofeosPage.prototype.ngOnInit = function () {
        this.GetTrof();
        this.numTrof();
    };
    TrofeosPage.ctorParameters = function () { return [
        { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }
    ]; };
    TrofeosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trofeos',
            template: __webpack_require__(/*! raw-loader!./trofeos.page.html */ "./node_modules/raw-loader/index.js!./src/app/trofeos/trofeos.page.html"),
            styles: [__webpack_require__(/*! ./trofeos.page.scss */ "./src/app/trofeos/trofeos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
    ], TrofeosPage);
    return TrofeosPage;
}());



/***/ })

}]);
//# sourceMappingURL=trofeos-trofeos-module-es5.js.map