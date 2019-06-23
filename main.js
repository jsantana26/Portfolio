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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\">Jeffrey Santana</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\">Home <span\n            class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" routerLinkActive=\"router-link-active\" id=\"navbarDropdown\"\n          role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Projects\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/projects/csharp']\" routerLinkActive=\"router-link-active\">C#</a>\n        </div>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav> -->\n<router-outlet></router-outlet>"

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
        this.title = 'client';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_projects_index_projects_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects-index/projects-index.component */ "./src/app/projects/projects-index/projects-index.component.ts");
/* harmony import */ var _projects_projects_csharp_projects_csharp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects-csharp/projects-csharp.component */ "./src/app/projects/projects-csharp/projects-csharp.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/coming-soon/coming-soon.component */ "./src/app/components/coming-soon/coming-soon.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _projects_projects_index_projects_index_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsIndexComponent"],
                _projects_projects_csharp_projects_csharp_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsCSharpComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
                _components_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_10__["ComingSoonComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _components_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_10__["ComingSoonComponent"]
                    },
                    {
                        path: 'projects/csharp',
                        component: _projects_projects_csharp_projects_csharp_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsCSharpComponent"]
                    },
                    {
                        path: 'projects',
                        component: _projects_projects_index_projects_index_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsIndexComponent"]
                    },
                    {
                        path: '**',
                        component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"]
                    },
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/coming-soon/coming-soon.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/coming-soon/coming-soon.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " * {\r\n   box-sizing: border-box;\r\n }\r\n\r\n html, body{\r\n   margin: 0;\r\n   font-family: Arial, Helvetica, sans-serif;\r\n   color:#fff;\r\n   background:#333;\r\n   overflow: hidden;\r\n }\r\n\r\n .landing{\r\n   position: relative;\r\n   background-image: url('ChicagoRiver@1x.jpg');\r\n   background-size: cover;\r\n   background-position: center;\r\n   height:100vh;\r\n }\r\n\r\n .landing-inner{\r\n   position: absolute;\r\n   top: 0;\r\n   left: 0;\r\n   width: 100%;\r\n   height: 100%;\r\n   background: rgba(0,0,0,0.4);\r\n   text-align: center;\r\n   padding-top: 100px;\r\n }\r\n\r\n .landing h1{\r\n   font-size: 50px;\r\n }\r\n\r\n .countdown {\r\n   font-size: 50px;\r\n   display: -webkit-flex;\r\n   display: flex;\r\n   -webkit-justify-content: center;\r\n           justify-content: center;\r\n   -webkit-align-items: center;\r\n           align-items: center;\r\n   text-align: center;\r\n }\r\n\r\n .countdown div{\r\n   padding: 20px;\r\n   border: 1px solid white;\r\n   border-radius: 10px;\r\n   margin: 5px;\r\n   opacity: 0.7;\r\n   background: black;\r\n }\r\n\r\n .countdown div:first-child{\r\n   background: #17a2b8;\r\n }\r\n\r\n .countdown span{\r\n   display: block;\r\n   font-size: 25px;\r\n }\r\n\r\n @media(max-width: 650px){\r\n   .landing img{\r\n     width: 70%;\r\n   }\r\n   .landing h1{\r\n     font-size: 40px;\r\n   }\r\n   .countdown{\r\n     font-size: 30px;\r\n     -webkit-flex-direction: column;\r\n             flex-direction: column;\r\n   }\r\n   .countdown div{\r\n     display:none;\r\n   }\r\n   .countdown div:first-child{\r\n     display: block;\r\n     width: 65%;\r\n     padding: 10px;\r\n   }\r\n   .countdown div:nth-child(2){\r\n     display: block;\r\n     width: 65%;\r\n     padding: 10px;\r\n   }\r\n   .countdown div:nth-child(3){\r\n     display: block;\r\n     width: 65%;\r\n     padding: 10px;\r\n  }\r\n }\r\n\r\n @media(max-height: 400px){\r\n   img{\r\n     width: 20%;\r\n     padding-bottom: 30px;\r\n   }\r\n   h1{\r\n     display:none\r\n    }\r\n }\r\n\r\n /* Set height to 100% for body and html to enable the background image to cover the whole page: \r\n body, html {\r\n  height: 100%\r\n}\r\n\r\n.bgimg {\r\n  background-repeat: no-repeat;\r\n  /* Full-screen \r\n  height: auto;\r\n  max-width: 104%;\r\n\r\n  /* Center the background image \r\n  background-position: center;\r\n  /* Scale and zoom in the image \r\n  background-size: cover;\r\n  /* Add position: relative to enable absolutely positioned elements inside the image (place text) \r\n  position: relative;\r\n}\r\n\r\n.content{\r\n  /* Add a white text color to all elements inside the .bgimg container \r\n  color: black;\r\n  /* Add a font \r\n  font-family: \"Courier New\", Courier, monospace;\r\n  /* Set the font-size to 25 pixels \r\n  font-size: 25px;\r\n}\r\n\r\n.no-xscroll{\r\n  overflow-x: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n/* Position text in the middle \r\n.middle {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\n/* Style the <hr> element \r\nhr {\r\n  margin: auto;\r\n  width: 40%;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21pbmctc29vbi9jb21pbmctc29vbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0dBQ0Usc0JBQXNCO0NBQ3hCOztDQUVBO0dBQ0UsU0FBUztHQUNULHlDQUF5QztHQUN6QyxVQUFVO0dBQ1YsZUFBZTtHQUNmLGdCQUFnQjtDQUNsQjs7Q0FFQTtHQUNFLGtCQUFrQjtHQUNsQiw0Q0FBZ0U7R0FDaEUsc0JBQXNCO0dBQ3RCLDJCQUEyQjtHQUMzQixZQUFZO0NBQ2Q7O0NBRUE7R0FDRSxrQkFBa0I7R0FDbEIsTUFBTTtHQUNOLE9BQU87R0FDUCxXQUFXO0dBQ1gsWUFBWTtHQUNaLDJCQUEyQjtHQUMzQixrQkFBa0I7R0FDbEIsa0JBQWtCO0NBQ3BCOztDQUVBO0dBQ0UsZUFBZTtDQUNqQjs7Q0FFQTtHQUNFLGVBQWU7R0FDZixxQkFBYTtHQUFiLGFBQWE7R0FDYiwrQkFBdUI7V0FBdkIsdUJBQXVCO0dBQ3ZCLDJCQUFtQjtXQUFuQixtQkFBbUI7R0FDbkIsa0JBQWtCO0NBQ3BCOztDQUVBO0dBQ0UsYUFBYTtHQUNiLHVCQUF1QjtHQUN2QixtQkFBbUI7R0FDbkIsV0FBVztHQUNYLFlBQVk7R0FDWixpQkFBaUI7Q0FDbkI7O0NBRUE7R0FDRSxtQkFBbUI7Q0FDckI7O0NBRUE7R0FDRSxjQUFjO0dBQ2QsZUFBZTtDQUNqQjs7Q0FFQTtHQUNFO0tBQ0UsVUFBVTtHQUNaO0dBQ0E7S0FDRSxlQUFlO0dBQ2pCO0dBQ0E7S0FDRSxlQUFlO0tBQ2YsOEJBQXNCO2FBQXRCLHNCQUFzQjtHQUN4QjtHQUNBO0tBQ0UsWUFBWTtHQUNkO0dBQ0E7S0FDRSxjQUFjO0tBQ2QsVUFBVTtLQUNWLGFBQWE7R0FDZjtHQUNBO0tBQ0UsY0FBYztLQUNkLFVBQVU7S0FDVixhQUFhO0dBQ2Y7R0FDQTtLQUNFLGNBQWM7S0FDZCxVQUFVO0tBQ1YsYUFBYTtFQUNoQjtDQUNEOztDQUVBO0dBQ0U7S0FDRSxVQUFVO0tBQ1Ysb0JBQW9CO0dBQ3RCO0dBQ0E7S0FDRTtJQUNEO0NBQ0g7O0NBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Q0UiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbWluZy1zb29uL2NvbWluZy1zb29uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgKiB7XHJcbiAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiB9XHJcblxyXG4gaHRtbCwgYm9keXtcclxuICAgbWFyZ2luOiAwO1xyXG4gICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgY29sb3I6I2ZmZjtcclxuICAgYmFja2dyb3VuZDojMzMzO1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gfVxyXG5cclxuIC5sYW5kaW5ne1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9DaGljYWdvUml2ZXJAMXguanBnJyk7XHJcbiAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgaGVpZ2h0OjEwMHZoO1xyXG4gfVxyXG5cclxuIC5sYW5kaW5nLWlubmVye1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIHRvcDogMDtcclxuICAgbGVmdDogMDtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGhlaWdodDogMTAwJTtcclxuICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuIH1cclxuXHJcbiAubGFuZGluZyBoMXtcclxuICAgZm9udC1zaXplOiA1MHB4O1xyXG4gfVxyXG5cclxuIC5jb3VudGRvd24ge1xyXG4gICBmb250LXNpemU6IDUwcHg7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5jb3VudGRvd24gZGl2e1xyXG4gICBwYWRkaW5nOiAyMHB4O1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgbWFyZ2luOiA1cHg7XHJcbiAgIG9wYWNpdHk6IDAuNztcclxuICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiB9XHJcblxyXG4gLmNvdW50ZG93biBkaXY6Zmlyc3QtY2hpbGR7XHJcbiAgIGJhY2tncm91bmQ6ICMxN2EyYjg7XHJcbiB9XHJcblxyXG4gLmNvdW50ZG93biBzcGFue1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgZm9udC1zaXplOiAyNXB4O1xyXG4gfVxyXG5cclxuIEBtZWRpYShtYXgtd2lkdGg6IDY1MHB4KXtcclxuICAgLmxhbmRpbmcgaW1ne1xyXG4gICAgIHdpZHRoOiA3MCU7XHJcbiAgIH1cclxuICAgLmxhbmRpbmcgaDF7XHJcbiAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICB9XHJcbiAgIC5jb3VudGRvd257XHJcbiAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgIH1cclxuICAgLmNvdW50ZG93biBkaXZ7XHJcbiAgICAgZGlzcGxheTpub25lO1xyXG4gICB9XHJcbiAgIC5jb3VudGRvd24gZGl2OmZpcnN0LWNoaWxke1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgcGFkZGluZzogMTBweDtcclxuICAgfVxyXG4gICAuY291bnRkb3duIGRpdjpudGgtY2hpbGQoMil7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgd2lkdGg6IDY1JTtcclxuICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICB9XHJcbiAgIC5jb3VudGRvd24gZGl2Om50aC1jaGlsZCgzKXtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICB3aWR0aDogNjUlO1xyXG4gICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gfVxyXG5cclxuIEBtZWRpYShtYXgtaGVpZ2h0OiA0MDBweCl7XHJcbiAgIGltZ3tcclxuICAgICB3aWR0aDogMjAlO1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICB9XHJcbiAgIGgxe1xyXG4gICAgIGRpc3BsYXk6bm9uZVxyXG4gICAgfVxyXG4gfVxyXG4gLyogU2V0IGhlaWdodCB0byAxMDAlIGZvciBib2R5IGFuZCBodG1sIHRvIGVuYWJsZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgd2hvbGUgcGFnZTogXHJcbiBib2R5LCBodG1sIHtcclxuICBoZWlnaHQ6IDEwMCVcclxufVxyXG5cclxuLmJnaW1nIHtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIC8qIEZ1bGwtc2NyZWVuIFxyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXgtd2lkdGg6IDEwNCU7XHJcblxyXG4gIC8qIENlbnRlciB0aGUgYmFja2dyb3VuZCBpbWFnZSBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgLyogU2NhbGUgYW5kIHpvb20gaW4gdGhlIGltYWdlIFxyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLyogQWRkIHBvc2l0aW9uOiByZWxhdGl2ZSB0byBlbmFibGUgYWJzb2x1dGVseSBwb3NpdGlvbmVkIGVsZW1lbnRzIGluc2lkZSB0aGUgaW1hZ2UgKHBsYWNlIHRleHQpIFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgLyogQWRkIGEgd2hpdGUgdGV4dCBjb2xvciB0byBhbGwgZWxlbWVudHMgaW5zaWRlIHRoZSAuYmdpbWcgY29udGFpbmVyIFxyXG4gIGNvbG9yOiBibGFjaztcclxuICAvKiBBZGQgYSBmb250IFxyXG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICAvKiBTZXQgdGhlIGZvbnQtc2l6ZSB0byAyNSBwaXhlbHMgXHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4ubm8teHNjcm9sbHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLyogUG9zaXRpb24gdGV4dCBpbiB0aGUgbWlkZGxlIFxyXG4ubWlkZGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIDxocj4gZWxlbWVudCBcclxuaHIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNDAlO1xyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/components/coming-soon/coming-soon.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/coming-soon/coming-soon.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"landing\">\n  <div class=\"landing-inner\">\n    <h1 class=\"comingsoon\">Coming Soon</h1>\n    <div class=\"countdown\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/coming-soon/coming-soon.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/coming-soon/coming-soon.component.ts ***!
  \*****************************************************************/
