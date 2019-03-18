(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/@trust/webcrypto/src/algorithms sync recursive":
/*!***********************************************************!*\
  !*** ./node_modules/@trust/webcrypto/src/algorithms sync ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@trust/webcrypto/src/algorithms sync recursive";

/***/ }),

/***/ "./node_modules/n3/lib sync recursive ^\\.\\/N3.*$":
/*!*********************************************!*\
  !*** ./node_modules/n3/lib sync ^\.\/N3.*$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./N3Lexer": "./node_modules/n3/lib/N3Lexer.js",
	"./N3Lexer.js": "./node_modules/n3/lib/N3Lexer.js",
	"./N3Parser": "./node_modules/n3/lib/N3Parser.js",
	"./N3Parser.js": "./node_modules/n3/lib/N3Parser.js",
	"./N3Store": "./node_modules/n3/lib/N3Store.js",
	"./N3Store.js": "./node_modules/n3/lib/N3Store.js",
	"./N3StreamParser": "./node_modules/n3/lib/N3StreamParser.js",
	"./N3StreamParser.js": "./node_modules/n3/lib/N3StreamParser.js",
	"./N3StreamWriter": "./node_modules/n3/lib/N3StreamWriter.js",
	"./N3StreamWriter.js": "./node_modules/n3/lib/N3StreamWriter.js",
	"./N3Util": "./node_modules/n3/lib/N3Util.js",
	"./N3Util.js": "./node_modules/n3/lib/N3Util.js",
	"./N3Writer": "./node_modules/n3/lib/N3Writer.js",
	"./N3Writer.js": "./node_modules/n3/lib/N3Writer.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/n3/lib sync recursive ^\\.\\/N3.*$";

/***/ }),

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-popup/login-popup.component */ "./src/app/login-popup/login-popup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/solid.auth.service */ "./src/app/services/solid.auth.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.guard.service */ "./src/app/services/auth.guard.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _message_messaging_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./message/messaging.component */ "./src/app/message/messaging.component.ts");
/* harmony import */ var _contact_add_contact_add_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contact-add/contact-add.component */ "./src/app/contact-add/contact-add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Services












