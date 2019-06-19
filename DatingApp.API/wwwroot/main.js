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

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
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
    function AuthGuard(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.alertify.error('Unauthorized');
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/prevent-unsaved-changes.guard.ts":
/*!**********************************************************!*\
  !*** ./src/app/_guards/prevent-unsaved-changes.guard.ts ***!
  \**********************************************************/
/*! exports provided: PreventUnsavedChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventUnsavedChanges", function() { return PreventUnsavedChanges; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PreventUnsavedChanges = /** @class */ (function () {
    function PreventUnsavedChanges() {
    }
    PreventUnsavedChanges.prototype.canDeactivate = function (component) {
        if (component.editForm.dirty) {
            return confirm('Are you sure you want to continue? Any unsaved changes will be lost.');
        }
        return true;
    };
    PreventUnsavedChanges = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PreventUnsavedChanges);
    return PreventUnsavedChanges;
}());



/***/ }),

/***/ "./src/app/_models/pagination.ts":
/*!***************************************!*\
  !*** ./src/app/_models/pagination.ts ***!
  \***************************************/
/*! exports provided: PaginatedResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedResult", function() { return PaginatedResult; });
var PaginatedResult = /** @class */ (function () {
    function PaginatedResult() {
    }
    return PaginatedResult;
}());



/***/ }),

/***/ "./src/app/_resolvers/lists.resolver.ts":
/*!**********************************************!*\
  !*** ./src/app/_resolvers/lists.resolver.ts ***!
  \**********************************************/
/*! exports provided: ListsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsResolver", function() { return ListsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListsResolver = /** @class */ (function () {
    function ListsResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.likesParam = 'Likers';
    }
    ListsResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUsers(this.pageNumber, this.pageSize, null, this.likesParam).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.alertify.error('Problem with retrieving data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    ListsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], ListsResolver);
    return ListsResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/member-detail.resolver.ts":
/*!******************************************************!*\
  !*** ./src/app/_resolvers/member-detail.resolver.ts ***!
  \******************************************************/
/*! exports provided: MemberDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailResolver", function() { return MemberDetailResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberDetailResolver = /** @class */ (function () {
    function MemberDetailResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
    }
    MemberDetailResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(route.params['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/members']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    MemberDetailResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], MemberDetailResolver);
    return MemberDetailResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/member-edit.resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/_resolvers/member-edit.resolver.ts ***!
  \****************************************************/
/*! exports provided: MemberEditResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberEditResolver", function() { return MemberEditResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MemberEditResolver = /** @class */ (function () {
    function MemberEditResolver(userService, router, alertify, authService) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.authService = authService;
    }
    MemberEditResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving your data');
            _this.router.navigate(['/members']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    MemberEditResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], MemberEditResolver);
    return MemberEditResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/member-list.resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/_resolvers/member-list.resolver.ts ***!
  \****************************************************/
/*! exports provided: MemberListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListResolver", function() { return MemberListResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberListResolver = /** @class */ (function () {
    function MemberListResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.pageNumber = 1;
        this.pageSize = 5;
    }
    MemberListResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUsers(this.pageNumber, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.alertify.error('Problem with retrieving data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    MemberListResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], MemberListResolver);
    return MemberListResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/messages.resolver.ts":
/*!*************************************************!*\
  !*** ./src/app/_resolvers/messages.resolver.ts ***!
  \*************************************************/
/*! exports provided: MessagesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesResolver", function() { return MessagesResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MessagesResolver = /** @class */ (function () {
    function MessagesResolver(userService, router, alertify, authService) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.authService = authService;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.messageContainer = 'Unread';
    }
    MessagesResolver.prototype.resolve = function (route) {
        var _this = this;
        var userId = this.authService.decodedToken.nameid;
        return this.userService.getMessages(userId, this.pageNumber, this.pageSize, this.messageContainer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.alertify.error('Problem with retrieving messages');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    MessagesResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], MessagesResolver);
    return MessagesResolver;
}());



/***/ }),

/***/ "./src/app/_services/alertify.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/alertify.service.ts ***!
  \***********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
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

var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else { }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'auth/';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        this.photoUrl = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('../../assets/user.png');
        this.currentPhotoUrl = this.photoUrl.asObservable();
    }
    AuthService.prototype.changeMemberPhoto = function (photoUrl) {
        this.photoUrl.next(photoUrl);
    };
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseUrl + 'login', model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                localStorage.setItem('user', JSON.stringify(user.user));
                _this.decodedToken = _this.jwtHelper.decodeToken(user.token);
                _this.currentUser = user.user;
                _this.changeMemberPhoto(_this.currentUser.photoUrl);
            }
        }));
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(this.baseUrl + 'register', user);
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/error.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/_services/error.interceptor.ts ***!
  \************************************************/
