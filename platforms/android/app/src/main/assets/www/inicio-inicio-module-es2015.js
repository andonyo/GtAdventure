(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inicio-inicio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/inicio/inicio.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/inicio/inicio.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <link href=\"https://fonts.googleapis.com/css?family=Montserrat&display=swap\" rel=\"stylesheet\">\n</ion-header>\n\n<ion-content>\n\n<div class=\"todo_inicio\">\n<div class=\"info_user\">\n  <h1>Hola, {{name}}</h1>\n  <img id=\"imagen\" src=\"{{imagen}}\" alt=\"\" width=\"50px\">\n</div>\n<div class=\"pregunta\">\n  <div class=\"tuqui\">\n    <img class=\"tk\" src=\"/assets/img/montain.png\" alt=\"\" width=\"250px\">\n    <img class=\"monta\" src=\"/assets/img/montains.png\" alt=\"\" width=\"100%\">\n    <div class=\"glovo\">\n      <p>¿que tipo de lugar estas buscando hoy?</p>\n    </div>\n  </div>\n  <div class=\"verde\">\n    <div class=\"tipo_lugar\">\n      <div class=\"contl\" (click)=\"showPlaces('montanas')\">\n        <img src=\"/assets/img/monta.jpg\" alt=\"\" class=\"tipo_img\">\n        <p>Montañas</p>\n      </div>\n      <div class=\"contl\" (click)=\"showPlaces('volcanes')\">\n        <img src=\"/assets/img/volcan.jpg\" alt=\"\" class=\"tipo_img\">\n        <p>Volcanes</p>\n      </div>\n      <div class=\"contl\" (click)=\"showPlaces('caminatas')\">\n        <img src=\"/assets/img/caminata.jpg\" alt=\"\" class=\"tipo_img\">\n        <p>Caminatas</p>\n      </div>\n      <div class=\"contl\" (click)=\"showPlaces('cuevas')\">\n        <img src=\"/assets/img/cueva.jpg\" alt=\"\" class=\"tipo_img\">\n        <p>Cuevas</p>\n      </div>\n      <div class=\"contl\" (click)=\"showPlaces('otros')\">\n        <img src=\"/assets/img/otro.jpeg\" alt=\"\" class=\"tipo_img\">\n        <p>Otros</p>\n      </div>\n      <div style=\"width: 10vw;\"></div>\n    </div>\n    \n    <div style=\"display: contents;\" *ngIf=\"mostrar == 'volcanes'\">\n    <div class=\"text_tar\">\n        <p>Volcanes:</p>\n    </div>\n    <div class=\"tarjetas\">\n      \n      <div class=\"tarjeta\" (click)=\"pr(4)\">\n        <div class=\"tarjeta_img fuego\">\n          <div class=\"degradado\"></div>\n        </div>\n        <div class=\"info_tarjeta\">\n          <div class=\"cont_stars\">\n            <div class=\"estrellas\">\n              <p>4.7</p>\n              <ion-icon class=\"estrella_icon\" name=\"star\"></ion-icon>\n            </div>\n          </div>\n          <div class=\"titulo-text\">\n            <h2>Volcan de fuego</h2>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"tarjeta\" (click)=\"pr(5)\">\n        <div class=\"tarjeta_img acate\">\n          <div class=\"degradado\"></div>\n        </div>\n        <div class=\"info_tarjeta\">\n          <div class=\"cont_stars\">\n            <div class=\"estrellas\">\n              <p>4.7</p>\n              <ion-icon class=\"estrella_icon\" name=\"star\"></ion-icon>\n            </div>\n          </div>\n          <div class=\"titulo-text\">\n            <h2>Volcan de acatenango</h2>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"tarjeta\" (click)=\"pr(6)\">\n        <div class=\"tarjeta_img pacaya\">\n          <div class=\"degradado\"></div>\n        </div>\n        <div class=\"info_tarjeta\">\n          <div class=\"cont_stars\">\n            <div class=\"estrellas\">\n              <p>4.5</p>\n              <ion-icon class=\"estrella_icon\" name=\"star\"></ion-icon>\n            </div>\n          </div>\n          <div class=\"titulo-text\">\n            <h2>Volcan de pacaya</h2>\n          </div>\n        </div>\n      </div>\n\n      <div style=\"width: 10vw;\"></div>\n    </div>\n    </div>\n\n    <div style=\"display: contents;\" *ngIf=\"mostrar == 'montanas'\">\n        <div class=\"text_tar\">\n            <p>Montañas:</p>\n        </div>\n        <div class=\"tarjetas\">\n          \n          <div class=\"tarjeta\" (click)=\"pr(1)\">\n            <div class=\"tarjeta_img filon\">\n              <div class=\"degradado\"></div>\n            </div>\n            <div class=\"info_tarjeta\">\n              <div class=\"cont_stars\">\n                <div class=\"estrellas\">\n                  <p>4.1</p>\n                  <ion-icon class=\"estrella_icon\" name=\"star\"></ion-icon>\n                </div>\n              </div>\n              <div class=\"titulo-text\">\n                <h2>Montaña el filon</h2>\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"tarjeta\" (click)=\"pr(2)\">\n            <div class=\"tarjeta_img rostrom\">\n              <div class=\"degradado\"></div>\n            </div>\n            <div class=\"info_tarjeta\">\n              <div class=\"cont_stars\">\n                <div class=\"estrellas\">\n                  <p>4.5</p>\n                  <ion-icon class=\"estrella_icon\" name=\"star\"></ion-icon>\n                </div>\n              </div>\n              <div class=\"titulo-text\">\n                <h2>Mirador rostro maya</h2>\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"tarjeta\" (click)=\"pr(3)\">\n            <div class=\"tarjeta_img mirandilla\">\n              <div class=\"degradado\"></div>\n            </div>\n            <div class=\"info_tarjeta\">\n              <div class=\"cont_stars\">\n                <div class=\"estrellas\">\n                  <p>4.0</p>\n                  <ion-icon class=\"estrella_icon\" name=\"star\"></ion-icon>\n                </div>\n              </div>\n              <div class=\"titulo-text\">\n                <h2>Cerro mirandilla</h2>\n              </div>\n            </div>\n          </div>\n  \n          <div style=\"width: 10vw;\"></div>\n        </div>\n    </div>\n\n    <div style=\"display: contents;\" *ngIf=\"mostrar == 'caminatas'\">\n      <div class=\"text_tar\">\n          <p>Caminatas:</p>\n      </div>\n      <div class=\"tarjetas\">\n        \n        <div class=\"tarjeta\" (click)=\"pr(7)\">\n          <div class=\"tarjeta_img puente\">\n            <div class=\"degradado\"></div>\n          </div>\n          <div class=\"info_tarjeta\">\n            <div class=\"cont_stars\">\n              <div class=\"estrellas\">\n                <p>4.2</p>\n                <ion-icon class=\"estrella_icon\" name=\"star\"></ion-icon>\n              </div>\n            </div>\n            <div class=\"titulo-text\">\n              <h2>Puente de Ixpanpajul</h2>\n            </div>\n          </div>\n        </div>\n\n        <div style=\"width: 10vw;\"></div>\n      </div>\n    </div>\n\n    <div style=\"display: contents;\" *ngIf=\"mostrar == 'cuevas'\">\n      <div class=\"text_tar\">\n          <p>Cuevas:</p>\n      </div>\n      <div class=\"tarjetas\">\n        \n        <div class=\"tarjeta\" (click)=\"pr(8)\">\n          <div class=\"tarjeta_img bombil\">\n            <div class=\"degradado\"></div>\n          </div>\n          <div class=\"info_tarjeta\">\n            <div class=\"cont_stars\">\n              <div class=\"estrellas\">\n                <p>4.6</p>\n                <ion-icon class=\"estrella_icon\" name=\"star\"></ion-icon>\n              </div>\n            </div>\n            <div class=\"titulo-text\">\n              <h2>Cuevas de bombil pek</h2>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"tarjeta\" (click)=\"pr(9)\">\n          <div class=\"tarjeta_img caxlampon\">\n            <div class=\"degradado\"></div>\n          </div>\n          <div class=\"info_tarjeta\">\n            <div class=\"cont_stars\">\n              <div class=\"estrellas\">\n                <p>4.5</p>\n                <ion-icon class=\"estrella_icon\" name=\"star\"></ion-icon>\n              </div>\n            </div>\n            <div class=\"titulo-text\">\n              <h2>Cuevas de caxlampon</h2>\n            </div>\n          </div>\n        </div>\n\n        <div style=\"width: 10vw;\"></div>\n      </div>\n    </div>\n\n    <div style=\"display: contents;\" *ngIf=\"mostrar == 'otros'\">\n      <div class=\"text_tar\">\n          <p>Otros:</p>\n      </div>\n      <div class=\"tarjetas\">\n        \n        <div class=\"tarjeta\" (click)=\"pr(0)\">\n          <div class=\"tarjeta_img rinconada\">\n            <div class=\"degradado\"></div>\n          </div>\n          <div class=\"info_tarjeta\">\n            <div class=\"cont_stars\">\n              <div class=\"estrellas\">\n                <p>4.3</p>\n                <ion-icon class=\"estrella_icon\" name=\"star\"></ion-icon>\n              </div>\n            </div>\n            <div class=\"titulo-text\">\n              <h2>Catarata la rinconada</h2>\n            </div>\n          </div>\n        </div>\n\n        <div style=\"width: 10vw;\"></div>\n      </div>\n    </div>\n\n    <div class=\"text_tar\">\n      <p>Top 5 mas visitados:</p>\n    </div>\n    <div class=\"tarjetas\">\n\n        <div class=\"tarjeta\" (click)=\"pr(8)\">\n          <div class=\"tarjeta_img bombil\">\n            <div class=\"degradado\"></div>\n          </div>\n          <div class=\"info_tarjeta\">\n            <div class=\"cont_stars\">\n              <div class=\"estrellas\">\n                <p>4.6</p>\n                <ion-icon class=\"estrella_icon\" name=\"star\"></ion-icon>\n              </div>\n            </div>\n            <div class=\"titulo-text\">\n              <h2>Cuevas de bombil pek</h2>\n            </div>\n          </div>\n        </div>\n\n      <div class=\"tarjeta\" (click)=\"pr(0)\">\n        <div class=\"tarjeta_img rinconada\">\n          <div class=\"degradado\"></div>\n        </div>\n        <div class=\"info_tarjeta\">\n          <div class=\"cont_stars\">\n            <div class=\"estrellas\">\n              <p>4.3</p>\n              <ion-icon class=\"estrella_icon\" name=\"star\"></ion-icon>\n            </div>\n          </div>\n          <div class=\"titulo-text\">\n            <h2>Catarata la rinconada</h2>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"tarjeta\" (click)=\"pr(6)\">\n        <div class=\"tarjeta_img pacaya\">\n          <div class=\"degradado\"></div>\n        </div>\n        <div class=\"info_tarjeta\">\n          <div class=\"cont_stars\">\n            <div class=\"estrellas\">\n              <p>4.5</p>\n              <ion-icon class=\"estrella_icon\" name=\"star\"></ion-icon>\n            </div>\n          </div>\n          <div class=\"titulo-text\">\n            <h2>Volcan de pacaya</h2>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"tarjeta\" (click)=\"pr(2)\">\n        <div class=\"tarjeta_img rostrom\">\n          <div class=\"degradado\"></div>\n        </div>\n        <div class=\"info_tarjeta\">\n          <div class=\"cont_stars\">\n            <div class=\"estrellas\">\n              <p>4.5</p>\n              <ion-icon class=\"estrella_icon\" name=\"star\"></ion-icon>\n            </div>\n          </div>\n          <div class=\"titulo-text\">\n            <h2>Mirador rostro maya</h2>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"tarjeta\" (click)=\"pr(7)\">\n        <div class=\"tarjeta_img puente\">\n          <div class=\"degradado\"></div>\n        </div>\n        <div class=\"info_tarjeta\">\n          <div class=\"cont_stars\">\n            <div class=\"estrellas\">\n              <p>4.2</p>\n              <ion-icon class=\"estrella_icon\" name=\"star\"></ion-icon>\n            </div>\n          </div>\n          <div class=\"titulo-text\">\n            <h2>Puente de Ixpanpajul</h2>\n          </div>\n        </div>\n      </div>\n\n      <div style=\"width: 10vw;\"></div>\n    </div>\n  </div>\n</div>\n</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/inicio/inicio.module.ts":
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.module.ts ***!
  \*****************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio.page */ "./src/app/inicio/inicio.page.ts");







