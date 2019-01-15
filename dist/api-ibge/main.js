(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.box {\r\n    width: 58%;\r\n    margin: 1%;\r\n    display: inline;\r\n}\r\n\r\n.ctnFlex{\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsK0JBQStCO0dBQ2hDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYm94IHtcclxuICAgIHdpZHRoOiA1OCU7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4uY3RuRmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"ctnFlex\">\n        <div class=\"box\">\n            <estados></estados>\n        </div>\n        <div class=\"box\">\n            <municipios></municipios>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'api-ibge';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _estados_estados_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estados/estados.component */ "./src/app/estados/estados.component.ts");
/* harmony import */ var _municipios_municipios_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./municipios/municipios.component */ "./src/app/municipios/municipios.component.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_8__);









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _estados_estados_component__WEBPACK_IMPORTED_MODULE_6__["EstadosComponent"],
                _municipios_municipios_component__WEBPACK_IMPORTED_MODULE_7__["MunicipiosComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/estados/estados.component.css":
/*!***********************************************!*\
  !*** ./src/app/estados/estados.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VzdGFkb3MvZXN0YWRvcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/estados/estados.component.html":
/*!************************************************!*\
  !*** ./src/app/estados/estados.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-table [value]=\"this.estadosService.estados\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n            <th>ID</th>\n            <th>Sigla</th>\n            <th>Nome</th>\n            <th style=\"width: 45px\">&nbsp;</th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-estado>\n        <tr>\n            <td>{{estado.id}}</td>\n            <td>{{estado.sigla}}</td>\n            <td>{{estado.nome}}</td>\n            <td style=\"cursor: pointer;\" (click)=\"this.municipiosService.getMunicipio(estado.id)\"><i class=\"pi pi-eye\"></i></td>\n        </tr>\n    </ng-template>\n</p-table>"

/***/ }),

/***/ "./src/app/estados/estados.component.ts":
/*!**********************************************!*\
  !*** ./src/app/estados/estados.component.ts ***!
  \**********************************************/
/*! exports provided: EstadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadosComponent", function() { return EstadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _estados_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estados.service */ "./src/app/estados/estados.service.ts");
/* harmony import */ var _municipios_municipios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../municipios/municipios.service */ "./src/app/municipios/municipios.service.ts");




var EstadosComponent = /** @class */ (function () {
    function EstadosComponent(estadosService, municipiosService) {
        this.estadosService = estadosService;
        this.municipiosService = municipiosService;
    }
    EstadosComponent.prototype.ngOnInit = function () { };
    EstadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'estados',
            template: __webpack_require__(/*! ./estados.component.html */ "./src/app/estados/estados.component.html"),
            styles: [__webpack_require__(/*! ./estados.component.css */ "./src/app/estados/estados.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_estados_service__WEBPACK_IMPORTED_MODULE_2__["EstadosService"],
            _municipios_municipios_service__WEBPACK_IMPORTED_MODULE_3__["MunicipiosService"]])
    ], EstadosComponent);
    return EstadosComponent;
}());



/***/ }),

/***/ "./src/app/estados/estados.service.ts":
/*!********************************************!*\
  !*** ./src/app/estados/estados.service.ts ***!
  \********************************************/
/*! exports provided: EstadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadosService", function() { return EstadosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EstadosService = /** @class */ (function () {
    function EstadosService(http) {
        this.http = http;
        this.url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
        this.getEstados();
    }
    EstadosService.prototype.getEstados = function () {
        var _this = this;
        this.http.get(this.url).subscribe(function (response) {
            _this.estados = response;
        });
    };
    EstadosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EstadosService);
    return EstadosService;
}());



/***/ }),

/***/ "./src/app/municipios/municipios.component.css":
/*!*****************************************************!*\
  !*** ./src/app/municipios/municipios.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211bmljaXBpb3MvbXVuaWNpcGlvcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/municipios/municipios.component.html":
/*!******************************************************!*\
  !*** ./src/app/municipios/municipios.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-table [value]=\"this.municipiosService.municipios\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n            <th>ID</th>\n            <th>Nome</th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-municipio>\n        <tr>\n            <td>{{municipio.id}}</td>\n            <td>{{municipio.nome}}</td>\n        </tr>\n    </ng-template>\n</p-table>"

/***/ }),

/***/ "./src/app/municipios/municipios.component.ts":
/*!****************************************************!*\
  !*** ./src/app/municipios/municipios.component.ts ***!
  \****************************************************/
/*! exports provided: MunicipiosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MunicipiosComponent", function() { return MunicipiosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _municipios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./municipios.service */ "./src/app/municipios/municipios.service.ts");



var MunicipiosComponent = /** @class */ (function () {
    function MunicipiosComponent(municipiosService) {
        this.municipiosService = municipiosService;
    }
    MunicipiosComponent.prototype.ngOnInit = function () { };
    MunicipiosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'municipios',
            template: __webpack_require__(/*! ./municipios.component.html */ "./src/app/municipios/municipios.component.html"),
            styles: [__webpack_require__(/*! ./municipios.component.css */ "./src/app/municipios/municipios.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_municipios_service__WEBPACK_IMPORTED_MODULE_2__["MunicipiosService"]])
    ], MunicipiosComponent);
    return MunicipiosComponent;
}());



/***/ }),

/***/ "./src/app/municipios/municipios.service.ts":
/*!**************************************************!*\
  !*** ./src/app/municipios/municipios.service.ts ***!
  \**************************************************/
/*! exports provided: MunicipiosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MunicipiosService", function() { return MunicipiosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MunicipiosService = /** @class */ (function () {
    function MunicipiosService(http) {
        this.http = http;
        this.url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios';
    }
    MunicipiosService.prototype.getMunicipio = function (uf_id) {
        var _this = this;
        if (this.uf_id !== uf_id) {
            this.http.get(this.url.replace('{UF}', uf_id)).subscribe(function (response) {
                _this.municipios = response;
            });
        }
        return this.municipios;
    };
    MunicipiosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MunicipiosService);
    return MunicipiosService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\var\www\flavio\api-ibge\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map