/*! exports provided: ComingSoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonComponent", function() { return ComingSoonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var ComingSoonComponent = /** @class */ (function () {
    function ComingSoonComponent(document) {
        var launchDate = new Date('Jul 1, 2019 00:00:00').getTime();
        //Update every second
        var intvl = setInterval(function () {
            //Get today's date
            var now = new Date().getTime();
            //Distance from now to launchDate
            var distance = launchDate - now;
            //Time calculations for hours, minutes, seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            //Display result
            document.querySelector(".countdown").innerHTML = "\n        <div>" + days + "<span>Days</span></div>\n        <div>" + hours + "<span>Hours</span></div>\n        <div>" + minutes + "<span>Minutes</span></div>\n        <div>" + seconds + "<span>Seconds</span></div>\n      ";
            // If launch date passed
            if (distance < 0) {
                clearInterval(intvl);
                document.querySelector(".countdown").style.color = '#17a2b8';
                document.querySelector(".countdown").innerHTML = 'Launched';
            }
        }, 1000);
    }
    ComingSoonComponent.prototype.ngOnInit = function () {
    };
    ComingSoonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coming-soon',
            template: __webpack_require__(/*! ./coming-soon.component.html */ "./src/app/components/coming-soon/coming-soon.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./coming-soon.component.css */ "./src/app/components/coming-soon/coming-soon.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ComingSoonComponent);
    return ComingSoonComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>Jeffrey Santana</h1>\n  <p>\n    This website is coming soon.\n  </p>\n  <p>\n    Check back soon to see any changes made.\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects-csharp/projects-csharp.component.css":
/*!************************************************************************!*\
  !*** ./src/app/projects/projects-csharp/projects-csharp.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLWNzaGFycC9wcm9qZWN0cy1jc2hhcnAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/projects/projects-csharp/projects-csharp.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/projects/projects-csharp/projects-csharp.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  projects-csharp works!\n</p>\n"

/***/ }),