var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'login-popup',
        component: _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_4__["LoginPopupComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
    },
    {
        path: 'card',
        component: _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"]
    },
    {
        path: 'message',
        component: _message_messaging_component__WEBPACK_IMPORTED_MODULE_18__["MessagingComponent"]
    },
    {
        path: 'contact-add',
        component: _contact_add_contact_add_component__WEBPACK_IMPORTED_MODULE_19__["ContactAddComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_4__["LoginPopupComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_15__["ContactsComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_16__["MessagesComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"],
                _message_messaging_component__WEBPACK_IMPORTED_MODULE_18__["MessagingComponent"],
                _contact_add_contact_add_component__WEBPACK_IMPORTED_MODULE_19__["ContactAddComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"] //required for toastr
            ],
            providers: [_services_solid_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card.component.css":
/*!*****************************************!*\
  !*** ./src/app/card/card.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-container {\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.profile-container h1 {\r\n  font-size: 24px;\r\n  color: #7C55FB;\r\n  font-weight: bold;\r\n  line-height: 32px;\r\n  letter-spacing: 1.2px;\r\n  text-align: center;\r\n  margin-top: 82px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.profile-fields-container {\r\n  max-width: 740px;\r\n  min-height: 500px;\r\n  margin: 0 auto;\r\n  border: 1px solid #ccc;\r\n  box-shadow: #ccc 1px 1px 4px;\r\n  position: relative;\r\n}\r\n\r\n.profile-fields-container .profile-image-container {\r\n  height: 200px;\r\n  width: 100%;\r\n  background-size: cover !important;\r\n  background: url('/assets/images/Solid_Pattern.png');\r\n}\r\n\r\n.profile-fields-container .profile-image-container img {\r\n  height: 128px;\r\n  border-radius: 50%;\r\n  margin-left: auto;\r\n  margin-right:auto;\r\n  position: relative;\r\n  top:40px;\r\n  display: block;\r\n}\r\n\r\n.profile-fields-container i {\r\n  font-size: 14px;\r\n  color: #89969F;\r\n  padding-left: 26px;\r\n  padding-right: 10px;\r\n  margin-top: 24px;\r\n}\r\n\r\n.profile-fields-container input[type=text].field-text {\r\n  height: 12px;\r\n  width: 280px;\r\n  border: 1px solid #89969F;\r\n  border-radius: 4px;\r\n  padding: 10px;\r\n}\r\n\r\n.profile-fields-container input[type=text].field-text::-webkit-input-placeholder {\r\n  color: rgba(102,102,102,0.2);\r\n}\r\n\r\n.profile-fields-container input[type=text].field-text:-ms-input-placeholder {\r\n  color: rgba(102,102,102,0.2);\r\n}\r\n\r\n.profile-fields-container input[type=text].field-text::-ms-input-placeholder {\r\n  color: rgba(102,102,102,0.2);\r\n}\r\n\r\n.profile-fields-container input[type=text].field-text::placeholder {\r\n  color: rgba(102,102,102,0.2);\r\n}\r\n\r\n.profile-save-button-container {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: auto;\r\n  height: 100px;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.profile-save-button {\r\n  background-color: #7C55FB;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 280px;\r\n}\r\n\r\n.profile-save-button:disabled {\r\n  background-color: #F0EEEB;\r\n  border-color: #F0EEEB;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.topnav {\r\n  position:absolute;\r\n  top:0;\r\n  left:0;\r\n  width: 100%;\r\n  background-color: #7C4DFF;\r\n  height: 50px;\r\n  color: #fff;\r\n}\r\n\r\n.topnav .logo {\r\n  display: inline-block;\r\n  font-family: 'Roboto Slab', serif;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  line-height: 32px;\r\n  padding-right: 80px;\r\n  position: relative;\r\n  top: -8px;\r\n  left: 28px;\r\n}\r\n\r\n.topnav .menu-item {\r\n  display: inline-block;\r\n  font-size: 10px;\r\n  line-height: 13px;\r\n  width: 100px;\r\n  height: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.topnav .menu-item i {\r\n  font-size: 24px;\r\n  margin-top:8px;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.topnav .profile-menu {\r\n  float: right;\r\n  display: inline-block;\r\n  width: 50px;\r\n  height: 50px;\r\n  background-color: rgba(0,0,0,0.25);\r\n}\r\n\r\n.topnav .profile-menu img {\r\n  display: block;\r\n  height: 30px;\r\n  width: 30px;\r\n  border-radius: 50%;\r\n  margin: 0 auto;\r\n  margin-top:10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.loading-image {\r\n  text-align: center;\r\n  margin-top: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRkE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRkE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRkE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLEtBQUs7RUFDTCxNQUFNO0VBQ04sV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtY29udGFpbmVyIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNvbnRhaW5lciBoMSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjN0M1NUZCO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogODJweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1maWVsZHMtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDc0MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm94LXNoYWRvdzogI2NjYyAxcHggMXB4IDRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9maWxlLWZpZWxkcy1jb250YWluZXIgLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL1NvbGlkX1BhdHRlcm4ucG5nJyk7XHJcbn1cclxuXHJcbi5wcm9maWxlLWZpZWxkcy1jb250YWluZXIgLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIGltZyB7XHJcbiAgaGVpZ2h0OiAxMjhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDo0MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucHJvZmlsZS1maWVsZHMtY29udGFpbmVyIGkge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzg5OTY5RjtcclxuICBwYWRkaW5nLWxlZnQ6IDI2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1maWVsZHMtY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0uZmllbGQtdGV4dCB7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIHdpZHRoOiAyODBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjODk5NjlGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1maWVsZHMtY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0uZmllbGQtdGV4dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiByZ2JhKDEwMiwxMDIsMTAyLDAuMik7XHJcbn1cclxuXHJcbi5wcm9maWxlLXNhdmUtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5wcm9maWxlLXNhdmUtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1NUZCO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogMjgwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLXNhdmUtYnV0dG9uOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFRUVCO1xyXG4gIGJvcmRlci1jb2xvcjogI0YwRUVFQjtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4udG9wbmF2IHtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdDNERGRjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50b3BuYXYgLmxvZ28ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgcGFkZGluZy1yaWdodDogODBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtOHB4O1xyXG4gIGxlZnQ6IDI4cHg7XHJcbn1cclxuXHJcbi50b3BuYXYgLm1lbnUtaXRlbSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBsaW5lLWhlaWdodDogMTNweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRvcG5hdiAubWVudS1pdGVtIGkge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBtYXJnaW4tdG9wOjhweDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbi50b3BuYXYgLnByb2ZpbGUtbWVudSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjI1KTtcclxufVxyXG5cclxuLnRvcG5hdiAucHJvZmlsZS1tZW51IGltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubG9hZGluZy1pbWFnZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-container\">\r\n  <!-- EXAMPLE TOP NAV -->\r\n  <div class=\"topnav\">\r\n    <div class=\"logo\">Solid</div>\r\n    <div class=\"menu-item\">\r\n      <div>\r\n        <i class=\"far fa-compass\"></i>\r\n      </div>\r\n      Menu Item 1\r\n    </div>\r\n    <div class=\"menu-item\">\r\n      <div>\r\n        <i class=\"far fa-comment\"></i>\r\n      </div>\r\n      Menu Item 2\r\n    </div>\r\n    <div class=\"menu-item\">\r\n      <div>\r\n        <i class=\"fas fa-sliders-h\"></i>\r\n      </div>\r\n      Menu Item 3\r\n    </div>\r\n\r\n    <div class=\"profile-menu\" (click)=\"logout()\">\r\n      <img [src]=\"profileImage\" />\r\n    </div>\r\n  </div>\r\n  <h1>Profile</h1>\r\n\r\n  <!-- LOADING IMAGE -->\r\n  <div class=\"loading-image\" *ngIf=\"loadingProfile\">\r\n    <i class=\"fas fa-circle-notch fa-4x fa-spin\"></i>\r\n  </div>\r\n\r\n  <!-- MAIN PROFILE -->\r\n  <div class=\"profile-fields-container\" *ngIf=\"!loadingProfile\">\r\n    <div class=\"profile-image-container\">\r\n      <img [src]=\"profileImage\" />\r\n    </div>\r\n    <form style=\"padding-top: 26px;\" #f=\"ngForm\" (submit)=\"onSubmit()\">\r\n      <div class=\"fields pure-g\">\r\n        <!-- NAME -->\r\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\r\n          <i class=\"fas fa-user\"></i> <input type=\"text\" class=\"field-text form-control\" name=\"fn\" placeholder=\"NAME\" [(ngModel)]=\"profile.fn\" />\r\n        </div>\r\n\r\n        <!-- PHONE -->\r\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\r\n          <i class=\"fas fa-phone\"></i><input type=\"text\" class=\"field-text form-control\" name=\"phone\" placeholder=\"PHONE\" [(ngModel)]=\"profile.phone\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"fields pure-g\">\r\n        <!-- ROLE -->\r\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\r\n          <i class=\"fas fa-user-astronaut\"></i> <input type=\"text\" class=\"field-text form-control\" name=\"role\" placeholder=\"ROLE\" [(ngModel)]=\"profile.role\" />\r\n        </div>\r\n\r\n        <!-- EMAIL -->\r\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\r\n          <i class=\"fas fa-envelope\"></i><input type=\"text\" class=\"field-text form-control\" name=\"email\" placeholder=\"EMAIL\" [(ngModel)]=\"profile.email\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"fields pure-g\">\r\n        <!-- ORGANIZATION -->\r\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\r\n          <i class=\"fas fa-building\"></i> <input type=\"text\" class=\"field-text form-control\" name=\"company\" placeholder=\"ORGANIZATION\" [(ngModel)]=\"profile.company\" />\r\n        </div>\r\n\r\n        <!-- ADDRESS -->\r\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\r\n          <i class=\"fas fa-map-marker-alt\" style=\"width: 12px; margin-left: 2px;\"></i><input type=\"text\" class=\"field-text form-control\" name=\"address\" placeholder=\"ADDRESS\" [(ngModel)]=\"profile.address.street\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"profile-save-button-container\">\r\n        <button type=\"submit\" class=\"wide-button profile-save-button\" [disabled]=\"!cardForm || cardForm.pristine\">Save</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_rdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/rdf.service */ "./src/app/services/rdf.service.ts");
/* harmony import */ var _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/solid.auth.service */ "./src/app/services/solid.auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var CardComponent = /** @class */ (function () {
    function CardComponent(rdf, route, auth) {
        this.rdf = rdf;
        this.route = route;
        this.auth = auth;
    }
    CardComponent.prototype.ngOnInit = function () {
        this.loadingProfile = true;
        this.loadProfile();
        // Clear cached profile data
        // TODO: Remove this code and find a better way to get the old data
        localStorage.removeItem('oldProfileData');
    };
    // Loads the profile from the rdf service and handles the response
    CardComponent.prototype.loadProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var profile, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.loadingProfile = true;
                        return [4 /*yield*/, this.rdf.getProfile()];
                    case 1:
                        profile = _a.sent();
                        if (profile) {
                            this.profile = profile;
                            this.auth.saveOldUserData(profile);
                        }
                        this.loadingProfile = false;
                        this.setupProfileData();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log("Error: " + error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Submits the form, and saves the profile data using the auth/rdf service
    CardComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.cardForm.invalid) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.rdf.updateProfile(this.cardForm)];
                    case 2:
                        _a.sent();
                        localStorage.setItem('oldProfileData', JSON.stringify(this.profile));
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log("Error: " + err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // Format data coming back from server. Intended purpose is to replace profile image with default if it's missing
    // and potentially format the address if we need to reformat it for this UI
    CardComponent.prototype.setupProfileData = function () {
        if (this.profile) {
            this.profileImage = this.profile.image ? this.profile.image : '/assets/images/profile.png';
        }
        else {
            this.profileImage = '/assets/images/profile.png';
        }
    };
    // Example of logout functionality. Normally wouldn't be triggered by clicking the profile picture.
    CardComponent.prototype.logout = function () {
        this.auth.solidSignOut();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], CardComponent.prototype, "cardForm", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [_services_rdf_service__WEBPACK_IMPORTED_MODULE_3__["RdfService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/contact-add/contact-add.component.css":
/*!*******************************************************!*\
  !*** ./src/app/contact-add/contact-add.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtYWRkL2NvbnRhY3QtYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/contact-add/contact-add.component.html":
/*!********************************************************!*\
  !*** ./src/app/contact-add/contact-add.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"form-group\">\r\n        <label for=\"name\">Nombre</label>\r\n        <input type=\"text\" [(ngModel)]=\"nick\" class=\"form-control\" id=\"name\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"url\">Url del pod</label>\r\n        <input type=\"text\" [(ngModel)]=\"podUrl\" class=\"form-control\" id=\"url\">\r\n    </div>\r\n\r\n    <button class=\"btn btn-success\" (click)=\"onSubmit()\" [disabled]=\"podUrl.trim().length == 0\">Agregar</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contact-add/contact-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contact-add/contact-add.component.ts ***!
  \******************************************************/
/*! exports provided: ContactAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactAddComponent", function() { return ContactAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rdf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/rdf.service */ "./src/app/services/rdf.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ContactAddComponent = /** @class */ (function () {
    function ContactAddComponent(rdf, router) {
        this.rdf = rdf;
        this.router = router;
        this.podUrl = '';
        this.nick = '';
    }
    ContactAddComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var me;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rdf.getMe()];
                    case 1:
                        me = _a.sent();
                        if (me == null) {
                            this.router.navigateByUrl('/login');
                        }
                        else {
                            this.rdf.addContact(me, this.podUrl);
                            this.podUrl = '';
                            this.nick = '';
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-add',
            template: __webpack_require__(/*! ./contact-add.component.html */ "./src/app/contact-add/contact-add.component.html"),
            styles: [__webpack_require__(/*! ./contact-add.component.css */ "./src/app/contact-add/contact-add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_rdf_service__WEBPACK_IMPORTED_MODULE_1__["RdfService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContactAddComponent);
    return ContactAddComponent;
}());



/***/ }),

/***/ "./src/app/contact.ts":
/*!****************************!*\
  !*** ./src/app/contact.ts ***!
  \****************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact(url, nick) {
        this._url = url;
        this._nick = nick;
    }
    Object.defineProperty(Contact.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "nick", {
        get: function () {
            return this._nick;
        },
        set: function (value) {
            this._nick = value;
        },
        enumerable: true,
        configurable: true
    });
    return Contact;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  {{contact.url}}\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact */ "./src/app/contact.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('contact'),
        __metadata("design:type", _contact__WEBPACK_IMPORTED_MODULE_1__["Contact"])
    ], ContactComponent.prototype, "contact", void 0);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacto',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.css":
