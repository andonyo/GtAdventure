(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lugar-lugar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/lugar/lugar.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lugar/lugar.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  </ion-header>\n  <div id=\"cerrar-c\" class=\"todo-coment\" (click)=\"mostrarComentario()\">\n  </div>\n  <div id=\"cerrar-cc\" class=\"todo-coment\" (click)=\"hideShow()\">\n  </div>  \n  <div id=\"comentar\" class=\"datosL\">\n    <div class=\"textosC\">\n      <h3>Comentarios</h3>\n      <div class=\"coment\" *ngFor=\"let item of datos\">\n        <div class=\"comImg\">\n          <img src=\"{{item.imagen}}\" alt=\"\">\n        </div>\n        <div class=\"comTx\">\n          <h3 class=\"nobor\">{{item.nombre}}</h3>\n          <p  class=\"nobor\">{{item.texto}}</p>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"comentUser\">\n      <input [(ngModel)]=\"coment\" type=\"text\" placeholder=\"Ingrese su comentario\" required>\n    </div>\n    \n    <div class=\"imgC\">\n      <img (click)=\"mostrarComentario()\" src=\"/assets/img/libro.png\" alt=\"\">\n      <button (click)=\"comentar()\">Comentar</button>\n    </div>\n  </div>\n  \n\n  <div id=\"modalL\" class=\"datosL\">\n    <div class=\"textosC\" *ngIf=\"mostrar == 1\">\n      <h3>{{nombre}}</h3>\n      <p class=\"mb\">{{moreInfo}}</p>\n      <p><b>{{titulo1}}</b><br>{{data1}}</p>\n      <p><b>{{titulo2}}</b><br>{{data2}}</p>\n      <p><b>{{titulo3}}</b><br>{{data3}}</p>\n    </div>\n\n    <div class=\"textosC\" *ngIf=\"mostrar == 3\">\n      <h3>Hoteles</h3>\n      <a class=\"hotel-cont\" href=\"{{hotellink1}}\">\n        <div class=\"imHot\">\n          <img src=\"{{hotelimg1}}\" alt=\"\">\n        </div>\n        <div>\n          <h3 class=\"nobor\">{{hotelname1}}</h3>\n        </div>\n      </a>\n      <a class=\"hotel-cont\" href=\"{{hotellink2}}\">\n        <div class=\"imHot\">\n          <img src=\"{{hotelimg2}}\" alt=\"\">\n        </div>\n        <div>\n          <h3 class=\"nobor\">{{hotelname2}}</h3>\n        </div>\n      </a>\n    </div>\n\n    <div class=\"imgC\">\n      <img (click)=\"hideShow()\" src=\"/assets/img/libro.png\" alt=\"\">\n    </div>\n  </div>\n\n  <ion-content id=\"blurL\" class=\"centro\">\n    <div class=\"imagen {{imagen}}\">\n      <ion-icon class=\"back\" (click)=\"back()\" name=\"arrow-back\"></ion-icon>\n      <div class=\"degradado\"></div>\n    </div>\n    <div>\n      <div class=\"info_tarjeta\">\n        <div class=\"cont_stars\">\n          <div class=\"estrellas\">\n            <p>{{estrellas}}</p>\n            <ion-icon class=\"estrella_icon\" name=\"star\"></ion-icon>\n          </div>\n        </div>\n        <div class=\"titulo-text\">\n          <h3>{{nombre}}</h3>\n          <p>{{lugar}}</p>\n          <p class=\"puntos\">{{puntos}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"textos_lugar\">\n      <h1>{{nombre}}</h1>\n      <p class=\"descrip_texto\">{{descripcion}}</p>\n    </div>\n    <div class=\"informa\">\n      <div class=\"informacion\" (click)=\"hideShow(1)\">\n          <ion-icon class=\"infoIco\" name=\"information-circle-outline\"></ion-icon>\n          <p class=\"infoTex\">Información</p>\n      </div>\n      <div class=\"informacion\" (click)=\"mostrarComentario()\">\n          <ion-icon class=\"infoIco\" name=\"contacts\"></ion-icon>\n          <p class=\"infoTex\">Comentarios</p>\n      </div>\n      <div class=\"informacion\" (click)=\"hideShow(3)\">\n          <ion-icon class=\"infoIco\" name=\"bed\"></ion-icon>\n          <p class=\"infoTex\">Hoteles</p>\n      </div>\n      <a href=\"{{link}}\">\n        <div class=\"informacion\">\n          <img src=\"/assets/img/gmaps.png\" alt=\"\">\n        </div>\n      </a>\n    </div>\n    <div class=\"imagenes_lugar\">\n      <div class=\"img_lc\">\n        <img class=\"img_lugar\" src=\"/assets/img/{{imagenes}}/1.jpg\" alt=\"\">\n      </div>\n      <div class=\"img_lc\">\n        <img class=\"img_lugar\" src=\"/assets/img/{{imagenes}}/2.jpg\" alt=\"\">\n      </div>\n      <div class=\"img_lc\">\n        <img class=\"img_lugar\" src=\"/assets/img/{{imagenes}}/3.jpg\" alt=\"\">\n      </div>\n      <div style=\"width: 5vw;\"></div>\n    </div>\n  \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/lugar/lugar.module.ts":
/*!***************************************!*\
  !*** ./src/app/lugar/lugar.module.ts ***!
  \***************************************/
/*! exports provided: LugarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LugarPageModule", function() { return LugarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lugar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lugar.page */ "./src/app/lugar/lugar.page.ts");







var routes = [
    {
        path: '',
        component: _lugar_page__WEBPACK_IMPORTED_MODULE_6__["LugarPage"]
    }
];
var LugarPageModule = /** @class */ (function () {
    function LugarPageModule() {
    }
    LugarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_lugar_page__WEBPACK_IMPORTED_MODULE_6__["LugarPage"]]
        })
    ], LugarPageModule);
    return LugarPageModule;
}());



/***/ }),