/*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function() { return ErrorInterceptorProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (error.status === 401) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.statusText);
                }
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    console.error(applicationError);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(applicationError);
                }
                var serverError = error.error.errors;
                var modelStateErrors = '';
                if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modelStateErrors += serverError[key] + '/n';
                        }
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(modelStateErrors || serverError || 'Server Error');
            }
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/pagination */ "./src/app/_models/pagination.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'users/';
    }
    UserService.prototype.getUsers = function (page, itemsPerPage, userParams, likesParam) {
        var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatedResult"]();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        if (userParams != null) {
            params = params.append('minAge', userParams.minAge);
            params = params.append('maxAge', userParams.maxAge);
            params = params.append('gender', userParams.gender);
            params = params.append('orderBy', userParams.orderBy);
        }
        if (likesParam === 'Likers') {
            params = params.append('likers', 'true');
        }
        if (likesParam === 'Likees') {
            params = params.append('likees', 'true');
        }
        return this.http.get(this.baseUrl, { observe: 'response', params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.baseUrl + id);
    };
    UserService.prototype.updateUser = function (id, user) {
        return this.http.put(this.baseUrl + id, user);
    };
    UserService.prototype.setMainPhoto = function (userId, id) {
        return this.http.post(this.baseUrl + userId + '/photos/' + id + '/setMain', {});
    };
    UserService.prototype.deletePhoto = function (userId, id) {
        return this.http.delete(this.baseUrl + userId + '/photos/' + id);
    };
    UserService.prototype.sendLike = function (userId, recipientId) {
        return this.http.post(this.baseUrl + userId + '/like/' + recipientId, {});
    };
    UserService.prototype.getMessages = function (userId, page, itemsPerPage, messageContainer) {
        var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatedResult"]();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('MessageContainer', messageContainer);
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        return this.http.get(this.baseUrl + userId + '/messages', { observe: 'response', params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') !== null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    };
    UserService.prototype.getMessageThread = function (userId, recipientId) {
        return this.http.get(this.baseUrl + userId + '/messages/thread/' + recipientId);
    };
    UserService.prototype.sendMessage = function (userId, message) {
        return this.http.post(this.baseUrl + userId + '/messages/', message);
    };
    UserService.prototype.deleteMessage = function (messageId, userId) {
        return this.http.post(this.baseUrl + userId + '/messages/' + messageId, {});
    };
    UserService.prototype.markAsRead = function (userId, messageId) {
        this.http.post(this.baseUrl + userId + '/messages/' + messageId + '/read', {}).subscribe();
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'DatingApp-SPA';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        var user = JSON.parse(localStorage.getItem('user'));
        if (token) {
            this.authService.decodedToken = this.jwtHelper.decodeToken(token);
        }
        if (user) {
            this.authService.currentUser = user;
            this.authService.changeMemberPhoto(user.photoUrl);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_services/error.interceptor */ "./src/app/_services/error.interceptor.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./members/member-list/member-list.component */ "./src/app/members/member-list/member-list.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/lists/lists.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./members/member-card/member-card.component */ "./src/app/members/member-card/member-card.component.ts");
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ "./src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_resolvers/member-detail.resolver */ "./src/app/_resolvers/member-detail.resolver.ts");
/* harmony import */ var _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_resolvers/member-list.resolver */ "./src/app/_resolvers/member-list.resolver.ts");
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ "./src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_resolvers/member-edit.resolver */ "./src/app/_resolvers/member-edit.resolver.ts");
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_guards/prevent-unsaved-changes.guard */ "./src/app/_guards/prevent-unsaved-changes.guard.ts");
/* harmony import */ var _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./members/photo-editor/photo-editor.component */ "./src/app/members/photo-editor/photo-editor.component.ts");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var _resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./_resolvers/lists.resolver */ "./src/app/_resolvers/lists.resolver.ts");
/* harmony import */ var _resolvers_messages_resolver__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./_resolvers/messages.resolver */ "./src/app/_resolvers/messages.resolver.ts");
/* harmony import */ var _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./members/member-messages/member-messages.component */ "./src/app/members/member-messages/member-messages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_16__["MemberListComponent"],
                _lists_lists_component__WEBPACK_IMPORTED_MODULE_17__["ListsComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_18__["MessagesComponent"],
                _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_22__["MemberCardComponent"],
                _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_23__["MemberDetailComponent"],
                _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_26__["MemberEditComponent"],
                _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_29__["PhotoEditorComponent"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_30__["TimeAgoPipe"],
                _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_33__["MemberMessagesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_gallery__WEBPACK_IMPORTED_MODULE_7__["NgxGalleryModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_19__["appRoutes"]),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:5000'],
                        blacklistedRoutes: ['localhost:5000/api/auth']
                    }
                })
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
                _services_error_interceptor__WEBPACK_IMPORTED_MODULE_14__["ErrorInterceptorProvider"],
                _services_alertify_service__WEBPACK_IMPORTED_MODULE_15__["AlertifyService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"],
                _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_24__["MemberDetailResolver"],
                _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_25__["MemberListResolver"],
                _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_27__["MemberEditResolver"],
                _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_28__["PreventUnsavedChanges"],
                _resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_31__["ListsResolver"],
                _resolvers_messages_resolver__WEBPACK_IMPORTED_MODULE_32__["MessagesResolver"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\r\n  <div *ngIf=\"!registerMode\" style=\"text-align: center\">\r\n    <h1>Find your match</h1>\r\n    <p class=\"lead\">Come on in to view your matches... All you need to do is sign up!</p>\r\n    <div class=\"text-center\">\r\n      <button class=\"btn btn-primary btn-lg mr-2\" (click)=\"registerToggle()\">Register</button>\r\n      <button class=\"btn btn-info btn-lg\">Learn more</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"registerMode\" class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-4\">\r\n        <app-register (cancelRegister)=\"cancelRegisterMode($event)\"></app-register>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    // currentUser: User = null;
    function HomeComponent(http) {
        this.http = http;
        this.registerMode = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // const currentUser = this.authService.currentUser;
        // console.log(currentUser);
        // if (currentUser) {
        //   this.currentUser = currentUser;
        // } else {
        //   this.currentUser = null;
        // }
    };
    HomeComponent.prototype.registerToggle = function () {
        this.registerMode = true;
    };
    HomeComponent.prototype.cancelRegisterMode = function (registerMode) {
        this.registerMode = registerMode;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/lists/lists.component.css":
/*!*******************************************!*\
  !*** ./src/app/lists/lists.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lists/lists.component.html":
/*!********************************************!*\
  !*** ./src/app/lists/lists.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center mt-3\">\n    <h2>{{likesParam === 'Likers' ? 'Members who like me' : 'Members who I\\'ve Liked'}} : {{pagination.totalItems}}</h2>\n  </div>\n\n<div class=\"container mt-3\">\n\n  <div class=\"row\">\n    <div class=\"btn-group\">\n      <button class=\"btn btn-primary\" [(ngModel)]=\"likesParam\" btnRadio=\"Likers\" (click)=\"loadUsers()\">Members who like me</button>\n      <button class=\"btn btn-primary\" [(ngModel)]=\"likesParam\" btnRadio=\"Likees\" (click)=\"loadUsers()\">Members who I like</button>\n    </div>\n  </div>\n\n  <br>\n\n  <div class=\"row\">\n    <div *ngFor=\"let user of users\" class=\"col-sm-6 col-md-4 col-lg-4 col-xl-2\">\n      <app-member-card [user]=\"user\"></app-member-card>\n    </div>\n  </div>\n\n\n\n</div>\n\n<div class=\"d-flex justify-content-center\">\n  <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" [(ngModel)]=\"pagination.currentPage\"\n    (pageChanged)=\"pageChanged($event)\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"\n    >\n\n  </pagination>\n</div>"

/***/ }),