/*!*************************************************!*\
  !*** ./src/app/contacts/contacts.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\r\n    <h1 class=\"display-4\">Contactos</h1>\r\n    <nav>\r\n        <button (click)=\"addContact()\">Añadir contacto</button>\r\n    </nav>\r\n    <ul>\r\n        <app-contacto *ngFor=\"let contact of contacts\" [contact]=\"contact\"\r\n                      (click)=\"selectContact(contact)\"></app-contacto>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rdf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/rdf.service */ "./src/app/services/rdf.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact */ "./src/app/contact.ts");
/* harmony import */ var _message_messaging_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message/messaging.component */ "./src/app/message/messaging.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(parent, rdf, router) {
        this.parent = parent;
        this.rdf = rdf;
        this.router = router;
        this.contacts = [];
        this.loadContacts();
    }
    ContactsComponent.prototype.selectContact = function (contact) {
        this.selectedContact = contact;
        this.parent.selectContact(contact);
    };
    ContactsComponent.prototype.loadContacts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var me, contacts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rdf.getMe()];
                    case 1:
                        me = _a.sent();
                        if (!(me == null)) return [3 /*break*/, 2];
                        this.router.navigateByUrl('/login');
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.rdf.getContacts(me)];
                    case 3:
                        contacts = _a.sent();
                        console.log(contacts);
                        if (contacts.value) {
                            this.insertContact(contacts);
                        }
                        else {
                            this.insertContacts(contacts);
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ContactsComponent.prototype.insertContacts = function (results) {
        results.forEach(function (value) {
            this.insertContact(value.object);
        }.bind(this));
    };
    ContactsComponent.prototype.insertContact = function (node) {
        this.contacts.push(new _contact__WEBPACK_IMPORTED_MODULE_3__["Contact"](node.value, "Nombre"));
    };
    ContactsComponent.prototype.addContact = function () {
        this.router.navigateByUrl('contact-add');
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactos',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/contacts/contacts.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_message_messaging_component__WEBPACK_IMPORTED_MODULE_4__["MessagingComponent"])),
        __metadata("design:paramtypes", [_message_messaging_component__WEBPACK_IMPORTED_MODULE_4__["MessagingComponent"], _services_rdf_service__WEBPACK_IMPORTED_MODULE_1__["RdfService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\r\n  <p>Your webId is {{ session.webId }}</p>\r\n  <ul>\r\n    <li><a [routerLink]=\"['/card']\">Profile</a></li>\r\n    <li><a (click)=\"onSignOut()\">Signout</a></li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/solid.auth.service */ "./src/app/services/solid.auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// import { currentSession } from 'solid-auth-client';
// Services

var Session = /** @class */ (function () {
    function Session() {
    }
    return Session;
}());
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(auth, route) {
        var _this = this;
        this.auth = auth;
        this.route = route;
        this.session = new Session();
        this.loadSession = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        }); };
        this.onSignOut = function () {
            _this.auth.solidSignOut();
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log('hello');
        this.loadSession();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_solid_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login-popup/login-popup.component.css":
/*!*******************************************************!*\
  !*** ./src/app/login-popup/login-popup.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBvcHVwL2xvZ2luLXBvcHVwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login-popup/login-popup.component.html":
/*!********************************************************!*\
  !*** ./src/app/login-popup/login-popup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-container\">Loading...</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/login-popup/login-popup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login-popup/login-popup.component.ts ***!
  \******************************************************/
/*! exports provided: LoginPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPopupComponent", function() { return LoginPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginPopupComponent = /** @class */ (function () {
    function LoginPopupComponent(elementRef) {
        this.elementRef = elementRef;
    }
    LoginPopupComponent.prototype.ngOnInit = function () {
        this.runScript();
    };
    LoginPopupComponent.prototype.runScript = function () {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = '/assets/js/libs/popup.js';
        this.elementRef.nativeElement.appendChild(s);
        // s.onload = () => this.triggerDuo();
    };
    LoginPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-popup',
            template: __webpack_require__(/*! ./login-popup.component.html */ "./src/app/login-popup/login-popup.component.html"),
            styles: [__webpack_require__(/*! ./login-popup.component.css */ "./src/app/login-popup/login-popup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], LoginPopupComponent);
    return LoginPopupComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.login-page {\r\n  text-align: center;\r\n  font-family: 'Roboto', sans-serif;\r\n  color: #666;\r\n}\r\n\r\n.login-page h1 {\r\n  font-size: 38px;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  line-height: 50px;\r\n  letter-spacing: 1.9px;\r\n  padding-top: 12px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.login-page h2 {\r\n  color: #666;\r\n\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  letter-spacing: 1px;\r\n  line-height: 21px;\r\n  margin-top: 48px;\r\n}\r\n\r\n.login-page .small-link {\r\n  font-size: 12px;\r\n  color: #666;\r\n  letter-spacing: 0.75px;\r\n  line-height: 16px;\r\n}\r\n\r\n.login-page .registration-link {\r\n  margin-top: 38px;\r\n}\r\n\r\n.login-page .registration-link p {\r\n  font-size: 16px;\r\n  color: #666;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.login-page .item-divider {\r\n  box-sizing:border-box;\r\n  height: 1px;\r\n  width: 354px;\r\n  border-bottom: 1px solid #E0E0E0;\r\n  position: absolute;\r\n  bottom:-8px; left:-9px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXOztFQUVYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsV0FBVyxFQUFFLFNBQVM7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sb2dpbi1wYWdlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjNjY2O1xyXG59XHJcblxyXG4ubG9naW4tcGFnZSBoMSB7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEuOXB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmxvZ2luLXBhZ2UgaDIge1xyXG4gIGNvbG9yOiAjNjY2O1xyXG5cclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIG1hcmdpbi10b3A6IDQ4cHg7XHJcbn1cclxuXHJcbi5sb2dpbi1wYWdlIC5zbWFsbC1saW5rIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNzVweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxufVxyXG5cclxuLmxvZ2luLXBhZ2UgLnJlZ2lzdHJhdGlvbi1saW5rIHtcclxuICBtYXJnaW4tdG9wOiAzOHB4O1xyXG59XHJcblxyXG4ubG9naW4tcGFnZSAucmVnaXN0cmF0aW9uLWxpbmsgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1wYWdlIC5pdGVtLWRpdmlkZXIge1xyXG4gIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICBoZWlnaHQ6IDFweDtcclxuICB3aWR0aDogMzU0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMEUwRTA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTotOHB4OyBsZWZ0Oi05cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\r\n\r\n  <!-- APP LOGO -->\r\n  <div style=\"margin-top:60px;\">\r\n    <i class=\"fas fa-user-circle\" style=\"font-size: 64px;\"></i>\r\n  </div>\r\n\r\n  <!-- APP NAME -->\r\n  <h1>\r\n    Profile Demo App\r\n  </h1>\r\n\r\n  <!-- LOGIN TITLE -->\r\n  <h2>\r\n    Login with Solid Identity\r\n  </h2>\r\n\r\n  <!-- PROVIDER SELECTION -->\r\n  <div style=\"margin-top: 10px;\">\r\n    <ng-select class=\"login-select\"\r\n               bindLabel=\"name\"\r\n               bindValue=\"loginUrl\"\r\n               placeholder=\"Select ID Provider\"\r\n               dropdownPosition=\"bottom\"\r\n               [items]=\"identityProviders\"\r\n               [(ngModel)]=\"selectedProviderUrl\"\r\n               style=\"width: 360px; height: 48px; margin-left: auto; margin-right: auto;\">\r\n\r\n      <!-- DROPDOWN TEMPLATE -->\r\n      <ng-template ng-option-tmp let-item=\"item\">\r\n        <div style=\"height:40px; padding-top:10px; position: relative;\">\r\n          <img [src]=\"item.image\" style=\"float: left; height: 32px; width: 32px; margin-top:-5px;\" />\r\n          <span style=\"float: left; margin-left: 10px;\">{{ item.name }}</span>\r\n          <div style=\"clear: both;\"></div>\r\n          <div class=\"item-divider\"></div>\r\n        </div>\r\n      </ng-template>\r\n\r\n    </ng-select>\r\n    <input type=\"text\"\r\n           class=\"wide-text\"\r\n           *ngIf=\"selectedProviderUrl===null\"\r\n           placeholder=\"Enter WebID\"\r\n           style=\"margin-top:10px; padding: 12px 10px; width: 340px; height: 16px; display: block; margin-left: auto; margin-right: auto;\"\r\n           [(ngModel)]=\"customProviderUrl\" />\r\n    <button class=\"wide-button\" (click)=\"onLogin()\" *ngIf=\"selectedProviderUrl !== undefined || customProviderUrl !== undefined\" [disabled]=\"selectedProviderUrl===null && !customProviderUrl\" style=\"margin-top:10px;\">Go</button>\r\n  </div>\r\n\r\n  <!-- REGISTRATION -->\r\n  <div class=\"registration-link\">\r\n    <p style=\"margin: 12px;\">Don't have a Solid Identity?</p>\r\n    <button class=\"wide-button\" (click)=\"goToRegistration()\">Register</button>\r\n  </div>\r\n\r\n  <!-- HELP -->\r\n  <div style=\"margin-top: 48px;\">\r\n    <a href=\"https://solid.mit.edu\" target=\"_blank\" class=\"small-link\">\r\n      <i class=\"fas fa-info-circle\"></i> What is a Solid Identity?\r\n    </a>\r\n  </div>\r\n\r\n</div>\r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/solid.auth.service */ "./src/app/services/solid.auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// Auth Service

var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        /*
        *  Alternate login-popup function for Solid. See service for more details.
        */
        this.onLoginPopup = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.auth.solidLoginPopup();
                return [2 /*return*/];
            });
        }); };
        this.onLogin = function () { return __awaiter(_this, void 0, void 0, function () {
            var idp;
            return __generator(this, function (_a) {
                idp = this.selectedProviderUrl ? this.selectedProviderUrl : this.customProviderUrl;
                if (idp) {
                    try {
                        this.auth.solidLogin(idp);
                    }
                    catch (err) {
                        console.log('An error has occurred logging in: ' + err);
                    }
                }
                return [2 /*return*/];
            });
        }); };
    }
    LoginComponent.prototype.ngOnInit = function () {
        // If we're authenticated, go to profile
        if (localStorage.getItem('solid-auth-client')) {
            this.router.navigateByUrl('/card');
        }
        this.identityProviders = this.auth.getIdentityProviders();
    };
    LoginComponent.prototype.goToRegistration = function () {
        this.router.navigateByUrl('/register');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_solid_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/message/messaging.component.css":
/*!*************************************************!*\
  !*** ./src/app/message/messaging.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/message/messaging.component.html":
/*!**************************************************!*\
  !*** ./src/app/message/messaging.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <app-contactos></app-contactos>\r\n  <app-mensajes></app-mensajes>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/message/messaging.component.ts":
/*!************************************************!*\
  !*** ./src/app/message/messaging.component.ts ***!
  \************************************************/
/*! exports provided: MessagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingComponent", function() { return MessagingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../messages/messages.component */ "./src/app/messages/messages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagingComponent = /** @class */ (function () {
    function MessagingComponent() {
    }
    MessagingComponent.prototype.ngOnInit = function () {
    };
    MessagingComponent.prototype.selectContact = function (contact) {
        this.messages.selectConversation(contact);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_messages_messages_component__WEBPACK_IMPORTED_MODULE_1__["MessagesComponent"]),
        __metadata("design:type", _messages_messages_component__WEBPACK_IMPORTED_MODULE_1__["MessagesComponent"])
    ], MessagingComponent.prototype, "messages", void 0);
    MessagingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mensajeria',
            template: __webpack_require__(/*! ./messaging.component.html */ "./src/app/message/messaging.component.html"),
            styles: [__webpack_require__(/*! ./messaging.component.css */ "./src/app/message/messaging.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagingComponent);
    return MessagingComponent;
}());



/***/ }),