/***/ "./src/app/lugar/lugar.page.scss":
/*!***************************************!*\
  !*** ./src/app/lugar/lugar.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centro {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.blur {\n  -webkit-filter: blur(3px);\n          filter: blur(3px);\n}\n\n.datosL {\n  position: absolute;\n  background: white;\n  z-index: 5;\n  width: 90%;\n  height: 60vh;\n  margin: 5vh 5%;\n  border-radius: 15px;\n  box-shadow: 0 0 5px grey;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.textosC {\n  height: 80%;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n\n.textosC h3 {\n  text-align: center;\n}\n\n.textosC p {\n  width: 90%;\n  margin: 0 5%;\n  text-align: justify;\n  margin-bottom: 10px !important;\n}\n\n.imgC {\n  position: relative;\n  text-align: end;\n}\n\n.imgC img {\n  position: absolute;\n  left: -160px;\n  top: -60px;\n}\n\n.imgC button {\n  margin: 20px 20px 0 0;\n  padding: 15px;\n  border-radius: 20px;\n  width: 35%;\n  color: white;\n  background: darkcyan;\n  box-shadow: 0 6px 0 #014c4c;\n}\n\n.hotel-cont {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  box-shadow: 0 0 5px grey;\n  padding: 10px;\n  width: 90%;\n  margin: 0 5%;\n  border-radius: 5px;\n  text-decoration: none;\n  color: darkslategrey;\n  margin-bottom: 15px;\n}\n\n.imHot {\n  width: 40%;\n  padding-right: 2%;\n}\n\n.mostrar {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.todo-coment {\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  background: transparent;\n  display: none;\n  z-index: 3;\n}\n\n.most-cc {\n  display: block;\n}\n\n.coment {\n  display: -webkit-box;\n  display: flex;\n  width: 90%;\n  margin: 0 5%;\n  padding: 5px;\n  border-radius: 5px;\n  box-shadow: 0 0 5px grey;\n  margin-bottom: 15px;\n}\n\n.comImg {\n  width: 30%;\n}\n\n.comImg img {\n  border-radius: 50px;\n  margin: 5px;\n  width: 50px;\n}\n\n.comTx {\n  margin-left: 20px;\n  width: 100%;\n}\n\n.comTx p {\n  width: auto;\n}\n\n.nobor {\n  text-align: left !important;\n  margin: 0 !important;\n}\n\n.comentUser {\n  width: 90%;\n  margin: 0 5%;\n}\n\n.comentUser input {\n  width: 100%;\n  border: 1px black solid;\n  border-radius: 15px;\n  padding: 10px;\n  position: relative;\n  z-index: 10;\n}\n\n.imagen {\n  width: 100%;\n  height: 40vh;\n  background-image: url(\"/assets/img/volcanPacaya.jpg\");\n  background-size: cover;\n  background-position: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n\n.pacaya {\n  background-image: url(\"/assets/img/places/volcanPacaya.jpg\");\n}\n\n.fuego {\n  background-image: url(\"/assets/img/places/fuego.jpg\");\n}\n\n.acate {\n  background-image: url(\"/assets/img/places/acatenango.jpeg\");\n}\n\n.filon {\n  background-image: url(\"/assets/img/places/amati.jpg\");\n}\n\n.rostrom {\n  background-image: url(\"/assets/img/places/rostro.jpg\");\n}\n\n.mirandilla {\n  background-image: url(\"/assets/img/places/mirandilla.jpg\");\n}\n\n.puente {\n  background-image: url(\"/assets/img/places/ixpanpajul.jpg\");\n}\n\n.bombil {\n  background-image: url(\"/assets/img/places/bombil.png\");\n}\n\n.caxlampon {\n  background-image: url(\"/assets/img/places/caxlampon.jpg\");\n}\n\n.rinconada {\n  background-image: url(\"/assets/img/places/Catarata.jpg\");\n}\n\n.back {\n  position: absolute;\n  top: 2vh;\n  left: 2vh;\n  color: white;\n  font-size: 40px;\n}\n\n.degradado {\n  background: -webkit-gradient(linear, left bottom, left top, from(white), to(transparent));\n  background: linear-gradient(0deg, white, transparent);\n  width: 100%;\n  height: 50%;\n}\n\n.info_tarjeta {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 10%;\n}\n\n.cont_stars {\n  margin-left: 5vw;\n  margin-right: 20px;\n}\n\n.estrellas {\n  width: 50px;\n  background: #5175b5;\n  color: white;\n  text-align: center;\n  border-radius: 10px;\n}\n\n.estrellas p {\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 5px;\n}\n\n.estrellas ion-icon {\n  padding-bottom: 10px;\n}\n\n.titulo-text h3, p {\n  margin: 0;\n}\n\n.titulo-text p {\n  margin: 0;\n  font-size: 12px;\n}\n\n.puntos {\n  color: #3880ff;\n  font-size: 20px !important;\n  font-weight: 600;\n}\n\n.puntos::after {\n  content: \"pts\";\n  font-size: 10px;\n  position: absolute;\n  padding-left: 3px;\n  font-weight: normal;\n}\n\n.textos_lugar {\n  padding: 0 5%;\n}\n\n.descrip_texto {\n  text-align: justify;\n  margin-bottom: 20px;\n}\n\n.textos_lugar a {\n  text-decoration: none;\n  color: #000;\n  font-weight: 600;\n}\n\n.informa {\n  display: -webkit-box;\n  width: 90%;\n  margin: 5%;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  overflow: scroll;\n}\n\n.informacion {\n  width: 45%;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 10px;\n  box-shadow: 0 0 5px grey;\n  height: 85px;\n  padding: 0px 10px;\n  margin: 5% 4% 5% 1%;\n}\n\n.infoIco {\n  font-size: 25px;\n  color: dodgerblue;\n}\n\n.infoTex {\n  font-weight: bold;\n  color: grey;\n}\n\n.maps {\n  width: 45%;\n  box-shadow: 0 0 5px grey;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.imagenes_lugar {\n  width: 100%;\n  overflow: scroll;\n  display: -webkit-box;\n  padding-bottom: 20px;\n}\n\n.img_lc {\n  width: 200px;\n  height: 300px;\n  border-radius: 15px;\n  overflow: hidden;\n  box-shadow: #8080807d 0 0 5px;\n  margin-left: 20px;\n}\n\n.img_lc:nth-child(1) {\n  margin-left: 5vw;\n}\n\n.img_lugar {\n  max-width: none;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZG9ueS9Eb2N1bWVudG9zL2lvbmljL2d0QWR2ZW50dXJlMi9zcmMvYXBwL2x1Z2FyL2x1Z2FyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbHVnYXIvbHVnYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtVQUFBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxREFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSw0REFBQTtBQ0NKOztBREVBO0VBQ0kscURBQUE7QUNDSjs7QURFQTtFQUNJLDJEQUFBO0FDQ0o7O0FERUE7RUFDSSxxREFBQTtBQ0NKOztBREVBO0VBQ0ksc0RBQUE7QUNDSjs7QURFQTtFQUNJLDBEQUFBO0FDQ0o7O0FERUE7RUFDSSwwREFBQTtBQ0NKOztBREVBO0VBQ0ksc0RBQUE7QUNDSjs7QURFQTtFQUNJLHlEQUFBO0FDQ0o7O0FERUE7RUFDSSx3REFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSx5RkFBQTtFQUFBLHFEQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtBQ0NKOztBRENBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0VKOztBRENBO0VBQ0ksYUFBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtBQ0VKOztBRENBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDQTtFQUNJLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0E7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sdWdhci9sdWdhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudHJve1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmJsdXIge1xuICAgIGZpbHRlcjogYmx1cigzcHgpO1xufVxuXG4uZGF0b3NMe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB6LWluZGV4OiA1O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIG1hcmdpbjogNXZoIDUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCBncmV5O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG4udGV4dG9zQ3tcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnRleHRvc0MgaDN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dG9zQyBwIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCA1JTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmltZ0Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5pbWdDIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xNjBweDtcbiAgICB0b3A6IC02MHB4O1xufVxuXG4uaW1nQyBidXR0b24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDAgMDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogZGFya2N5YW47XG4gICAgYm94LXNoYWRvdzogMCA2cHggMCAjMDE0YzRjO1xufVxuXG4uaG90ZWwtY29udCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggZ3JleTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIDUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmltSG90e1xuICAgIHdpZHRoOiA0MCU7XG4gICAgcGFkZGluZy1yaWdodDogMiU7XG59XG5cbi5tb3N0cmFyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4udG9kby1jb21lbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgei1pbmRleDogMztcbn1cblxuLm1vc3QtY2Mge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY29tZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIDUlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCBncmV5O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5jb21JbWcge1xuICAgIHdpZHRoOiAzMCU7XG59XG5cbi5jb21JbWcgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4uY29tVHgge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29tVHggcCB7XG4gICAgd2lkdGg6IGF1dG87XG59XG5cbi5ub2JvciB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4uY29tZW50VXNlciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgNSU7XG59XG5cbi5jb21lbnRVc2VyIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xufVxuXG4uaW1hZ2VuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwdmg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvdm9sY2FuUGFjYXlhLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLnBhY2F5YSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvcGxhY2VzL3ZvbGNhblBhY2F5YS5qcGdcIik7XG59XG5cbi5mdWVnbyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvcGxhY2VzL2Z1ZWdvLmpwZ1wiKTtcbn1cblxuLmFjYXRlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9wbGFjZXMvYWNhdGVuYW5nby5qcGVnXCIpO1xufVxuXG4uZmlsb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3BsYWNlcy9hbWF0aS5qcGdcIik7XG59XG5cbi5yb3N0cm9tIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9wbGFjZXMvcm9zdHJvLmpwZ1wiKTtcbn1cblxuLm1pcmFuZGlsbGEge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3BsYWNlcy9taXJhbmRpbGxhLmpwZ1wiKTtcbn1cblxuLnB1ZW50ZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvcGxhY2VzL2l4cGFucGFqdWwuanBnXCIpO1xufVxuXG4uYm9tYmlsIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9wbGFjZXMvYm9tYmlsLnBuZ1wiKTtcbn1cblxuLmNheGxhbXBvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvcGxhY2VzL2NheGxhbXBvbi5qcGdcIik7XG59XG5cbi5yaW5jb25hZGEge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3BsYWNlcy9DYXRhcmF0YS5qcGdcIik7XG59XG5cbi5iYWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAydmg7XG4gICAgbGVmdDogMnZoO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5kZWdyYWRhZG8ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCB3aGl0ZSwgdHJhbnNwYXJlbnQpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xufVxuXG4uaW5mb190YXJqZXRhe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi5jb250X3N0YXJze1xuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uZXN0cmVsbGFzIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNTE3NWI1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmVzdHJlbGxhcyBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmVzdHJlbGxhcyBpb24taWNvbntcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnRpdHVsby10ZXh0IGgzLCBwe1xuICAgIG1hcmdpbjogMDtcbn1cbi50aXR1bG8tdGV4dCBwe1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wdW50b3Mge1xuICAgIGNvbG9yOiAjMzg4MGZmO1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5wdW50b3M6OmFmdGVye1xuICAgIGNvbnRlbnQ6IFwicHRzXCI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4udGV4dG9zX2x1Z2FyIHtcbiAgICBwYWRkaW5nOiAwIDUlO1xufVxuXG4uZGVzY3JpcF90ZXh0byB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGV4dG9zX2x1Z2FyIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5pbmZvcm1hIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogNSU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLmluZm9ybWFjaW9uIHtcbiAgICB3aWR0aDogNDUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggZ3JleTtcbiAgICBoZWlnaHQ6IDg1cHg7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgbWFyZ2luOiA1JSA0JSA1JSAxJTtcbiAgICBcbn1cblxuLmluZm9JY28ge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjpkb2RnZXJibHVlO1xufVxuXG4uaW5mb1RleCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IGdyZXk7XG59XG5cbi5tYXBze1xuICAgIHdpZHRoOiA0NSU7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCBncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmltYWdlbmVzX2x1Z2FyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uaW1nX2xje1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAjODA4MDgwN2QgMCAwIDVweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmltZ19sYzpudGgtY2hpbGQoMSkge1xuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XG59XG5cbi5pbWdfbHVnYXIge1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4iLCIuY2VudHJvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmJsdXIge1xuICBmaWx0ZXI6IGJsdXIoM3B4KTtcbn1cblxuLmRhdG9zTCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHotaW5kZXg6IDU7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNjB2aDtcbiAgbWFyZ2luOiA1dmggNSU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggZ3JleTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnRleHRvc0Mge1xuICBoZWlnaHQ6IDgwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4udGV4dG9zQyBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHRvc0MgcCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCA1JTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uaW1nQyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4uaW1nQyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xNjBweDtcbiAgdG9wOiAtNjBweDtcbn1cblxuLmltZ0MgYnV0dG9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMCAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogMzUlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGRhcmtjeWFuO1xuICBib3gtc2hhZG93OiAwIDZweCAwICMwMTRjNGM7XG59XG5cbi5ob3RlbC1jb250IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwIDVweCBncmV5O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgNSU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogZGFya3NsYXRlZ3JleTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmltSG90IHtcbiAgd2lkdGg6IDQwJTtcbiAgcGFkZGluZy1yaWdodDogMiU7XG59XG5cbi5tb3N0cmFyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnRvZG8tY29tZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5tb3N0LWNjIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb21lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgNSU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDAgNXB4IGdyZXk7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5jb21JbWcge1xuICB3aWR0aDogMzAlO1xufVxuXG4uY29tSW1nIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLmNvbVR4IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29tVHggcCB7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4ubm9ib3Ige1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4uY29tZW50VXNlciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCA1JTtcbn1cblxuLmNvbWVudFVzZXIgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5pbWFnZW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy92b2xjYW5QYWNheWEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLnBhY2F5YSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3BsYWNlcy92b2xjYW5QYWNheWEuanBnXCIpO1xufVxuXG4uZnVlZ28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9wbGFjZXMvZnVlZ28uanBnXCIpO1xufVxuXG4uYWNhdGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9wbGFjZXMvYWNhdGVuYW5nby5qcGVnXCIpO1xufVxuXG4uZmlsb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9wbGFjZXMvYW1hdGkuanBnXCIpO1xufVxuXG4ucm9zdHJvbSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3BsYWNlcy9yb3N0cm8uanBnXCIpO1xufVxuXG4ubWlyYW5kaWxsYSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3BsYWNlcy9taXJhbmRpbGxhLmpwZ1wiKTtcbn1cblxuLnB1ZW50ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3BsYWNlcy9peHBhbnBhanVsLmpwZ1wiKTtcbn1cblxuLmJvbWJpbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3BsYWNlcy9ib21iaWwucG5nXCIpO1xufVxuXG4uY2F4bGFtcG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvcGxhY2VzL2NheGxhbXBvbi5qcGdcIik7XG59XG5cbi5yaW5jb25hZGEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9wbGFjZXMvQ2F0YXJhdGEuanBnXCIpO1xufVxuXG4uYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAydmg7XG4gIGxlZnQ6IDJ2aDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5kZWdyYWRhZG8ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgd2hpdGUsIHRyYW5zcGFyZW50KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xufVxuXG4uaW5mb190YXJqZXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuXG4uY29udF9zdGFycyB7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmVzdHJlbGxhcyB7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjNTE3NWI1O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmVzdHJlbGxhcyBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmVzdHJlbGxhcyBpb24taWNvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4udGl0dWxvLXRleHQgaDMsIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi50aXR1bG8tdGV4dCBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wdW50b3Mge1xuICBjb2xvcjogIzM4ODBmZjtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5wdW50b3M6OmFmdGVyIHtcbiAgY29udGVudDogXCJwdHNcIjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4udGV4dG9zX2x1Z2FyIHtcbiAgcGFkZGluZzogMCA1JTtcbn1cblxuLmRlc2NyaXBfdGV4dG8ge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGV4dG9zX2x1Z2FyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaW5mb3JtYSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDUlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5pbmZvcm1hY2lvbiB7XG4gIHdpZHRoOiA0NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgNXB4IGdyZXk7XG4gIGhlaWdodDogODVweDtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIG1hcmdpbjogNSUgNCUgNSUgMSU7XG59XG5cbi5pbmZvSWNvIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogZG9kZ2VyYmx1ZTtcbn1cblxuLmluZm9UZXgge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5tYXBzIHtcbiAgd2lkdGg6IDQ1JTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW1hZ2VuZXNfbHVnYXIge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uaW1nX2xjIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAjODA4MDgwN2QgMCAwIDVweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5pbWdfbGM6bnRoLWNoaWxkKDEpIHtcbiAgbWFyZ2luLWxlZnQ6IDV2dztcbn1cblxuLmltZ19sdWdhciB7XG4gIG1heC13aWR0aDogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/lugar/lugar.page.ts":
/*!*************************************!*\
  !*** ./src/app/lugar/lugar.page.ts ***!
  \*************************************/