/***/ "./src/app/lists/lists.component.ts":
/*!******************************************!*\
  !*** ./src/app/lists/lists.component.ts ***!
  \******************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListsComponent = /** @class */ (function () {
    function ListsComponent(authService, userService, alertify, route) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
    }
    ListsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.users = data['users'].result;
            _this.pagination = data['users'].pagination;
        });
        this.likesParam = 'Likers';
    };
    ListsComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadUsers();
    };
    ListsComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, null, this.likesParam).subscribe(function (response) {
            _this.users = response.result;
            _this.pagination = response.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lists',
            template: __webpack_require__(/*! ./lists.component.html */ "./src/app/lists/lists.component.html"),
            styles: [__webpack_require__(/*! ./lists.component.css */ "./src/app/lists/lists.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "./src/app/members/member-card/member-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card:hover img {\r\n    -webkit-transform: scale(1.2, 1.2);\r\n            transform: scale(1.2, 1.2);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n    opacity: 0.7;\r\n}\r\n\r\n.card img {\r\n    -webkit-transform: scale(1, 1);\r\n            transform: scale(1, 1);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n.card-img-wrapper {\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.member-icons {\r\n    position: absolute;\r\n    bottom: -30%;\r\n    left: 0;\r\n    right: 0;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    opacity: 0;\r\n}\r\n\r\n.card-img-wrapper:hover .member-icons {\r\n    bottom: 0;\r\n    opacity: 1;\r\n}\r\n\r\n.animate {\r\n    transition: all 0.3s ease-in-out;\r\n}"

/***/ }),

/***/ "./src/app/members/member-card/member-card.component.html":
/*!****************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\n  <div class=\"card-img-wrapper\">\n    <img class=\"card-img-top\" src=\"{{user.photoUrl || defaultUserImg}}\" alt=\"{{user.knownAs}}\">\n    <ul class=\"list-inline member-icons animate text-center\">\n      <li class=\"list-inline-item\">\n        <button class=\"btn btn-primary btn-sm\" [routerLink]=\"['/members/', user.id]\" >\n          <i class=\"fa fa-user\"></i>\n        </button>\n      </li>\n      <li class=\"list-inline-item\">\n        <button class=\"btn btn-primary btn-sm\" (click)=\"sendLike(user.id)\">\n          <i class=\"fa fa-heart\"></i>\n        </button>\n      </li>\n      <li class=\"list-inline-item\">\n        <button class=\"btn btn-primary btn-sm\" >\n          <i class=\"fa fa-envelope\" [routerLink]=\"['/members/', user.id]\" [queryParams]=\"{tab: 3}\"></i>\n        </button>\n      </li>\n    </ul>\n  </div>\n  <div class=\"card-body p-1\">\n    <h6 class=\"card-title text-center mb-1\">\n      <i class=\"fa fa-user\">{{user.knownAs}}, {{user.age}}</i>\n    </h6>\n    <p class=\"card-text text-muted text-center\">{{user.city}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/members/member-card/member-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberCardComponent", function() { return MemberCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberCardComponent = /** @class */ (function () {
    function MemberCardComponent(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.defaultUserImg = '../../../assets/user.png';
    }
    MemberCardComponent.prototype.ngOnInit = function () {
    };
    MemberCardComponent.prototype.sendLike = function (recipientId) {
        var _this = this;
        var userId = this.authService.decodedToken.nameid;
        this.userService.sendLike(userId, recipientId).subscribe(function () {
            _this.alertify.success('You have liked ' + _this.user.knownAs);
        }, function (error) {
            _this.alertify.error('Already liked this user');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MemberCardComponent.prototype, "user", void 0);
    MemberCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-card',
            template: __webpack_require__(/*! ./member-card.component.html */ "./src/app/members/member-card/member-card.component.html"),
            styles: [__webpack_require__(/*! ./member-card.component.css */ "./src/app/members/member-card/member-card.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], MemberCardComponent);
    return MemberCardComponent;
}());



/***/ }),

/***/ "./src/app/members/member-detail/member-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail {\r\n    margin: 25px;\r\n    width: 85%;\r\n}\r\n\r\n.card-body {\r\n    padding: 0 25px;\r\n}\r\n\r\n.card-footer {\r\n    padding: 10px 15px;\r\n    border-top: none;\r\n}"

/***/ }),

/***/ "./src/app/members/member-detail/member-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\n  <div class=\"row\">\n      <h1>{{user.knownAs}}'s Profile</h1>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <img\n          src=\"{{ user.photoUrl || defaultUserImg}}\"\n          alt=\"{{ user.knownAs }}\"\n          class=\"card-img-top img-thumbnail\"\n        />\n        <div class=\"card-body\">\n          <div>\n            <strong>Location:</strong>\n            <p>{{ user.city }}, {{ user.country }}</p>\n          </div>\n          <div>\n            <strong>Age:</strong>\n            <p>{{ user.age }}</p>\n          </div>\n          <div>\n            <strong>Last Active:</strong>\n            <p>{{ user.lastActive | timeAgo}}</p>\n          </div>\n          <div>\n            <strong>Member since:</strong>\n            <p>{{ user.created | date}}</p>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"btn-group d-flex\">\n              <button class=\"btn btn-primary w-100\" (click)=\"sendLike(user.id)\">Like</button>\n              <button class=\"btn btn-success w-100\" (click)=\"selectTab(3)\">Message</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"tab-panel\">\n        <tabset class=\"member-tabset\" #memberTabs>\n          <tab heading=\"About {{ user?.knownAs }}\">\n            <h4>Description</h4>\n            <p>{{ user.introduction }}</p>\n            <h4>Looking For</h4>\n            <p>{{ user.lookingFor }}</p>\n          </tab>\n          <tab heading=\"Interests\">\n            <h4>Interests</h4>\n            <p>{{ user.interests }}</p>\n          </tab>\n          <tab heading=\"Photos\">\n            <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n          </tab>\n          <tab heading=\"Messages\">\n            <app-member-messages [recipientId]=\"user.id\"></app-member-messages>\n          </tab>\n        </tabset>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/members/member-detail/member-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: MemberDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailComponent", function() { return MemberDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MemberDetailComponent = /** @class */ (function () {
    function MemberDetailComponent(userService, alertify, route, authService) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
        this.authService = authService;
        this.defaultUserImg = '../../../assets/user.png';
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data['user'];
        });
        this.route.queryParams.subscribe(function (params) {
            var selectedTab = params['tab'];
            _this.memberTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
        });
        this.galleryOptions = [
            {
                width: '500px',
                height: '500px',
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_4__["NgxGalleryAnimation"].Slide,
                preview: false
            }
        ];
        this.galleryImages = this.getImages();
    };
    MemberDetailComponent.prototype.getImages = function () {
        var imageUrls = [];
        for (var i = 0; i < this.user.photos.length; i++) {
            imageUrls.push({
                small: this.user.photos[i].url,
                medium: this.user.photos[i].url,
                big: this.user.photos[i].url,
                description: this.user.photos[i].description
            });
            console.log(imageUrls);
        }
        return imageUrls;
    };
    MemberDetailComponent.prototype.sendLike = function (recipientId) {
        var _this = this;
        var userId = this.authService.decodedToken.nameid;
        this.userService.sendLike(userId, recipientId).subscribe(function () {
            _this.alertify.success('You have liked ' + _this.user.knownAs);
        }, function (error) {
            _this.alertify.error('Already liked this user');
        });
    };
    MemberDetailComponent.prototype.selectTab = function (tabId) {
        this.memberTabs.tabs[tabId].active = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('memberTabs'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsetComponent"])
    ], MemberDetailComponent.prototype, "memberTabs", void 0);
    MemberDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-detail',
            template: __webpack_require__(/*! ./member-detail.component.html */ "./src/app/members/member-detail/member-detail.component.html"),
            styles: [__webpack_require__(/*! ./member-detail.component.css */ "./src/app/members/member-detail/member-detail.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], MemberDetailComponent);
    return MemberDetailComponent;
}());



/***/ }),

/***/ "./src/app/members/member-edit/member-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail {\r\n    margin: 25px;\r\n    width: 85%;\r\n}\r\n\r\n.card-body {\r\n    padding: 0 25px;\r\n}\r\n\r\n.card-footer {\r\n    padding: 10px 15px;\r\n    border-top: none;\r\n}"

/***/ }),