/***/ "./src/app/messages/message.ts":
/*!*************************************!*\
  !*** ./src/app/messages/message.ts ***!
  \*************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message() {
    }
    Message.prototype.setContent = function (contenido) {
        this.content = contenido;
        this.date = new Date();
    };
    Message.prototype.getContent = function () {
        return this.content;
    };
    Message.prototype.setDate = function (date) {
        this.date = date;
    };
    Message.prototype.getDate = function () {
        return this.date;
    };
    Message.prototype.setRecipientURL = function (recipientURL) {
        this.recipientURL = recipientURL;
    };
    Message.prototype.getRecipientURL = function () {
        return this.recipientURL;
    };
    Message.prototype.getSenderURL = function () {
        return this.senderURL;
    };
    Message.prototype.setSenderURL = function (senderURL) {
        this.senderURL = senderURL;
    };
    Message.prototype.toString = function () {
        return this.senderURL + ';' + this.recipientURL + ';' + this.date.toISOString() + ';' + this.content;
    };
    return Message;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-20\">\r\n  <p>Listado Mensajes</p>\r\n    <p *ngIf=\"contact != null\">\r\n        {{contact.url}}</p>\r\n  <ul>\r\n    <li *ngFor=\"let message of messages\">\r\n      {{ message }}\r\n    </li>\r\n  </ul>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"form-group\">\r\n    <label for=\"messageText\">Mensaje</label>\r\n    <input type=\"text\" [(ngModel)]=\"content\" class=\"form-control\" id=\"messageText\">\r\n  </div>\r\n\r\n  <button class=\"btn btn-success\" (click)=\"onSubmit()\" [disabled]=\"content.trim().length == 0\">Enviar</button>\r\n  <p>\r\n    {{result}}\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rdf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/rdf.service */ "./src/app/services/rdf.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message */ "./src/app/messages/message.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(rdf, router) {
        var _this = this;
        this.rdf = rdf;
        this.router = router;
        this.content = '';
        this.showMessages = function () { return __awaiter(_this, void 0, void 0, function () {
            var me_1, selectedContact, urlSelectedContact_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.contact != null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.rdf.getMe()];
                    case 1:
                        me_1 = _a.sent();
                        selectedContact = this.contact.url;
                        urlSelectedContact_1 = selectedContact.split('/')[2];
                        return [4 /*yield*/, this.rdf.readConversation(urlSelectedContact_1).then(function (messages) {
                                var messagesFormatted = [];
                                messages.forEach(function (message) {
                                    var author = 'Yo';
                                    if (message.getSenderURL() !== me_1.uri) {
                                        author = urlSelectedContact_1.split('.')[0];
                                    }
                                    messagesFormatted.push(author + ' - ' + message.getDate().toLocaleString('es-ES') + ' - ' + message.getContent());
                                });
                                _this.messages = messagesFormatted;
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    }
    MessagesComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var me, message, selectedContact, urlSelectedContact;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.contact != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.rdf.getMe()];
                    case 1:
                        me = _a.sent();
                        if (me == null) {
                            this.router.navigateByUrl('/login');
                        }
                        else {
                            message = new _message__WEBPACK_IMPORTED_MODULE_3__["Message"]();
                            message.setSenderURL(me.uri);
                            message.setContent(this.content.replace(';', ','));
                            this.content = '';
                            selectedContact = this.contact.url;
                            urlSelectedContact = selectedContact.split('/')[2];
                            message.setRecipientURL(urlSelectedContact);
                            this.rdf.addMessage(message).then(function () {
                                _this.result = 'Se ha enviado con éxito';
                                _this.delay(2000).then(function () {
                                    _this.result = '';
                                    _this.showMessages();
                                });
                            }, function (err) {
                                _this.result = 'Error en el envío';
                            });
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        this.result = 'Debes seleccionar un contacto primero';
                        return [4 /*yield*/, this.delay(1000)];
                    case 3:
                        _a.sent();
                        this.result = '';
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MessagesComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    MessagesComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                setInterval(this.showMessages, 2000);
                return [2 /*return*/];
            });
        });
    };
    MessagesComponent.prototype.selectConversation = function (contact) {
        this.contact = contact;
        this.showMessages();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('result'),
        __metadata("design:type", String)
    ], MessagesComponent.prototype, "result", void 0);
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mensajes',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_rdf_service__WEBPACK_IMPORTED_MODULE_1__["RdfService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registration {\r\n  text-align: center;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.registration .header-bar {\r\n  margin: 0px;\r\n  height: 44px;\r\n  width: calc(100% + 16px);\r\n  background-color: #3D6DEB;\r\n  color: #fff;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.registration .header-bar p {\r\n  text-align: center;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  letter-spacing: 1px;\r\n  line-height: 15px;\r\n}\r\n\r\n.registration .header-text {\r\n  margin-top:92px;\r\n  width: 360px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  font-size: 14px;\r\n  color: #666;\r\n}\r\n\r\n.registration .header-text a {\r\n  color: #666;\r\n  font-size: 12px;\r\n}\r\n\r\n.registration .provider-card-container {\r\n  margin-top: 28px;\r\n}\r\n\r\n.registration .provider-card {\r\n  height: 140px;\r\n  width: 320px;\r\n  border: 1px solid #DAE0E6;\r\n  border-radius: 2px;\r\n  background-color: #fff;\r\n  margin: 10px;\r\n  display: inline-block;\r\n  box-shadow: #DAE0E6 1px 1px 6px;\r\n}\r\n\r\n.registration .provider-card .provider-logo {\r\n  height: 44px;\r\n  width: 44px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 16px;\r\n}\r\n\r\n.registration .provider-card h2 {\r\n  color: #656E75;\r\n  font-size: 18px;\r\n  margin-top: -2px;\r\n  letter-spacing: 0.9px;\r\n  line-height: 24px;\r\n}\r\n\r\n.registration .provider-card p {\r\n  color: #656E75;\r\n  font-size: 12px;\r\n  line-height: 16px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztBQUNUOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdHJhdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnJlZ2lzdHJhdGlvbiAuaGVhZGVyLWJhciB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAxNnB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Q2REVCO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLnJlZ2lzdHJhdGlvbiAuaGVhZGVyLWJhciBwIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ucmVnaXN0cmF0aW9uIC5oZWFkZXItdGV4dCB7XHJcbiAgbWFyZ2luLXRvcDo5MnB4O1xyXG4gIHdpZHRoOiAzNjBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG59XHJcblxyXG4ucmVnaXN0cmF0aW9uIC5oZWFkZXItdGV4dCBhIHtcclxuICBjb2xvcjogIzY2NjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5yZWdpc3RyYXRpb24gLnByb3ZpZGVyLWNhcmQtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAyOHB4O1xyXG59XHJcblxyXG4ucmVnaXN0cmF0aW9uIC5wcm92aWRlci1jYXJkIHtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG4gIHdpZHRoOiAzMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjREFFMEU2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm94LXNoYWRvdzogI0RBRTBFNiAxcHggMXB4IDZweDtcclxufVxyXG5cclxuLnJlZ2lzdHJhdGlvbiAucHJvdmlkZXItY2FyZCAucHJvdmlkZXItbG9nbyB7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIHdpZHRoOiA0NHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4ucmVnaXN0cmF0aW9uIC5wcm92aWRlci1jYXJkIGgyIHtcclxuICBjb2xvcjogIzY1NkU3NTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLXRvcDogLTJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC45cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbiAucHJvdmlkZXItY2FyZCBwIHtcclxuICBjb2xvcjogIzY1NkU3NTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registration\">\r\n  <!-- Header Bar -->\r\n  <div class=\"header-bar\">\r\n    <p>Select Solid Identity Provider</p>\r\n  </div>\r\n\r\n  <!-- Header Text -->\r\n  <div class=\"header-text\">\r\n    <p>\r\n      With a Solid Identity your personal data is stored securely in a POD. You control who has access to it.\r\n    </p>\r\n    <a href=\"https://solid.mit.edu\" target=\"_blank\">\r\n      Learn more about Solid IDs and PODs\r\n    </a>\r\n  </div>\r\n\r\n  <!-- Provider cards -->\r\n  <div class=\"provider-card-container\">\r\n    <div class=\"provider-card\" *ngFor=\"let provider of availableProviders\">\r\n      <img [src]=\"provider.image\" class=\"provider-logo\">\r\n      <h2>{{ provider.name }}</h2>\r\n      <p>{{ provider.desc }}</p>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/solid.auth.service */ "./src/app/services/solid.auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth) {
        this.auth = auth;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.availableProviders = this.auth.getIdentityProviders();
        this.availableProviders = this.availableProviders.filter(function (idp) { return idp.providerLoginUrl !== null; });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_solid_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth.guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _solid_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solid.auth.service */ "./src/app/services/solid.auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var isLoggedIn = localStorage.getItem('solid-auth-client') ? true : false;
        if (!isLoggedIn) {
            this.router.navigateByUrl('/login');
        }
        return isLoggedIn; /* this.auth.session.pipe(
          take(1),
          map(session => !!session),
          tap(loggedIn => {
            if (!loggedIn) {
              return this.router.navigate(['/']);
            }
          })
        );*/
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_solid_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/folders-manager.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/folders-manager.service.ts ***!
  \*****************************************************/
