(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["felicidades-felicidades-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/felicidades/felicidades.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/felicidades/felicidades.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content>\n  <div class=\"contEscaner\">\n    <div class=\"mont-cont\">\n        <img class=\"img-scan\" src=\"/assets/img/explo.png\" alt=\"\" width=\"250px\">\n        <img class=\"mont\" src=\"/assets/img/montains.png\" alt=\"\" width=\"100%\">\n        <div class=\"glovo\">\n          <p>Wow, {{nombre}} sabia que podías hacerlo, vamos a ver tu nuevo trofeo.</p>\n        </div>\n    </div>\n    <div class=\"conBtn\">\n      <button class=\"btn\" (click)=\"scanear()\">Aceptar</button>\n    </div>\n  </div>\n</ion-content>\n    "

/***/ }),

/***/ "./src/app/felicidades/felicidades.module.ts":
/*!***************************************************!*\
  !*** ./src/app/felicidades/felicidades.module.ts ***!
  \***************************************************/
/*! exports provided: FelicidadesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FelicidadesPageModule", function() { return FelicidadesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _felicidades_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./felicidades.page */ "./src/app/felicidades/felicidades.page.ts");







var routes = [
    {
        path: '',
        component: _felicidades_page__WEBPACK_IMPORTED_MODULE_6__["FelicidadesPage"]
    }
];
var FelicidadesPageModule = /** @class */ (function () {
    function FelicidadesPageModule() {
    }
    FelicidadesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_felicidades_page__WEBPACK_IMPORTED_MODULE_6__["FelicidadesPage"]]
        })
    ], FelicidadesPageModule);
    return FelicidadesPageModule;
}());



/***/ }),

/***/ "./src/app/felicidades/felicidades.page.scss":
/*!***************************************************!*\
  !*** ./src/app/felicidades/felicidades.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contEscaner {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n  height: 100vh;\n  background: -webkit-gradient(linear, left top, right top, from(#0099ff), to(rgba(0, 145, 255, 0.74)));\n  background: linear-gradient(left, #0099ff, rgba(0, 145, 255, 0.74) 100%);\n}\n\n.img-scan {\n  position: relative;\n  bottom: -20px;\n  z-index: 5;\n}\n\n.glovo {\n  background: #3880ff;\n  position: absolute;\n  left: 40%;\n  top: -20%;\n  text-align: center;\n  color: white;\n  border-radius: 50%;\n}\n\n.glovo::after {\n  content: \"\";\n  border-left: 27px solid #3880ff;\n  border-top: 0px solid transparent;\n  border-bottom: 31px solid transparent;\n  position: absolute;\n  top: 97%;\n  left: 40%;\n  -webkit-transform: rotate(5deg);\n          transform: rotate(5deg);\n}\n\n.mont-cont {\n  position: relative;\n  width: 100%;\n}\n\n.mont {\n  position: absolute;\n  left: -10px;\n  bottom: -1px;\n  max-width: none;\n  width: 105%;\n}\n\n.conBtn {\n  width: 100%;\n  text-align: center;\n  background: #00882d;\n}\n\n.btn {\n  background: #c89800;\n  color: white;\n  font-weight: bold;\n  font-size: 17px;\n  padding: 15px;\n  border-radius: 30px;\n  width: 45%;\n  box-shadow: #807300 0 7px 0px;\n  margin: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZG9ueS9Eb2N1bWVudG9zL2lvbmljL2d0QWR2ZW50dXJlMi9zcmMvYXBwL2ZlbGljaWRhZGVzL2ZlbGljaWRhZGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmVsaWNpZGFkZXMvZmVsaWNpZGFkZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxxR0FBQTtFQUFBLHdFQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2ZlbGljaWRhZGVzL2ZlbGljaWRhZGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250RXNjYW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2IoMCwgMTUzLCAyNTUpLCByZ2JhKDAsIDE0NSwgMjU1LCAwLjc0KSAxMDAlKTtcbn1cblxuLmltZy1zY2Fue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IC0yMHB4O1xuICAgIHotaW5kZXg6IDU7XG59XG5cbi5nbG92byB7XG4gICAgYmFja2dyb3VuZDogIzM4ODBmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNDAlO1xuICAgIHRvcDogLTIwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmdsb3ZvOjphZnRlcntcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvcmRlci1sZWZ0OiAyN3B4IHNvbGlkICMzODgwZmY7XG4gICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDMxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOTclO1xuICAgIGxlZnQ6IDQwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbn1cblxuLm1vbnQtY29udHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tb250e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMTBweDtcbiAgICBib3R0b206IC0xcHg7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIHdpZHRoOiAxMDUlO1xufVxuXG4uY29uQnRue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjMDA4ODJkO1xufVxuXG4uYnRue1xuICAgIGJhY2tncm91bmQ6ICNjODk4MDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBib3gtc2hhZG93OiAjODA3MzAwIDAgN3B4IDBweDtcbiAgICBtYXJnaW46IDUwcHg7XG59IiwiLmNvbnRFc2NhbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGxlZnQsICMwMDk5ZmYsIHJnYmEoMCwgMTQ1LCAyNTUsIDAuNzQpIDEwMCUpO1xufVxuXG4uaW1nLXNjYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTIwcHg7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5nbG92byB7XG4gIGJhY2tncm91bmQ6ICMzODgwZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDAlO1xuICB0b3A6IC0yMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5nbG92bzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItbGVmdDogMjdweCBzb2xpZCAjMzg4MGZmO1xuICBib3JkZXItdG9wOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDMxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5NyU7XG4gIGxlZnQ6IDQwJTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG59XG5cbi5tb250LWNvbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9udCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwcHg7XG4gIGJvdHRvbTogLTFweDtcbiAgbWF4LXdpZHRoOiBub25lO1xuICB3aWR0aDogMTA1JTtcbn1cblxuLmNvbkJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDg4MmQ7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kOiAjYzg5ODAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHdpZHRoOiA0NSU7XG4gIGJveC1zaGFkb3c6ICM4MDczMDAgMCA3cHggMHB4O1xuICBtYXJnaW46IDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/felicidades/felicidades.page.ts":
/*!*************************************************!*\
  !*** ./src/app/felicidades/felicidades.page.ts ***!
  \*************************************************/
/*! exports provided: FelicidadesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FelicidadesPage", function() { return FelicidadesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FelicidadesPage = /** @class */ (function () {
    function FelicidadesPage(router) {
        this.router = router;
    }
    FelicidadesPage.prototype.scanear = function () {
        this.router.navigateByUrl('/tabs/trofeos');
    };
    FelicidadesPage.prototype.ngOnInit = function () {
    };
    FelicidadesPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    FelicidadesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-felicidades',
            template: __webpack_require__(/*! raw-loader!./felicidades.page.html */ "./node_modules/raw-loader/index.js!./src/app/felicidades/felicidades.page.html"),
            styles: [__webpack_require__(/*! ./felicidades.page.scss */ "./src/app/felicidades/felicidades.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FelicidadesPage);
    return FelicidadesPage;
}());



/***/ })

}]);
//# sourceMappingURL=felicidades-felicidades-module-es5.js.map