/***/ "./src/app/projects/projects-csharp/projects-csharp.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/projects/projects-csharp/projects-csharp.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProjectsCSharpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsCSharpComponent", function() { return ProjectsCSharpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsCSharpComponent = /** @class */ (function () {
    function ProjectsCSharpComponent() {
    }
    ProjectsCSharpComponent.prototype.ngOnInit = function () {
    };
    ProjectsCSharpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects-csharp',
            template: __webpack_require__(/*! ./projects-csharp.component.html */ "./src/app/projects/projects-csharp/projects-csharp.component.html"),
            styles: [__webpack_require__(/*! ./projects-csharp.component.css */ "./src/app/projects/projects-csharp/projects-csharp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsCSharpComponent);
    return ProjectsCSharpComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects-index/projects-index.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/projects/projects-index/projects-index.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLWluZGV4L3Byb2plY3RzLWluZGV4LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/projects/projects-index/projects-index.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/projects/projects-index/projects-index.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  projects-index works!\n</p>\n"

/***/ }),

/***/ "./src/app/projects/projects-index/projects-index.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/projects/projects-index/projects-index.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProjectsIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsIndexComponent", function() { return ProjectsIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsIndexComponent = /** @class */ (function () {
    function ProjectsIndexComponent() {
    }
    ProjectsIndexComponent.prototype.ngOnInit = function () {
    };
    ProjectsIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects-index',
            template: __webpack_require__(/*! ./projects-index.component.html */ "./src/app/projects/projects-index/projects-index.component.html"),
            styles: [__webpack_require__(/*! ./projects-index.component.css */ "./src/app/projects/projects-index/projects-index.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsIndexComponent);
    return ProjectsIndexComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Jeffrey\Documents\My Web Sites\Portfolio\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map