/***/ "./src/app/members/member-edit/member-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <h1>Your Profile</h1>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"alert alert-info\" *ngIf=\"editForm.dirty\">\n        <strong>Information:</strong> You have made changes. Any unsaved changes will be lost.\n      </div>\n    </div>\n  </div>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <div class=\"card\">\n          <img\n            src=\"{{ photoUrl || defaultUserImg}}\"\n            alt=\"{{ user.knownAs }}\"\n            class=\"card-img-top img-thumbnail\"\n          />\n          <div class=\"card-body\">\n            <div>\n              <strong>Location:</strong>\n              <p>{{ user.city }}, {{ user.country }}</p>\n            </div>\n            <div>\n              <strong>Age:</strong>\n              <p>{{ user.age }}</p>\n            </div>\n            <div>\n              <strong>Last Active:</strong>\n              <p>{{ user.lastActive | timeAgo}}</p>\n            </div>\n            <div>\n              <strong>Member since:</strong>\n              <p>{{ user.created | date}}</p>\n            </div>\n            <div class=\"card-footer\">\n              <button [disabled]=\"!editForm.dirty\" class=\"btn btn-success btn-block\" form=\"editForm\">Save</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-8\">\n        <div class=\"tab-panel\">\n          <tabset class=\"member-tabset\">\n            <tab heading=\"Edit Profile\">\n              <form #editForm=\"ngForm\" (ngSubmit)=\"updateUser()\" id=\"editForm\">\n                <h4>Description</h4>\n                <textarea name=\"introduction\" rows=\"6\" class=\"form-control\"\n                  [(ngModel)]=\"user.introduction\"></textarea>\n                <h4>Looking For</h4>\n                <textarea name=\"lookingFor\" rows=\"6\" class=\"form-control\"\n                  [(ngModel)]=\"user.lookingFor\"></textarea>\n                <h4>Interests</h4>\n                <textarea name=\"interests\" rows=\"6\" class=\"form-control\"\n                  [(ngModel)]=\"user.interests\"></textarea>\n                <h4>Location Details:</h4>\n                <div class=\"form-inline\">\n                  <label for=\"city\">City</label>\n                  <input type=\"text\" name=\"city\" class=\"form-control\" [(ngModel)]=\"user.city\">\n                  <label for=\"country\">Country</label>\n                  <input type=\"text\" name=\"country\" class=\"form-control\" [(ngModel)]=\"user.country\">\n                </div>\n              </form>\n            </tab>\n            <tab heading=\"Edit Photos\">\n              <app-photo-editor [photos]=\"user.photos\" (getMemberPhotoChange)=\"updateMainPhoto($event)\"></app-photo-editor>\n            </tab>\n          </tabset>\n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/members/member-edit/member-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberEditComponent", function() { return MemberEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberEditComponent = /** @class */ (function () {
    function MemberEditComponent(userService, route, alertify, authService) {
        this.userService = userService;
        this.route = route;
        this.alertify = alertify;
        this.authService = authService;
        this.defaultUserImg = '../../../assets/user.png';
    }
    MemberEditComponent.prototype.unloadNotification = function ($event) {
        if (this.editForm.dirty) {
            $event.returnValue = true;
        }
    };
    MemberEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data['user'];
        });
        this.authService.currentPhotoUrl.subscribe(function (photoUrl) { return _this.photoUrl = photoUrl; });
    };
    MemberEditComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(function (next) {
            _this.alertify.success('Profile updated successfully');
            _this.editForm.reset(_this.user);
        }, function (error) {
            _this.alertify.error('Profile update failure');
        });
    };
    MemberEditComponent.prototype.updateMainPhoto = function (photoUrl) {
        this.user.photoUrl = photoUrl;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], MemberEditComponent.prototype, "editForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MemberEditComponent.prototype, "unloadNotification", null);
    MemberEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-edit',
            template: __webpack_require__(/*! ./member-edit.component.html */ "./src/app/members/member-edit/member-edit.component.html"),
            styles: [__webpack_require__(/*! ./member-edit.component.css */ "./src/app/members/member-edit/member-edit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], MemberEditComponent);
    return MemberEditComponent;
}());



/***/ }),

/***/ "./src/app/members/member-list/member-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/members/member-list/member-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center mt-3\">\n  <h2>Your matches - {{pagination.totalItems}} found</h2>\n</div>\n\n<div class=\"container mt-3\">\n\n  <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"loadUsers()\" novalidate>\n    <div class=\"form-group\">\n      <label for=\"minAge\">Age From</label>\n      <input type=\"number\" class=\"form-control ml-1\" style=\"width: 70px\" id=\"minAge\" name=\"minAge\" [(ngModel)]=\"userParams.minAge\">\n    </div>\n  \n    <div class=\"form-group px-2\">\n      <label for=\"maxAge\">Age To</label>\n      <input type=\"number\" class=\"form-control ml-1\" style=\"width: 70px\" id=\"maxAge\" name=\"maxAge\" [(ngModel)]=\"userParams.maxAge\">\n    </div>\n  \n    <div class=\"form-group px-2\">\n      <label for=\"gender\">Show: </label>\n      <select class=\"form-control ml-1\" style=\"width: 130px\" id=\"gender\" name=\"gender\" [(ngModel)]=\"userParams.gender\">\n        <option *ngFor=\"let gender of genderList\" [value]=\"gender.value\">\n          {{gender.display}}\n        </option>\n      </select>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-left:10px\">Apply Filters</button>\n    <button type=\"button\" class=\"btn btn-info\" style=\"margin-left:10px\" (click)=\"resetFilter()\">Reset Filter</button>\n    \n    <div class=\"col\">\n      <div class=\"btn-group float-right\">\n        <button type=\"button\" name=\"orderBy\" class=\"btn btn-primary\" [(ngModel)]=\"userParams.orderBy\" btnRadio=\"lastActive\" (click)=\"loadUsers()\">Last Active</button>\n        <button type=\"button\" name=\"orderBy\" class=\"btn btn-primary\" [(ngModel)]=\"userParams.orderBy\" btnRadio=\"created\" (click)=\"loadUsers()\">Newest Members</button>\n      </div>\n    </div>\n\n  </form>\n  <br>\n\n  <div class=\"row\">\n    <div *ngFor=\"let user of users\" class=\"col-lg-2 col-md-3 col-sm-6\">\n      <app-member-card [user]=\"user\"></app-member-card>\n    </div>\n  </div>\n</div>\n\n<div class=\"d-flex justify-content-center\">\n    <pagination\n      [boundaryLinks]=\"true\"\n      [totalItems]=\"pagination.totalItems\"\n      [itemsPerPage]=\"pagination.itemsPerPage\"\n      [(ngModel)]=\"pagination.currentPage\"\n      (pageChanged)=\"pageChanged($event)\"\n\n      previousText=\"&lsaquo;\"\n      nextText=\"&rsaquo;\"\n      firstText=\"&laquo;\"\n      lastText=\"&raquo;\"\n      >\n\n</pagination>\n</div>"