/*! exports provided: FoldersManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldersManagerService", function() { return FoldersManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rdflib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rdflib */ "./node_modules/rdflib/lib/index.js");
/* harmony import */ var rdflib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rdflib__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var folderType = 'folder';
var FoldersManagerService = /** @class */ (function () {
    function FoldersManagerService() {
        var _this = this;
        this.getStats = function (graph, subjectName) {
            var subjectNode = rdflib__WEBPACK_IMPORTED_MODULE_1__["sym"](subjectName);
            var mod = rdflib__WEBPACK_IMPORTED_MODULE_1__["sym"]('http://purl.org/dc/terms/modified');
            var size = rdflib__WEBPACK_IMPORTED_MODULE_1__["sym"]('http://www.w3.org/ns/posix/stat#size');
            var mtime = rdflib__WEBPACK_IMPORTED_MODULE_1__["sym"]('http://www.w3.org/ns/posix/stat#mtime');
            var modified = graph.any(subjectNode, mod, undefined);
            if (typeof (modified) === undefined) {
                throw new /** @class */ (function () {
                    function class_1() {
                    }
                    return class_1;
                }());
            }
            else {
                modified = modified.value;
            }
            return {
                modified: modified,
                size: graph.any(subjectNode, size, undefined).value,
                mtime: graph.any(subjectNode, mtime, undefined).value,
            };
        };
        /**
         * @param {$rdf.IndexedFormula} graph a $rdf.graph() database instance
         * @param {string} url location of the folder
         * @returns {string} content mime-type of a file, If it's a folder, return 'folder', 'unknown' for not sure
         */
        this.getFileType = function (graph, url) {
            var folderNode = rdflib__WEBPACK_IMPORTED_MODULE_1__["sym"](url);
            var isAnInstanceOfClass = rdflib__WEBPACK_IMPORTED_MODULE_1__["sym"]('http://www.w3.org/1999/02/22-rdf-syntax-ns#type');
            var types = graph.each(folderNode, isAnInstanceOfClass, undefined);
            for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
                var type = types_1[_i];
                var contentType = type.value;
                if (contentType.match('ldp#BasicContainer')) {
                    return folderType;
                }
                if (contentType.match('http://www.w3.org/ns/iana/media-types/')) {
                    return contentType.replace('http://www.w3.org/ns/iana/media-types/', '').replace('#Resource', '');
                }
            }
            return 'unknown';
        };
        this.getFolderItems = function (graph, subj) {
            var contains = { folders: [], files: [] };
            var itemsTmp = graph.each(rdflib__WEBPACK_IMPORTED_MODULE_1__["sym"](subj), rdflib__WEBPACK_IMPORTED_MODULE_1__["sym"]('http://www.w3.org/ns/ldp#contains'), undefined);
            // self.log("Got "+itemsTmp.length+" items")
            for (var i = 0; i < itemsTmp.length; i++) {
                var item = itemsTmp[i];
                var newItem = {};
                newItem.type = _this.getFileType(graph, item.value);
                var stats = _this.getStats(graph, item.value);
                newItem.modified = stats.modified;
                newItem.size = stats.size;
                newItem.mtime = stats.mtime;
                newItem.label = decodeURIComponent(item.value).replace(/.*\//, '');
                if (newItem.type === folderType) {
                    item.value = item.value.replace(/[/]+/g, '/');
                    item.value = item.value.replace(/https:/, 'https:/');
                    var name_1 = item.value.replace(/\/$/, '');
                    newItem.name = name_1.replace(/.*\//, '');
                    newItem.url = item.value;
                    contains.folders.push(newItem);
                }
                else {
                    newItem.url = item.value;
                    newItem.name = item.value.replace(/.*\//, '');
                    contains.files.push(newItem);
                }
            }
            return contains;
        };
        /**
         * @param {$rdf.IndexedFormula} graph a $rdf.graph() database instance
         * @param {string} url location of the folder
         * @param {string} content raw content of the folder's RDF (turtle) representation,
         * @returns {Object} FolderData
         */
        this.processFolder = function (graph, url, content) {
            var items = _this.getFolderItems(graph, url);
            var stats = _this.getStats(graph, url);
            var fullName = url.replace(/\/$/, '');
            var name = fullName.replace(/.*\//, '');
            var parent = fullName.replace(name, '');
            return {
                type: folderType,
                name: name,
                url: url,
                modified: stats.modified,
                size: stats.size,
                mtime: stats.mtime,
                parent: parent,
                content: content,
                folders: items.folders,
                files: items.files,
            };
        };
        this.guessFileType = function (url) {
            var ext = url.replace(/.*\./, '');
            if (ext.match(/\/$/)) {
                return folderType;
            }
            if (ext.match(/(md|markdown)/)) {
                return 'text/markdown';
            }
            if (ext.match(/html/)) {
                return 'text/html';
            }
            if (ext.match(/xml/)) {
                return 'text/xml';
            }
            if (ext.match(/ttl/)) {
                return 'text/turtle';
            }
            if (ext.match(/n3/)) {
                return 'text/n3';
            }
            if (ext.match(/rq/)) {
                return 'application/sparql';
            }
            if (ext.match(/css/)) {
                return 'text/css';
            }
            if (ext.match(/txt/)) {
                return 'text/plain';
            }
            if (ext.match(/json/)) {
                return 'application/json';
            }
            if (ext.match(/js/)) {
                return 'application/javascript';
            }
            if (ext.match(/(png|gif|jpeg|tif)/)) {
                return 'image';
            }
            if (ext.match(/(mp3|aif|ogg)/)) {
                return 'audio';
            }
            if (ext.match(/(avi|mp4|mpeg)/)) {
                return 'video';
            }
            return 'text/turtle';
        };
        /**
         * @param {string} text RDF text that can be passed to $rdf.parse()
         * @param {*} content the request body
         * @param {string} contentType Content-Type of the request
         * @returns {$rdf.IndexedFormula} a $rdf.graph() database instance with parsed RDF
         */
        this.text2graph = function (text, url, contentType) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        contentType = contentType || _this.guessFileType(url);
                        var graph = rdflib__WEBPACK_IMPORTED_MODULE_1__["graph"]();
                        try {
                            rdflib__WEBPACK_IMPORTED_MODULE_1__["parse"](text, graph, url, contentType);
                            resolve(graph);
                        }
                        catch (err) {
                            reject(err);
                        }
                    })];
            });
        }); };
    }
    FoldersManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FoldersManagerService);
    return FoldersManagerService;
}());



