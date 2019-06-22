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

module.exports = " /* Set height to 100% for body and html to enable the background image to cover the whole page: */\r\n body, html {\r\n  height: 100%\r\n}\r\n .bgimg {\r\n  background-repeat: no-repeat;\r\n  /* Full-screen */\r\n  width: 120%;\r\n  /* Center the background image */\r\n  background-position: center;\r\n  /* Scale and zoom in the image */\r\n  background-size: cover;\r\n  /* Add position: relative to enable absolutely positioned elements inside the image (place text) */\r\n  position: relative;\r\n}\r\n .content{\r\n  /* Add a white text color to all elements inside the .bgimg container */\r\n  color: black;\r\n  /* Add a font */\r\n  font-family: \"Courier New\", Courier, monospace;\r\n  /* Set the font-size to 25 pixels */\r\n  font-size: 25px;\r\n}\r\n .no-xscroll{\r\n  overflow-x: hidden;\r\n  white-space: nowrap;\r\n}\r\n /* Position text in the middle */\r\n .middle {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n /* Style the <hr> element */\r\n hr {\r\n  margin: auto;\r\n  width: 40%;\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21pbmctc29vbi9jb21pbmctc29vbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDLGlHQUFpRztDQUNqRztFQUNDO0FBQ0Y7Q0FFQTtFQUNFLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdDQUFnQztFQUNoQywyQkFBMkI7RUFDM0IsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtFQUN0QixrR0FBa0c7RUFDbEcsa0JBQWtCO0FBQ3BCO0NBRUE7RUFDRSx1RUFBdUU7RUFDdkUsWUFBWTtFQUNaLGVBQWU7RUFDZiw4Q0FBOEM7RUFDOUMsbUNBQW1DO0VBQ25DLGVBQWU7QUFDakI7Q0FFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7Q0FFQSxnQ0FBZ0M7Q0FDaEM7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjtDQUVBLDJCQUEyQjtDQUMzQjtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbWluZy1zb29uL2NvbWluZy1zb29uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLyogU2V0IGhlaWdodCB0byAxMDAlIGZvciBib2R5IGFuZCBodG1sIHRvIGVuYWJsZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgd2hvbGUgcGFnZTogKi9cclxuIGJvZHksIGh0bWwge1xyXG4gIGhlaWdodDogMTAwJVxyXG59XHJcblxyXG4uYmdpbWcge1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgLyogRnVsbC1zY3JlZW4gKi9cclxuICB3aWR0aDogMTIwJTtcclxuICAvKiBDZW50ZXIgdGhlIGJhY2tncm91bmQgaW1hZ2UgKi9cclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgLyogU2NhbGUgYW5kIHpvb20gaW4gdGhlIGltYWdlICovXHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAvKiBBZGQgcG9zaXRpb246IHJlbGF0aXZlIHRvIGVuYWJsZSBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQgZWxlbWVudHMgaW5zaWRlIHRoZSBpbWFnZSAocGxhY2UgdGV4dCkgKi9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gIC8qIEFkZCBhIHdoaXRlIHRleHQgY29sb3IgdG8gYWxsIGVsZW1lbnRzIGluc2lkZSB0aGUgLmJnaW1nIGNvbnRhaW5lciAqL1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAvKiBBZGQgYSBmb250ICovXHJcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gIC8qIFNldCB0aGUgZm9udC1zaXplIHRvIDI1IHBpeGVscyAqL1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLm5vLXhzY3JvbGx7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8qIFBvc2l0aW9uIHRleHQgaW4gdGhlIG1pZGRsZSAqL1xyXG4ubWlkZGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIDxocj4gZWxlbWVudCAqL1xyXG5ociB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA0MCU7XHJcbn0gIl19 */"

/***/ }),

/***/ "./src/app/components/coming-soon/coming-soon.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/coming-soon/coming-soon.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='content no-xscroll'>\n  <img class='bgimg' src='../../../assets/img/ForestBridge.jpeg' />\n  <div class=\"middle\">\n    <h1>COMING SOON</h1>\n    <hr>\n    <p id=\"countdown\">Loading...</p>\n  </div>\n</div>"

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
        // Set the date we're counting down to
        var countDownDate = new Date("Jul 1, 2019 00:00:00").getTime();
        // Update the count down every 1 second
        var x = setInterval(function () {
            // Get todays date and time
            var now = new Date().getTime();
            // Find the distance between now an the count down date
            var distance = countDownDate - now;
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // Display the result in an element with id="demo"
            document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";
            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "EXPIRED";
            }
        }, 1000);
    }
    ComingSoonComponent.prototype.ngOnInit = function () {
    };
    ComingSoonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coming-soon',
            template: __webpack_require__(/*! ./coming-soon.component.html */ "./src/app/components/coming-soon/coming-soon.component.html"),
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