/***/ }),

/***/ "./src/app/members/member-list/member-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListComponent", function() { return MemberListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberListComponent = /** @class */ (function () {
    function MemberListComponent(userService, alertify, route) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.genderList = [{ value: 'male', display: 'Male' }, { value: 'female', display: 'Female' }];
        this.userParams = {};
    }
    MemberListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.users = data['users'].result;
            _this.pagination = data['users'].pagination;
        });
        this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 65;
        this.userParams.orderBy = 'lastActive';
    };
    MemberListComponent.prototype.resetFilter = function () {
        this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 65;
        this.loadUsers();
    };
    MemberListComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadUsers();
    };
    MemberListComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams).subscribe(function (response) {
            _this.users = response.result;
            _this.pagination = response.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-list',
            template: __webpack_require__(/*! ./member-list.component.html */ "./src/app/members/member-list/member-list.component.html"),
            styles: [__webpack_require__(/*! ./member-list.component.css */ "./src/app/members/member-list/member-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MemberListComponent);
    return MemberListComponent;
}());



/***/ }),

/***/ "./src/app/members/member-messages/member-messages.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/members/member-messages/member-messages.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    border: none;\r\n}\r\n\r\n.chat {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.chat li {\r\n    margin-bottom: 10px;\r\n    padding-bottom: 10px;\r\n    border-bottom: 1px dotted #B3A9A9;\r\n}\r\n\r\n.rounded-circle {\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.card-body {\r\n    overflow-y: scroll;\r\n    height: 515px;\r\n}"

/***/ }),

/***/ "./src/app/members/member-messages/member-messages.component.html":
/*!************************************************************************!*\
  !*** ./src/app/members/member-messages/member-messages.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <div *ngIf=\"messages?.length === 0\">\n      <p>No messages yet... say Hi by using the message box below</p>\n    </div>\n    <ul class=\"chat\">\n      <li *ngFor=\"let message of messages\">\n        <!-- to them -->\n        <div *ngIf=\"message.senderId == recipientId\">\n          <span class=\"chat-img float-left\">\n            <img src=\"{{message.senderPhotoUrl}}\" alt=\"{{message.senderKnownAs}}\" class=\"rounded-circle\">\n          </span>\n          <div class=\"chat-body\">\n            <div class=\"header\">\n              <strong class=\"primary-font\">{{message.senderKnownAs}}</strong>\n              <small class=\"text-muted float-right\">\n                <span class=\"fa fa-clock-o\">{{message.messageSent | timeAgo}}</span>\n              </small>\n            </div>\n            <p>{{message.content}}</p>\n          </div>\n        </div>\n        <!-- to me -->\n        <div *ngIf=\"message.senderId != recipientId\">\n            <span class=\"chat-img float-right\">\n              <img src=\"{{message.senderPhotoUrl}}\" alt=\"{{message.senderKnownAs}}\" class=\"rounded-circle\">\n            </span>\n            <div class=\"chat-body\">\n              <div class=\"header\">\n                <small class=\"text-muted\">\n                  <span class=\"fa fa-clock-o\">{{message.messageSent | timeAgo}}</span>\n                  <span *ngIf=\"!message.isRead\" class=\"text-danger\">(unread)</span>\n                  <span *ngIf=\"message.isRead\" class=\"text-success\">(Read {{message.dateRead | timeAgo}})</span>\n                </small>\n                <strong class=\"primary-font float-right\">{{message.senderKnownAs}}</strong>\n              </div>\n              <p>{{message.content}}</p>\n            </div>\n          </div>\n      </li>\n    </ul>\n  </div>\n  <div class=\"card-footer\">\n    <form #messageForm=\"ngForm\" (ngSubmit)=\"messageForm.valid && sendMessage()\">\n      <div class=\"input-group\">\n        <input\n          type=\"text\"\n          [(ngModel)]=\"newMessage.content\"\n          name=\"content\"\n          required\n          class=\"form-control input-sm\"\n          placeholder=\"send a private message\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-primary\" [disabled]=\"!messageForm.valid\">Send</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/members/member-messages/member-messages.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/members/member-messages/member-messages.component.ts ***!
  \**********************************************************************/
/*! exports provided: MemberMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberMessagesComponent", function() { return MemberMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MemberMessagesComponent = /** @class */ (function () {
    function MemberMessagesComponent(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.newMessage = {};
    }
    MemberMessagesComponent.prototype.ngOnInit = function () {
        this.loadMessages();
    };
    MemberMessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        var userId = +this.authService.decodedToken.nameid;
        this.userService.getMessageThread(userId, this.recipientId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (messages) {
            for (var i = 0; i < messages.length; i++) {
                if (!messages[i].isRead && messages[i].recipientId === userId) {
                    _this.userService.markAsRead(userId, messages[i].id);
                }
            }
        }))
            .subscribe(function (messages) {
            _this.messages = messages;
        }, function (error) {
            _this.alertify.error('Message loading failed');
        });
    };
    MemberMessagesComponent.prototype.sendMessage = function () {
        var _this = this;
        var userId = this.authService.decodedToken.nameid;
        this.newMessage.recipientId = this.recipientId;
        this.userService.sendMessage(userId, this.newMessage).subscribe(function (message) {
            _this.messages.unshift(message);
            _this.newMessage.content = '';
        }, function (error) {
            _this.alertify.error('Message sending failed');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MemberMessagesComponent.prototype, "recipientId", void 0);
    MemberMessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-messages',
            template: __webpack_require__(/*! ./member-messages.component.html */ "./src/app/members/member-messages/member-messages.component.html"),
            styles: [__webpack_require__(/*! ./member-messages.component.css */ "./src/app/members/member-messages/member-messages.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], MemberMessagesComponent);
    return MemberMessagesComponent;
}());



/***/ }),

/***/ "./src/app/members/photo-editor/photo-editor.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/members/photo-editor/photo-editor.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.img-thumbnail {\r\n    height: 100px;\r\n    min-width: 100px !important;\r\n    margin-bottom: 2px;\r\n}\r\n\r\n.nv-file-over {\r\n    border: dotted 3px red;\r\n}\r\n\r\ninput[type=file] {\r\n    color: transparent;\r\n}"