const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]
    }
];
let InicioPageModule = class InicioPageModule {
};
InicioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
    })
], InicioPageModule);



/***/ }),

/***/ "./src/app/inicio/inicio.page.scss":
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo_inicio {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  background: -webkit-gradient(linear, left top, right top, from(#0099ff), to(rgba(0, 145, 255, 0.74)));\n  background: linear-gradient(left, #0099ff, rgba(0, 145, 255, 0.74) 100%);\n}\n\n.info_user {\n  width: 80%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  color: white;\n  margin-top: 10px;\n}\n\n.info_user img {\n  border-radius: 50%;\n  border: white 2px solid;\n}\n\n.info_user h1 {\n  margin: 0;\n}\n\n.pregunta {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.tuqui {\n  position: relative;\n  width: 100%;\n  margin-top: 300px;\n}\n\n.tuqui img {\n  padding-top: 50px;\n  position: absolute;\n  bottom: -5px;\n}\n\n.monta {\n  position: absolute;\n  left: -8px;\n  max-width: none;\n  width: 104%;\n}\n\n.tk {\n  position: relative;\n  z-index: 5;\n  bottom: -9px;\n}\n\n.glovo {\n  background: #3880ff;\n  position: absolute;\n  left: 41%;\n  bottom: 131px;\n  text-align: center;\n  color: white;\n  border-radius: 50%;\n}\n\n.glovo::after {\n  content: \"\";\n  border-left: 27px solid #3880ff;\n  border-top: 0px solid transparent;\n  border-bottom: 31px solid transparent;\n  position: absolute;\n  top: 79%;\n  left: 8%;\n  -webkit-transform: rotate(28deg);\n          transform: rotate(28deg);\n}\n\n.verde {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  background: #018f2a;\n  padding-top: 20px;\n}\n\n.wood {\n  background-image: url(\"/assets/img/madera.jpg\");\n  background-size: cover;\n}\n\n.tipo_lugar {\n  width: 100%;\n  overflow: scroll;\n  display: -webkit-box;\n}\n\n.contl {\n  margin-left: 20px;\n  text-align: center;\n}\n\n.contl:nth-child(1) {\n  margin-left: 10vw;\n}\n\n.contl p {\n  margin: 0;\n  font-weight: 500;\n  color: white;\n}\n\n.tipo_lugar button {\n  background: white;\n  border-radius: 10px;\n  box-shadow: grey 0 0 2px;\n  width: 22%;\n  height: 60px;\n  font-size: 8px;\n  background: url(\"/assets/img/madera.jpg\");\n}\n\n.tipo_lugar button img {\n  margin-top: 5px;\n  width: 25px;\n}\n\n.tipo_img {\n  width: 70px;\n  border-radius: 50%;\n  border: 3px solid white;\n  box-shadow: 0 0 5px black;\n  margin-top: 6px;\n}\n\n.text_tar {\n  width: 80%;\n  margin-top: 20px;\n  color: white;\n  font-weight: bold;\n}\n\n.tarjetas {\n  width: 100%;\n  overflow: scroll;\n  display: -webkit-box;\n  padding-bottom: 20px;\n}\n\n.tarjeta {\n  background: white;\n  border-radius: 15px;\n  overflow: hidden;\n  width: 200px;\n  margin-left: 20px;\n}\n\n.tarjeta:nth-child(1) {\n  margin-left: 10vw;\n}\n\n.tarjeta_img {\n  background-size: cover;\n  width: 200px;\n  height: 130px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n\n.pacaya {\n  background-image: url(\"/assets/img/places/volcanPacaya.jpg\");\n}\n\n.fuego {\n  background-image: url(\"/assets/img/places/fuego.jpg\");\n}\n\n.acate {\n  background-image: url(\"/assets/img/places/acatenango.jpeg\");\n}\n\n.filon {\n  background-image: url(\"/assets/img/places/amati.jpg\");\n}\n\n.rostrom {\n  background-image: url(\"/assets/img/places/rostro.jpg\");\n}\n\n.mirandilla {\n  background-image: url(\"/assets/img/places/mirandilla.jpg\");\n}\n\n.puente {\n  background-image: url(\"/assets/img/places/ixpanpajul.jpg\");\n}\n\n.bombil {\n  background-image: url(\"/assets/img/places/bombil.png\");\n}\n\n.caxlampon {\n  background-image: url(\"/assets/img/places/caxlampon.jpg\");\n}\n\n.rinconada {\n  background-image: url(\"/assets/img/places/Catarata.jpg\");\n}\n\n.degradado {\n  background: -webkit-gradient(linear, left bottom, left top, from(white), to(transparent));\n  background: linear-gradient(0deg, white, transparent);\n  width: 100%;\n  height: 50%;\n}\n\n.cont_stars {\n  width: 25%;\n  margin-left: 5%;\n}\n\n.estrellas {\n  width: 50px;\n  background: #5175b5;\n  color: white;\n  text-align: center;\n  border-radius: 10px;\n}\n\n.estrellas p {\n  margin-bottom: 5px;\n  padding-top: 10px;\n}\n\n.estrella_icon {\n  font-size: 20px;\n  margin-bottom: 5px;\n}\n\n.info_tarjeta {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 10%;\n}\n\n.titulo-text {\n  margin-left: 5%;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZG9ueS9Eb2N1bWVudG9zL2lvbmljL2d0QWR2ZW50dXJlMi9zcmMvYXBwL2luaWNpby9pbmljaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9pbmljaW8vaW5pY2lvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxxR0FBQTtFQUFBLHdFQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSwrQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBRUksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7QUNBSjs7QURHQTtFQUNJLDREQUFBO0FDQUo7O0FER0E7RUFDSSxxREFBQTtBQ0FKOztBREdBO0VBQ0ksMkRBQUE7QUNBSjs7QURHQTtFQUNJLHFEQUFBO0FDQUo7O0FER0E7RUFDSSxzREFBQTtBQ0FKOztBREdBO0VBQ0ksMERBQUE7QUNBSjs7QURHQTtFQUNJLDBEQUFBO0FDQUo7O0FER0E7RUFDSSxzREFBQTtBQ0FKOztBREdBO0VBQ0kseURBQUE7QUNBSjs7QURHQTtFQUNJLHdEQUFBO0FDQUo7O0FER0E7RUFDSSx5RkFBQTtFQUFBLHFEQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9pbmljaW8vaW5pY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2RvX2luaWNpb3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2IoMCwgMTUzLCAyNTUpLCByZ2JhKDAsIDE0NSwgMjU1LCAwLjc0KSAxMDAlKTtcbn1cblxuLmluZm9fdXNlcntcbiAgICB3aWR0aDogODAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmluZm9fdXNlciBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IHdoaXRlIDJweCBzb2xpZDtcbn1cblxuLmluZm9fdXNlciBoMSB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ucHJlZ3VudGEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLnR1cXVpe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAzMDBweDtcbn1cblxuLnR1cXVpIGltZyB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTVweDtcbn1cblxuLm1vbnRhe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtOHB4O1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICB3aWR0aDogMTA0JTtcbn1cblxuLnRre1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA1O1xuICAgIGJvdHRvbTogLTlweDtcbn1cblxuLmdsb3ZvIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0MSU7XG4gICAgYm90dG9tOiAxMzFweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmdsb3ZvOjphZnRlcntcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvcmRlci1sZWZ0OiAyN3B4IHNvbGlkICMzODgwZmY7XG4gICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDMxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNzklO1xuICAgIGxlZnQ6IDglO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI4ZGVnKTtcbn1cblxuLnZlcmRlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYmFja2dyb3VuZDogIzAxOGYyYTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLndvb2Qge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL21hZGVyYS5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnRpcG9fbHVnYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG59XG5cbi5jb250bCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGw6bnRoLWNoaWxkKDEpe1xuICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xufVxuXG4uY29udGwgcHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi50aXBvX2x1Z2FyIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiBncmV5IDAgMCAycHg7XG4gICAgd2lkdGg6IDIyJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9tYWRlcmEuanBnJylcbn1cblxuLnRpcG9fbHVnYXIgYnV0dG9uIGltZ3tcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG59XG5cbi50aXBvX2ltZyB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4udGV4dF90YXJ7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRhcmpldGFze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi50YXJqZXRhIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4udGFyamV0YTpudGgtY2hpbGQoMSl7XG4gICAgbWFyZ2luLWxlZnQ6IDEwdnc7XG59XG5cbi50YXJqZXRhX2ltZyB7XG4gICAgXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLnBhY2F5YSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvcGxhY2VzL3ZvbGNhblBhY2F5YS5qcGdcIik7XG59XG5cbi5mdWVnbyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvcGxhY2VzL2Z1ZWdvLmpwZ1wiKTtcbn1cblxuLmFjYXRlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9wbGFjZXMvYWNhdGVuYW5nby5qcGVnXCIpO1xufVxuXG4uZmlsb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3BsYWNlcy9hbWF0aS5qcGdcIik7XG59XG5cbi5yb3N0cm9tIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9wbGFjZXMvcm9zdHJvLmpwZ1wiKTtcbn1cblxuLm1pcmFuZGlsbGEge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3BsYWNlcy9taXJhbmRpbGxhLmpwZ1wiKTtcbn1cblxuLnB1ZW50ZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvcGxhY2VzL2l4cGFucGFqdWwuanBnXCIpO1xufVxuXG4uYm9tYmlsIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9wbGFjZXMvYm9tYmlsLnBuZ1wiKTtcbn1cblxuLmNheGxhbXBvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvcGxhY2VzL2NheGxhbXBvbi5qcGdcIik7XG59XG5cbi5yaW5jb25hZGEge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3BsYWNlcy9DYXRhcmF0YS5qcGdcIik7XG59XG5cbi5kZWdyYWRhZG8ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCB3aGl0ZSwgdHJhbnNwYXJlbnQpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xufVxuXG4uY29udF9zdGFyc3tcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmVzdHJlbGxhcyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogIzUxNzViNTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5lc3RyZWxsYXMgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uZXN0cmVsbGFfaWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmluZm9fdGFyamV0YXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuXG4udGl0dWxvLXRleHQge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBmb250LXNpemU6IDIwcHg7XG59IiwiLnRvZG9faW5pY2lvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChsZWZ0LCAjMDA5OWZmLCByZ2JhKDAsIDE0NSwgMjU1LCAwLjc0KSAxMDAlKTtcbn1cblxuLmluZm9fdXNlciB7XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaW5mb191c2VyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiB3aGl0ZSAycHggc29saWQ7XG59XG5cbi5pbmZvX3VzZXIgaDEge1xuICBtYXJnaW46IDA7XG59XG5cbi5wcmVndW50YSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4udHVxdWkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAzMDBweDtcbn1cblxuLnR1cXVpIGltZyB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTVweDtcbn1cblxuLm1vbnRhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtOHB4O1xuICBtYXgtd2lkdGg6IG5vbmU7XG4gIHdpZHRoOiAxMDQlO1xufVxuXG4udGsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDU7XG4gIGJvdHRvbTogLTlweDtcbn1cblxuLmdsb3ZvIHtcbiAgYmFja2dyb3VuZDogIzM4ODBmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0MSU7XG4gIGJvdHRvbTogMTMxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5nbG92bzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItbGVmdDogMjdweCBzb2xpZCAjMzg4MGZmO1xuICBib3JkZXItdG9wOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDMxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3OSU7XG4gIGxlZnQ6IDglO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyOGRlZyk7XG59XG5cbi52ZXJkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kOiAjMDE4ZjJhO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLndvb2Qge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9tYWRlcmEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udGlwb19sdWdhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbn1cblxuLmNvbnRsIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRsOm50aC1jaGlsZCgxKSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHZ3O1xufVxuXG4uY29udGwgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGlwb19sdWdhciBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogZ3JleSAwIDAgMnB4O1xuICB3aWR0aDogMjIlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltZy9tYWRlcmEuanBnXCIpO1xufVxuXG4udGlwb19sdWdhciBidXR0b24gaW1nIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB3aWR0aDogMjVweDtcbn1cblxuLnRpcG9faW1nIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLnRleHRfdGFyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRhcmpldGFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnRhcmpldGEge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnRhcmpldGE6bnRoLWNoaWxkKDEpIHtcbiAgbWFyZ2luLWxlZnQ6IDEwdnc7XG59XG5cbi50YXJqZXRhX2ltZyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4ucGFjYXlhIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvcGxhY2VzL3ZvbGNhblBhY2F5YS5qcGdcIik7XG59XG5cbi5mdWVnbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3BsYWNlcy9mdWVnby5qcGdcIik7XG59XG5cbi5hY2F0ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3BsYWNlcy9hY2F0ZW5hbmdvLmpwZWdcIik7XG59XG5cbi5maWxvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3BsYWNlcy9hbWF0aS5qcGdcIik7XG59XG5cbi5yb3N0cm9tIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvcGxhY2VzL3Jvc3Ryby5qcGdcIik7XG59XG5cbi5taXJhbmRpbGxhIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvcGxhY2VzL21pcmFuZGlsbGEuanBnXCIpO1xufVxuXG4ucHVlbnRlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvcGxhY2VzL2l4cGFucGFqdWwuanBnXCIpO1xufVxuXG4uYm9tYmlsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvcGxhY2VzL2JvbWJpbC5wbmdcIik7XG59XG5cbi5jYXhsYW1wb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9wbGFjZXMvY2F4bGFtcG9uLmpwZ1wiKTtcbn1cblxuLnJpbmNvbmFkYSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3BsYWNlcy9DYXRhcmF0YS5qcGdcIik7XG59XG5cbi5kZWdyYWRhZG8ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgd2hpdGUsIHRyYW5zcGFyZW50KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xufVxuXG4uY29udF9zdGFycyB7XG4gIHdpZHRoOiAyNSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmVzdHJlbGxhcyB7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjNTE3NWI1O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmVzdHJlbGxhcyBwIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmVzdHJlbGxhX2ljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmluZm9fdGFyamV0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cblxuLnRpdHVsby10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBmb250LXNpemU6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/inicio/inicio.page.ts":
/*!***************************************!*\
  !*** ./src/app/inicio/inicio.page.ts ***!
  \***************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let InicioPage = class InicioPage {
    constructor(router) {
        this.router = router;
        this.mostrar = "nada";
        this.name = localStorage.getItem("name");
        this.imagen = localStorage.getItem("imagen");
    }
    pr(valor) {
        switch (valor) {
            case 1:
                localStorage.setItem("namePlace", "Montaña el filon");
                localStorage.setItem("descripPlace", "El ambiente y el reto personal que te pone cada ruta es tan difícil como uno quiera; lo importante es que siempre puedes vencerte a ti mismo. El Peñón de Amatitlán cuenta con más de 50 rutas de diversos niveles. Podrás aprender desde cero en las rutas junior o campo escuela.");
                localStorage.setItem("starsPlace", "4.1");
                localStorage.setItem("lugarPlace", "Amatitlan, Guatemala");
                localStorage.setItem("puntosPlace", "200");
                localStorage.setItem("imgPlace", "filon");
                localStorage.setItem("imgsPlace", "2");
                localStorage.setItem("linkG", "https://goo.gl/maps/Z6C5MroauumKBGnaA");
                break;
            case 2:
                localStorage.setItem("namePlace", "Mirador rostro maya");
                localStorage.setItem("descripPlace", "Este hermoso mirador se encuentra en San Juan La Laguna y es uno de los más hermosos que existen en el país. Además del espectacular panorama que podrás observar desde este punto del lago de Atitlán, también se puede ver un rostro que parece una persona que estuviera acostada. Eso es algo muy interesante que llama la atención de cientos de turistas.");
                localStorage.setItem("starsPlace", "4.5");
                localStorage.setItem("lugarPlace", "Panajachel, Solola");
                localStorage.setItem("puntosPlace", "300");
                localStorage.setItem("imgPlace", "rostrom");
                localStorage.setItem("imgsPlace", "3");
                localStorage.setItem("linkG", "https://goo.gl/maps/acb7JBThM1jgKXFq5");
                break;
            case 3:
                localStorage.setItem("namePlace", "Cerro mirandilla");
                localStorage.setItem("descripPlace", "En la carretera o camino que dirige de Ciudad Vieja a Palín, Escuintla, se encuentra el cerro Mirandilla. Aunque los habitantes de los alrededores también lo llaman Tres Picachos debido a las formaciones que tiene en la cima.");
                localStorage.setItem("starsPlace", "4.0");
                localStorage.setItem("lugarPlace", "Palin, Escuintla");
                localStorage.setItem("puntosPlace", "250");
                localStorage.setItem("imgPlace", "mirandilla");
                localStorage.setItem("imgsPlace", "4");
                localStorage.setItem("linkG", "https://goo.gl/maps/U6VtsBKRESu6fobY7");
                break;
            case 4:
                localStorage.setItem("namePlace", "Volcan de fuego");
                localStorage.setItem("descripPlace", "El volcán de Fuego es a lo que se le conoce como un estratovolcán situado entre los departamentos de Sacatepéquez, Escuintla y Chimaltenango, al centro-sur de Guatemala. El volcán de Fuego es uno de los más impresionantes de Centroamérica.");
                localStorage.setItem("starsPlace", "4.7");
                localStorage.setItem("lugarPlace", "Sacatepéquez, Escuintla y Chimaltenango");
                localStorage.setItem("puntosPlace", "351");
                localStorage.setItem("imgPlace", "fuego");
                localStorage.setItem("imgsPlace", "5");
                localStorage.setItem("linkG", "https://goo.gl/maps/8noDiJvKnnd75fs18");
                break;
            case 5:
                localStorage.setItem("namePlace", "Volcan de acatenango");
                localStorage.setItem("descripPlace", "El Acatenango es un estratovolcan de Guatemala, en cercanías de la ciudad de Antigua en el municipio de Acatenango. El volcán tiene dos picos, el Pico Mayor y Yepocapa, que también es conocido como Tres Hermanas.");
                localStorage.setItem("starsPlace", "4.7");
                localStorage.setItem("lugarPlace", "Acatenango, Chimaltenango");
                localStorage.setItem("puntosPlace", "416");
                localStorage.setItem("imgPlace", "acate");
                localStorage.setItem("imgsPlace", "6");
                localStorage.setItem("linkG", "https://goo.gl/maps/tGc7ZFjHgANWwcJTA");
                break;
            case 6:
                localStorage.setItem("namePlace", "Volcan de pacaya");
                localStorage.setItem("descripPlace", "El Pacaya es un volcán activo ubicado en el municipio de San Vicente Pacaya en el departamento de Escuintla, Guatemala. Se desconoce hace cuántos miles de años hizo erupción por primera vez, pero se han registrado al menos 23 erupciones desde la época de colonización española de América en Guatemala.");
                localStorage.setItem("starsPlace", "4.5");
                localStorage.setItem("lugarPlace", "San vicente, Escuintla");
                localStorage.setItem("puntosPlace", "256");
                localStorage.setItem("imgPlace", "pacaya");
                localStorage.setItem("imgsPlace", "1");
                localStorage.setItem("linkG", "https://goo.gl/maps/jQHTJTGStCXNF4kX9");
                break;
            case 7:
                localStorage.setItem("namePlace", "Puente de Ixpanpajul");
                localStorage.setItem("descripPlace", "En el Parque Ecológico Ixpanpajul, ubicado en Petén, vas a encontrar una aventura ideal para los amantes de las alturas. Se trata de un puente colgante dentro de un esplendoroso bosque. Al atravesarlo se observa una vista única de este departamento de Guatemala. Ideal para salir de la rutina y tomar fotografías extremas.");
                localStorage.setItem("starsPlace", "4.2");
                localStorage.setItem("lugarPlace", "Peten, Guatemala");
                localStorage.setItem("puntosPlace", "163");
                localStorage.setItem("imgPlace", "puente");
                localStorage.setItem("imgsPlace", "7");
                localStorage.setItem("linkG", "https://goo.gl/maps/wLtoziHuBuXDanN18");
                break;
            case 8:
                localStorage.setItem("namePlace", "Cuevas de bombil pek");
                localStorage.setItem("descripPlace", "Las impresionantes Cuevas de Bombil Pek y Jul'iq son administradas por la comunidad de El Porvenir, quienes ponen a tu disposición todo el equipo para poder vivir esta aventura extrema. La Cueva de Jul'iq se puede recorrer caminando y observar increíbles formaciones geológicas, mientras que en la visita a Bombil Pek se debe realizar un descenso aproximado de 80 metros en rápel. El sitio fue descubierto en 1972 por el francés Daniel Draws. Pero fue hasta el 2002 cuando las cuevas fueron abiertas al público.");
                localStorage.setItem("starsPlace", "4.6");
                localStorage.setItem("lugarPlace", "Senahu, Alta Verapaz");
                localStorage.setItem("puntosPlace", "260");
                localStorage.setItem("imgPlace", "bombil");
                localStorage.setItem("imgsPlace", "8");
                localStorage.setItem("linkG", "https://goo.gl/maps/B1o8mFC7B3wmccpz9");
                break;
            case 9:
                localStorage.setItem("namePlace", "Cuevas de caxlampon");
                localStorage.setItem("descripPlace", "Cueva o Grutas de Caxlampon, se encuentran localizadas en el Boquerón, El Estor, Izabal al final del Río El Sauce, y para llegar hasta ellas se necesitan más de dos horas, las cuales se caminan entre vegetación y selva.");
                localStorage.setItem("starsPlace", "4.5");
                localStorage.setItem("lugarPlace", "El boquerón, Izabal");
                localStorage.setItem("puntosPlace", "375");
                localStorage.setItem("imgPlace", "caxlampon");
                localStorage.setItem("imgsPlace", "9");
                localStorage.setItem("linkG", "https://goo.gl/maps/p4kpaVLPK487mLTo8");
                break;
            case 0:
                localStorage.setItem("namePlace", "Catarata la rinconada");
                localStorage.setItem("descripPlace", "En el área de San Miguel Dueñas puedes encontrar una linda cascada que se llama la Rinconada, fue nombrada así por el lugar en donde se encuentra ubicada. Este es un lugar ideal para hacer rapel, ya que tiene una caída de agua de 40 metros de altura, en donde tienes que caminar aproximadamente 300 metros. A tan solo 45 minutos de la Ciudad de Guatemala.");
                localStorage.setItem("starsPlace", "4.3");
                localStorage.setItem("lugarPlace", "San Miguel Dueñas, Sacatepéquez");
                localStorage.setItem("puntosPlace", "201");
                localStorage.setItem("imgPlace", "rinconada");
                localStorage.setItem("imgsPlace", "0");
                localStorage.setItem("linkG", "https://goo.gl/maps/DiZASPzKxUtXjKHT6");
                break;
            default:
                break;
        }
        this.router.navigateByUrl('/lugar');
    }
    showPlaces(valor) {
        this.mostrar = valor;
        console.log(this.mostrar);
    }
    ionViewWillEnter() {
        console.log("estoy entrando inicio");
        this.name = localStorage.getItem("name");
        this.imagen = localStorage.getItem("imagen");
    }
    ngOnInit() {
        document.getElementById('imagen').setAttribute("src", this.imagen);
    }
};
InicioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
InicioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inicio',
        template: __webpack_require__(/*! raw-loader!./inicio.page.html */ "./node_modules/raw-loader/index.js!./src/app/inicio/inicio.page.html"),
        styles: [__webpack_require__(/*! ./inicio.page.scss */ "./src/app/inicio/inicio.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], InicioPage);



/***/ })

}]);
//# sourceMappingURL=inicio-inicio-module-es2015.js.map