/*! exports provided: LugarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LugarPage", function() { return LugarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");




var LugarPage = /** @class */ (function () {
    function LugarPage(router, db) {
        this.router = router;
        this.db = db;
        this.nombre = localStorage.getItem("namePlace");
        this.descripcion = localStorage.getItem("descripPlace");
        this.estrellas = localStorage.getItem("starsPlace");
        this.imagen = localStorage.getItem("imgPlace");
        this.imagenes = localStorage.getItem("imgsPlace");
        this.lugar = localStorage.getItem("lugarPlace");
        this.puntos = localStorage.getItem("puntosPlace");
        this.link = localStorage.getItem("linkG");
        this.name = localStorage.getItem("name");
        this.imagenU = localStorage.getItem("imagen");
        this.coment = "";
        this.moreInfo = "";
        this.titulo1 = "";
        this.titulo2 = "";
        this.titulo3 = "";
        this.data1 = "";
        this.data2 = "";
        this.data3 = "";
        this.hotelimg1 = "";
        this.hotelimg2 = "";
        this.hotelname1 = "";
        this.hotelname2 = "";
        this.hotellink1 = "";
        this.hotellink2 = "";
        this.mostrar = 0;
    }
    LugarPage.prototype.back = function () {
        this.router.navigateByUrl('/tabs');
    };
    LugarPage.prototype.DatExtra = function () {
        console.log("estoy en el switch");
        switch (this.imagenes) {
            case "0":
                this.moreInfo = "La Rinconada, es un Parque Ecológico, ubicado a dos kilómetros del parque central de Antigua Guatemala, que hasta hoy no es muy conocido, pero sin embargo cuenta con una gran cantidad de actividades, y un ambiente natural muy bonido, para ofrecer a sus visitantes.";
                this.titulo1 = "¿Cuales son las actividades a realizar?";
                this.data1 = "Dentro de las actividades que más se destacan en el Parque Ecológico La Rinconada, se puede mencionar el famoso Gotcha o Paintball, que se realiza en un ambiente natural y en diversos escenarios para aumentar la dificultada de los participantes.  En este lugar también se puede practicar Montain Bike o Ciclismo de Montaña y RC Pits, el cual consiste en un circuito especial, para carros de control remoto, pudiendo llevar su propio vehículo, o bien rentar uno ahí mismo.";
                this.titulo2 = "Actividades para niños";
                this.data2 = "Este parque cuenta conjuegos infantiles, manualidades, una granja interactiva con animales domésticos y un bello mirador con vista a los volcanes de Agua, Fuego y Acatenango.";
                this.titulo3 = "¿Cómo llegar?";
                this.data3 = "La Rinconada se encuentra en la aldea Santa Ana, número 103, y para llegar se debe de tomar el camino hacia Antigua Guatemala, y dirigirse rumbo a El Calvario  Al pasar el puente Pensativo, dos cuadras después cruzar a la Izquierda, y seguir recto hasta llegar al Parque Ecológico Club La Rinconada.";
                this.hotelimg1 = "https://lh5.googleusercontent.com/proxy/6A82kcdCShnxSGlKs3h_U9QS6Lg_gbej2coRHiGqh28hBR3i4SuVktwdo252MzOKhO0EJijK1Pyv3hxTZm6p2xQphrtEiJSuZ1tqtMrSqMwiEMTaA_S1JUE1d02Kr4acHhrxY3AgvF509SA_H_EjM0JY0tFGWfI=w437-h240-k-no";
                this.hotellink1 = "https://goo.gl/maps/coRVtJ4PgVi4NfnA8";
                this.hotelname1 = "Hostal Casa Del Artista & Galeria";
                this.hotelimg2 = "https://lh5.googleusercontent.com/p/AF1QipPtasL38y1ZlWEA89W5-w8MoSH-NSXNyEMO2wfV=w426-h240-k-no";
                this.hotellink2 = "https://goo.gl/maps/p5Y178CdoW2W41sT9";
                this.hotelname2 = "Hotel Soleil La Antigua";
                break;
            case "1":
                this.moreInfo = "El Volcán de Pacaya se encuentra en el municipio de San Vicente Pacaya, en el departamento de Escuintla, en la parte sur de la República de Guatemala. Este volcán está catalogado como parque nacional.  Su altura ha cambiado por las constantes erupciones, se han registrado los 2,500 metros sobre el nivel del mar. Hizo erupción por primera vez hace aproximadamente 25,000 años y en 1996 se reactivó, después de casi un siglo de inactividad.";
                this.titulo1 = "¿Cómo es el Volcán Pacaya?";
                this.data1 = "El volcán de Pacaya es un complejo o macizo volcánicocomplicado, en donde existen otros picos del sistema y no solamente el activo.  Cuenta con varios picos escalables y llevan los siguientes nombres: Cerro Hoja de Queso, Cerro de Agua, Cerro Chiquito y Cerro Chino.";
                this.titulo2 = "¿En cuánto tiempo se sube?";
                this.data2 = "Para una persona con que hace entre poco y nada de ejercicio el tiempo de ascenso es de 1 hora con 45 minutos. Mientras que el descenso se hace en aproximadamente 1 hora.";
                this.titulo3 = "¿Cómo llegar?";
                this.data3 = "Desde la Ciudad de Guatemala se toma la carretera CA-9hacia la costa sur y al llegar al km 37 se cruza a la izquierda en dirección al municipio de San Vicente Pacaya (1 hora); este recorrido es por vía asfaltada.  Al llegar a la bifurcación entre el pueblo de San Vicente Pacaya y San Francisco de Sales, en el costado derecho de la carretera se ubica la oficina de información y cobro del parque. En las faldas del volcán es necesario solicitar un guía oficial para que acompañe durante el recorrido.";
                this.hotelimg1 = "https://lh5.googleusercontent.com/proxy/2IqcEA_4Vb-v9fSrK5HczIb8cz4aKgsgKa7iGSfjTj6e5_C8Mvue0F8NKIjKQssWfWLePNek4LzcQzrahO77CgVbJwns2g9r6sQmBKAo4qynSHBEq1CbCvGDkdigeLCe26nr6AvDGVA0DXYDzEcwGgwcmSLPdg=w437-h240-k-no";
                this.hotellink1 = "https://goo.gl/maps/KYVXJZ5TNArsN8Tb9";
                this.hotelname1 = "Hotel Manhatan";
                this.hotelimg2 = "https://lh5.googleusercontent.com/p/AF1QipNWgGWvYhLwE5N1Um4WiPjeJ5xHi1eTecry78d_=w426-h240-k-no";
                this.hotellink2 = "https://goo.gl/maps/FeVZX9uRZHfyb8eD6";
                this.hotelname2 = "San Gregorio Hotel & Spa";
                break;
            case "2":
                this.moreInfo = "Es una colina que se encuentra al Norte de la ciudad de Amatitlán y es el límite natural entre Villa Nueva y Amatitlán, Guatemala; colinda al Norte de la cabecera departamental. Se encuentra a una altitud de 1,420 metros sobre el nivel del mar.";
                this.titulo1 = "¿Que podemos encontrar?";
                this.data1 = "La cordillera montañosa predomina especies forestales por ejemplo: pino, eucalipto y ciprés. Sus senderos son apropiados para realizar vigorizantes caminatas y otros deportes. La colina cuenta con un mirador que ofrece un panorama espectacular hacia la ciudad de amatitlán. Se encuentra el Parque Nacional “Naciones Unidas”, tomando en cuenta la Plaza Guatemala cuyas instalaciones cuentan con churrasqueras y área de camping, granja infantil, zonas múltiples de descanso, parque temático, canchas deportivas, presentaciones de sitios arqueológicos de Guatemala.";
                this.titulo2 = "¿Cual es el clima?";
                this.data2 = "Presenta un clima templado (invierno seco, verano cálido), con una biozona de bosque subtropical húmedo.";
                this.titulo3 = "";
                this.data3 = "";
                this.hotelimg1 = "https://lh5.googleusercontent.com/p/AF1QipPMvAwjBgUMHvqtUPvXLdTMp6kmjX0ILx_MhqP6=w408-h273-k-no";
                this.hotellink1 = "https://goo.gl/maps/VSh9awnEtyN6pYZYA";
                this.hotelname1 = "Kawilal Hotel";
                this.hotelimg2 = "https://lh5.googleusercontent.com/p/AF1QipNWogCOd6CpTC8RJ5oxLswsFT1TzPUbvHzNCz9H=w426-h240-k-no";
                this.hotellink2 = "https://goo.gl/maps/VzWTxAvUYi9HdCPP9";
                this.hotelname2 = "El Rocarena Hotel";
                break;
            case "3":
                this.moreInfo = "Ubicado en las faldas de San Juan la Laguna su particular forma de una cara acostada con la boca viendo hacia arriba, recibe la salida del sol dando un espectáculo único en el lago de Atitlàn. Esta montaña se puede apreciar desde distintos puntos del lago en especial San Pedro la Laguna, San Juan la Laguna, Santa Clara la Laguna y pueblos aledaños.";
                this.titulo1 = "Trayecto";
                this.data1 = "Subirlo es toda una aventura pero su recompensa no se puede describir fácilmente ya que es una experiencia sumamente gratificante. Inicia pernoctando en uno de los pueblos aledaños ya que se debe de empezar a ascender a las tres de la mañana para poder ver el amanecer desde el mirador ubicado en la cima de la montaña. El tiempo para ascender es aproximadamente dos horas y media (según sea el paso de cada persona).";
                this.titulo2 = "¿Qué es?";
                this.data2 = "Es una reserva de San Juan Atitlàn en la cual se pueden apreciar distintas especies de animales y plantas endémicas de Guatemala. Está ubicado en dos propiedades distintas, lo ideal es ir con un guía local ya que ellos conocen el lugar. Existen senderos para ascenderlo, lo cual no es de gran dificultad. Al iniciar a ascender de madrugada se ahorra el desgaste por el calor de la luz solar, lo que ayuda a que uno llegue a la cima más rápido.  En la cima se encuentra un mirador con bancas de madera y una estructura que permite subir a un segundo nivel que tiene techo de lámina. Es el punto ideal para tener una vista de 360º del lago de Atitlàn, sin tener montañas detrás. Es solo la persona enfrentándose al aire frío dándole la bienvenida al sol que nace entre montañas desde el lago de Atitlàn hacia el cielo. Permitiendo observar un espectáculo mágico, el resplandor del sol sobre el lago.";
                this.titulo3 = "¿Cómo llegar?";
                this.data3 = "Se debe tomar la carretera interamericana CA-1 en  el cruce de la intersección del kilómetro 148 en la carretera que conduce al municipio de Santa María Visitación, posteriormente se encuentran una serie de pueblos antes de llegar a San Juan La Laguna.  Los pueblos van desde Santa María Visitación, Santa Clara La Laguna, San Pablo La Laguna y finalmente en San Juan La Laguna Sololá. Esta carretera va en descenso y tiene varias curvas por lo cual se debe de tener precaución, está en buenas condiciones y asfaltada.";
                this.hotelimg1 = "https://lh5.googleusercontent.com/p/AF1QipPwkbNzoN4vOHcuc9NzlgbvtcS8ci0sIxl5-MYj=w408-h305-k-no";
                this.hotellink1 = "https://goo.gl/maps/ftt2CMVEH5tNuhB68";
                this.hotelname1 = "La Casa del Mundo";
                this.hotelimg2 = "https://lh5.googleusercontent.com/p/AF1QipMzuQBG4LEvTY9BKq3klht7qqmew1eygn9NtPyo=w426-h240-k-no";
                this.hotellink2 = "https://goo.gl/maps/jz53ftGWkajuXTXm9";
                this.hotelname2 = "Lush Atitlan";
                break;
            case "4":
                this.moreInfo = "El Cerro Mirandilla o también conocido como Tres Picachos (debido a las formaciones que tiene en la cima) es un lugar místico ubicado en el camino que dirige de Ciudad Vieja a Palín, Escuintla.  De acuerdo con las historias que cuentan los residentes del lugar, el Cerro Mirandilla es una fuente de riqueza. Por esta razón, se cree que un ser sobrenatural con la forma de animal rodea el cerro para protegerlo.";
                this.titulo1 = "Historia";
                this.data1 = "De acuerdo con el documento denominado Título de Alotenango, éste lugar era llamado como El 'Sacrificadero' por los ancestros del lugar, alrededor del año 1566. Este cerro era utilizado para realizar rituales con sacrificios de animales, en forma de agradecimiento hacia la madre tierra.  Luego de unos años, ese tipo de prácticas dejaron de realizarse y se comenzaron a ver apariciones extrañas, a raíz de eso, fueron creadas distintas creencias y leyendas.";
                this.titulo2 = "Leyendas";
                this.data2 = "La leyenda más recurrente en el Cerro Mirandilla relata la aparición de una niña con una belleza incomparable, pero con cuerpo de serpiente como consecuencia de un trato entre su padre y el diablo.";
                this.titulo3 = "Principal atractivo";
                this.data3 = "El principal atractivo del Cerro Mirandilla es sin duda la curiosa forma que tiene en la cima. Algunas versiones acerca de esto lo asemejan a la forma de un gorila sentado o del rostro de una mujer mulata.  De acuerdo con una investigación realizada en el año 2005, en el Cerro Mirandilla fueron encontradas evidencias que prueban que no es una elevación natural, sino una construcción prehispánica, debido a que en ella fueron localizadas pinturas rupestres, posiblemente de la civilización olmeca.";
                this.hotelimg1 = "https://lh5.googleusercontent.com/p/AF1QipPF1n40BwhbyKLjNrSfo731JRQBe7KvSZ2lZgPN=w426-h240-k-no";
                this.hotellink1 = "https://goo.gl/maps/VJahDxXSMDXZ6tdR8";
                this.hotelname1 = "Hacienda El Colorado";
                this.hotelimg2 = "https://lh5.googleusercontent.com/p/AF1QipPq9BPAindJz0vR3dD9zWel7CQghDcWfCSNr-Oo=w408-h306-k-no";
                this.hotellink2 = "https://goo.gl/maps/BJxDFKTpU5aYPEcP9";
                this.hotelname2 = "Cañadas de Guatelinda";
                break;
            case "5":
                this.moreInfo = "El volcán de Fuego es a lo que se le conoce como un estratovolcán situado entre los departamentos de Sacatepéquez, Escuintla y chimaltenango, al centro-sur de Guatemala.";
                this.titulo1 = "Historia";
                this.data1 = "El volcán de Fuego es uno de los más impresionantes de Centroamérica. Sus erupciones son violentas, y probablemente es el volcán más activo desde la Conquista, a tal extremo que se afirma que el conquistador Pedro de Alvarado pudo verlo en erupción en el año de 1524, según el mismo lo reportó en epístolas. Su nombre indígena es Chi'gag, que se traduciría del idioma cakchiquel al español como donde está el fuego.";
                this.titulo2 = "Particularidades";
                this.data2 = "El volcán de Fuego tiene una altura de 3763 msnm. Prácticamente se encuentra descubierto de vegetación más arriba de los 1300 metros, donde básicamente solo puede encontrarse lava. El volcán de Fuego tiene la forma de un cono que se alarga considerablemente hacia el sur, formando el pie de monte hacia la costa sur. Debajo de él se constituye una meseta oro-gráfica de múltiples características geológicas. Forma una triada de colosos con los volcanes de Agua y Acatenango, próximos a su base; de hecho, comparte el mismo bloque volcánico con el volcán Acatenango, y originalmente ambos eran referidos por los colonos españoles como «los volcanes de Fuego».Del volcán nacen varias fuentes hídricas, que se convierten en ríos descendientes hacia la costa sur, en un área de riqueza mineral, óptima para la agricultura.";
                this.titulo3 = "";
                this.data3 = "";
                this.hotelimg1 = "https://lh5.googleusercontent.com/p/AF1QipPtasL38y1ZlWEA89W5-w8MoSH-NSXNyEMO2wfV=w426-h240-k-no";
                this.hotellink1 = "https://goo.gl/maps/ueRdkUUfXDB6FDeY7";
                this.hotelname1 = "Hotel Soleil La Antigua";
                this.hotelimg2 = "https://lh5.googleusercontent.com/p/AF1QipPgM5hfUJGPpgvNJ15EzjF-adny1B31wNLLm6mv=w408-h306-k-no";
                this.hotellink2 = "https://goo.gl/maps/iiJa3iFUC6jLKZzs7";
                this.hotelname2 = "Volcano Eco Hostel";
                break;
            case "6":
                this.moreInfo = "El volcán Acatenango forma parte de la cadena volcánica que existe en la República de Guatemala. Este volcán se encuentra extinto, es decir, que ya no presenta actividad que involucre erupciones de lava. Cuenta con una alturade 3976 metros sobre el nivel del mar.  La vista hacia el volcán de Fuego es espectacular, ya que es el mejor escenario.";
                this.titulo1 = "¿Cómo es el Volcán Acatenango?";
                this.data1 = "Principalmente, este coloso tiene dos picos o cumbres y es el hermano gemelo del volcán de Fuego. La cima principal —que queda al sur— es llamado Pico Mayor o Central a 3976 msnm. Mientras que el pico norte tiene el nombre de Yepocapa, Tres Hermanas o Tres Marías y se encuentra a 3800 msnm.";
                this.titulo2 = "¿Dónde queda el volcán?";
                this.data2 = "El Volcán Acatenango se encuentra ubicado entre los departamentos de Chimaltenango y Sacatepéquez.  Muy cerca de los municipios de Acatenango, Antigua Guatemala y San Miguel Dueñas.";
                this.titulo3 = "¿Qué debo llevar?";
                this.data3 = "Para realizar el viaje a este volcán es recomendable abrigarse bien, ya que en la cima por lo general hay un intenso frío y viento que sopla fuerte. Si la visita durará una noche se recomienda llevar un impermeable ligero para hacer cambio de mudada.";
                this.hotelimg1 = "https://lh6.googleusercontent.com/proxy/GYBPsaxNbjX_HDKqIfPoFkj-JeYsxIc3FqmgQ6552RQ6fd0ufBaVlYW3zRlo8vjY_xOYjb21YAlj_GmrPwbOFKuk_LPWvL09wu25zKFaasd9LMf8mk-ahFH7BIRSg1q5zpXedPsyHLD5-02t8wOMRtn4GoUwcpI=w537-h240-k-no";
                this.hotellink1 = "https://goo.gl/maps/VzfcBW57779hYVoQ8";
                this.hotelname1 = "Casa Aprode";
                this.hotelimg2 = "https://lh5.googleusercontent.com/p/AF1QipPgM5hfUJGPpgvNJ15EzjF-adny1B31wNLLm6mv=w408-h306-k-no";
                this.hotellink2 = "https://goo.gl/maps/iiJa3iFUC6jLKZzs7";
                this.hotelname2 = "Volcano Eco Hostel";
                break;
            case "7":
                this.moreInfo = "El Parque Natural Ixpanpajul, es una reserva natural con una extensión de 9 kilómetros cuadrados que equivalen a 450 hectáreas, con más de 200 especies de árboles, más de 150 especies de aves y alrededor de 40 especies de mamíferos.";
                this.titulo1 = "¿Donde se encuentra?";
                this.data1 = "Este parque se encuentra a 468 kilómetros Vía Río Dulce a Flores, Petén, Guatemala a 10 kilómetros del Aeropuerto, y es un esplendoroso bosque, refugio natural de una amplia variedad de animales, plantas y árboles que han decidido quedarse en este lugar, cuna de la Cultura Maya.  Esta Reserva Natural tiene once años de operación y es considerada como el mejor destino turístico, exclusivo para los amantes de la naturaleza que desean realizar diferentes actividades de aventura llenas de aire puro, adrenalina y diversión, todo esto en conjunto en el propio corazón del Mundo Maya Petén.";
                this.titulo2 = "Principal atracción";
                this.data2 = "La principal atracción en el Parque Natural Ixpanpajul es una serie de seis puentes colgantes y serpenteantes senderos repletos de exuberante vegetación, que le da una vista aérea de toucan's de la selva.  Durante el recorrido, se tiene oportunidad de conocer los diferentes estratos del bosque tropical, y al llegar a la cima se puede observar el Lago Petén Itzá.  El parque cuenta también con un Tarzán Canopy donde podrá volar entre los árboles, a través de plataformas y cables, iluminación puntual (la noche de la vida silvestra viendo), paseos a caballo, ciclismo de montaña, paseos en tractor y alquiler de vehículos todo terreno.";
                this.titulo3 = "¿Por que elegirlo?";
                this.data3 = "El Parque Natural Ixpanpajul tiene una extensión de 9 Km2 o sea 10 caballerías que equivale a 640 manzanas igual a 450 hectáreas, que por su belleza, sus actividades y por lo próximo al área central de Flores Petén, 5 minutos del aeropuerto, lo hace un lugar especial, siendo una nueva opción para el turismo ecológico y de aventura. ";
                this.hotelimg1 = "https://lh5.googleusercontent.com/p/AF1QipP6uWKqMBJI0NUw1D_RLKVnjj1yCBjZn2AaeouC=w408-h306-k-no";
                this.hotellink1 = "https://goo.gl/maps/YdB2bLcA4kmx6TGV7";
                this.hotelname1 = "Hotel y Restaurante Casa Amelia";
                this.hotelimg2 = "https://lh4.googleusercontent.com/proxy/_zaRZVDP9GdpyQbpsznkJ5LpK9r3PUea_LyxaUIJs0MnzhULQPD8wJtkNNgw_5_0hTkbPOTiXU94-4FKVPtFXc8lp-Truv36iL5MabbxdDtg0taTBZU7iM1We5ZgE9wk8lQNwVmsVCayYRO_IC6AaDTAuo2H2Jg=w408-h306-k-no";
                this.hotellink2 = "https://goo.gl/maps/NKjjqqqLj89pJNL96";
                this.hotelname2 = "Hotel Casona de la Isla";
                break;
            case "8":
                this.moreInfo = "Tal vez este sitio turístico no es muy conocido, pero las cuevas de Bombil Pek y Jul Iq en Alta Verapaz son una atracción muy hermosa en Guatemala.  Las cuevas de Bombil Pek y Jul Iq se encuentran ubicadas a 2 kilómetros aproximadamente de la cabecera municipal de Chisec, Alta Verapaz. Son un hermoso destino natural que necesitas conocer.";
                this.titulo1 = "Historia de las cuevas";
                this.data1 = "El sitio fue descubierto en 1972 por el francés Daniel Draws. Pero fue hasta el 2002 cuando las cuevas fueron abiertas al público.";
                this.titulo2 = "Origen del nombre";
                this.data2 = "Se cree que la palabra Bombil significa en q’eqchí’ Cueva pintada y Julik, Cueva de aire.";
                this.titulo3 = "Descripción";
                this.data3 = "Para llegar, es necesario realizar una caminata de 40 minutos aproximadamente por un sendero verde. De hecho, el recorrido en el interior de cada una de las cuevas dura un aproximado de media hora.  En las cuevas Jul Iq existen pintadas imágenes de un jaguar y dos monos. Dichas pinturas pertenecen a la época clásica maya —que data del 200 al 800 a.C.—. El interior está ventilado por aire frío, además de caracterizarse por su ambiente húmedo.";
                this.hotelimg1 = "https://lh5.googleusercontent.com/p/AF1QipP830LQEr8Bj-bJFu8RkulfnWjZJrd6KOWM30aP=w426-h240-k-no";
                this.hotellink1 = "https://goo.gl/maps/WtjEGXZ4P5maSrjSA";
                this.hotelname1 = "Hotel Estancia De La Virgen";
                this.hotelimg2 = "https://lh5.googleusercontent.com/p/AF1QipPafTKMHOjp40PcuSOeq9VwF33V-vZqGh-7SbEx=w426-h240-k-no";
                this.hotellink2 = "https://goo.gl/maps/iRx1vYUQtwSSBZYf7";
                this.hotelname2 = "Hotel y Restaurante Casa Vieja";
                break;
            case "9":
                this.moreInfo = "Caxlampon es un lugar ubicado en el departamento de Izabal al final de el río El Sauce, cerca de El Boquerón, específicamente en el municipio de El Estor, localidad que atraer a las personas aventureras por lo increíble que se torna el desenvolverse en medio de las cuevas que tienen un tamaño aproximado de entre dos y tres metros de altura, variables en todo el recorrido, así como una anchura promedio de 9 metros y no olvidemos mencionar que son 4 kilometros de ruta los que componen la cueva.";
                this.titulo1 = "Que se encuentra en el trayecto";
                this.data1 = "Dentro de esta cueva se comienza un trayecto explorador a pie, pero hay partes de la misma en las que se tiene que recurrir al nado ya que únicamente se pueden pasar por el agua, incluso un pequeño lugar en el transcurso del recorrido, en donde hay una cascada de aproximadamente 6 metros de altura y se puede hacer rapel para descender.  En medio del recorrido después de superar el espacio de agua en donde hay aproximadamente 21 metros de río arriba que se tienen que recorrer por la orilla y con las precauciones debidas, se llega a un lugar que es conocido como “El Bar”, al cual se llega descendiendo por una grieta que hay en el camino y es una pequeña caverna completamente obscura a la que no se puede ingresar ya que no se puede salir de regreso por las dimensiones de la misma.";
                this.titulo2 = "¿Donde finaliza?";
                this.data2 = "Lo interesante del recorrido que se puede hacer por esta cueva es que aunque requiere de un largo trayecto en las profundidades de la Cueva Caxlampon, el final del mismo es Finca El Paraíso, claro tras una buena distancia de ascenso.";
                this.titulo3 = "Tomar en cuenta que:";
                this.data3 = "Para que se realice este recorrido por las rutas de la Cueva Caxlampon es necesario contar con guías que conozcan el lugar y además se recomienda un mínimo de dos personas para aventurarse en esta exploración de las profundidades, sin olvidar claro la importancia del equipo necesario como lo son cuerdas, arnés, linternas (por si se decide tomar esta ruta por las noches), entre otros accesorios necesarios.";
                this.hotelimg1 = "https://lh5.googleusercontent.com/p/AF1QipMnuFwWBlerbhPTqcFAMPcZdQaxqbREaV0V3h_g=w408-h306-k-no";
                this.hotellink1 = "https://goo.gl/maps/3GscAjgex1u31wcp6";
                this.hotelname1 = "Hotel Restaurante Café-Bar Calle Real";
                this.hotelimg2 = "https://lh5.googleusercontent.com/p/AF1QipMjj03f6AvynaBhlvsUGWNvUdEVG6zhYwUA6o2f=w426-h240-k-no";
                this.hotellink2 = "https://goo.gl/maps/m4FRJrQ2ZonvzenU8";
                this.hotelname2 = "Hotel Yair El Estor";
                break;
            default:
                this.moreInfo = "No existen datos para este destino.";
                break;
        }
    };
    LugarPage.prototype.hideShow = function (valor) {
        switch (valor) {
            case 1:
                this.mostrar = valor;
                break;
            case 2:
                this.mostrar = valor;
                break;
            case 3:
                this.mostrar = valor;
                break;
            default:
                break;
        }
        this.DatExtra();
        var moda = document.getElementById('modalL');
        var blu = document.getElementById('blurL');
        var co = document.getElementById('cerrar-cc');
        moda.classList.toggle('mostrar');
        blu.classList.toggle('blur');
        co.classList.toggle('most-cc');
    };
    LugarPage.prototype.mostrarComentario = function () {
        this.Getcoment();
        var m = document.getElementById('comentar');
        var bl = document.getElementById('blurL');
        var con = document.getElementById('cerrar-c');
        m.classList.toggle('mostrar');
        bl.classList.toggle('blur');
        con.classList.toggle('most-cc');
    };
    LugarPage.prototype.Getcoment = function () {
        var _this = this;
        this.db.GetComent(this.imagenes).then(function (data) {
            console.log(data);
            _this.datos = data;
        }, function (error) {
            console.log(error);
        });
    };
    LugarPage.prototype.comentar = function () {
        if (this.coment != "") {
            var comen = this.db.CreateComent(this.name, this.coment, this.imagenU, this.imagenes);
            this.Getcoment();
            this.coment = "";
        }
    };
    LugarPage.prototype.ionViewWillEnter = function () {
        console.log("estoy en el enter");
        this.Getcoment();
        this.DatExtra();
    };
    LugarPage.prototype.ngOnInit = function () {
    };
    LugarPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] }
    ]; };
    LugarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lugar',
            template: __webpack_require__(/*! raw-loader!./lugar.page.html */ "./node_modules/raw-loader/index.js!./src/app/lugar/lugar.page.html"),
            styles: [__webpack_require__(/*! ./lugar.page.scss */ "./src/app/lugar/lugar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]])
    ], LugarPage);
    return LugarPage;
}());



/***/ })

}]);
//# sourceMappingURL=lugar-lugar-module-es5.js.map