/***/ }),

/***/ "./src/app/members/photo-editor/photo-editor.component.html":
/*!******************************************************************!*\
  !*** ./src/app/members/photo-editor/photo-editor.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-2\" *ngFor=\"let photo of photos\">\n    <img src=\"{{photo.url}}\" alt=\"\" class=\"img-thumbnail p-1\">\n    <div class=\"text-center\">\n      <button class=\"btn btn-sm mr-1\" type=\"button\" (click)=\"setMainPhoto(photo)\" [disabled]=\"photo.isMain\" [ngClass]=\"photo.isMain ? 'btn-success active' : 'btn-secondary'\">Main</button>\n      <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"deletePhoto(photo)\" [disabled]=\"photo.isMain\">\n        <i class=\"fa fa-trash-o\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n\n<div class=\"row mt-3\">\n \n    <div class=\"col-md-3\">\n\n        <h3>Add Photos</h3>\n\n        <div ng2FileDrop\n             [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n             (fileOver)=\"fileOverBase($event)\"\n             [uploader]=\"uploader\"\n             class=\"card bg-faded p-3 text-center mb-3 my-drop-zone\">\n             <i class=\"fa fa-upload fa-3x\"></i>\n            Drop Photos Here\n        </div>\n\n        Multiple\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\n\n\n        Single\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n    </div>\n\n    <div class=\"col-md-9\" style=\"margin-bottom: 40px\" *ngIf=\"uploader?.queue?.length\">\n\n        <h3>Upload queue</h3>\n        <p>Queue length: {{ uploader?.queue?.length }}</p>\n\n        <table class=\"table\">\n            <thead>\n            <tr>\n                <th width=\"50%\">Name</th>\n                <th>Size</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of uploader.queue\">\n                <td><strong>{{ item?.file?.name }}</strong></td>\n                <td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n            </tr>\n            </tbody>\n        </table>\n\n        <div>\n            <div>\n                Queue progress:\n                <div class=\"progress mb-4\">\n                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                </div>\n            </div>\n            <button type=\"button\" class=\"btn btn-success btn-s\"\n                    (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                <span class=\"fa fa-upload\"></span> Upload\n            </button>\n            <button type=\"button\" class=\"btn btn-warning btn-s\"\n                    (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                <span class=\"fa fa-ban\"></span> Cancel\n            </button>\n            <button type=\"button\" class=\"btn btn-danger btn-s\"\n                    (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                <span class=\"fa fa-trash\"></span> Remove\n            </button>\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/members/photo-editor/photo-editor.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/members/photo-editor/photo-editor.component.ts ***!
  \****************************************************************/