/***/ }),

/***/ "./src/app/services/rdf.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/rdf.service.ts ***!
  \*****************************************/
/*! exports provided: RdfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RdfService", function() { return RdfService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _folders_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folders-manager.service */ "./src/app/services/folders-manager.service.ts");
/* harmony import */ var _messages_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../messages/message */ "./src/app/messages/message.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var VCARD = $rdf.Namespace('http://www.w3.org/2006/vcard/ns#');
var FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');
var SCHEMA = $rdf.Namespace('http://schema.org/Message');
var FolderName = 'dechat';
/**
 * A service layer for RDF data manipulation using rdflib.js
 * @see https://solid.inrupt.com/docs/manipulating-ld-with-rdflib
 */
var RdfService = /** @class */ (function () {
    function RdfService(toastr, foldersManager) {
        var _this = this;
        this.toastr = toastr;
        this.foldersManager = foldersManager;
        this.store = $rdf.graph();
        /**
         * A helper object that connects to the web, loads data, and saves it back. More powerful than using a simple
         * store object.
         * When you have a fetcher, then you also can ask the query engine to go fetch new linked data automatically
         * as your query makes its way across the web.
         * @see http://linkeddata.github.io/rdflib.js/doc/Fetcher.html
         */
        this.fetcher = $rdf.Fetcher;
        /**
         * The UpdateManager allows you to send small changes to the server to “patch” the data as your user changes data in
         * real time. It also allows you to subscribe to changes other people make to the same file, keeping track of
         * upstream and downstream changes, and signaling any conflict between them.
         * @see http://linkeddata.github.io/rdflib.js/doc/UpdateManager.html
         */
        this.updateManager = $rdf.UpdateManager;
        this.getMe = function () { return __awaiter(_this, void 0, void 0, function () {
            var session;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, solid.auth.currentSession(localStorage)];
                    case 1:
                        session = _a.sent();
                        return [2 /*return*/, session == null ? null : this.getPod(session.webId)];
                }
            });
        }); };
        this.getPod = function (url) {
            var store = new $rdf.IndexedFormula;
            return store.sym(url);
        };
        this.getContacts = function (me) { return __awaiter(_this, void 0, void 0, function () {
            var store, res, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        store = new $rdf.graph();
                        return [4 /*yield*/, solid.auth.fetch(me.uri)];
                    case 1:
                        res = _c.sent();
                        _b = (_a = $rdf).parse;
                        return [4 /*yield*/, res.text()];
                    case 2:
                        _b.apply(_a, [_c.sent(), store, me.doc().uri, 'text/turtle']);
                        return [2 /*return*/, store.match(me, FOAF('knows'))];
                }
            });
        }); };
        this.addContact = function (me, podUrl) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, insertions;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = console).log;
                        return [4 /*yield*/, solid.auth.fetch(me.uri)];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        insertions = [];
                        insertions.push($rdf.st(me, FOAF('knows'), this.getPod(podUrl), me.doc()));
                        this.updateManager.update([], insertions, function (response, success, message) {
                            if (success) {
                                console.log('Contact added success');
                            }
                            else {
                                console.error('Message: ' + message);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.readConversation = function (urlPodTo) { return __awaiter(_this, void 0, void 0, function () {
            var fileNameTo, fileNameMe, urlPodToComplete, urlMeDeChat, urlToDeChat, resMe, fileRawMe, resTo, fileRawTo, allMessages;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileNameTo = urlPodTo + '3.txt';
                        return [4 /*yield*/, this.getMe()];
                    case 1:
                        fileNameMe = (_a.sent()).value.split('/')[2] + '3.txt';
                        urlPodToComplete = 'https://' + urlPodTo + '/profile/card#me';
                        return [4 /*yield*/, this.getMe()];
                    case 2:
                        urlMeDeChat = (_a.sent()).value.split('/').slice(0, 3).join('/') + '/' + FolderName + '/' + fileNameTo;
                        urlToDeChat = urlPodToComplete.split('/').slice(0, 3).join('/') + '/' + FolderName + '/' + fileNameMe;
                        return [4 /*yield*/, solid.auth.fetch(urlMeDeChat)];
                    case 3:
                        resMe = _a.sent();
                        return [4 /*yield*/, resMe.text()];
                    case 4:
                        fileRawMe = _a.sent();
                        return [4 /*yield*/, solid.auth.fetch(urlToDeChat)];
                    case 5:
                        resTo = _a.sent();
                        return [4 /*yield*/, resTo.text()];
                    case 6:
                        fileRawTo = _a.sent();
                        allMessages = [];
                        return [4 /*yield*/, this.parseConversationFile(fileRawMe).then(function (parseMessageMe) {
                                _this.parseConversationFile(fileRawTo).then(function (parseMessagesTo) {
                                    allMessages.push.apply(allMessages, parseMessagesTo);
                                    allMessages.push.apply(allMessages, parseMessageMe);
                                    allMessages.sort(function (a, b) {
                                        return a.getDate().getTime() - b.getDate().getTime();
                                    });
                                    return allMessages;
                                });
                            })];
                    case 7:
                        _a.sent();
                        return [2 /*return*/, allMessages];
                }
            });
        }); };
        this.parseConversationFile = function (file) { return __awaiter(_this, void 0, void 0, function () {
            var rows, rowSliced, mensajes;
            return __generator(this, function (_a) {
                rows = file.split('\n');
                mensajes = [];
                rows.forEach(function (row) {
                    rowSliced = row.split(';');
                    if (rowSliced.length === 4) {
                        var message = new _messages_message__WEBPACK_IMPORTED_MODULE_3__["Message"]();
                        message.setSenderURL(rowSliced[0]);
                        message.setRecipientURL(rowSliced[1]);
                        message.setContent(rowSliced[3]);
                        message.setDate(new Date(rowSliced[2]));
                        mensajes.push(message);
                    }
                });
                return [2 /*return*/, mensajes];
            });
        }); };
        this.writeIntoConversationFile = function (urlPodTo, data) { return __awaiter(_this, void 0, void 0, function () {
            var fileName, url;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkFolder()];
                    case 1:
                        _a.sent();
                        fileName = urlPodTo + '3.txt';
                        return [4 /*yield*/, this.getMe()];
                    case 2:
                        url = (_a.sent()).value.split('/').slice(0, 3).join('/') + '/' + FolderName;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.readFile(url + '/' + fileName).then(function (res) {
                                    resolve();
                                    _this.updateFile(url, fileName, res + '\n' + data, null);
                                }, function (err) {
                                    _this.add(url, fileName, data, null);
                                    _this.writeIntoGrantFile(urlPodTo, fileName);
                                });
                            })];
                }
            });
        }); };
        this.writeIntoGrantFile = function (urlPodTo, fileName) { return __awaiter(_this, void 0, void 0, function () {
            var url, data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkFolder()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getMe()];
                    case 2:
                        url = (_a.sent()).value.split('/').slice(0, 3).join('/') + '/' + FolderName;
                        data = this.getGrantText(urlPodTo, url + '/' + fileName);
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.readFile(url + '/' + fileName + '.acl').then(function (res) {
                                    resolve();
                                    _this.updateFile(url, fileName + '.acl', data, null);
                                    _this.add(url, fileName + '.acl', data, null);
                                }, function (err) {
                                    _this.add(url, fileName + '.acl', data, null);
                                });
                            })];
                }
            });
        }); };
        this.addMessage = function (message) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.writeIntoConversationFile(message.getRecipientURL(), message.toString());
                return [2 /*return*/];
            });
        }); };
        this.getGrantText = function (urlPod, file) {
            return '@prefix : <#>. \n'
                + '@prefix c: </profile/card#>. \n'
                + '@prefix n0: <http://www.w3.org/ns/auth/acl#>. \n'
                + ':ControlReadWrite \n'
                + '\ta n0:Authorization; \n'
                + '\tn0:accessTo <' + file + '>; \n'
                + '\tn0:agent c:me; \n'
                + '\tn0:mode n0:Control, n0:Read, n0:Write. \n'
                + ':Read \n'
                + '\ta n0:Authorization; \n'
                + '\tn0:accessTo <' + file + '>; \n'
                + '\tn0:agent <https://' + urlPod + '/profile/card#me>; \n'
                + '\tn0:mode n0:Read.';
        };
        this.checkFolder = function () { return __awaiter(_this, void 0, void 0, function () {
            var doc, url;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getMe()];
                    case 1:
                        doc = (_a.sent()).value.split('/').slice(0, 3).join('/') + '/';
                        url = doc + FolderName;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.readFile(url).then(function (res) {
                                    resolve();
                                }, function (err) {
                                    _this.add(doc, FolderName, null, 'folder');
                                });
                            })];
                }
            });
        }); };
        this.listFolderContent = function (url) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (url.substr(-1) !== '/') {
                    url += '/';
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.fetch(url, null).then(function (folderRDF) {
                            _this.foldersManager.text2graph(folderRDF, url, 'text/turtle').then(function (graph) {
                                resolve(_this.foldersManager.processFolder(graph, url, folderRDF));
                            }, function (err) { return reject(err); });
                        }, function (err) { return reject(err); });
                    })];
            });
        }); };
        this.add = function (parentFolder, url, content, contentType) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var link = '<http://www.w3.org/ns/ldp#Resource>; rel="type"';
                        if (contentType === 'folder') {
                            link = '<http://www.w3.org/ns/ldp#BasicContainer>; rel="type"';
                            contentType = 'text/turtle';
                        }
                        var request = {
                            method: 'POST',
                            headers: { slug: url, link: link, 'Access-Control-Allow-Origin': '*' },
                            body: content
                        };
                        if (typeof (contentType) != null || typeof (window) != null) {
                            request.headers['Content-Type'] = contentType;
                        }
                        solid.auth.fetch(parentFolder, request).then(function (res) {
                            var location = res.headers.get('location');
                            var file = location.substr(location.lastIndexOf('/') + 1);
                            resolve(parentFolder + file);
                        }, function (err) {
                            reject(err);
                        });
                    })];
            });
        }); };
        this.remove = function (url) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.fetch(url, { method: 'DELETE' }).then(function (res) {
                            resolve(res);
                        }, function (err) {
                            resolve(err);
                        });
                    })];
            });
        }); };
        this.fetch = function (url, request) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        solid.auth.fetch(url, request).then(function (res) {
                            if (!res.ok) {
                                reject(res.status + ' (' + res.statusText + ') ' + url);
                            }
                            var type = (res.headers._headers)
                                ? res.headers._headers['content-type']
                                : '';
                            type = type.toString();
                            if (type.match(/(image|audio|video)/)) {
                                res.buffer().then(function (blob) {
                                    resolve(blob);
                                }, function (err) { return reject('buffer error ' + err); });
                            }
                            else if (res.text) {
                                res.text().then(function (text) {
                                    resolve(text);
                                }, function (err) { return reject('buffer error ' + err); });
                            }
                            else {
                                resolve(res);
                            }
                        }, function (err) {
                            reject('fetch errror ' + err + url);
                        });
                    })];
            });
        }); };
        this.updateFile = function (parentFolder, url, content, contentType) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.remove(parentFolder + '/' + url)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.add(parentFolder, url, content, contentType)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.readFile = function (url) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.fetch(url, null).then(function (result) {
                            resolve(result);
                        }, function (err) {
                            reject('fetch error ' + err);
                        });
                    })];
            });
        }); };
        /**
         * Fetches the session from Solid, and store results in localStorage
         */
        this.getSession = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, solid.auth.currentSession(localStorage)];
                    case 1:
                        _a.session = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Gets a node that matches the specified pattern using the VCARD onthology
         *
         * any() can take a subject and a predicate to find Any one person identified by the webId
         * that matches against the node/predicated
         *
         * @param {string} node VCARD predicate to apply to the $rdf.any()
         * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
         * @return {string} The value of the fetched node or an emtpty string
         * @see https://github.com/solid/solid-tutorial-rdflib.js
         */
        this.getValueFromVcard = function (node, webId) {
            return _this.getValueFromNamespace(node, VCARD, webId);
        };
        /**
         * Gets a node that matches the specified pattern using the FOAF onthology
         * @param {string} node FOAF predicate to apply to the $rdf.any()
         * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
         * @return {string} The value of the fetched node or an emtpty string
         */
        this.getValueFromFoaf = function (node, webId) {
            return _this.getValueFromNamespace(node, FOAF, webId);
        };
        this.transformDataForm = function (form, me, doc) {
            var insertions = [];
            var deletions = [];
            var fields = Object.keys(form.value);
            var oldProfileData = JSON.parse(localStorage.getItem('oldProfileData')) || {};
            // We need to split out into three code paths here:
            // 1. There is an old value and a new value. This is the update path
            // 2. There is no old value and a new value. This is the insert path
            // 3. There is an old value and no new value. Ths is the delete path
            // These are separate codepaths because the system needs to know what to do in each case
            fields.map(function (field) {
                var predicate = VCARD(_this.getFieldName(field));
                var subject = _this.getUriForField(field, me);
                var why = doc;
                var fieldValue = _this.getFieldValue(form, field);
                var oldFieldValue = _this.getOldFieldValue(field, oldProfileData);
                // if there's no existing home phone number or email address, we need to add one, then add the link for hasTelephone or hasEmail
                if (!oldFieldValue && fieldValue && (field === 'phone' || field === 'email')) {
                    _this.addNewLinkedField(field, insertions, predicate, fieldValue, why, me);
                }
                else {
                    //Add a value to be updated
                    if (oldProfileData[field] && form.value[field] && !form.controls[field].pristine) {
                        deletions.push($rdf.st(subject, predicate, oldFieldValue, why));
                        insertions.push($rdf.st(subject, predicate, fieldValue, why));
                    }
                    //Add a value to be deleted
                    else if (oldProfileData[field] && !form.value[field] && !form.controls[field].pristine) {
                        deletions.push($rdf.st(subject, predicate, oldFieldValue, why));
                    }
                    //Add a value to be inserted
                    else if (!oldProfileData[field] && form.value[field] && !form.controls[field].pristine) {
                        insertions.push($rdf.st(subject, predicate, fieldValue, why));
                    }
                }
            });
            return {
                insertions: insertions,
                deletions: deletions
            };
        };
        this.updateProfile = function (form) { return __awaiter(_this, void 0, void 0, function () {
            var me, doc, data;
            var _this = this;
            return __generator(this, function (_a) {
                me = $rdf.sym(this.session.webId);
                doc = $rdf.NamedNode.fromValue(this.session.webId.split('#')[0]);
                data = this.transformDataForm(form, me, doc);
                //Update existing values
                if (data.insertions.length > 0 || data.deletions.length > 0) {
                    this.updateManager.update(data.deletions, data.insertions, function (response, success, message) {
                        if (success) {
                            _this.toastr.success('Your Solid profile has been successfully updated', 'Success!');
                            form.form.markAsPristine();
                            form.form.markAsTouched();
                        }
                        else {
                            _this.toastr.error('Message: ' + message, 'An error has occurred');
                        }
                    });
                }
                return [2 /*return*/];
            });
        }); };
        this.getAddress = function () {
            var linkedUri = _this.getValueFromVcard('hasAddress');
            if (linkedUri) {
                return {
                    locality: _this.getValueFromVcard('locality', linkedUri),
                    country_name: _this.getValueFromVcard('country-name', linkedUri),
                    region: _this.getValueFromVcard('region', linkedUri),
                    street: _this.getValueFromVcard('street-address', linkedUri),
                };
            }
            return {};
        };
        //Function to get email. This returns only the first email, which is temporary
        this.getEmail = function () {
            var linkedUri = _this.getValueFromVcard('hasEmail');
            if (linkedUri) {
                return _this.getValueFromVcard('value', linkedUri).split('mailto:')[1];
            }
            return '';
        };
        //Function to get phone number. This returns only the first phone number, which is temporary. It also ignores the type.
        this.getPhone = function () {
            var linkedUri = _this.getValueFromVcard('hasTelephone');
            if (linkedUri) {
                return _this.getValueFromVcard('value', linkedUri).split('tel:+')[1];
            }
        };
        this.getProfile = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.session) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getSession()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.fetcher.load(this.session.webId)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, {
                                fn: this.getValueFromVcard('fn'),
                                company: this.getValueFromVcard('organization-name'),
                                phone: this.getPhone(),
                                role: this.getValueFromVcard('role'),
                                image: this.getValueFromVcard('hasPhoto'),
                                address: this.getAddress(),
                                email: this.getEmail(),
                            }];
                    case 4:
                        error_1 = _a.sent();
                        console.log("Error fetching data: " + error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        var fetcherOptions = {};
        this.fetcher = new $rdf.Fetcher(this.store, fetcherOptions);
        this.updateManager = new $rdf.UpdateManager(this.store);
        this.getSession();
    }
    RdfService.prototype.addNewLinkedField = function (field, insertions, predicate, fieldValue, why, me) {
        //Generate a new ID. This id can be anything but needs to be unique.
        var newId = field + ':' + Date.now();
        //Get a new subject, using the new ID
        var newSubject = $rdf.sym(this.session.webId.split('#')[0] + '#' + newId);
        //Set new predicate, based on email or phone fields
        var newPredicate = field === 'phone' ? $rdf.sym(VCARD('hasTelephone')) : $rdf.sym(VCARD('hasEmail'));
        //Add new phone or email to the pod
        insertions.push($rdf.st(newSubject, predicate, fieldValue, why));
        //Set the type (defaults to Home/Personal for now) and insert it into the pod as well
        //Todo: Make this dynamic
        var type = field === 'phone' ? $rdf.literal('Home') : $rdf.literal('Personal');
        insertions.push($rdf.st(newSubject, VCARD('type'), type, why));
        //Add a link in #me to the email/phone number (by id)
        insertions.push($rdf.st(me, newPredicate, newSubject, why));
    };
    RdfService.prototype.getUriForField = function (field, me) {
        var uriString;
        var uri;
        switch (field) {
            case 'phone':
                uriString = this.getValueFromVcard('hasTelephone');
                if (uriString) {
                    uri = $rdf.sym(uriString);
                }
                break;
            case 'email':
                uriString = this.getValueFromVcard('hasEmail');
                if (uriString) {
                    uri = $rdf.sym(uriString);
                }
                break;
            default:
                uri = me;
                break;
        }
        return uri;
    };
    /**
     * Extracts the value of a field of a NgForm and converts it to a $rdf.NamedNode
     * @param {NgForm} form
     * @param {string} field The name of the field that is going to be extracted from the form
     * @return {RdfNamedNode}
     */
    RdfService.prototype.getFieldValue = function (form, field) {
        var fieldValue;
        if (!form.value[field]) {
            return;
        }
        switch (field) {
            case 'phone':
                fieldValue = $rdf.sym('tel:+' + form.value[field]);
                break;
            case 'email':
                fieldValue = $rdf.sym('mailto:' + form.value[field]);
                break;
            default:
                fieldValue = form.value[field];
                break;
        }
        return fieldValue;
    };
    RdfService.prototype.getOldFieldValue = function (field, oldProfile) {
        var oldValue;
        if (!oldProfile || !oldProfile[field]) {
            return;
        }
        switch (field) {
            case 'phone':
                oldValue = $rdf.sym('tel:+' + oldProfile[field]);
                break;
            case 'email':
                oldValue = $rdf.sym('mailto:' + oldProfile[field]);
                break;
            default:
                oldValue = oldProfile[field];
                break;
        }
        return oldValue;
    };
    RdfService.prototype.getFieldName = function (field) {
        switch (field) {
            case 'company':
                return 'organization-name';
            case 'phone':
            case 'email':
                return 'value';
            default:
                return field;
        }
    };
    /**
     * Gets any resource that matches the node, using the provided Namespace
     * @param {string} node The name of the predicate to be applied using the provided Namespace
     * @param {$rdf.namespace} namespace The RDF Namespace
     * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
     */
    RdfService.prototype.getValueFromNamespace = function (node, namespace, webId) {
        var store = this.store.any($rdf.sym(webId || this.session.webId), namespace(node));
        if (store) {
            return store.value;
        }
        return '';
    };
    RdfService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _folders_manager_service__WEBPACK_IMPORTED_MODULE_2__["FoldersManagerService"]])
    ], RdfService);
    return RdfService;
}());



