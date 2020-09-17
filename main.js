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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\">Jeffrey Santana</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse justify-content-between\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\">Home <span\r\n            class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" routerLinkActive=\"router-link-active\" id=\"navbarDropdown\"\r\n          role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          My Projects\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/projects']\" routerLinkActive=\"router-link-active\">All</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/projects/csharp']\" routerLinkActive=\"router-link-active\">C#</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _components_category_cards_category_cards_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/category-cards/category-cards.component */ "./src/app/components/category-cards/category-cards.component.ts");












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
                _components_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_10__["ComingSoonComponent"],
                _components_category_cards_category_cards_component__WEBPACK_IMPORTED_MODULE_11__["CategoryCardsComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
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

/***/ "./src/app/components/category-cards/category-cards.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/category-cards/category-cards.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n  width: 340px;\r\n  position: relative;\r\n  font-family: Montserrat;\r\n  padding: 20px;\r\n  border-style: none !important;\r\n}\r\n\r\n.boxed {\r\n  padding: 20px;\r\n  height: 230px;\r\n  position: relative;\r\n}\r\n\r\n.boxed img{  \r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  \r\n  -webkit-transform: translate(-50%, -50%);\r\n  \r\n          transform: translate(-50%, -50%);\r\n  max-height: 210px;\r\n  max-width: 280px;\r\n}\r\n\r\n.link-button {\r\n  margin: 5px;\r\n}\r\n\r\n.purple{\r\n  background-image: linear-gradient(#4242F4, #EF93EC);\r\n}\r\n\r\n.yellow{\r\n  background-image: linear-gradient(#E9EF43, #FFD500);\r\n}\r\n\r\n.blue{\r\n  background-image: linear-gradient(#00C6FB, #005BEA);\r\n}\r\n\r\n.card h2{\r\n  font-size: 40px;\r\n}\r\n\r\n.card p{\r\n  font-size: 20px;\r\n  line-height: 1.5em;\r\n  height: 4.5em;\r\n}\r\n\r\n.landing-inner{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  padding-top: 80px;\r\n}\r\n\r\n.landing h1{\r\n  font-size: 50px;\r\n  font-family: Montserrat;\r\n}\r\n\r\n@media(max-width: 650px){\r\n  .card{\r\n    width: 280px;\r\n    padding: 20px 0px;\r\n  }\r\n\r\n  .boxed {\r\n    padding: 10px;\r\n    height: 160px;\r\n    position: relative;\r\n  }\r\n\r\n  .boxed img{  \r\n    max-width: 260px;\r\n    max-height: 140px;\r\n\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    \r\n    -webkit-transform: translate(-50%, -50%);\r\n    \r\n            transform: translate(-50%, -50%);\r\n  }\r\n\r\n  .link-button {\r\n    margin: 3px;\r\n  }\r\n\r\n  .card h2{\r\n    font-size: 30px;\r\n  }\r\n  \r\n  .card p{\r\n    font-size: 15px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yeS1jYXJkcy9jYXRlZ29yeS1jYXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTOztFQUVULHdDQUFnQzs7VUFBaEMsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCOztJQUVqQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7O0lBRVQsd0NBQWdDOztZQUFoQyxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yeS1jYXJkcy9jYXRlZ29yeS1jYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgd2lkdGg6IDM0MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm94ZWQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5ib3hlZCBpbWd7ICBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIFxyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIG1heC1oZWlnaHQ6IDIxMHB4O1xyXG4gIG1heC13aWR0aDogMjgwcHg7XHJcbn1cclxuXHJcbi5saW5rLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5wdXJwbGV7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM0MjQyRjQsICNFRjkzRUMpO1xyXG59XHJcblxyXG4ueWVsbG93e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjRTlFRjQzLCAjRkZENTAwKTtcclxufVxyXG5cclxuLmJsdWV7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwMEM2RkIsICMwMDVCRUEpO1xyXG59XHJcblxyXG4uY2FyZCBoMntcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICBoZWlnaHQ6IDQuNWVtO1xyXG59XHJcblxyXG4ubGFuZGluZy1pbm5lcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxufVxyXG5cclxuLmxhbmRpbmcgaDF7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA2NTBweCl7XHJcbiAgLmNhcmR7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICB9XHJcblxyXG4gIC5ib3hlZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5ib3hlZCBpbWd7ICBcclxuICAgIG1heC13aWR0aDogMjYwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNDBweDtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG5cclxuICAubGluay1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCBoMntcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQgcHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/category-cards/category-cards.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/category-cards/category-cards.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"boxed\" [ngClass]=\"color\">\r\n    <img [src]=\"imgSrc\">\r\n  </div>\r\n  <h2>{{title}}</h2>\r\n  <p>{{description}}</p>\r\n  <button class=\"btn btn-primary link-button\">View Project Details</button>\r\n  <button class=\"btn btn-primary link-button\">View on Github</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/category-cards/category-cards.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/category-cards/category-cards.component.ts ***!
  \***********************************************************************/
/*! exports provided: CategoryCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryCardsComponent", function() { return CategoryCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CategoryCardsComponent = /** @class */ (function () {
    function CategoryCardsComponent() {
    }
    CategoryCardsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('title'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CategoryCardsComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('description'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CategoryCardsComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('color'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CategoryCardsComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('imgSrc'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CategoryCardsComponent.prototype, "imgSrc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('externalLink'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CategoryCardsComponent.prototype, "externalLink", void 0);
    CategoryCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-cards',
            template: __webpack_require__(/*! ./category-cards.component.html */ "./src/app/components/category-cards/category-cards.component.html"),
            styles: [__webpack_require__(/*! ./category-cards.component.css */ "./src/app/components/category-cards/category-cards.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CategoryCardsComponent);
    return CategoryCardsComponent;
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

module.exports = "<div class=\"landing\">\r\n  <div class=\"landing-inner\">\r\n    <h1 class=\"comingsoon\">Coming Soon</h1>\r\n    <div class=\"countdown\"></div>\r\n  </div>\r\n</div>"

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

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.content{\r\n  margin: 0;\r\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\r\n  color:#fff;\r\n  background:#333;\r\n  overflow: hidden;\r\n}\r\n\r\n.landing{\r\n  position: relative;\r\n  background-image: url('ComputerCode.jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  height:100vh;\r\n}\r\n\r\n.landing-inner{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0,0,0,0.7);\r\n  text-align: center;\r\n  padding-top: 230px;\r\n}\r\n\r\n.landing h2 {\r\n  font-size: 30px;\r\n  color: #FF8105;\r\n}\r\n\r\n.landing h1{\r\n  font-size: 85px;\r\n}\r\n\r\n.landing button{\r\n  margin-top: 100px;\r\n  font-size:20px;\r\n}\r\n\r\n@media(max-width: 650px){\r\n  .landing img{\r\n    width: 70%;\r\n  }\r\n  .landing h2{\r\n    font-size: 20px;\r\n  }\r\n  .landing h1{\r\n    font-size: 40px;\r\n  }\r\n  .landing button{\r\n    font-size: 15px;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxxREFBcUQ7RUFDckQsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUNBQStDO0VBQy9DLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBiYWNrZ3JvdW5kOiMzMzM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmxhbmRpbmd7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvQ29tcHV0ZXJDb2RlLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGhlaWdodDoxMDB2aDtcclxufVxyXG5cclxuLmxhbmRpbmctaW5uZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAyMzBweDtcclxufVxyXG5cclxuLmxhbmRpbmcgaDIge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogI0ZGODEwNTtcclxufVxyXG5cclxuLmxhbmRpbmcgaDF7XHJcbiAgZm9udC1zaXplOiA4NXB4O1xyXG59XHJcblxyXG4ubGFuZGluZyBidXR0b257XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgZm9udC1zaXplOjIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDY1MHB4KXtcclxuICAubGFuZGluZyBpbWd7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH1cclxuICAubGFuZGluZyBoMntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgLmxhbmRpbmcgaDF7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG4gIC5sYW5kaW5nIGJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div class=\"landing\">\r\n    <div class=\"landing-inner\">\r\n      <h2 class=\"hero-label\">Full Stack Web Developer - Data Scientist</h2>\r\n      <h1 class=\"hero\">Jeffrey Santana</h1>\r\n      <button class=\"btn btn-primary\" [routerLink]=\"['/projects']\" routerLinkActive=\"router-link-active\">SEE MY\r\n        WORK</button>\r\n    </div>\r\n  </div>\r\n</div>"

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

module.exports = "<p>\r\n  not-found works!\r\n</p>\r\n"

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

module.exports = "<p>\r\n  projects-csharp works!\r\n</p>\r\n"

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

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml, body{\r\n  margin: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  color:#333;\r\n  overflow: hidden;\r\n}\r\n\r\n.landing{\r\n  position: relative;\r\n  height:100vh;\r\n}\r\n\r\n.landing-inner{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  padding-top: 60px;\r\n}\r\n\r\n.landing h1{\r\n  font-size: 50px;\r\n  font-family: Montserrat;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.card-container{\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n@media(max-width: 650px){\r\n  .landing-inner{\r\n    padding-top:20px;\r\n  }\r\n\r\n  .landing h1{\r\n    font-size: 30px;\r\n    padding-bottom: 10px;\r\n  }\r\n\r\n  .card-container{\r\n    -webkit-flex-direction: column;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 10%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMtaW5kZXgvcHJvamVjdHMtaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCx5Q0FBeUM7RUFDekMsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHFCQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHNDQUE4QjtZQUE5Qiw4QkFBOEI7RUFDaEM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLWluZGV4L3Byb2plY3RzLWluZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5odG1sLCBib2R5e1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjojMzMzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5sYW5kaW5ne1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6MTAwdmg7XHJcbn1cclxuXHJcbi5sYW5kaW5nLWlubmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcblxyXG4ubGFuZGluZyBoMXtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDY1MHB4KXtcclxuICAubGFuZGluZy1pbm5lcntcclxuICAgIHBhZGRpbmctdG9wOjIwcHg7XHJcbiAgfVxyXG5cclxuICAubGFuZGluZyBoMXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVye1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/projects/projects-index/projects-index.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/projects/projects-index/projects-index.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"landing\">\r\n  <div class=\"landing-inner\">\r\n    <h1 class=\"title\">Languages</h1>\r\n    <div class=\"card-container\">\r\n      <app-category-cards title=\"C#\" description=\"View projects using C# that include ASP.NET, WPF, and Unity.\"\r\n        color=\"purple\" imgSrc=\"assets/img/c-sharp-logo.png\">\r\n      </app-category-cards>\r\n      <app-category-cards title=\"Javascript\" description=\"View web apps built using javascript libraries.\"\r\n        color=\"yellow\" imgSrc=\"assets/img/js-logo.png\">\r\n      </app-category-cards>\r\n      <app-category-cards title=\"Python\" description=\"View machine learning and data analysis projects using python.\"\r\n        color=\"blue\" imgSrc=\"assets/img/python-logo.png\">\r\n      </app-category-cards>\r\n      <app-category-cards title=\"Meal Monster\" description=\"Recipe website created using Angular for the front end, and .NET for the backend.\"\r\n        color=\"yellow\" imgSrc=\"assets/img/meal-monster-screenhot.png\">\r\n      </app-category-cards>\r\n      <app-category-cards title=\"Going Bananas\" description=\"Auto scrolling game using Unity and C#. This game connects to a MongoDb database to hold users' high scores\"\r\n        color=\"purple\" imgSrc=\"assets/img/meal-monster-screenhot.png\"></app-category-cards>\r\n      <app-category-cards title=\"Bacteria Simulator\" description=\"Neural Network project made using Xamarin that simulates bacteria looking for food. Bacteria with the best DNA will end up surviving longer and spawning new bacteria with similar DNA\"\r\n      color=\"blue\" imgSrc=\"assets/img/meal-monster-screenhot.png\"></app-category-cards>\r\n      <app-category-cards title=\"Excel Environmental Log\" description=\"Excel GUI used to automate process of entering Environmental data into excel sheet created using VBA. Automatically formats and pulls information from sheet to populate data and create labels.\"\r\n      color=\"yellow\" imgSrc=\"assets/img/meal-monster-screenhot.png\"></app-category-cards>\r\n      <app-category-cards title=\"Lemonade Stand\" description=\"Simulator game created using Unity and C#. This game has smart customers that will make purchasing decisions based on many factors such as weather, price, and time of day, as well as their hunger and thirst needs\"\r\n      color=\"yellow\" imgSrc=\"assets/img/meal-monster-screenhot.png\"></app-category-cards>\r\n      <app-category-cards ></app-category-cards>\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _components_category_cards_category_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/category-cards/category-cards.component */ "./src/app/components/category-cards/category-cards.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ProjectsIndexComponent = /** @class */ (function () {
    function ProjectsIndexComponent() {
    }
    ProjectsIndexComponent.prototype.ngOnInit = function () {
    };
    ProjectsIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-projects-index',
            template: __webpack_require__(/*! ./projects-index.component.html */ "./src/app/projects/projects-index/projects-index.component.html"),
            styles: [__webpack_require__(/*! ./projects-index.component.css */ "./src/app/projects/projects-index/projects-index.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_category_cards_category_cards_component__WEBPACK_IMPORTED_MODULE_1__["CategoryCardsComponent"]]
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

module.exports = __webpack_require__(/*! C:\Users\jeffr\OneDrive\Documents\Web Sites\Portfolio\Portfolio\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map