/*! exports provided: PhotoEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoEditorComponent", function() { return PhotoEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PhotoEditorComponent = /** @class */ (function () {
    function PhotoEditorComponent(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.getMemberPhotoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // photoUrl
        this.hasBaseDropZoneOver = false;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    PhotoEditorComponent.prototype.ngOnInit = function () {
        this.initializeUploader();
    };
    PhotoEditorComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    PhotoEditorComponent.prototype.initializeUploader = function () {
        var _this = this;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({
            url: this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/photos',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
        };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (response) {
                var res = JSON.parse(response);
                var photo = {
                    id: res.id,
                    url: res.url,
                    dateAdded: res.dateAdded,
                    description: res.description,
                    isMain: res.isMain
                };
                _this.photos.push(photo);
                if (photo.isMain) {
                    _this.authService.changeMemberPhoto(photo.url);
                    _this.authService.currentUser.photoUrl = photo.url;
                    localStorage.setItem('user', JSON.stringify(_this.authService.currentUser));
                }
            }
        };
    };
    PhotoEditorComponent.prototype.setMainPhoto = function (photo) {
        var _this = this;
        this.userService.setMainPhoto(this.authService.decodedToken.nameid, photo.id).subscribe(function () {
            _this.currentMainPhoto = _this.photos.filter(function (p) { return p.isMain === true; })[0];
            _this.currentMainPhoto.isMain = false;
            photo.isMain = true;
            _this.authService.changeMemberPhoto(photo.url);
            _this.authService.currentUser.photoUrl = photo.url;
            localStorage.setItem('user', JSON.stringify(_this.authService.currentUser));
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PhotoEditorComponent.prototype.deletePhoto = function (photo) {
        var _this = this;
        this.alertify.confirm('Are you sure you want to delete this photo?', function () {
            _this.userService.deletePhoto(_this.authService.decodedToken.nameid, photo.id).subscribe(function () {
                _this.photos.splice(_this.photos.findIndex(function (p) { return p.id === photo.id; }), 1);
                _this.alertify.success('Photo has been deleted');
            }, function (error) {
                _this.alertify.error(error);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PhotoEditorComponent.prototype, "photos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PhotoEditorComponent.prototype, "getMemberPhotoChange", void 0);
    PhotoEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo-editor',
            template: __webpack_require__(/*! ./photo-editor.component.html */ "./src/app/members/photo-editor/photo-editor.component.html"),
            styles: [__webpack_require__(/*! ./photo-editor.component.css */ "./src/app/members/photo-editor/photo-editor.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]])
    ], PhotoEditorComponent);
    return PhotoEditorComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    margin-top: 15px;\r\n}\r\n\r\n.img-circle {\r\n    max-height: 50px;\r\n}\r\n\r\ntd {\r\n    vertical-align: middle;\r\n}"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <div class=\"row\">\n    <div class=\"btn-group\">\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Unread\" (click)=\"loadMessages()\">\n        <i class=\"fa fa-envelope\"></i> Unread\n      </button>\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Inbox\" (click)=\"loadMessages()\">\n        <i class=\"fa fa-envelope-open\"></i> Inbox\n      </button>\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Outbox\" (click)=\"loadMessages()\">\n        <i class=\"fa fa-paper-plane\"></i> Outbox\n      </button>\n    </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"messages.length == 0\">\n    <h3>No messages</h3>\n  </div>\n\n  <div class=\"row\" *ngIf=\"messages.length > 0\">\n    <table class=\"table table-hover\" style=\"cursor: pointer\">\n      <tr>\n        <th style=\"width: 40%\">Message</th>\n        <th style=\"width: 20%\">From / To</th>\n        <th style=\"width: 20%\">Sent / Received</th>\n        <th style=\"width: 20%\"></th>\n      </tr>\n      <tr *ngFor=\"let message of messages\" [routerLink]=\"['/members', \n        messageContainer == 'Outbox' ? message.recipientId : message.senderId]\" [queryParams]=\"{tab: 3}\">\n        <td>{{message.content}}</td>\n        <td>\n          <div *ngIf=\"messageContainer != 'Outbox'\">\n                <img src={{message?.senderPhotoUrl}} class=\"img-circle rounded-circle mr-1\">\n                <strong>{{message.senderKnownAs}}</strong>\n          </div>\n          <div *ngIf=\"messageContainer == 'Outbox'\">\n                <img src={{message?.recipientPhotoUrl}} class=\"img-circle rounded-circle mr-1\">\n                <strong>{{message.recipientKnownAs}}</strong>\n          </div>\n        </td>\n        <td>{{message.messageSent | timeAgo}}</td>\n        <td>\n          <button class=\"btn btn-danger\"(click)=\"$event.stopPropagation()\" (click)=\"deleteMessage(message.id)\">Delete</button>\n        </td>\n      </tr>\n    </table>\n\n  </div>\n\n</div>\n\n<div class=\"d-flex justify-content-center\">\n  <pagination [boundaryLinks]=\"true\" \n              [totalItems]=\"pagination.totalItems\"\n              [itemsPerPage]=\"pagination.itemsPerPage\"\n              [(ngModel)]=\"pagination.currentPage\"\n              (pageChanged)=\"pageChanged($event)\"\n            previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n</pagination>\n</div>"

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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(userService, authService, alertify, route) {
        this.userService = userService;
        this.authService = authService;
        this.alertify = alertify;
        this.route = route;
        this.messageContainer = 'Unread';
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.messages = data['messages'].result;
            _this.pagination = data['messages'].pagination;
        });
    };
    MessagesComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadMessages();
    };
    MessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        var userId = this.authService.decodedToken.nameid;
        this.userService.getMessages(userId, this.pagination.currentPage, this.pagination.itemsPerPage, this.messageContainer).subscribe(function (response) {
            _this.messages = response.result;
            _this.pagination = response.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MessagesComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        this.alertify.confirm('Are you sure you want to delete this message?', function () {
            var userId = _this.authService.decodedToken.nameid;
            _this.userService.deleteMessage(messageId, userId).subscribe(function () {
                _this.messages.splice(_this.messages.findIndex(function (m) { return m.id === messageId; }), 1);
                _this.alertify.success('Message has been deleted');
            }, function (error) {
                _this.alertify.error('Failed to delete message');
            });
        });
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-toggle, .dropdown-item {\r\n    cursor: pointer;\r\n}\r\n\r\nimg {\r\n    max-height: 50px;\r\n    border: 2px solid white;\r\n    display: inline;\r\n}"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Sally</a>\r\n  \r\n    <ul *ngIf=\"loggedIn()\" class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/members']\">Matches</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/lists']\" >Lists</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/messages']\" >Messages</a>\r\n      </li>\r\n    </ul>\r\n  \r\n    <div *ngIf=\"loggedIn()\" class=\"dropdown\" dropdown>\r\n      <span class=\"mr-1\">\r\n        <img src=\"{{photoUrl || defaultUserImg}}\" alt=\"\">\r\n      </span>\r\n      <a class=\"dropdown-toggle text-light\" dropdownToggle>\r\n        Welcome {{authService.decodedToken?.unique_name | titlecase}}\r\n      </a>\r\n      <div class=\"dropdown-menu mt-3\" *dropdownMenu>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['/member/edit']\" ><i class=\"fa fa-user\"></i>Edit Profile</a>\r\n        <div class=\"dropdown-divider\"></div>\r\n        <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fa fa-sign-out\"></i>Logout</a>\r\n      </div>\r\n    </div>\r\n  \r\n    <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"form-inline my-2 my-lg-0\" (ngSubmit)=\"login()\">\r\n      <input class=\"form-control mr-sm-2\" type=\"text\" name=\"username\" placeholder=\"Username\" required [(ngModel)]=\"model.username\">\r\n      <input class=\"form-control mr-sm-2\" type=\"password\" name=\"password\" placeholder=\"Password\" requred [(ngModel)]=\"model.password\">\r\n      <button [disabled]=\"!loginForm.valid\" class=\"btn btn-success my-2 my-sm-0\" type=\"submit\">Login</button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        this.model = {};
        this.defaultUserImg = '../../assets/user.png';
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.currentPhotoUrl.subscribe(function (photoUrl) { return _this.photoUrl = photoUrl; });
    };
    NavComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (next) {
            _this.alertify.success('Logged in Successfully');
        }, function (error) {
            _this.alertify.error('Login failure');
        }, function () {
            _this.router.navigate(['/members']);
        });
    };
    NavComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.authService.decodedToken = null;
        this.authService.currentUser = null;
        this.alertify.message('Logged out');
        this.router.navigate(['home']);
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\r\n  <h2 class=\"text-center text-primary\">Sign Up</h2>\r\n  <hr />\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\" style=\"margin-right:10px\">I am a: </label>\r\n    <label class=\"radio-inline\">\r\n      <input\r\n        class=\"mr-3\"\r\n        type=\"radio\"\r\n        value=\"male\"\r\n        formControlName=\"gender\"\r\n      />Male\r\n    </label>\r\n    <label class=\"radio-inline ml-3\">\r\n      <input\r\n        class=\"mr-3\"\r\n        type=\"radio\"\r\n        value=\"female\"\r\n        formControlName=\"gender\"\r\n      />Female\r\n    </label>\r\n    <!-- <label class=\"radio-inline ml-3\">\r\n      <input\r\n        class=\"mr-3\"\r\n        type=\"radio\"\r\n        value=\"other\"\r\n        formControlName=\"gender\"\r\n      />Other\r\n    </label> -->\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input\r\n      type=\"text\"\r\n      [ngClass]=\"{\r\n        'is-invalid':\r\n          registerForm.get('username').errors &&\r\n          registerForm.get('username').touched\r\n      }\"\r\n      class=\"form-control\"\r\n      formControlName=\"username\"\r\n      placeholder=\"Username\"\r\n    />\r\n    <div class=\"invalid-feedback\">Please choose a valid username</div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input\r\n      [ngClass]=\"{\r\n        'is-invalid':\r\n          registerForm.get('knownAs').errors &&\r\n          registerForm.get('knownAs').touched\r\n      }\"\r\n      class=\"form-control\"\r\n      placeholder=\"Known as\"\r\n      formControlName=\"knownAs\"\r\n    />\r\n    <div\r\n      class=\"invalid-feedback\"\r\n      *ngIf=\"\r\n        registerForm.get('knownAs').touched &&\r\n        registerForm.get('knownAs').hasError('required')\r\n      \"\r\n    >\r\n      Known as is required\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input\r\n      [ngClass]=\"{\r\n        'is-invalid':\r\n          registerForm.get('dateOfBirth').errors &&\r\n          registerForm.get('dateOfBirth').touched\r\n      }\"\r\n      class=\"form-control\"\r\n      placeholder=\"Date of Birth\"\r\n      formControlName=\"dateOfBirth\"\r\n      type=\"text\"\r\n      bsDatepicker\r\n      [bsConfig]=\"BsConfig\"\r\n    />\r\n    <div\r\n      class=\"invalid-feedback\"\r\n      *ngIf=\"\r\n        registerForm.get('dateOfBirth').touched &&\r\n        registerForm.get('dateOfBirth').hasError('required')\r\n      \"\r\n    >\r\n      Date of Birth is required\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input\r\n      [ngClass]=\"{\r\n        'is-invalid':\r\n          registerForm.get('city').errors && registerForm.get('city').touched\r\n      }\"\r\n      class=\"form-control\"\r\n      placeholder=\"City\"\r\n      formControlName=\"city\"\r\n    />\r\n    <div\r\n      class=\"invalid-feedback\"\r\n      *ngIf=\"\r\n        registerForm.get('city').touched &&\r\n        registerForm.get('city').hasError('required')\r\n      \"\r\n    >\r\n      City is required\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input\r\n      [ngClass]=\"{\r\n        'is-invalid':\r\n          registerForm.get('country').errors &&\r\n          registerForm.get('country').touched\r\n      }\"\r\n      class=\"form-control\"\r\n      placeholder=\"Country\"\r\n      formControlName=\"country\"\r\n    />\r\n    <div\r\n      class=\"invalid-feedback\"\r\n      *ngIf=\"\r\n        registerForm.get('country').touched &&\r\n        registerForm.get('country').hasError('required')\r\n      \"\r\n    >\r\n      Country is required\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input\r\n      type=\"password\"\r\n      [ngClass]=\"{\r\n        'is-invalid':\r\n          registerForm.get('password').errors &&\r\n          registerForm.get('password').touched\r\n      }\"\r\n      class=\"form-control\"\r\n      formControlName=\"password\"\r\n      placeholder=\"Password\"\r\n    />\r\n    <div\r\n      class=\"invalid-feedback\"\r\n      *ngIf=\"\r\n        registerForm.get('password').hasError('required') &&\r\n        registerForm.get('password').touched\r\n      \"\r\n    >\r\n      Password is Required\r\n    </div>\r\n    <div\r\n      class=\"invalid-feedback\"\r\n      *ngIf=\"\r\n        registerForm.get('password').hasError('minlength') &&\r\n        registerForm.get('password').touched\r\n      \"\r\n    >\r\n      Password must be at least 4 characters\r\n    </div>\r\n    <div\r\n      class=\"invalid-feedback\"\r\n      *ngIf=\"\r\n        registerForm.get('password').hasError('maxlength') &&\r\n        registerForm.get('password').touched\r\n      \"\r\n    >\r\n      Password cannot exceed 8 characters\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input\r\n      type=\"password\"\r\n      [ngClass]=\"{\r\n        'is-invalid':\r\n          (registerForm.get('confirmPassword').errors &&\r\n            registerForm.get('confirmPassword').touched) ||\r\n          (registerForm.get('confirmPassword').touched &&\r\n            registerForm.hasError('mismatch'))\r\n      }\"\r\n      class=\"form-control\"\r\n      formControlName=\"confirmPassword\"\r\n      placeholder=\"Confirm Password\"\r\n    />\r\n    <div\r\n      class=\"invalid-feedback\"\r\n      *ngIf=\"\r\n        registerForm.hasError('mismatch') &&\r\n        registerForm.get('confirmPassword').touched\r\n      \"\r\n    >\r\n      Passwords do not match\r\n    </div>\r\n    <div\r\n      class=\"invalid-feedback\"\r\n      *ngIf=\"\r\n        registerForm.get('confirmPassword').hasError('required') &&\r\n        registerForm.get('confirmPassword').touched\r\n      \"\r\n    >\r\n      Password is Required\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group text-center\">\r\n    <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!registerForm.valid\">Register</button>\r\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\">\r\n      Cancel\r\n    </button>\r\n  </div>\r\n</form>"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function RegisterComponent(authService, alertify, formBuilder, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.formBuilder = formBuilder;
        this.router = router;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.BsConfig = {
            containerClass: 'theme-red',
        };
        this.createRegisterForm();
    };
    RegisterComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.formBuilder.group({
            gender: ['male'],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            knownAs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dateOfBirth: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(8)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, {
            validator: this.passwordMatchValidator
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.user = Object.assign({}, this.registerForm.value);
            this.authService.register(this.user).subscribe(function () {
                _this.alertify.success('Registration Successful');
            }, function (error) {
                _this.alertify.error(error);
            }, function () {
                _this.authService.login(_this.user).subscribe(function () {
                    _this.router.navigate(['/members']);
                });
            });
        }
    };
    RegisterComponent.prototype.passwordMatchValidator = function (g) {
        return g.get('password').value === g.get('confirmPassword').value ?
            null : { 'mismatch': true };
    };
    RegisterComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "valuesFromHome", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "cancelRegister", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./members/member-list/member-list.component */ "./src/app/members/member-list/member-list.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/lists/lists.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ "./src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_resolvers/member-detail.resolver */ "./src/app/_resolvers/member-detail.resolver.ts");
/* harmony import */ var _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_resolvers/member-list.resolver */ "./src/app/_resolvers/member-list.resolver.ts");
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ "./src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_resolvers/member-edit.resolver */ "./src/app/_resolvers/member-edit.resolver.ts");
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_guards/prevent-unsaved-changes.guard */ "./src/app/_guards/prevent-unsaved-changes.guard.ts");
/* harmony import */ var _resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_resolvers/lists.resolver */ "./src/app/_resolvers/lists.resolver.ts");
/* harmony import */ var _resolvers_messages_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_resolvers/messages.resolver */ "./src/app/_resolvers/messages.resolver.ts");













var appRoutes = [
    // Each Route is an Object - With path and component
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            { path: 'members', component: _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_1__["MemberListComponent"], resolve: { users: _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_7__["MemberListResolver"] } },
            { path: 'members/:id', component: _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__["MemberDetailComponent"], resolve: { user: _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_6__["MemberDetailResolver"] } },
            {
                path: 'member/edit',
                component: _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_8__["MemberEditComponent"],
                resolve: { user: _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_9__["MemberEditResolver"] },
                canDeactivate: [_guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_10__["PreventUnsavedChanges"]]
            },
            { path: 'lists', component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_3__["ListsComponent"], resolve: { users: _resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_11__["ListsResolver"] } },
            { path: 'messages', component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__["MessagesComponent"], resolve: { messages: _resolvers_messages_resolver__WEBPACK_IMPORTED_MODULE_12__["MessagesResolver"] } },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    apiUrl: 'api/'
};


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
    production: false,
    apiUrl: 'http://localhost:5000/api/'
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

module.exports = __webpack_require__(/*! C:\Users\roger\Documents\Projects\Udemy\Sally\datingApp-SPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map