/***/ }),

/***/ "./src/app/services/solid.auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/solid.auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _rdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rdf.service */ "./src/app/services/rdf.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var AuthService = /** @class */ (function () {
    function AuthService(router, rdf) {
        var _this = this;
        this.router = router;
        this.rdf = rdf;
        this.fechInit = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/sparql-update',
            },
            body: '',
        };
        /*
         * This will check if current session is active to avoid security problems
        */
        this.isSessionActive = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.session = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(solid.auth.currentSession());
                return [2 /*return*/];
            });
        }); };
        /**
         * Alternative login-popup function. This will open a popup that will allow you to choose an identity provider
         * without leaving the current page
         * This is recommended if you don't want to leave the current workflow.
         */
        this.solidLoginPopup = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, solid.auth.popupLogin({ popupUri: './login-popup' })];
                    case 1:
                        _a.sent();
                        // Check if session is valid to avoid redirect issues
                        return [4 /*yield*/, this.isSessionActive()];
                    case 2:
                        // Check if session is valid to avoid redirect issues
                        _a.sent();
                        // popupLogin success redirect to profile
                        this.router.navigate(['/card']);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log("Error: " + error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        /*
        * Signs out of Solid in this app, by calling the logout function and clearing the localStorage token
        */
        this.solidSignOut = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, solid.auth.logout()];
                    case 1:
                        _a.sent();
                        // Remove localStorage
                        localStorage.removeItem('solid-auth-client');
                        // Redirect to login page
                        this.router.navigate(['/']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log("Error: " + error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.saveOldUserData = function (profile) {
            if (!localStorage.getItem('oldProfileData')) {
                localStorage.setItem('oldProfileData', JSON.stringify(profile));
            }
        };
        this.getOldUserData = function () {
            return JSON.parse(localStorage.getItem('oldProfileData'));
        };
        /*
        *  Make a call to the solid auth endpoint. It requires an identity provider url, which here is coming from the dropdown, which
        *  is populated by the getIdentityProviders() function call. It currently requires a callback url and a storage option or else
        *  the call will fail.
        */
        this.solidLogin = function (idp) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, solid.auth.login(idp, {
                            callbackUri: window.location.href + "card",
                            storage: localStorage,
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.isSessionActive();
    }
    /**
     * Function to get providers. This is to mimic the future provider registry
     *
     * @return {SolidProvider[]} A list of SolidProviders
     */
    AuthService.prototype.getIdentityProviders = function () {
        var inruptProvider = {
            name: 'Inrupt',
            image: '/assets/images/Inrupt.png',
            loginUrl: 'https://inrupt.net/auth',
            desc: 'Inrupt Inc. provider'
        };
        var solidCommunityProvider = {
            name: 'Solid Community',
            image: '/assets/images/Solid.png',
            loginUrl: 'https://solid.community',
            desc: 'A provider maintained by the Solid Community'
        };
        var otherProvider = {
            name: 'Other (Enter WebID)',
            image: '/assets/images/Generic.png',
            loginUrl: null,
            desc: 'Generic provider'
        };
        return [
            inruptProvider,
            solidCommunityProvider,
            otherProvider
        ];
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _rdf_service__WEBPACK_IMPORTED_MODULE_3__["RdfService"]])
    ], AuthService);
    return AuthService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\labra\asw\1819\dechat_es2b\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!***********************!*\
  !*** vertx (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map