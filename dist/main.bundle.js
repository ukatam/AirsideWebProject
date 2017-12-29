webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div  *ngIf =\"isSidebarVisible()\">\n<div  class=\"wrapper\">\n    <div class=\"sidebar\" data-color='red' data-image=\"\" >\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(../assets/img/sidebar-4.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n       \n        <div *ngIf=\"isMaps('maps')\">\n            <app-footer></app-footer>\n        </div>\n    </div>\n</div>\n  \n</div>\n<div>\n</div>\n    <div *ngIf =\"isLoginVisible()\">\n      <app-login></app-login>\n    </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__ = __webpack_require__("../../../../perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        // $.material.init();
        // const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
        // const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
        // this.location.subscribe((ev:PopStateEvent) => {
        //     this.lastPoppedUrl = ev.url;
        // });
        //  this.router.events.subscribe((event:any) => {
        //     this.navbar.sidebarClose();
        //     if (event instanceof NavigationStart) {
        //        if (event.url != this.lastPoppedUrl)
        //            this.yScrollStack.push(window.scrollY);
        //    } else if (event instanceof NavigationEnd) {
        //        if (event.url == this.lastPoppedUrl) {
        //            this.lastPoppedUrl = undefined;
        //            window.scrollTo(0, this.yScrollStack.pop());
        //        } else
        //            window.scrollTo(0, 0);
        //    }
        // });
        // this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
        //      elemMainPanel.scrollTop = 0;
        //      elemSidebar.scrollTop = 0;
        // });
        // if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
        //     let ps = new PerfectScrollbar(elemMainPanel);
        //     ps = new PerfectScrollbar(elemSidebar);
        // }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        if (!localStorage.getItem("group")) {
            this.runOnRouteChange();
        }
    };
    AppComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.isLoginVisible = function () {
        var check = localStorage.getItem("user");
        if (check == null) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.isSidebarVisible = function () {
        var check = localStorage.getItem("user");
        if (check == null) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps.update();
        }
    };
    AppComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */]) === "function" && _a || Object)
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__("../../../../../src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__table_list_table_list_component__ = __webpack_require__("../../../../../src/app/table-list/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__typography_typography_component__ = __webpack_require__("../../../../../src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__icons_icons_component__ = __webpack_require__("../../../../../src/app/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__maps_maps_component__ = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__upgrade_upgrade_component__ = __webpack_require__("../../../../../src/app/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__checklist_report_checklist_report_component__ = __webpack_require__("../../../../../src/app/checklist-report/checklist-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_mydaterangepicker__ = __webpack_require__("../../../../mydaterangepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__master_page_master_page_component__ = __webpack_require__("../../../../../src/app/master-page/master-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__table_list_table_list_component__["a" /* TableListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__typography_typography_component__["a" /* TypographyComponent */],
                __WEBPACK_IMPORTED_MODULE_17__dialog_dialog_component__["a" /* DialogComponent */],
                __WEBPACK_IMPORTED_MODULE_13__icons_icons_component__["a" /* IconsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__maps_maps_component__["a" /* MapsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__notifications_notifications_component__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__upgrade_upgrade_component__["a" /* UpgradeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__checklist_report_checklist_report_component__["a" /* ChecklistReportComponent */],
                __WEBPACK_IMPORTED_MODULE_21__master_page_master_page_component__["a" /* MasterPageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_20_mydaterangepicker__["MyDateRangePickerModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__table_list_table_list_component__ = __webpack_require__("../../../../../src/app/table-list/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__typography_typography_component__ = __webpack_require__("../../../../../src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__maps_maps_component__ = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__upgrade_upgrade_component__ = __webpack_require__("../../../../../src/app/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__checklist_report_checklist_report_component__ = __webpack_require__("../../../../../src/app/checklist-report/checklist-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__master_page_master_page_component__ = __webpack_require__("../../../../../src/app/master-page/master-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'user-profile', component: __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'table-list', component: __WEBPACK_IMPORTED_MODULE_6__table_list_table_list_component__["a" /* TableListComponent */] },
    { path: 'typography', component: __WEBPACK_IMPORTED_MODULE_7__typography_typography_component__["a" /* TypographyComponent */] },
    { path: 'checklist-report', component: __WEBPACK_IMPORTED_MODULE_11__checklist_report_checklist_report_component__["a" /* ChecklistReportComponent */] },
    { path: 'maps', component: __WEBPACK_IMPORTED_MODULE_8__maps_maps_component__["a" /* MapsComponent */] },
    { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_9__notifications_notifications_component__["a" /* NotificationsComponent */] },
    { path: 'upgrade', component: __WEBPACK_IMPORTED_MODULE_10__upgrade_upgrade_component__["a" /* UpgradeComponent */] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'master-page', component: __WEBPACK_IMPORTED_MODULE_12__master_page_master_page_component__["a" /* MasterPageComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var User = (function () {
    function User(group, email, password) {
        this.group = group;
        this.email = email;
        this.password = password;
    }
    return User;
}());

var AuthenticationService = (function () {
    function AuthenticationService(_router, http) {
        this._router = _router;
        this.http = http;
    }
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem("user");
        this._router.navigate(['Login']);
    };
    AuthenticationService.prototype.login = function (user) {
        var _this = this;
        var headers1 = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        //console.log(this.checklist);
        headers1.append("Content-Type", 'application/json');
        headers1.append("Accept", 'application/json');
        var postParams = {
            UM_USER_NAME: user.email,
            UM_PASSWORD: user.password
        };
        this.http.post('https://mial.csia.in/MicroService/api/Login', JSON.stringify(postParams), { headers: headers1 })
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.authenticatedUser = data;
            console.log(_this.authenticatedUser);
            if (_this.authenticatedUser[0].AGM_I === 2 || _this.authenticatedUser[0].AGM_I === 3) {
                console.log(_this.authenticatedUser[0].AGM_I);
                localStorage.setItem("user", _this.authenticatedUser[0].UM_FIRST_NAME);
                localStorage.setItem("group", _this.authenticatedUser[0].AGM_I);
                console.log(localStorage.getItem("group"));
                // this._router.navigate(['Dashboard']);
                return true;
            }
            else {
                return false;
            }
        }, function (error) {
            return false;
        });
    };
    AuthenticationService.prototype.checkCredentials = function () {
        if (localStorage.getItem("user") === null) {
            this._router.navigate(['Login']);
        }
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b;
}());

//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/checklist-report/checklist-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pokeball {\r\n    width: 150px;\r\n    height: 150px;\r\n    position: absolute;\r\n    display: inline-block;\r\n    -webkit-animation: rotate 1.5s linear infinite;\r\n            animation: rotate 1.5s linear infinite;\r\n    left: calc(50% - 75px);\r\n    top: calc(50% - 75px);\r\n    opacity: 0.5;\r\n    \r\n  }\r\n  .pokeball .inner {\r\n    width: 150px;\r\n    height: 75px;\r\n    border: 48px solid #f06969;\r\n    box-sizing: border-box;\r\n  }\r\n  .pokeball .upper, .pokeball .lower {\r\n    width: 100%;\r\n    position: absolute;\r\n    height: calc(50% - 5px);\r\n    overflow: hidden;\r\n  }\r\n  .pokeball .upper {\r\n    top: 0;\r\n  }\r\n  .pokeball .upper .inner {\r\n    border-radius: 123px 123px 0 0;\r\n    border-bottom: 0;\r\n    margin-bottom: -5px;\r\n  }\r\n  .pokeball .lower {\r\n    bottom: 0;\r\n  }\r\n  .pokeball .lower .inner {\r\n    margin-top: -5px;\r\n    border-radius: 0 0 123px 123px;\r\n    border-top: 0;\r\n  }\r\n  .pokeball .middle {\r\n    border-radius: 50%;\r\n    width: 40px;\r\n    height: 40px;\r\n    background-color: #f2f3ea;\r\n    position: absolute;\r\n    left: calc(50% - 20px);\r\n    top: calc(50% - 20px);\r\n  }\r\n  \r\n  @-webkit-keyframes rotate {\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  @keyframes rotate {\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checklist-report/checklist-report.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"card\"  *ngIf=\"myVar\">\n                  <div class=\"card-header\" data-background-color=\"red\">\n                      <h4 class=\"title\">Approved Checklist Reports</h4>\n                      <!-- <p class=\"category\"><a target=\"_blank\" href=\"https://design.google.com/icons/\">Google</a></p> -->\n                  </div>\n                  <div class=\"card-content  table-responsive\">\n                    \n                          <!-- <iframe src=\"https://design.google.com/icons/\">\n                              <p>Your browser does not support iframes.</p>\n                          </iframe> -->\n                          <div class=\"row\">\n                          <div class=\"col-md-5\">\n                              <div class=\"form-group form-black label-floating is-empty\">\n                                  <label class=\"control-label\" style=\"color: black;\">Checklist Type</label>\n                                  <!-- <input type=\"text\" class=\"form-control\" disabled> -->\n                              </div>\n                          </div>\n                          <div class=\"col-md-3\">\n                          <div class=\"form-group form-black label-floating is-empty\">\n                              \n                             <select  [(ngModel)]=\"checklisttype\" style=\"  padding: 5px 8px;\n                                                                           width: 100%;\n                                                                           box-shadow: none;\n                                                                           background: transparent;\n                                                                           background-image: none;\n                                                                           -webkit-appearance: none;\">\n                           \n                                 <option [ngValue]=\"1\"> Runway Checklist </option>\n                                 <option [ngValue]=\"2\"> Taxiway Checklist </option>\n                                 <option [ngValue]=\"3\"> Apron Checklist </option>\n                            </select>\n                           </div>\n                          </div>\n                       <div class=\"col-md-4\">\n                           <div class=\"form-group form-black label-floating is-empty\" >\n                                     \n                                   <button type=\"submit\" style=\"margin-top:0px;height:35px;text-align:center\" (click)=\"onChecklistSelect()\" class=\"btn btn-danger\">Submit</button>\n                                   </div>\n                               </div>\n                          </div>\n                               <div class=\"card-content table-responsive\" *ngIf=\"list\">\n                                  \n                              <button *ngFor=\"let item of runwaylist | paginate: { itemsPerPage: 5, currentPage: p };\"  (click)=\"onSubmit(item.DATE,item.Inspection_Time)\" style=\"background-color:white;width:100%;height:50px; text-align:left\">\n                            \n                                  <b>Date: </b>&nbsp;&nbsp;\n                                  {{ item.DATE  }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                                 <b>Time: </b> &nbsp;&nbsp;\n                                  {{ item.Inspection_Time }}\n                                  \n                                  \n                              </button>\n                              <pagination-controls (pageChange)=\"p = $event\" ></pagination-controls>\n                         \n                              \n                          </div>\n                         \n                     </div>\n                 </div>\n             </div>\n                              <div class=\"col-md-12\">\n                              <div class=\"card card-plain\" *ngIf=\"checklistreport\">\n                                  <div class=\"card-header\" data-background-color=\"red\">\n                                      <h4 class=\"title\">Report Template</h4>\n                                      <p class=\"category\">This section provides analytical view of airside reports</p>\n                                  </div>\n                                  \n                                  <div class=\"card-content table-responsive\"  >\n                                                      \n                                      <table class=\"table table-hover\">\n                                          <thead>\n                                              <tr>\n                                                  <th style=\"width:10%; font-weight:bold; text-align:center\">ID</th>\n                                                  <th  style=\"width:25%;font-weight:bold; text-align:center\">Observations</th>\n                                                  <th style=\"width:10%;font-weight:bold; text-align:center\">Acceptability</th>\n                                                  <th style=\"width:15%;font-weight:bold; text-align:center\">Nc Filed Ref No.</th>\n                                                  <th style=\"width:40%;font-weight:bold; text-align:center\">Action Taken</th>\n                                              </tr>\n                                          </thead>\n                                          <tbody>\n                                              <tr *ngFor=\"let user of checklistdetails; let i=index\">\n                                                      <td style=\"width:10%; text-align:center\">{{i+1}}</td>\n                                                  <td style=\"width:25%; text-align:center\"> {{ user.Observations }}</td>\n                                                  <td style=\"width:10%; text-align:center\" [ngSwitch]=\"user.Acceptability\"> <p *ngSwitchCase=\"'+'\" style=\" background-color: rgb(59, 152, 79);\">{{ user.Acceptability }}</p> \n                                                      <p *ngSwitchCase=\"'-'\" style=\" background-color: rgb(241, 8, 8);\">{{ user.Acceptability }}</p> \n                                                      <p *ngSwitchCase=\"'0'\" style=\" background-color: rgb(207, 250, 53);\">{{ user.Acceptability }}</p>\n                                                    </td>\n                                                  <td style=\"width:15%; text-align:center\"> {{ user.NC_Filed_Ref_No }}</td>\n                                                  <td style=\"width:40%;text-align:center\">{{user.Action_Taken}}</td>\n                                                  \n                                              </tr>\n                                             \n                                          </tbody>\n\n                                      </table>\n                                   </div>\n                                   <div>\n                                    <span style=\"float:left; font-weight:bold;\">Name of Safety Officier</span> <p style=\"float:left\">&nbsp;&nbsp; &nbsp;&nbsp;{{ checklistdetails[0].Person_Name }}</p>\n                                </div>\n                                \n                                <br />\n                                <br />\n                                <div>\n                                    <span style=\"float:left; font-weight:bold;\">Name of Approved Officier</span> <p style=\"float:left\">&nbsp;&nbsp; &nbsp;&nbsp;{{ checklistdetails[0].ApprovedBy }}</p>\n                                </div>\n                                \n                                <br />\n                                <br />\n                                <div>\n                                   <span style=\"float:left; font-weight:bold;\">Other Observations</span> <p style=\"float:left\">&nbsp;&nbsp; &nbsp;&nbsp;{{ checklistdetails[0].Other_Observations }}</p>\n                                </div>\n\n                                   <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"onCancelclick()\">Cancel </button> <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"onExcelclick()\"> Download Report </button>\n            </div>  \n            </div>   \n            <div class=\"col-md-12\">         \n            <div class=\"card card-plain\" *ngIf=\"edited\">\n              <div class=\"card-header\" data-background-color=\"red\">\n                  <h4 class=\"title\">Report Template</h4>\n                  <p class=\"category\">This section provides analytical view of airside reports</p>\n              </div>\n              <div class=\"card-content table-responsive\"  >\n                  <table class=\"table table-hover\">\n                      <thead>\n                          <tr>\n                              <th style=\"width:10%; font-weight:bold; text-align:center\">ID</th>\n                              <th  style=\"width:10%;font-weight:bold; text-align:center\">Stand</th>\n                              <th style=\"width:20%;font-weight:bold; text-align:center\">Surface Condition</th>\n                              <th style=\"width:10%;font-weight:bold; text-align:center\">Markings</th>\n                              <th style=\"width:10%;font-weight:bold; text-align:center\">Cleaning</th>\n                              <th style=\"width:20%;font-weight:bold; text-align:center\">Serviceability</th>\n                              <th style=\"width:20%;font-weight:bold; text-align:center\">Action Taken</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr *ngFor=\"let view of checklistdetails; let i=index\">\n                              <td style=\"width:10%; text-align:center\"> {{ i+1 }} </td>\n                              <td style=\"width:10%; text-align:center\"> {{ view.Stand }} </td>\n                              <td style=\"width:20%; text-align:center\"> {{ view.Surface_Condition }} </td>\n                              <td style=\"width:10%; text-align:center\"> {{ view.Markings }}</td>\n                              <td style=\"width:10%;text-align:center\"> {{ view.Cleaning }} </td>\n                              <td style=\"width:20%;text-align:center\"> {{ view.Serviceability }} </td>\n                              <td style=\"width:20%;text-align:center\"> {{ view.ActionTaken }} </td>   \n                          </tr>                                   \n                      </tbody>\n                  </table>\n                  <br />\n\n                  <div>\n                      <span style=\"float:left; font-weight:bold;\">Name of Safety Officier</span> <p style=\"float:left\">&nbsp;&nbsp; &nbsp;&nbsp;{{ checklistdetails[0].OfficierName }}</p>\n                  </div>\n                  \n                  <br />\n                  <br />\n                  <div>\n                    <span style=\"float:left; font-weight:bold;\">Name of Approved Officier</span> <p style=\"float:left\">&nbsp;&nbsp; &nbsp;&nbsp;{{ checklistdetails[0].ApprovedBy }}</p>\n                </div>\n                \n                <br />\n                <br />\n                  <div>\n                     <span style=\"float:left; font-weight:bold;\">Other Observations</span> <p style=\"float:left\">&nbsp;&nbsp; &nbsp;&nbsp;{{ checklistdetails[0].Other_Observations }}</p>\n                  </div>\n                  <div>\n                       <!-- <br>    <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"EditChecklist()\" >Edit</button> -->\n                 <button type=\"submit\" class=\"btn btn-danger pull-right\"(click)=\"onPdfDownload()\"> Download </button>\n                 <button type=\"submit\" class=\"btn btn-danger pull-right\"(click)=\"onApronCancel()\"> Cancel </button>\n                  </div>\n              </div>\n              </div>\n              <div id=\"divhide\" style=\"background-color: white; margin-top: 20%; border: white\" *ngIf=\"hide\" >\n                  <table style=\" border: 1px solid black; font:'verdana'; font-size:14px;border-collapse: collapse ; background-color:white; width:90%; margin-left: 3%; margin-right:5%; \">\n                      <thead>\n                      <tr>\n                          <th style=\"width:29%;border: 1px solid black; text-align:center\">\n                              Mumbai <br> International Airport <br > Pvt. Ltd\n                          </th>\n                          <th style=\"width:29% ;font:'verdana';font-size:15px; text-align:center\">\n                              RUNWAY/ TAXIWAY INSPECTION CHECKLIST <hr style=\"border:0.7px solid black\"> Department: ASM\n                          </th>\n                          <th style=\"width:36%;border: 1px solid black; text-align:center\">\n                              Doc. No.: MIAL/AO-ASM/FMT/01/05<br> Date:-{{checklistdetails[0].Date | slice:0:10 }}\n                          </th>\n                      </tr>\n                      </thead>\n                  </table>\n                  <br>\n                  <div style=\"margin-left: 3%; margin-right:10%; font-size:18px;\">\n                    <p style=\"text-align:center;\"><b> {{checklistname }} </b></p>  <br>\n                    <b>  Date:</b> &nbsp;&nbsp;&nbsp;&nbsp; {{checklistdetails[0].Date | slice:0:10 }}\n                    <br>\n                    <br>\n                   <span style=\"float:left\"> <b> RWY/TWY inspected: </b>&nbsp;&nbsp;&nbsp;&nbsp;{{ checklistdetails[0].RWY_Inspected }} {{ checklistdetails[0].TWY_Inspected }}</span>\n                    <span style=\"float:right\" ><b>Time of Inspection</b> &nbsp;&nbsp;&nbsp;&nbsp; {{checklistdetails[0].Inspection_Time}} </span>\n                    <br><br>\n                    <span>Dawn / Morning / Afternoon / Dusk /Ad-hoc </span>\n                  </div>\n                \n\n                      </div>\n\n\n\n                      <div id=\"divapron\" style=\"background-color: white; margin-top: 20%; border: white\" *ngIf=\"apronheader\" >\n                        <table style=\" border: 1px solid black; font:'verdana'; font-size:14px;border-collapse: collapse ; background-color:white; width:90%; margin-left: 3%; margin-right:5%; \">\n                            <thead>\n                            <tr>\n                                <th style=\"width:29%;border: 1px solid black; text-align:center\">\n                                    Mumbai <br> International Airport <br > Pvt. Ltd\n                                </th>\n                                <th style=\"width:29% ;font:'verdana';font-size:15px; text-align:center\">\n                                    APRON INSPECTION CHECKLIST <hr style=\"border:0.7px solid black\"> Department: ASM\n                                </th>\n                                <th style=\"width:36%;border: 1px solid black; text-align:center\">\n                                    Doc. No.: MIAL/AO-ASM/FMT/01/05<br> Date:- {{checklistdetails[0].Date }} \n                                </th>\n                            </tr>\n                            </thead>\n                        </table>\n                        <br>\n                        <div style=\"margin-left: 3%; margin-right:10%; font-size:18px;\">\n                          <p style=\"text-align:center;\"><b> {{checklistname }} </b></p>  <br>\n                         \n                          <br>\n                         <span style=\"float:left\"> <b> Date: </b>&nbsp;&nbsp;&nbsp;&nbsp;{{checklistdetails[0].Date }}</span>\n                          <span style=\"float:right\" ><b>Time of Inspection</b> &nbsp;&nbsp;&nbsp;&nbsp; {{checklistdetails[0].Inspection_Time}} </span>\n                          <br><br>\n                          <span>Dawn / Morning / Afternoon / Dusk /Ad-hoc </span>\n                        </div>\n                      \n      \n                            </div>\n                      </div>\n                     \n                  </div>\n              </div>\n              <div *ngIf=\"loading\" >\n                <div class=\"pokeball\">\n                  <div class=\"upper\">\n                    <div class=\"inner\"></div>\n                  </div>\n                  <div class=\"middle\"></div>\n                  <div class=\"lower\">\n                    <div class=\"inner\"></div>\n                  </div>\n                </div>\n            </div>\n          </div>\n     \n"

/***/ }),

/***/ "../../../../../src/app/checklist-report/checklist-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChecklistReportComponent = (function () {
    function ChecklistReportComponent(http) {
        this.http = http;
        this.pdf = false;
        this.myVar = true;
        this.hide = false;
        this.loading = false;
        this.checklistreport = false;
        this.edited = false;
        this.list = true;
        this.p = 1;
    }
    ChecklistReportComponent.prototype.ngOnInit = function () {
    };
    ChecklistReportComponent.prototype.isLoading = function () {
        this.pdf = true;
        return true;
    };
    ChecklistReportComponent.prototype.onCancelclick = function () {
        this.list = true;
        this.checklistreport = false;
        this.hide = false;
        this.apronheader = false;
    };
    ChecklistReportComponent.prototype.onSubmit = function (DATE, Inspection_Time) {
        var _this = this;
        this.loading = true;
        this.checklistreport = false;
        this.edited = false;
        this.list = false;
        console.log("Test");
        this.date = DATE;
        this.time = Inspection_Time;
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //console.log(this.checklist);
        headers1.append("Content-Type", 'application/json');
        headers1.append("Accept", 'application/json');
        var postParams1 = {
            date: DATE,
            time: Inspection_Time
        };
        if (this.checklist == "1") {
            this.hide = true;
            this.apronheader = false;
            this.checklistreport = true;
            this.edited = false;
            this.checklistname = "RUNWAY INSPECTION CHECKLIST";
            this.http.post('https://mial.csia.in/MicroService/api/RunwayChecklistDetails', JSON.stringify(postParams1), { headers: headers1 })
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.checklistdetails = data;
                console.log(data);
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
                console.log(error);
            });
        }
        else if (this.checklist == "2") {
            this.hide = true;
            this.apronheader = false;
            this.checklistreport = true;
            this.edited = false;
            this.checklistname = "TAXIWAY INSPECTION CHECKLIST";
            this.http.post('https://mial.csia.in/MicroService/api/TaxiwayChecklistDetails', JSON.stringify(postParams1), { headers: headers1 })
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.checklistdetails = data;
                _this.loading = false;
                console.log(data);
            }, function (error) {
                console.log(error);
                _this.loading = false;
            });
        }
        else if (this.checklist == "3") {
            this.apronheader = true;
            this.hide = false;
            console.log("Apron Test");
            this.checklistname = "APRON INSPECTION CHECKLIST";
            this.checklistreport = false;
            this.edited = true;
            this.http.post('https://mial.csia.in/MicroService/api/ApronChecklistDetails', JSON.stringify(postParams1), { headers: headers1 })
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.checklistdetails = data;
                _this.loading = false;
                //console.log(data);
            }, function (error) {
                console.log(error);
                _this.loading = false;
            });
        }
    };
    ChecklistReportComponent.prototype.onExcelclick = function () {
        /*const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.checklistdetails);
        const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        this.saveAsExcelFile(excelBuffer, 'ChecklistReport');*/
        if (this.checklist == "1" || this.checklist == "2") {
            var responseData = this.checklistdetails;
            console.log(this.checklistdetails);
            var doc = new jsPDF('p', 'pt');
            var source = document.getElementById('divhide');
            doc.addHTML(source, 20, 20, function () {
                var col = ["Observations", "Acceptability", "Action Taken", "NC Filed Ref. Nr"];
                var rows = [];
                var col1 = ["Department", "Name"];
                var rows1 = [];
                var Other_Observations;
                var Name;
                var Department;
                for (var _i = 0, responseData_1 = responseData; _i < responseData_1.length; _i++) {
                    var item = responseData_1[_i];
                    Department = item['Department_Name'];
                    Other_Observations = item['Other_Observations'];
                    Name = item['Person_Name'];
                    var temp = [item['Observations'], item['Acceptability'], item['Action_Taken'], item['NC_Filed_Ref_No']];
                    rows.push(temp);
                }
                rows1.push(Other_Observations, Name);
                doc.autoTable(col, rows, {
                    /* drawCell: function(cell, data){
                      var rows = data.table.rows;
                      if(data.row.index == rows.length - 1){
                        doc.setFillColor(200, 200, 255);
                      }
                    }, */
                    theme: 'grid',
                    styles: { fontSize: 10, font: "verdana", fontStyle: 'normal', halign: 'center' },
                    margin: { top: 190 },
                    addPageContent: function (data) {
                        //   doc.autoTable(col1, rows1, {
                        //   styles: {fontSize: 10, font: "verdana", fontStyle: 'normal', halign: 'center'},
                        //   margin: { top: 600},
                        //   addPageContent: function(data){
                        //   }
                        // });
                        doc.setFont("verdana");
                        doc.setFontSize(10);
                        doc.text(50, 670, 'Department');
                        doc.text(500, 670, 'Name');
                        doc.setFont("verdana");
                        doc.text(50, 690, Department);
                        doc.text(500, 690, Name);
                        doc.setFont("verdana");
                        doc.setFontSize(10);
                        doc.text(50, 730, 'If other observations observed: ');
                        doc.setFont("verdana");
                        doc.setFontSize(10);
                        doc.text(50, 745, Other_Observations);
                    }
                });
                doc.save('ChecklistInspectionReport.pdf');
            });
            // var col = ["Observations", "Acceptability", "Action Taken", "NC Filed Ref. Nr"];
            // var rows = [];
            // for( let item of responseData )
            // {
            //   var temp = [item['Observations'], item['Acceptability'], item['Action_Taken'], item['NC_Filed_Ref_No']];
            //   rows.push(temp);
            // }
            /* doc.fromHTML( '<table id="divhide" ><tr><td >Mumbai <br> International Airport <br > Pvt. Ltd</td><td >RUNWAY/ TAXIWAY INSPECTION CHECKLIST <hr> Department: ASM</td><td>Doc. No.: MIAL/AO-ASM/FMT/01/05<br> Date:-29/05/2017 </td></tr></table>', 20,30 , {
              'fontSize': 8,
              'font': "verdana",
              left: 40,
              'width': 522,
            }
        //   ); */
            //     doc.autoTable(col, rows, {
            //     /* drawCell: function(cell, data){
            //       var rows = data.table.rows;
            //       if(data.row.index == rows.length - 1){
            //         doc.setFillColor(200, 200, 255);
            //       }
            //     }, */
            //     theme: 'grid',
            //     styles: {fontSize: 10, font: "verdana", fontStyle: 'normal', halign: 'center'},
            //     margin: { top: 100},
            //     addPageContent: function(data){
            //     }
            //   });
            //   doc.save('Test.pdf');
        }
        else if (this.checklist == "3") {
        }
    };
    ChecklistReportComponent.prototype.onPdfDownload = function () {
        var responseData = this.checklistdetails;
        console.log(responseData);
        console.log("apron");
        var doc = new jsPDF('p', 'pt');
        var source = document.getElementById('divapron');
        doc.addHTML(source, 20, 20, function () {
            var col = ["Stand", "Surface Condition", "Markings", "Cleaning", "Serviceability", "Action Taken"];
            var rows = [];
            var Other_Observations;
            var SafetyOfficerName;
            var Department;
            for (var _i = 0, responseData_2 = responseData; _i < responseData_2.length; _i++) {
                var item = responseData_2[_i];
                Department = item['Department_Name'];
                Other_Observations = item['Other_Observations'];
                SafetyOfficerName = item['OfficierName'];
                var temp = [item['Stand'], item['Surface_Condition'], item['Markings'], item['Cleaning'], item['Serviceability'], item['ActionTaken']];
                rows.push(temp);
            }
            doc.autoTable(col, rows, {
                /* drawCell: function(cell, data){
                  var rows = data.table.rows;
                  if(data.row.index == rows.length - 1){
                    doc.setFillColor(200, 200, 255);
                  }
                }, */
                theme: 'grid',
                styles: { fontSize: 10, font: "verdana", fontStyle: 'normal', halign: 'center' },
                margin: { top: 300 },
                addPageContent: function (data) {
                    doc.setFont("verdana");
                    doc.setFontSize(10);
                    doc.text(40, 180, 'Name of Safety Officer:');
                    doc.text(150, 180, SafetyOfficerName);
                    doc.text(40, 200, 'Observations:');
                    doc.text(40, 215, Other_Observations);
                    //  doc.text(40,180,'Name of Safety Officer:');
                    //  doc.text(45,180,Name);
                }
            });
            doc.save('ApronInspectionChecklist.pdf');
        });
    };
    ChecklistReportComponent.prototype.onApronCancel = function () {
        this.list = true;
        this.checklistreport = false;
        this.hide = false;
        this.apronheader = false;
        this.edited = false;
    };
    ChecklistReportComponent.prototype.onChecklistSelect = function () {
        var _this = this;
        this.loading = true;
        this.list = true;
        this.checklistreport = false;
        this.edited = false;
        this.hide = false;
        this.apronheader = false;
        this.checklist = this.checklisttype;
        if (this.checklisttype == "1") {
            this.http.get('https://mial.csia.in/MicroService/api/RunwayApprovalList/').map(function (res) { return res.json(); }).subscribe(function (data1) {
                _this.runwaylist = data1;
                //console.log(this.runwaylist);
                _this.loading = false;
            }, function (err) {
                console.log("error has occured");
                _this.loading = false;
            });
        }
        else if (this.checklisttype == "2") {
            this.http.get('https://mial.csia.in/MicroService/api/TaxiwayApprovalList/').map(function (res) { return res.json(); }).subscribe(function (data1) {
                _this.runwaylist = data1;
                _this.loading = false;
                //console.log(this.runwaylist);
            }, function (err) {
                console.log("error has occured");
                _this.loading = false;
            });
        }
        else if (this.checklisttype == "3") {
            this.http.get('https://mial.csia.in/MicroService/api/ApronApprovalList/').map(function (res) { return res.json(); }).subscribe(function (data1) {
                _this.runwaylist = data1;
                //console.log(this.runwaylist);
                _this.loading = false;
            }, function (err) {
                console.log("error has occured");
                _this.loading = false;
            });
        }
    };
    ChecklistReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-checklist-report',
            template: __webpack_require__("../../../../../src/app/checklist-report/checklist-report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/checklist-report/checklist-report.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ChecklistReportComponent);
    return ChecklistReportComponent;
    var _a;
}());

//# sourceMappingURL=checklist-report.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"http://csia.in/\">\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://csia.in/footer/contact.aspx\">\n                        Contact Us\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://www.gvk.com/\">\n                        GVK.com\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://csia.in/mediacentre/about-t2.aspx\">\n                       Media Centre\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <p class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}} <a href=\"http://www.csia.in/\">Chhatrapati Shivaji International Airport</a>, Site by MIAL Application Team.\n        </p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Airside Safety Management Application</a></li>\n                        <li><a href=\"#\">Go-Live Date: 17/11/2017</a></li>\n                        <li><a href=\"#\">Lead: Uday Katam | Dheeraj Anchan</a></li>\n                        <li><a href=\"#\">Client: Vijay Goankar | Rajesh Jadhav</a></li>\n                        <li><a href=\"#\">Manager: Priyanka Save | Zaheer Syed</a></li>\n                    </ul>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                       <i class=\"material-icons\">person</i>\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Username</a></li>\n                        <!-- <li><button (click)=\"onLogout()\">Logout</button></li> -->\n                         <button type=\"button\" title=\"Logout\" class=\"btn btn-primary btn-simple btn-xs\" (click)=\"onLogout()\" style=\"float: right;\">\n                            <i class=\"material-icons\">exit_to_app</i>\n                        </button>                    \n                    </ul>\n                </li>\n            </ul>\n\n            <form class=\"navbar-form navbar-right\" role=\"search\">\n                <div class=\"form-group form-black is-empty\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                    <span class=\"material-input\"></span>\n                </div>\n                <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n                </button>\n            </form>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(location, _router, element) {
        this._router = _router;
        this.element = element;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.onLogout = function () {
        localStorage.removeItem("user");
        localStorage.removeItem("group");
        //this._router.navigate(['LoginComponent']);
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a href=\"http://www.gvk.com/\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"/assets/img/GVK_new.png\"/>\n            <!-- <img src=\"/assets/img/CSIA_logo_new.png\"/> -->\n        </div>\n        Airside Safety\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n    <form class=\"navbar-form navbar-right\" role=\"search\" *ngIf=\"isMobileMenu()\">\n        <div class=\"form-group form-black is-empty\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n            <span class=\"material-input\"></span>\n        </div>\n        <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n        </button>\n    </form>\n\n    <ul class=\"nav nav-mobile-menu\" *ngIf=\"isMobileMenu()\">\n        <li>\n            <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"material-icons\">dashboard</i>\n                <p class=\"hidden-lg hidden-md\">Dashboard</p>\n            </a>\n        </li>\n        <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"material-icons\">notifications</i>\n                <span class=\"notification\">5</span>\n                <p class=\"hidden-lg hidden-md\">Notifications</p>\n            </a>\n            <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Airside Safety Management Application</a></li>\n                <li><a href=\"#\">Go-Live Date: 17/11/2017</a></li>\n                <li><a href=\"#\">Lead: Uday Katam | Dheeraj Anchan</a></li>\n                <li><a href=\"#\">Client: Vijay Goankar | Rajesh Jadhav</a></li>\n                <li><a href=\"#\">Manager: Priyanka Save | Zaheer Syed</a></li>\n            </ul>\n        </li>\n        <li>\n            <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n               <i class=\"material-icons\">person</i>\n               <p class=\"hidden-lg hidden-md\">Profile</p>\n            </a>\n        </li>\n    </ul>\n\n    <div class=\"nav-container\">\n        <ul class=\"nav\">\n            <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\n                <a  [routerLink]=\"[menuItem.path]\">\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\n                    <p>{{menuItem.title}}</p>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ROUTES1 = [];
console.log(localStorage.getItem("group"));
debugger;
var ROUTES1 = [
    { path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: 'user-profile', title: 'User Profile', icon: 'person', class: '' },
    { path: 'table-list', title: 'View Checklists', icon: 'content_paste', class: '' },
    { path: 'checklist-report', title: 'Approved Checklists', icon: 'bubble_chart', class: '' },
    { path: 'typography', title: 'Send Mail', icon: 'library_books', class: '' },
    { path: 'upgrade', title: 'Email Logs', icon: 'unarchive', class: '' },
    { path: 'maps', title: 'Maps', icon: 'location_on', class: '' },
    { path: 'master-page', title: 'MasterPage', icon: 'notifications', class: '' },
];
var ROUTES = ROUTES1;
console.log(ROUTES1);
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                    <div class=\"card card-stats\" >\n                        <div class=\"card-header\" data-background-color=\"orange\">\n                            <i class=\"material-icons\">content_copy</i>\n                        </div>\n                        <div class=\"card-content\">\n                            <p class=\"category\">Checklist Upload</p>\n                            <h3 class=\"title\">2/10 <!-- <small>GB</small> --></h3>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                <i class=\"material-icons text-danger\">warning</i> <a href=\"#pablo\">Less Count...</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                    <div class=\"card card-stats\" >\n                        <div class=\"card-header\" data-background-color=\"green\">\n                            <i class=\"material-icons\">store</i>\n                        </div>\n                        <div class=\"card-content\">\n                            <p class=\"category\">Incidents Found</p>\n                            <h3 class=\"title\">50</h3>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                <i class=\"material-icons\">date_range</i> Last 24 Hours\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                    <div class=\"card card-stats\" >\n                        <div class=\"card-header\" data-background-color=\"red\">\n                            <i class=\"material-icons\">info_outline</i>\n                        </div>\n                        <div class=\"card-content\">\n                            <p class=\"category\">Fixed Issues</p>\n                            <h3 class=\"title\">75</h3>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                <i class=\"material-icons\">local_offer</i> As per last update\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                    <div class=\"card card-stats\" >\n                        <div class=\"card-header\" data-background-color=\"blue\">\n                            <i class=\"fa fa-twitter\"></i>\n                        </div>\n                        <div class=\"card-content\">\n                            <p class=\"category\">Wildlife Hazards</p>\n                            <h3 class=\"title\">+150</h3>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                <i class=\"material-icons\">update</i> Last Updated\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card\" >\n                        <div class=\"card-header card-chart\" data-background-color=\"green\">\n                            <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n                        </div>\n                        <div class=\"card-content\">\n                            <h4 class=\"title\">Daily Incidents</h4>\n                            <p class=\"category\"><span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55%  </span> increase in today's incident.</p>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                <i class=\"material-icons\">access_time</i> updated 4 minutes ago\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card\" >\n                        <div class=\"card-header card-chart\" data-background-color=\"orange\">\n                            <div class=\"ct-chart\" id=\"emailsSubscriptionChart\"></div>\n                        </div>\n                        <div class=\"card-content\">\n                            <h4 class=\"title\">Email Sent</h4>\n                            <p class=\"category\">As per last campaign schedule</p>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                <i class=\"material-icons\">access_time</i>sent 2 days ago\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card\" >\n                        <div class=\"card-header card-chart\" data-background-color=\"red\">\n                            <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\n                        </div>\n                        <div class=\"card-content\">\n                            <h4 class=\"title\">Completed Checklists</h4>\n                            <p class=\"category\">Latest Update</p>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                <i class=\"material-icons\">access_time</i> updated 6 hours ago\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-md-12\">\n                    <div class=\"card card-nav-tabs\" >\n                        <div class=\"card-header\" data-background-color=\"purple\">\n                            <div class=\"nav-tabs-navigation\">\n                                <div class=\"nav-tabs-wrapper\">\n                                    <span class=\"nav-tabs-title\">Tasks:</span>\n                                    <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n                                        <li class=\"active\">\n                                            <a href=\"#profile\" data-toggle=\"tab\">\n                                                <i class=\"material-icons\">bug_report</i>\n                                                Taxiway\n                                            <div class=\"ripple-container\"></div></a>\n                                        </li>\n                                        <li class=\"\">\n                                            <a href=\"#messages\" data-toggle=\"tab\">\n                                                <i class=\"material-icons\">code</i>\n                                                Runway\n                                            <div class=\"ripple-container\"></div></a>\n                                        </li>\n                                        <li class=\"\">\n                                            <a href=\"#settings\" data-toggle=\"tab\">\n                                                <i class=\"material-icons\">cloud</i>\n                                                Apron\n                                            <div class=\"ripple-container\"></div></a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"card-content\">\n                            <div class=\"tab-content\">\n                                <div class=\"tab-pane active\" id=\"profile\">\n                                    <table class=\"table\">\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>Taxiway Edge Lights: used to outline the edges of taxiways during periods of darkness or restricted visibility conditions.</td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>Taxiway Centerline Lights: They are steady burning and emits green light located along the taxiway centerline.</td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>Runway Guard Lights: A pair of elevated flashing yellow lights installed on either side of the taxiway\n                                                </td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>Stop Bar Lights: A row of red, unidirectional, steady-burning in-pavement lights installed across the entire taxiway at the runway.</td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div class=\"tab-pane\" id=\"messages\">\n                                    <table class=\"table\">\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>Runway edge lighting are used to outline the edges of runways during periods of darkness or restricted visibility conditions.\n                                                </td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>Approach lights installed on the approach end of runway consisting of a series of lightbars, strobe lights or a combination of both.</td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div class=\"tab-pane\" id=\"settings\">\n                                    <table class=\"table\">\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>Apron is the area of an airport where aircraft are parked, unloaded or loaded.</td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>Flight Line: The US Military typically refers to the apron area as the \"Flight line\"\n                                                </td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>In the United States, the word ramp is an older term for an area where pre-flight activities were done; an apron was any area for parking and maintenance.</td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-6 col-md-12\">\n                    <div class=\"card\" >\n                        <div class=\"card-header\" data-background-color=\"orange\">\n                            <h4 class=\"title\">User Stats</h4>\n                            <p class=\"category\">Key Information</p>\n                        </div>\n                        <div class=\"card-content table-responsive\">\n                            <table class=\"table table-hover\">\n                                <thead class=\"text-warning\">\n                                    <tr>\n                                        <th>ID</th>\n                                        <th>Name</th>\n                                        <th>Email Id</th>\n                                        <th>Department</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>1</td>\n                                        <td>Vijay Gaonkar</td>\n                                        <td>vijay.gaonkar@csia.gvk.com</td>\n                                        <td>Apron Control</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2</td>\n                                        <td>Rajesh Jadhav</td>\n                                        <td>rajesh.jadhav@csia.gvk.com</td>\n                                        <td>Apron Control</td>\n                                    </tr>\n                                    <tr>\n                                        <td>3</td>\n                                        <td>Walter Rumao</td>\n                                        <td>walter.rumao@csia.gvk.com</td>\n                                        <td>Apron Control</td>\n                                    </tr>\n                                    <tr>\n                                        <td>4</td>\n                                        <td>Uday Katam</td>\n                                        <td>ito.developer2@gvk.com</td>\n                                        <td>I.T.</td>\n                                    </tr>\n                                    <tr>\n                                        <td>5</td>\n                                        <td>Dheeraj A</td>\n                                        <td>ito.developer2@gvk.com</td>\n                                        <td>I.T.</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: __WEBPACK_IMPORTED_MODULE_1_chartist__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    ;
    DashboardComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        var dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsDailySalesChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };
        var dailySalesChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var dataEmailsSubscriptionChart = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionsEmailsSubscriptionChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var emailsSubscriptionChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);
        //start animation for the Emails Subscription Chart
        this.startAnimationForBarChart(emailsSubscriptionChart);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    z-index: 999;\r\n  }\r\n  \r\n  .dialog {\r\n    z-index: 1000;\r\n    position: fixed;\r\n    right: 0;\r\n    left: 0;\r\n    top: 20px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    min-height: 200px;\r\n    width: 90%;\r\n    max-width: 520px;\r\n    background-color: #fff;\r\n    padding: 12px;\r\n    box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .dialog {\r\n      top: 40px;\r\n    }\r\n  }\r\n  \r\n  .dialog__close-btn {\r\n    border: 0;\r\n    background: none;\r\n    color: #2d2d2d;\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 8px;\r\n    font-size: 1.2em;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"dialog\">\n  <ng-content></ng-content>\n  <button *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"dialog__close-btn\">X</button>\n</div>\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>"

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogComponent = (function () {
    function DialogComponent() {
        this.closable = true;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DialogComponent.prototype.ngOnInit = function () { };
    DialogComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "closable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DialogComponent.prototype, "visible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
    ], DialogComponent.prototype, "visibleChange", void 0);
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialog/dialog.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* trigger */])('dialog', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* style */])({ transform: 'scale3d(.3, .3, .3)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* animate */])(100)
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* style */])({ transform: 'scale3d(.0, .0, .0)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
    var _a;
}());

//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\">Material Design Icons</h4>\n                        <p class=\"category\">Handcrafted by our friends from <a target=\"_blank\" href=\"https://design.google.com/icons/\">Google</a></p>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"iframe-container hidden-sm hidden-xs\">\n                            <!-- <iframe src=\"https://design.google.com/icons/\">\n                                <p>Your browser does not support iframes.</p>\n                            </iframe> -->\n                            <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\" style=\"color: black;\">Checklist Type</label>\n                                    <!-- <input type=\"text\" class=\"form-control\" disabled> -->\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                            <div class=\"form-group form-black label-floating is-empty\">\n                                \n                               <select  [(ngModel)]=\"checklisttype\" style=\"  padding: 5px 8px;\n                                                                             width: 100%;\n                                                                             box-shadow: none;\n                                                                             background: transparent;\n                                                                             background-image: none;\n                                                                             -webkit-appearance: none;\">\n                             \n                                   <option [ngValue]=\"1\"> Runway Checklist </option>\n                                   <option [ngValue]=\"2\"> Taxiway Checklist </option>\n                                   <option [ngValue]=\"3\"> Apron Checklist </option>\n                              </select>\n                             </div>\n                            </div>\n                         <div class=\"col-md-4\">\n                             <div class=\"form-group form-black label-floating is-empty\" >\n                                       \n                                     <button type=\"submit\" style=\"margin-top:0px;height:35px;text-align:center\" (click)=\"onChecklistSelect()\" class=\"btn btn-danger\">Submit</button>\n                                     </div>\n                                 </div>\n                                 <div class=\"card-content table-responsive\">\n                                    \n                                <button *ngFor=\"let item of runwaylist | paginate: { itemsPerPage: 5, currentPage: p };\"  (click)=\"onSubmit(item.DATE,item.Inspection_Time)\" style=\"background-color:white;width:100%;height:50px; text-align:left\">\n                              \n                                    <b>Date: </b>&nbsp;&nbsp;\n                                    {{ item.DATE  }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                                   <b>Time: </b> &nbsp;&nbsp;\n                                    {{ item.Inspection_Time }}\n                                    \n                                    \n                                </button>\n                                <pagination-controls (pageChange)=\"p = $event\" ></pagination-controls>\n                           \n                                \n                            </div>\n                           \n                                </div>\n                                <div class=\"card card-plain\" *ngIf=\"checklistreport\">\n                                    <div class=\"card-header\" data-background-color=\"red\">\n                                        <h4 class=\"title\">Report Template</h4>\n                                        <p class=\"category\">This section provides analytical view of airside reports</p>\n                                    </div>\n                                    \n                                    <div class=\"card-content table-responsive\"  >\n                                                        \n                                        <table class=\"table table-hover\">\n                                            <thead>\n                                                <tr>\n                                                    <th style=\"width:10%; font-weight:bold; text-align:center\">ID</th>\n                                                    <th  style=\"width:25%;font-weight:bold; text-align:center\">Observations</th>\n                                                    <th style=\"width:10%;font-weight:bold; text-align:center\">Acceptability</th>\n                                                    <th style=\"width:15%;font-weight:bold; text-align:center\">Nc Filed Ref No.</th>\n                                                    <th style=\"width:40%;font-weight:bold; text-align:center\">Action Taken</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr *ngFor=\"let user of checklistdetails; let i=index\">\n                                                        <td style=\"width:10%; text-align:center\">{{i+1}}</td>\n                                                    <td style=\"width:25%; text-align:center\"> {{ user.Observations }}</td>\n                                                    <td style=\"width:10%; text-align:center\" [ngSwitch]=\"user.Acceptability\"> <p *ngSwitchCase=\"'+'\" style=\" background-color: rgb(59, 152, 79);\">{{ user.Acceptability }}</p> \n                                                        <p *ngSwitchCase=\"'-'\" style=\" background-color: rgb(241, 8, 8);\">{{ user.Acceptability }}</p> \n                                                        <p *ngSwitchCase=\"'0'\" style=\" background-color: rgb(207, 250, 53);\">{{ user.Acceptability }}</p>\n                                                      </td>\n                                                    <td style=\"width:15%; text-align:center\"> {{ user.NC_Filed_Ref_No }}</td>\n                                                    <td style=\"width:40%;text-align:center\">{{user.Action_Taken}}</td>\n                                                    \n                                                </tr>\n                                               \n                                            </tbody>\n\n                                        </table>\n                                     </div>\n\n                                        <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"onExcelclick()\"> Download Report </button>\n              </div>                \n              <div class=\"card card-plain\" *ngIf=\"edited\">\n                <div class=\"card-header\" data-background-color=\"red\">\n                    <h4 class=\"title\">Report Template</h4>\n                    <p class=\"category\">This section provides analytical view of airside reports</p>\n                </div>\n                <div class=\"card-content table-responsive\"  >\n                    <table class=\"table table-hover\">\n                        <thead>\n                            <tr>\n                                <th style=\"width:10%; font-weight:bold; text-align:center\">ID</th>\n                                <th  style=\"width:10%;font-weight:bold; text-align:center\">Stand</th>\n                                <th style=\"width:20%;font-weight:bold; text-align:center\">Surface Condition</th>\n                                <th style=\"width:10%;font-weight:bold; text-align:center\">Markings</th>\n                                <th style=\"width:10%;font-weight:bold; text-align:center\">Cleaning</th>\n                                <th style=\"width:20%;font-weight:bold; text-align:center\">Serviceability</th>\n                                <th style=\"width:20%;font-weight:bold; text-align:center\">Action Taken</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let view of checklistdetails; let i=index\">\n                                <td style=\"width:10%; text-align:center\"> {{ i+1 }} </td>\n                                <td style=\"width:10%; text-align:center\"> {{ view.Stand }} </td>\n                                <td style=\"width:20%; text-align:center\"> {{ view.Surface_Condition }} </td>\n                                <td style=\"width:10%; text-align:center\"> {{ view.Markings }}</td>\n                                <td style=\"width:10%;text-align:center\"> {{ view.Cleaning }} </td>\n                                <td style=\"width:20%;text-align:center\"> {{ view.Serviceability }} </td>\n                                <td style=\"width:20%;text-align:center\"> {{ view.ActionTaken }} </td>   \n                            </tr>                                   \n                        </tbody>\n                    </table>\n                    <br />\n\n                    <div>\n                        <span style=\"float:left; font-weight:bold;\">Name of Safety Officier</span> <p style=\"float:left\">&nbsp;&nbsp; &nbsp;&nbsp;{{ checklistdetails[0].OfficierName }}</p>\n                    </div>\n                    \n                    <br />\n                    <br />\n                    <div>\n                       <span style=\"float:left; font-weight:bold;\">Other Observations</span> <p style=\"float:left\">&nbsp;&nbsp; &nbsp;&nbsp;{{ checklistdetails[0].Other_Observations }}</p>\n                    </div>\n                    <div>\n                         <!-- <br>    <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"EditChecklist()\" >Edit</button> -->\n                   <button type=\"submit\" class=\"btn btn-danger pull-right\"(click)=\"onPdfDownload()\"> Download </button>\n                    </div>\n                </div>\n                </div>\n                <div id=\"divhide\" style=\"background-color: white; margin-top: 20%; border: white\"  >\n                    <table style=\" border: 1px solid black; font:'verdana'; font-size:14px;border-collapse: collapse ; background-color:white; width:90%; margin-left: 3%; margin-right:5%; \">\n                        <thead>\n                        <tr>\n                            <th style=\"width:29%;border: 1px solid black; text-align:center\">\n                                Mumbai <br> International Airport <br > Pvt. Ltd\n                            </th>\n                            <th style=\"width:29% ;font:'verdana';font-size:15px; text-align:center\">\n                                RUNWAY/ TAXIWAY INSPECTION CHECKLIST <hr style=\"border:0.7px solid black\"> Department: ASM\n                            </th>\n                            <th style=\"width:36%;border: 1px solid black; text-align:center\">\n                                Doc. No.: MIAL/AO-ASM/FMT/01/05<br> Date:-29/05/2017 \n                            </th>\n                        </tr>\n                        </thead>\n                    </table>\n                    <br>\n                    <div style=\"margin-left: 3%; margin-right:10%; font-size:18px;\">\n                      <p style=\"text-align:center;\"><b> {{checklistname }} </b></p>  <br>\n                      <b>  Date:</b> &nbsp;&nbsp;&nbsp;&nbsp; {{checklistdetails[0].Date }}\n                      <br>\n                      <br>\n                     <span style=\"float:left\"> <b> RWY inspected: </b>&nbsp;&nbsp;&nbsp;&nbsp;{{ checklistdetails[0].RWY_Inspected }}</span>\n                      <span style=\"float:right\" ><b>Time of Inspection</b> &nbsp;&nbsp;&nbsp;&nbsp; {{checklistdetails[0].Inspection_Time}} </span>\n                      <br><br>\n                      <span>Dawn / Morning / Afternoon / Dusk /Ad-hoc </span>\n                    </div>\n                  \n\n                        </div>\n                        <div class=\"col-md-6 hidden-lg hidden-md text-center\">\n                            <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the  <a href=\"https://design.google.com/icons/\" target=\"_blank\">Material Icons</a></h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IconsComponent = (function () {
    function IconsComponent(http) {
        this.http = http;
        this.pdf = false;
        this.checklistreport = false;
        this.edited = false;
        this.p = 1;
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent.prototype.isLoading = function () {
        this.pdf = true;
        return true;
    };
    IconsComponent.prototype.onSubmit = function (DATE, Inspection_Time) {
        var _this = this;
        this.checklistreport = false;
        this.edited = false;
        console.log("Test");
        this.date = DATE;
        this.time = Inspection_Time;
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //console.log(this.checklist);
        headers1.append("Content-Type", 'application/json');
        headers1.append("Accept", 'application/json');
        var postParams1 = {
            date: DATE,
            time: Inspection_Time
        };
        if (this.checklist == "1") {
            this.checklistreport = true;
            this.edited = false;
            this.checklistname = "RUNWAY INSPECTION CHECKLIST";
            this.http.post('https://mial.csia.in/MicroService/api/RunwayChecklistDetails', JSON.stringify(postParams1), { headers: headers1 })
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.checklistdetails = data;
                console.log(data);
            }, function (error) {
                console.log(error);
            });
        }
        else if (this.checklist == "2") {
            this.checklistreport = true;
            this.edited = false;
            this.checklistname = "TAXIWAY INSPECTION CHECKLIST";
            this.http.post('https://mial.csia.in/MicroService/api/TaxiwayChecklistDetails', JSON.stringify(postParams1), { headers: headers1 })
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.checklistdetails = data;
                //console.log(data);
            }, function (error) {
                console.log(error);
            });
        }
        else if (this.checklist == "3") {
            console.log("Apron Test");
            this.checklistname = "APRON INSPECTION CHECKLIST";
            this.checklistreport = false;
            this.edited = true;
            this.http.post('https://mial.csia.in/MicroService/api/ApronChecklistDetails', JSON.stringify(postParams1), { headers: headers1 })
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.checklistdetails = data;
                //console.log(data);
            }, function (error) {
                console.log(error);
            });
        }
    };
    IconsComponent.prototype.onExcelclick = function () {
        /*const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.checklistdetails);
        const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        this.saveAsExcelFile(excelBuffer, 'ChecklistReport');*/
        if (this.checklist == "1" || this.checklist == "2") {
            var responseData = this.checklistdetails;
            console.log(this.checklistdetails);
            var doc = new jsPDF('p', 'pt');
            var source = document.getElementById('divhide');
            doc.addHTML(source, 20, 20, function () {
                var col = ["Observations", "Acceptability", "Action Taken", "NC Filed Ref. Nr"];
                var rows = [];
                var col1 = ["Department", "Name"];
                var rows1 = [];
                var Other_Observations;
                var Name;
                var Department;
                for (var _i = 0, responseData_1 = responseData; _i < responseData_1.length; _i++) {
                    var item = responseData_1[_i];
                    Department = item['Department_Name'];
                    Other_Observations = item['Other_Observations'];
                    Name = item['Person_Name'];
                    var temp = [item['Observations'], item['Acceptability'], item['Action_Taken'], item['NC_Filed_Ref_No']];
                    rows.push(temp);
                }
                rows1.push(Other_Observations, Name);
                doc.autoTable(col, rows, {
                    /* drawCell: function(cell, data){
                      var rows = data.table.rows;
                      if(data.row.index == rows.length - 1){
                        doc.setFillColor(200, 200, 255);
                      }
                    }, */
                    theme: 'grid',
                    styles: { fontSize: 10, font: "verdana", fontStyle: 'normal', halign: 'center' },
                    margin: { top: 190 },
                    addPageContent: function (data) {
                        //   doc.autoTable(col1, rows1, {
                        //   styles: {fontSize: 10, font: "verdana", fontStyle: 'normal', halign: 'center'},
                        //   margin: { top: 600},
                        //   addPageContent: function(data){
                        //   }
                        // });
                        doc.setFont("verdana");
                        doc.setFontSize(12);
                        doc.text(50, 670, 'Department');
                        doc.text(500, 670, 'Name');
                        doc.setFont("verdana");
                        doc.text(35, 690, Department);
                        doc.text(500, 690, Name);
                        doc.setFont("verdana");
                        doc.setFontSize(14);
                        doc.text(40, 730, 'If other observations observed: ');
                        doc.setFont("verdana");
                        doc.setFontSize(12);
                        doc.text(35, 740, Other_Observations);
                    }
                });
                doc.save('Text.pdf');
            });
            // var col = ["Observations", "Acceptability", "Action Taken", "NC Filed Ref. Nr"];
            // var rows = [];
            // for( let item of responseData )
            // {
            //   var temp = [item['Observations'], item['Acceptability'], item['Action_Taken'], item['NC_Filed_Ref_No']];
            //   rows.push(temp);
            // }
            /* doc.fromHTML( '<table id="divhide" ><tr><td >Mumbai <br> International Airport <br > Pvt. Ltd</td><td >RUNWAY/ TAXIWAY INSPECTION CHECKLIST <hr> Department: ASM</td><td>Doc. No.: MIAL/AO-ASM/FMT/01/05<br> Date:-29/05/2017 </td></tr></table>', 20,30 , {
              'fontSize': 8,
              'font': "verdana",
              left: 40,
              'width': 522,
            }
        //   ); */
            //     doc.autoTable(col, rows, {
            //     /* drawCell: function(cell, data){
            //       var rows = data.table.rows;
            //       if(data.row.index == rows.length - 1){
            //         doc.setFillColor(200, 200, 255);
            //       }
            //     }, */
            //     theme: 'grid',
            //     styles: {fontSize: 10, font: "verdana", fontStyle: 'normal', halign: 'center'},
            //     margin: { top: 100},
            //     addPageContent: function(data){
            //     }
            //   });
            //   doc.save('Test.pdf');
        }
        else if (this.checklist == "3") {
        }
    };
    IconsComponent.prototype.onPdfDownload = function () {
        var responseData = this.checklistdetails;
        console.log(responseData);
        console.log("apron");
        var doc = new jsPDF('p', 'pt');
        var source = document.getElementById('divhide');
        doc.addHTML(source, 20, 20, function () {
            var col = ["Stand", "Surface Condition", "Markings", "Cleaning", "Serviceability", "Action Taken"];
            var rows = [];
            var Other_Observations;
            var Name;
            var Department;
            for (var _i = 0, responseData_2 = responseData; _i < responseData_2.length; _i++) {
                var item = responseData_2[_i];
                Department = item['Department_Name'];
                Other_Observations = item['Other_Observations'];
                Name = item['OfficerName'];
                var temp = [item['Stand'], item['Surface_Condition'], item['Markings'], item['Cleaning'], item['Serviceability'], item['ActionTaken']];
                rows.push(temp);
            }
            console.log(responseData);
            console.log("apron");
            console.log(rows);
            doc.autoTable(col, rows, {
                /* drawCell: function(cell, data){
                  var rows = data.table.rows;
                  if(data.row.index == rows.length - 1){
                    doc.setFillColor(200, 200, 255);
                  }
                }, */
                theme: 'grid',
                styles: { fontSize: 10, font: "verdana", fontStyle: 'normal', halign: 'center' },
                margin: { top: 180 },
                addPageContent: function (data) {
                }
            });
            doc.save('apron.pdf');
        });
    };
    IconsComponent.prototype.onChecklistSelect = function () {
        var _this = this;
        this.checklistreport = false;
        this.edited = false;
        this.checklist = this.checklisttype;
        if (this.checklisttype == "1") {
            this.http.get('https://mial.csia.in/MicroService/api/RunwayApprovalList/').map(function (res) { return res.json(); }).subscribe(function (data1) {
                _this.runwaylist = data1;
                //console.log(this.runwaylist);
            }, function (err) {
                console.log("error has occured");
            });
        }
        else if (this.checklisttype == "2") {
            this.http.get('https://mial.csia.in/MicroService/api/TaxiwayApprovalList/').map(function (res) { return res.json(); }).subscribe(function (data1) {
                _this.runwaylist = data1;
                //console.log(this.runwaylist);
            }, function (err) {
                console.log("error has occured");
            });
        }
        else if (this.checklisttype == "3") {
            this.http.get('https://mial.csia.in/MicroService/api/ApronApprovalList/').map(function (res) { return res.json(); }).subscribe(function (data1) {
                _this.runwaylist = data1;
                //console.log(this.runwaylist);
            }, function (err) {
                console.log("error has occured");
            });
        }
    };
    IconsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-icons',
            template: __webpack_require__("../../../../../src/app/icons/icons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/icons/icons.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], IconsComponent);
    return IconsComponent;
    var _a;
}());

//# sourceMappingURL=icons.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".align{\r\n    text-align:center;\r\n     width:100%;\r\n      margin-left: auto;\r\n       margin-right:auto\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\" >\n  <div class=\"title\">\n      Welcome\n  </div>\n  <div class=\"panel-body\">\n      <div class=\"row\">\n          <div class=\"input-field col s12\">\n              <label for=\"email\">Email</label>\n              <input [(ngModel)]=\"user.email\" id=\"email\" \n                  type=\"email\" class=\"validate\">         \n          </div>\n      </div>\n\n      <div class=\"row\">\n          <div class=\"input-field col s12\">\n              <label for=\"password\">Password</label>\n              <input [(ngModel)]=\"user.password\" id=\"password\" \n                  type=\"password\" class=\"validate\">          \n          </div>\n      </div>\n\n      <span>{{errorMsg}}</span>\n      <button (click)=\"login()\" \n          class=\"btn waves-effect waves-light\" \n          type=\"submit\" name=\"action\">Login</button>\n  </div>\n</div> -->\n\n\n<html>\n  <title> Airside Safety Login Template </title>\n  <head>\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"../assets/css/style.css\" />\n    <link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' rel='stylesheet' type='text/css'>\n    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>\n    <meta name=\"Description\" content=\"Login page design using html and css - coder glass\" />\n    <meta name=\"Keywords\" content=\"free, tutorial, on, Java programming, jsp, ejb, html, css, xml, java script, jquery, ajax, php, sql, mysql, database, jdbc,\n    odbc, spring, struts, hibernate, array, ANT, servlet, awt, code, programe, gmail, programming, Latest, facebook script, google script,\n    twitter script, ecommerce, Technologies, Free, Tutorials, Reference, Examples, coder glass, coderglas, coder\" />\n    <meta property=\"og:locale\" content=\"en_US\" />\n    <meta property=\"og:type\" content=\"website\" />\n    <meta property=\"fb:app_id\" content=\"933988933316672\" />\n    <meta property=\"og:site_name\" content=\"www.coderglass.com\" />\n  </head>\n  <body>\n    <script>\n      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n      ga('create', 'UA-73364464-1', 'auto');\n      ga('send', 'pageview');\n    </script>\n\n    <div class=\"align\">\n      <div class=\"base\">\n        <div id=\"logo\">\n          <img src=\"../assets/img/CSIA_logo_new.png\" width=\"250\" height=\"70\" />\n        </div>\n        <div id=\"info1\" class=\"align\">\n          Get Login\n        </div>\n        <div id=\"info2\" class=\"align\">\n          Sign in to continue to Airside Safety\n        </div>\n        <div id=\"form1\" class=\"align\">\n          <div id=\"form-img\" style=\"margin-left:35%\">\n            <img src=\"../assets/img/user.png\" width=\"99\" height=\"99\" />\n          </div>\n          <div id=\"mailbox\">\n            <input placeholder=\"Enter your username\" [(ngModel)]=\"user.email\" id=\"email\" type=\"email\" class=\"validate\"\n              style=\"width: 270px; height: 42px; border: solid 1px #c2c4c6; font-size: 16px; padding-left:8px; \" />\n          </div>\n          <div id=\"mailbox\">\n              <input [(ngModel)]=\"user.password\" id=\"password\" type=\"password\" class=\"validate\" placeholder=\"Enter your Password\"\n              style=\"width: 270px; height: 42px; border: solid 1px #c2c4c6; font-size: 16px; padding-left:8px; \" />\n          </div>\n          <div style=\" margin-top: 5%;\">\n            <input type=\"submit\" id=\"button2\" text=\"Login\" (click)=\"login()\" name=\"action\"/>\n          </div>\n        </div>\n        <br/>\n        <div id=\"info5\">\n          One account for everything you need.\n        </div>\n        \n        <div id=\"bottom\">\n            <div style=\"float:right; margin-right: 5%;\">\n                <img src=\"../assets/img/GVK_new.png\" id=\"logo2\" />\n              </div>\n          <ul>\n            <li> &copy; http://csia.in/ </li>\n            <li> Designed by MIAL Application Team </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(_service) {
        this._service = _service;
        this.user = {
            'email': '',
            'password': ''
        };
        this.errorMsg = '';
    }
    LoginComponent.prototype.login = function () {
        if (!this._service.login(this.user)) {
            this.errorMsg = 'Failed to login';
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login',
            providers: [__WEBPACK_IMPORTED_MODULE_1_app_authentication_service__["a" /* AuthenticationService */]],
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapsComponent = (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(19.0896, 72.8656);
        var myLatlng1 = new google.maps.LatLng(19.0896, 72.8756);
        var mapOptions = {
            zoom: 15,
            center: myLatlng,
            scrollwheel: false,
            styles: [
                { 'featureType': 'water', 'stylers': [{ 'saturation': 43 }, { 'lightness': -11 }, { 'hue': '#0088ff' }] },
                { 'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{ 'hue': '#ff0000' },
                        { 'saturation': -100 }, { 'lightness': 99 }] },
                { 'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#808080' },
                        { 'lightness': 54 }] },
                { 'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ece2d9' }] },
                { 'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ccdca1' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#767676' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#ffffff' }] },
                { 'featureType': 'poi', 'stylers': [{ 'visibility': 'off' }] },
                { 'featureType': 'landscape.natural', 'elementType': 'geometry.fill', 'stylers': [{ 'visibility': 'on' },
                        { 'color': '#b8cb93' }] },
                { 'featureType': 'poi.park', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.sports_complex', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.medical', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.business', 'stylers': [{ 'visibility': 'simplified' }] }
            ]
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var Marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Hello World!'
        });
        var Marker1 = new google.maps.Marker({
            position: myLatlng1,
            title: 'Test World!'
        });
        // To add the marker to the map, call setMap();
        Marker.setMap(map);
        Marker1.setMap(map);
    };
    MapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-maps',
            template: __webpack_require__("../../../../../src/app/maps/maps.component.html"),
            styles: [__webpack_require__("../../../../../src/app/maps/maps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());

//# sourceMappingURL=maps.component.js.map

/***/ }),

/***/ "../../../../../src/app/master-page/master-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/master-page/master-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n              <div class=\"card\">\n                  <div class=\"card-header\" data-background-color=\"red\">\n                      <h4 class=\"title\">Master Page</h4>\n                      <p class=\"category\">This section allows you to to change the parameters.</p>\n                  </div>\n                  <div class=\"card-content table-responsive\" >\n                     \n                      <div class=\"row\">\n                          \n\n                      </div>\n                      <div class=\"card-content table-responsive\">\n                                    \n                         <table>\n                           <tr>\n                             <td>\n                              <b>  Date:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                             </td>\n                             <td>\n                                <input type=\"text\" name=\"reportdate\" [(ngModel)]=\"reportsdate\">\n                             </td>\n                         \n                           </tr>\n                          </table>\n                          <br/> \n                          <table>\n                           <tr>\n                             <td>\n                                <b>  Doc No.:</b>&nbsp;&nbsp;&nbsp;\n                             </td>\n                             <td>\n                                <input type=\"text\" name=\"docno\" [(ngModel)]=\"docnumber\">\n                             </td>\n                           </tr>\n                       \n                          </table>\n                          <br/>\n                          <div> <button type=\"submit\" style=\"margin-top:0px;height:35px;text-align:center\" class=\"btn btn-danger\" (click)=\"onSave()\">Save</button></div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <app-dialog [(visible)]=\"showDialog\">\n        <h1>Data Saved</h1>\n        <button (click)=\"showDialog = !showDialog\" class=\"btn\">Close</button>\n      </app-dialog>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/master-page/master-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MasterPageComponent = (function () {
    function MasterPageComponent(http) {
        var _this = this;
        this.http = http;
        this.showDialog = false;
        this.http.get('https://mial.csia.in/MicroService/api/addMaster/').map(function (res) { return res.json(); }).subscribe(function (data1) {
            _this.masterdata = data1;
            console.log(data1);
            _this.reportsdate = _this.masterdata[0].Date_Field;
            _this.docnumber = _this.masterdata[0].Document_Number;
        }, function (err) {
            console.log("error has occured");
        });
    }
    MasterPageComponent.prototype.onSave = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var postparams = {
            date: this.reportsdate,
            doc_no: this.docnumber,
            user: localStorage.getItem("user")
        };
        this.http.post('https://mial.csia.in/MicroService/api/addMaster/', JSON.stringify(postparams), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.showDialog = !_this.showDialog;
        }, function (error) {
            console.log(error);
        });
    };
    MasterPageComponent.prototype.ngOnInit = function () {
    };
    MasterPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-master-page',
            template: __webpack_require__("../../../../../src/app/master-page/master-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/master-page/master-page.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], MasterPageComponent);
    return MasterPageComponent;
    var _a;
}());

//# sourceMappingURL=master-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-header\" data-background-color=\"red\">\n                <h4 class=\"title\">Notifications</h4>\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\n            </div>\n            <div class=\"card-content\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h5>Notifications Style</h5>\n                        <div class=\"alert alert-info\">\n                            <span>This is a plain notification</span>\n                        </div>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span>This is a notification with close button.</span>\n                        </div>\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                        </div>\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h5>Notification states</h5>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                        </div>\n                        <div class=\"alert alert-success\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                        </div>\n                        <div class=\"alert alert-warning\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                        </div>\n                        <div class=\"alert alert-danger\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                        </div>\n                        <div class=\"alert alert-primary\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n                        </div>\n                    </div>\n                </div>\n\n                <br>\n                <br>\n\n                <div class=\"places-buttons\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-md-offset-3 text-center\">\n                            <h5>Notifications Places\n                                <p class=\"category\">Click to view notifications</p>\n                            </h5>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-8 col-md-offset-2\">\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-8 col-md-offset-2\">\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationsComponent = (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-notifications',
            template: __webpack_require__("../../../../../src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());

//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ "../../../../../src/app/table-list/table-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.pokeball {\r\n    width: 150px;\r\n    height: 150px;\r\n    position: absolute;\r\n    display: inline-block;\r\n    -webkit-animation: rotate 1.5s linear infinite;\r\n            animation: rotate 1.5s linear infinite;\r\n    left: calc(50% - 75px);\r\n    top: calc(50% - 75px);\r\n    opacity: 0.5;\r\n    \r\n  }\r\n  .pokeball .inner {\r\n    width: 150px;\r\n    height: 75px;\r\n    border: 48px solid #f06969;\r\n    box-sizing: border-box;\r\n  }\r\n  .pokeball .upper, .pokeball .lower {\r\n    width: 100%;\r\n    position: absolute;\r\n    height: calc(50% - 5px);\r\n    overflow: hidden;\r\n  }\r\n  .pokeball .upper {\r\n    top: 0;\r\n  }\r\n  .pokeball .upper .inner {\r\n    border-radius: 123px 123px 0 0;\r\n    border-bottom: 0;\r\n    margin-bottom: -5px;\r\n  }\r\n  .pokeball .lower {\r\n    bottom: 0;\r\n  }\r\n  .pokeball .lower .inner {\r\n    margin-top: -5px;\r\n    border-radius: 0 0 123px 123px;\r\n    border-top: 0;\r\n  }\r\n  .pokeball .middle {\r\n    border-radius: 50%;\r\n    width: 40px;\r\n    height: 40px;\r\n    background-color: #f2f3ea;\r\n    position: absolute;\r\n    left: calc(50% - 20px);\r\n    top: calc(50% - 20px);\r\n  }\r\n  \r\n  @-webkit-keyframes rotate {\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  @keyframes rotate {\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/table-list/table-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\" *ngIf=\"myVar\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\">Select Report Type</h4>\n                        <p class=\"category\">This section allows you to choose reports of your choice.</p>\n                    </div>\n                    <div class=\"card-content table-responsive\" >\n                     \n                                <div class=\"row\">\n                                    <div class=\"col-md-5\">\n                                        <div class=\"form-group form-black label-floating is-empty\">\n                                            <label class=\"control-label\" style=\"color: black;\">Checklist Type</label>\n                                            <!-- <input type=\"text\" class=\"form-control\" disabled> -->\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group form-black label-floating is-empty\">\n                                           \n                                          <select  [(ngModel)]=\"checklisttype\" style=\"  padding: 5px 8px;\n                                                                                        width: 100%;\n                                                                                        box-shadow: none;\n                                                                                        background: transparent;\n                                                                                        background-image: none;\n                                                                                        -webkit-appearance: none;\">\n                                        \n                                              <option [ngValue]=\"1\"> Runway Checklist </option>\n                                              <option [ngValue]=\"2\"> Taxiway Checklist </option>\n                                              <option [ngValue]=\"3\"> Apron Checklist </option>\n                                         </select>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <div class=\"form-group form-black label-floating is-empty\" >\n                                                  \n                                                <button type=\"submit\" style=\"margin-top:0px;height:35px;text-align:center\" class=\"btn btn-danger\" (click)=\"onChecklistType()\">Submit</button>\n                                                </div>\n                                            </div>\n                                </div>\n                                \n                                <div class=\"card-content table-responsive\">\n                                    \n                                <button *ngFor=\"let item of runwaylist | paginate: { itemsPerPage: 5, currentPage: p };\"  (click)=\"onSubmit(item.DATE,item.Inspection_Time)\" style=\"background-color:white;width:100%;height:50px; text-align:left\">\n                              \n                                    <b>Date: </b>&nbsp;&nbsp;\n                                    {{ item.DATE  }} \n                                   <b>Time: </b> &nbsp;&nbsp;\n                                    {{ item.Inspection_Time }}\n                                    \n                                    \n                                </button>\n                                <pagination-controls (pageChange)=\"p = $event\" ></pagination-controls>\n                           \n                                \n                            </div>\n                           \n\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\" *ngIf=\"checklistreport\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\">Report Template</h4>\n                        <p class=\"category\">This section provides analytical view of airside reports</p>\n                    </div>\n                    \n                    <div class=\"card-content table-responsive\"  >\n                                        \n                        <table class=\"table table-hover\">\n                            <thead>\n                                <tr>\n                                    <th style=\"width:10%; font-weight:bold; text-align:center\">ID</th>\n                                    <th  style=\"width:25%;font-weight:bold; text-align:center\">Observations</th>\n                                    <th style=\"width:10%;font-weight:bold; text-align:center\">Acceptability</th>\n                                    <th style=\"width:15%;font-weight:bold; text-align:center\">Nc Filed Ref No.</th>\n                                    <th style=\"width:40%;font-weight:bold; text-align:center\">Action Taken</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                \n                                <tr *ngFor=\"let user of checklistdetails; let i=index\">\n                                        <td style=\"width:10%; text-align:center\">{{i+1}}</td>\n                                    <td style=\"width:25%; text-align:center\"> {{ user.Observations }}</td>\n                                    <td style=\"width:10%; text-align:center\" [ngSwitch]=\"user.Acceptability\"> <p *ngSwitchCase=\"'+'\" style=\" background-color: rgb(59, 152, 79);\">{{ user.Acceptability }}</p> \n                                        <p *ngSwitchCase=\"'-'\" style=\" background-color: rgb(241, 8, 8);\">{{ user.Acceptability }}</p> \n                                        <p *ngSwitchCase=\"'0'\" style=\" background-color: rgb(207, 250, 53);\">{{ user.Acceptability }}</p>\n                                      </td>\n                                    <td style=\"width:15%; text-align:center\"> {{ user.NC_Filed_Ref_No }}</td>\n                                    <td style=\"width:40%;text-align:center\">{{user.Action_Taken}}</td>\n                                    \n                                </tr>\n                               \n                            </tbody>\n                        </table>\n                        <br/>\n                        <br />\n                        <div>\n                            <span style=\"float:left; font-weight:bold;\">Name of Safety Officier</span> <p style=\"float:left\">&nbsp;&nbsp; &nbsp;&nbsp;{{ checklistdetails[0].Person_Name }}</p>\n                        </div>\n                        <br />\n                        <br />\n                        <div>\n                           <span style=\"float:left; font-weight:bold;\">Other Observations</span> \n                           <p style=\"float:left\">&nbsp;&nbsp; &nbsp;&nbsp;{{ checklistdetails[0].Other_Observations }}</p>\n                        </div>\n                        <div>\n                             <br>\n                             <br>\n                             <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"return()\"> Cancel </button> \n                             <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"approveChecklist()\"> Approve Checklist </button>\n                             <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"EditChecklist()\"> Edit Checklist </button> \n                        </div>\n                    </div>\n                </div>                  \n            </div>\n\n            <!-- Apron Checklist Report -->\n\n            <div class=\"col-md-12\">\n                    <div class=\"card card-plain\" *ngIf=\"edited\">\n                        <div class=\"card-header\" data-background-color=\"red\">\n                            <h4 class=\"title\">Report Template</h4>\n                            <p class=\"category\">This section provides analytical view of airside reports</p>\n                        </div>\n                        <div class=\"card-content table-responsive\"  >\n                            <table class=\"table table-hover\">\n                                <thead>\n                                    <tr>\n                                        <th style=\"width:10%; font-weight:bold; text-align:center\">ID</th>\n                                        <th  style=\"width:10%;font-weight:bold; text-align:center\">Stand</th>\n                                        <th style=\"width:20%;font-weight:bold; text-align:center\">Surface Condition</th>\n                                        <th style=\"width:10%;font-weight:bold; text-align:center\">Markings</th>\n                                        <th style=\"width:10%;font-weight:bold; text-align:center\">Cleaning</th>\n                                        <th style=\"width:20%;font-weight:bold; text-align:center\">Serviceability</th>\n                                        <th style=\"width:20%;font-weight:bold; text-align:center\">Action Taken</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let view of checklistdetails; let i=index\">\n                                        <td style=\"width:10%; text-align:center\"> {{ i+1 }} </td>\n                                        <td style=\"width:10%; text-align:center\"> {{ view.Stand }} </td>\n                                        <td style=\"width:20%; text-align:center\"> {{ view.Surface_Condition }} </td>\n                                        <td style=\"width:10%; text-align:center\"> {{ view.Markings }}</td>\n                                        <td style=\"width:10%;text-align:center\"> {{ view.Cleaning }} </td>\n                                        <td style=\"width:20%;text-align:center\"> {{ view.Serviceability }} </td>\n                                        <td style=\"width:20%;text-align:center\"> {{ view.ActionTaken }} </td>   \n                                    </tr>                                   \n                                </tbody>\n                            </table>\n                            <br />\n\n                            <div>\n                                <span style=\"float:left; font-weight:bold;\">Name of Safety Officier</span> <p style=\"float:left\">&nbsp;&nbsp; &nbsp;&nbsp;{{ checklistdetails[0].OfficierName }}</p>\n                            </div>\n                            \n                            <br />\n                            <br />\n                            <div>\n                               <span style=\"float:left; font-weight:bold;\">Other Observations</span> <p style=\"float:left\">&nbsp;&nbsp; &nbsp;&nbsp;{{ checklistdetails[0].Other_Observations }}</p>\n                            </div>\n                            <div>\n                                 <!-- <br>    <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"EditChecklist()\" >Edit</button> -->\n                                 <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"return()\"> Cancel </button> \n                                 <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"approveChecklist()\"> Approve Checklist </button>\n                                 <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"editApronChecklist()\"> Edit Checklist </button>\n                            </div>\n                        </div>\n                        </div>\n                        \n                </div>\n\n\n\n\n            <!-- edit checklist report module -->\n            \n\n                   \n       \n        </div>\n        <div class=\"card-content table-responsive\" *ngIf=\"editchecklist\">\n                <form #myForm=\"ngForm\">\n                        <fieldset ngModelGroup=\"inputs\" #inputs=\"ngModelGroup\">\n                <table class=\"table table-hover\">\n                    <thead>\n                        <tr>\n                            <th style=\"width:10%; font-weight:bold; text-align:center\">ID</th>\n                            <th  style=\"width:25%;font-weight:bold; text-align:center\">Observations</th>\n                            <th style=\"width:10%;font-weight:bold; text-align:center\">Acceptability</th>\n                            <th style=\"width:15%;font-weight:bold; text-align:center\">Nc Filed Ref No.</th>\n                            <th style=\"width:40%;font-weight:bold; text-align:center\">Action Taken</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let user of checklistdetails; let i=index\">\n                            <td style=\"width:10%; text-align:center\">{{i+1}}</td>\n                            <td style=\"width:25%; text-align:center\"> {{ user.Observations }}</td>\n                            <td style=\"width:10%; text-align:center\">  \n                                 <select name=\"{{'acceptability'+i}}\"  [(ngModel)]=\"user.Acceptability\">\n                                    <option *ngFor=\"let runwaysurfacesigns of acceptabilitySigns\"  [value]=\"runwaysurfacesigns\">\n                                      {{ runwaysurfacesigns }}\n                                    </option>\n                                  </select>\n                            </td>\n                            <td style=\"width:15%; text-align:center\">   <input type=\"text\" name=\"{{'ncfiled'+i}}\" [(ngModel)]=\"user.NC_Filed_Ref_No\"> </td>\n                            <td style=\"width:40%;text-align:center\"> <input type=\"text\" name=\"{{'actiontaken'+i}}\" [(ngModel)]=\"user.Action_Taken\"> </td>\n                            \n                        </tr>\n                       \n                    </tbody>\n                </table>\n            </fieldset>\n               \n                <div>\n                     <br>    <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"updatechecklist(myForm)\" >Submit</button>\n                     <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"return()\" >Cancel</button>\n                     </div>\n                </form>\n\n            \n            </div>\n            <div class=\"card-content table-responsive\" *ngIf=\"editapronchecklist\">\n                <form #myForm=\"ngForm\">\n                <fieldset ngModelGroup=\"inputs\" #inputs=\"ngModelGroup\">\n                <table id=\"aprontable\" class=\"table table-hover\">\n                    <thead>\n                        <tr>\n                            <th style=\"width:10%; font-weight:bold; text-align:center\">ID</th>\n                            <th  style=\"width:25%;font-weight:bold; text-align:center\">Stand</th>\n                            <th style=\"width:10%;font-weight:bold; text-align:center\">Surface Condition</th>\n                            <th style=\"width:15%;font-weight:bold; text-align:center\">Markings</th>\n                            <th style=\"width:40%;font-weight:bold; text-align:center\">Cleaning</th>\n                            <th style=\"width:40%;font-weight:bold; text-align:center\">Serviceability</th>\n                            <th style=\"width:40%;font-weight:bold; text-align:center\">Action Taken</th>\n                        </tr>\n                    </thead>\n                    <tbody id=\"apronbody\">\n                        <tr *ngFor=\"let view of checklistdetails; let i=index\">\n                            <td style=\"width:10%; text-align:center\"> {{ i+1 }} </td>\n                            <td style=\"width:25%; text-align:center\"> \n                                <input type=\"text\" name=\"{{ 'stand'+i  }}\" [(ngModel)]=\"view.Stand\"> \n                            </td>\n                            <td style=\"width:10%; text-align:center\"> \n                                <input type=\"text\" name=\"{{ 'surfacecondition'+i }}\" [(ngModel)]=\"view.Surface_Condition\"> \n                            </td>\n                            <td style=\"width:15%; text-align:center\"> \n                                <input type=\"text\" name=\"{{'markings'+i }}\" [(ngModel)]=\"view.Markings\"> \n                            </td>\n                            <td style=\"width:40%; text-align:center\"> \n                                <input type=\"text\" name=\"{{'cleaning'+i }}\" [(ngModel)]=\"view.Cleaning\"> \n                            </td>\n                            <td style=\"width:40%; text-align:center\"> \n                                <input type=\"text\" name=\"{{ 'serviceability'+i }}\" [(ngModel)]=\"view.Serviceability\"> \n                            </td>\n                            <td style=\"width:40%; text-align:center\"> \n                                <input type=\"text\" name=\"{{ 'actiontaken'+i }}\" [(ngModel)]=\"view.ActionTaken\"> \n                            </td>\n                        </tr>\n                       \n                    </tbody>\n                </table>\n            </fieldset>\n               \n                <div>\n                     <br>    <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"updateApronEditedChecklist(myForm)\"> Submit </button>\n                     </div>\n                </form>\n\n            \n            </div>\n\n            <app-dialog [(visible)]=\"showDialog\">\n                <h1>Data Saved Successfully!</h1>\n                <button (click)=\"showDialog = !showDialog\" class=\"btn\">Exit</button>\n            </app-dialog>\n            <div *ngIf=\"loading\" >\n                    <div class=\"pokeball\">\n                      <div class=\"upper\">\n                        <div class=\"inner\"></div>\n                      </div>\n                      <div class=\"middle\"></div>\n                      <div class=\"lower\">\n                        <div class=\"inner\"></div>\n                      </div>\n                    </div>\n                </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/table-list/table-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var TableListComponent = (function () {
    function TableListComponent(http) {
        this.http = http;
        this.loading = false;
        this.p = 1;
        this.reportpattern = false;
        this.acceptabilitySigns = ['+', '-', '0'];
        this.myVar = true;
        this.editchecklist = false;
        this.editapronchecklist = false;
        this.checklistreport = false;
        this.edited = false;
        this.approve = true;
        this.showDialog = false;
    }
    //Load checklist List
    TableListComponent.prototype.onChecklistType = function () {
        var _this = this;
        this.checklist = this.checklisttype;
        this.loading = true;
        if (this.checklisttype == "1") {
            this.http.get('https://mial.csia.in/MicroService/api/RunwayChecklist/').map(function (res) { return res.json(); }).subscribe(function (data1) {
                _this.runwaylist = data1;
                //console.log(this.runwaylist);
                _this.loading = false;
            }, function (err) {
                console.log("error has occured");
                _this.loading = false;
            });
        }
        else if (this.checklisttype == "2") {
            this.http.get('https://mial.csia.in/MicroService/api/TaxiwayChecklist/').map(function (res) { return res.json(); }).subscribe(function (data1) {
                _this.runwaylist = data1;
                _this.loading = false;
                //console.log(this.runwaylist);
            }, function (err) {
                console.log("error has occured");
                _this.loading = false;
            });
        }
        else if (this.checklisttype == "3") {
            this.http.get('https://mial.csia.in/MicroService/api/ApronChecklist/').map(function (res) { return res.json(); }).subscribe(function (data1) {
                _this.runwaylist = data1;
                //console.log(this.runwaylist);
                _this.loading = false;
            }, function (err) {
                console.log("error has occured");
                _this.loading = false;
            });
        }
        console.log(this.checklisttype[0].Other_observations);
    };
    //Get Checklist Details
    TableListComponent.prototype.onSubmit = function (DATE, Inspection_Time) {
        var _this = this;
        this.date = DATE;
        this.time = Inspection_Time;
        this.myVar = false;
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //console.log(this.checklist);
        headers1.append("Content-Type", 'application/json');
        headers1.append("Accept", 'application/json');
        var postParams1 = {
            date: DATE,
            time: Inspection_Time
        };
        this.loading = true;
        if (this.checklist == "1") {
            this.checklistreport = true;
            this.http.post('https://mial.csia.in/MicroService/api/RunwayChecklistDetails', JSON.stringify(postParams1), { headers: headers1 })
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.checklistdetails = data;
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
            });
        }
        else if (this.checklist == "2") {
            this.checklistreport = true;
            this.http.post('https://mial.csia.in/MicroService/api/TaxiwayChecklistDetails', JSON.stringify(postParams1), { headers: headers1 })
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.checklistdetails = data;
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
            });
        }
        else if (this.checklist == "3") {
            this.edited = true;
            this.http.post('https://mial.csia.in/MicroService/api/ApronChecklistDetails', JSON.stringify(postParams1), { headers: headers1 })
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.checklistdetails = data;
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    //Export to excel
    /*private saveAsExcelFile(buffer: any, fileName: string): void {
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }*/
    //Edit Checklist
    TableListComponent.prototype.EditChecklist = function () {
        this.editchecklist = true;
        this.checklistreport = false;
    };
    TableListComponent.prototype.editApronChecklist = function () {
        this.edited = false;
        this.editapronchecklist = true;
    };
    TableListComponent.prototype.approveChecklist = function () {
        var _this = this;
        this.loading = true;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var postparams = {
            date: this.date,
            time: this.time,
            approved: this.approve,
            approvedby: localStorage.getItem("user")
        };
        //console.log(this.date);
        //console.log(this.time);
        //console.log(this.checklist);
        if (this.checklist == "1") {
            this.http.post('https://mial.csia.in/MicroService/api/ApproveRunwayChecklist', JSON.stringify(postparams), { headers: headers })
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.showDialog = !_this.showDialog;
                _this.loading = false;
                _this.onChecklistType();
            }, function (error) {
                _this.loading = false;
                console.log(error);
            });
        }
        else if (this.checklist == "2") {
            this.http.post('https://mial.csia.in/MicroService/api/ApproveTaxiwayChecklist', JSON.stringify(postparams), { headers: headers })
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.loading = false;
                _this.showDialog = !_this.showDialog;
                _this.onChecklistType();
            }, function (error) {
                _this.loading = false;
                console.log(error);
            });
        }
        else if (this.checklist == "3") {
            this.http.post('https://mial.csia.in/MicroService/api/ApproveApronChecklist', JSON.stringify(postparams), { headers: headers })
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.showDialog = !_this.showDialog;
                _this.loading = false;
                _this.onChecklistType();
            }, function (error) {
                console.log(error);
                _this.loading = false;
            });
        }
        this.checklistreport = false;
        this.edited = false;
        this.myVar = true;
    };
    TableListComponent.prototype.return = function () {
        this.checklistreport = false;
        this.edited = false;
        this.editchecklist = false;
        this.editapronchecklist = false;
        this.myVar = true;
    };
    // Update Checklist
    TableListComponent.prototype.updatechecklist = function (myForm) {
        var _this = this;
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers1.append("Content-Type", 'application/json');
        headers1.append("Accept", 'application/json');
        var postParams1 = myForm.form.value.inputs;
        postParams1['date'] = this.date;
        postParams1['time'] = this.time;
        if (this.checklist == "1") {
            this.http.post('https://mial.csia.in/MicroService/api/RunwayActionTaken', JSON.stringify(postParams1), { headers: headers1 })
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.showDialog = !_this.showDialog;
                _this.return();
            }, function (error) {
                console.log(error);
            });
        }
        else if (this.checklist == "2") {
            this.http.post('https://mial.csia.in/MicroService/api/TaxiwayActionTaken', JSON.stringify(postParams1), { headers: headers1 })
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.showDialog = !_this.showDialog;
                _this.return();
                console.log("data is sent");
            }, function (error) {
                console.log(error);
            });
        }
    };
    TableListComponent.prototype.updateApronEditedChecklist = function (myForm) {
        var _this = this;
        console.log("test");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        headers.append("Accept", 'application/json');
        /*let postparams:any=[
         {
           'Stand':'',
           'Surface_Condition':''
         } ];
        // = myForm.form.value.inputs;
         i=0;
         console.log(v);
         while (i <v-1)
         {
           let stand:string;
           stand='stand'+i;
           //console.log(stand);
           //console.log(myForm.form.value.inputs.surfacecondition0);
           var surfacecondition = 'surfacecondition'+i;
           console.log(surfacecondition);
           let pp1=myForm.form.value.inputs;
           postparams.push({
            'Stand':pp1.stand,
            'Surface_Condition':pp1.surfacecondition
           });
           i=i+1;
         }
        console.log(postparams);*/
        var postparams = {
            'paramset': this.checklistdetails
        };
        console.log(postparams);
        this.http.post('https://mial.csia.in/MicroService/api/ApronActionTaken', JSON.stringify(postparams), { headers: headers })
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.showDialog = !_this.showDialog;
            _this.return();
        }, function (error) {
            console.log(error);
        });
    };
    TableListComponent.prototype.ngOnInit = function () {
    };
    TableListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-table-list',
            template: __webpack_require__("../../../../../src/app/table-list/table-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/table-list/table-list.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], TableListComponent);
    return TableListComponent;
    var _a;
}());

//# sourceMappingURL=table-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"red\">\n                    <h4 class=\"title\">Send Mail</h4>\n                    <p class=\"category\">Send Notification to concern departments for solving the issue </p>\n                </div>\n                <div class=\"card-content\">\n                    <div id=\"typography\">\n                        <!-- <div class=\"title\">\n                            <h2>Send Email </h2>\n                        </div> -->\n                        <br />\n                        <br />\n                        <div class=\"row\">\n                             <div class=\"tim-typo\">\n                                    <span class=\"tim-note\" style=\"color: black;\"> Department </span>\n                                    <select style=\"width:20%\" [(ngModel)]=\"dept\">\n                                        <option *ngFor=\"let dept of departments\" [ngValue]=\"dept.Dept_ID \">{{ dept.DepartmentName }}</option>                                    \n                                    </select>\n                             </div>\n                            <div class=\"tim-typo\">\n                            <span class=\"tim-note\" style=\"color: black;\">Priority</span>  \n                            <select style=\"width:20%\"  [(ngModel)]=\"priority\" >\n                                    <option *ngFor=\"let item of prioritylist\" [ngValue]=\"item.PriorityID \">{{ item.PName }}</option>\n                                  \n                                </select> \n                            </div>\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\" style=\"color: black;\">Email Text</span>  \n                                <textarea style=\"float:right; min-width: 100%; max-width: 100%;\" rows=\"4\" cols=\"50\"  [(ngModel)]=\"txtobservations\"></textarea>\n                                <br/>\n                                <br/>\n                            </div>\n                         \n                            <div class=\"tim-typo\">\n                            <button style=\"padding-top: 20px;\" class=\"btn btn-danger\" (click)=\"sendEmail()\"> Send Email</button>\n                            </div>\n                           \n                          \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-dialog [(visible)]=\"showDialog\">\n                <h1>Mail Sent</h1>\n                <button (click)=\"showDialog = !showDialog\" class=\"btn\">Close</button>\n              </app-dialog>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypographyComponent = (function () {
    function TypographyComponent(http) {
        var _this = this;
        this.http = http;
        this.showDialog = false;
        this.http.get('https://mial.csia.in/MicroService/api/Department/').map(function (res) { return res.json(); }).subscribe(function (data1) {
            _this.departments = data1;
        }, function (err) {
            console.log("error has occured");
        });
        this.http.get('https://mial.csia.in/MicroService/api/Priority/').map(function (res) { return res.json(); }).subscribe(function (data1) {
            _this.prioritylist = data1;
        }, function (err) {
            console.log("error has occured");
        });
    }
    TypographyComponent.prototype.sendEmail = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var postparams = {
            Dept_ID: this.dept,
            Priority: this.priority,
            observation: this.txtobservations
        };
        this.http.post('https://mial.csia.in/MicroService/api/Email/', JSON.stringify(postparams), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.showDialog = !_this.showDialog;
            _this.dept = "";
            _this.priority = "";
            _this.txtobservations = "";
        }, function (error) {
            console.log(error);
        });
    };
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-typography',
            template: __webpack_require__("../../../../../src/app/typography/typography.component.html"),
            styles: [__webpack_require__("../../../../../src/app/typography/typography.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], TypographyComponent);
    return TypographyComponent;
    var _a;
}());

//# sourceMappingURL=typography.component.js.map

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.pokeball {\r\n    width: 150px;\r\n    height: 150px;\r\n    position: absolute;\r\n    display: inline-block;\r\n    -webkit-animation: rotate 1.5s linear infinite;\r\n            animation: rotate 1.5s linear infinite;\r\n    left: calc(50% - 75px);\r\n    top: calc(50% - 75px);\r\n    opacity: 0.5;\r\n    \r\n  }\r\n  .pokeball .inner {\r\n    width: 150px;\r\n    height: 75px;\r\n    border: 48px solid #f06969;\r\n    box-sizing: border-box;\r\n  }\r\n  .pokeball .upper, .pokeball .lower {\r\n    width: 100%;\r\n    position: absolute;\r\n    height: calc(50% - 5px);\r\n    overflow: hidden;\r\n  }\r\n  .pokeball .upper {\r\n    top: 0;\r\n  }\r\n  .pokeball .upper .inner {\r\n    border-radius: 123px 123px 0 0;\r\n    border-bottom: 0;\r\n    margin-bottom: -5px;\r\n  }\r\n  .pokeball .lower {\r\n    bottom: 0;\r\n  }\r\n  .pokeball .lower .inner {\r\n    margin-top: -5px;\r\n    border-radius: 0 0 123px 123px;\r\n    border-top: 0;\r\n  }\r\n  .pokeball .middle {\r\n    border-radius: 50%;\r\n    width: 40px;\r\n    height: 40px;\r\n    background-color: #f2f3ea;\r\n    position: absolute;\r\n    left: calc(50% - 20px);\r\n    top: calc(50% - 20px);\r\n  }\r\n  \r\n  @-webkit-keyframes rotate {\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  @keyframes rotate {\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\" *ngIf=\"reportlist\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\">Email Report</h4>\n                        <p class=\"category\">This component incorporates email logs with their current status.</p>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"table-responsive table-upgrade\">\n                                <table class=\"table\">\n                                    <tr>\n                                        <td>  \n                                            <span class=\"tim-note\" style=\"color: black;\"> Select Date Range </span>\n                                            &nbsp;\n                                            <my-date-range-picker name=\"mydaterange\" [options]=\"myDateRangePickerOptions\"\n                                                [(ngModel)]=\"model\" required>\n                                            </my-date-range-picker>\n\n                                        </td>\n                                        <td>\n                                                    \n                                                <span class=\"tim-note\" style=\"color: black;\"> Department </span>\n                                                \n                                                <select style=\"width:40%\" [(ngModel)]=\"dept\">\n                                                    <option *ngFor=\"let dept of departments\" [ngValue]=\"dept.Dept_ID \">{{ dept.DepartmentName }}</option>                                    \n                                                </select>\n                                                     \n                                        </td>\n                                        <td>  <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"onSearch()\"> Search </button></td>\n                                    </tr>            \n                                </table>\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th class=\"text-center\">ID</th>\n                                        <th class=\"text-center\">Observations</th>\n                                        <th class=\"text-center\">Department</th>\n                                        <th class=\"text-center\">Priority</th>\n                                        <th class=\"text-center\">Escalation Level</th>\n                                        <th class=\"text-center\"> Date </th>\n                                        <th class=\"text-center\"> Change Status </th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let report of emaillogs | paginate: { itemsPerPage: 5, currentPage: p }; let i=index;\">\n                                        <td>{{i+1}}</td>\n                                        <td class=\"text-center\">{{ report.ChecklistObservation }}</td>\n                                        <td class=\"text-center\">{{ report.DepartmentName }}</td>\n                                        <td class=\"text-center\"> {{ report.PName }} </td>\n                                        <td class=\"text-center\">{{ report.EscalationLevel }}</td>\n                                        <td>\n                                           {{ report.EscalatedDate }}\n                                        </td>\n                                        <td> <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" (click)=\"onChangeStatus(report.EmailReportID)\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                <i class=\"material-icons\">edit</i>\n                                             </button>\n                                        </td>\n                                    </tr>\n                                   \n                                </tbody>\n                            </table>\n                            <pagination-controls (pageChange)=\"p = $event\" ></pagination-controls>\n                        </div>\n                        <!-- <button (click)=\"onExcelclick()\"> Export to PDF </button> </div> -->\n                        <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"onExcelclick()\"> Download Report </button>\n                    </div>\n                </div>\n            </div>\n      \n    \n    <!-- <div *ngIf=\"statuschange\">\n            \n        <div class=\" card card-header text-center\" style=\"background-color:red;color:white\">\n                    <h4 class=\"title\">Escalated Observation Details</h4>\n                    <p class=\"title\">The escalated observation details are shown.</p>\n                </div>\n        <div class=\"card\">\n            <table *ngFor=\"let report of emaillogs;\" class=\"table\">\n            <tr >\n                <td style=\"font-weight:bold;\"> Observation </td> <td>{{report.ChecklistObservation}}</td>\n            </tr>\n            <tr>\n                <td  style=\"font-weight:bold;\">\n                    Department Name\n                </td>\n                <td> {{ report.DepartmentName }}</td>\n            </tr>\n            <tr>\n                <td style=\"font-weight:bold;\"> Priority  </td>\n                <td>\n                        {{ report.PName }}\n                </td>\n            </tr>\n            <tr>\n                <td  style=\"font-weight:bold;\">\n                    Escalation Level \n                </td>\n                <td>\n                    {{report.EscalationLevel}} \n                </td>\n            </tr>\n            <tr>\n                <td  style=\"font-weight:bold;\">\n                    Escalated Date\n                </td> \n                <td>\n                    {{ report.EscalatedDate }}\n                </td>\n            </tr>\n        </table>\n        <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"onDelayed(report.EmailReportID)\" >Delay Escalation</button>\n        <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"onCloseEscalation(report.EmailReportID)\" >Close Escalation</button>\n    </div>\n</div> -->\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card\" *ngIf=\"statuschange\">\n            <div class=\"card-header\" data-background-color=\"red\">\n                <h4 class=\"title\">Email Report</h4>\n                <p class=\"category\">This component incorporates email logs with their current status.</p>\n            </div>\n            <div class=\"card-content\">\n                   \n                <div class=\"table-responsive table-upgrade\">\n                   \n                    \n                        <table *ngFor=\"let report of emaillogs;\" class=\"table\">\n                        <tbody>\n                            <tr>\n                                    <td style=\"font-weight:bold;\"> Observation </td> <td>{{report.ChecklistObservation}}</td>\n                            </tr>\n                            <tr>\n                                    <td  style=\"font-weight:bold;\">\n                                            Department Name\n                                    </td>\n                                    <td> {{ report.DepartmentName }}</td>\n                            </tr>\n                            <tr>\n                                    <td style=\"font-weight:bold;\"> Priority  </td>\n                                    <td>\n                                            {{ report.PName }}\n                                    </td>\n                            </tr>\n                            <tr>\n                                    <td  style=\"font-weight:bold;\">\n                                        Escalation Level \n                                    </td>\n                                    <td>\n                                        {{report.EscalationLevel}} \n                                    </td>\n                            </tr>\n                            <tr>\n                                    <td  style=\"font-weight:bold;\">\n                                        Escalated Date\n                                    </td> \n                                    <td>\n                                        {{ report.EscalatedDate }}\n                                    </td>\n                                </tr><tr>\n                                    <td  style=\"font-weight:bold;\">\n                                        Escalation Status\n                                    </td>\n                                    <td>{{ report.EscalationStatus }} </td>\n                                </tr>\n                        </tbody>\n                </table>\n                </div>\n               <div *ngIf=\"checkdelayed(emaillogs[0].EscalationStatus)\">\n                    <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"onDelayed(emaillogs[0].EmailReportID,1)\"> Open Escalation </button>\n               </div>\n               <div *ngIf=\"!checkdelayed(emaillogs[0].EscalationStatus)\">\n                    <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"onDelayed(emaillogs[0].EmailReportID,2)\"> Delay Escalation </button>\n               </div>\n              <div *ngIf=\"checkEscalation(emaillogs[0].EscalationStatus)\">\n                <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"onDelayed(emaillogs[0].EmailReportID,0)\"> Close Escalation </button>\n              </div>\n               \n            </div>\n        </div>\n        </div>\n\n        <div *ngIf=\"loading\" >\n            <div class=\"pokeball\">\n              <div class=\"upper\">\n                <div class=\"inner\"></div>\n              </div>\n              <div class=\"middle\"></div>\n              <div class=\"lower\">\n                <div class=\"inner\"></div>\n              </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xlsx__ = __webpack_require__("../../../../xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_xlsx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var UpgradeComponent = (function () {
    function UpgradeComponent(http) {
        var _this = this;
        this.http = http;
        this.model = null;
        this.loading = false;
        this.p = 1;
        this.statuschange = false;
        this.reportlist = true;
        this.myDateRangePickerOptions = {};
        this.loading = true;
        this.date = new Date();
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //console.log(this.checklist);
        headers1.append("Content-Type", 'application/json');
        headers1.append("Accept", 'application/json');
        var postParams1 = {};
        this.http.post('https://mial.csia.in/MicroService/api/EmailLogs/', JSON.stringify(postParams1), { headers: headers1 })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.emaillogs = data;
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.loading = false;
        });
        this.http.get('https://mial.csia.in/MicroService/api/Department/').map(function (res) { return res.json(); }).subscribe(function (data1) {
            _this.departments = data1;
        }, function (err) {
            console.log("error has occured");
        });
    }
    UpgradeComponent.prototype.checkEscalation = function (status) {
        if (status == 'Closed') {
            console.log(status);
            return false;
        }
        else {
            return true;
        }
    };
    UpgradeComponent.prototype.onChangeStatus = function (reportid) {
        var _this = this;
        this.loading = true;
        this.http.get('https://mial.csia.in/MicroService/api/Email/?id=' + reportid).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.emaillogs = data;
            _this.loading = false;
        }, function (err) {
            console.log("error has occurred");
            _this.loading = false;
        });
        this.statuschange = true;
        this.reportlist = false;
    };
    UpgradeComponent.prototype.checkdelayed = function (status) {
        if (status == 'Active')
            return false;
        else
            return true;
    };
    UpgradeComponent.prototype.onExcelclick = function () {
        var worksheet = __WEBPACK_IMPORTED_MODULE_3_xlsx__["utils"].json_to_sheet(this.emaillogs);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = __WEBPACK_IMPORTED_MODULE_3_xlsx__["write"](workbook, { bookType: 'xlsx', type: 'buffer' });
        this.saveAsExcelFile(excelBuffer, 'Email_Report');
        // writing code for exporting to pdf
        // var responseData = this.emaillogs;
        // var doc = new jsPDF('p', 'pt', 'a4');
        // var col = ["ID", "Observation", "Department", "Priority", "Level", "Date"];
        // var rows = [];
        // for( let item of responseData )
        // {
        //   var temp = [item['EmailReportID'], item['ChecklistObservation'], item['DepartmentName'], item['PName'], item['EscalationLevel'], item['EscalatedDate']];
        //   rows.push(temp);
        // }
        // doc.autoTable(col, rows, {
        //   theme: 'grid',
        //   styles: {fontSize: 10, font: "verdana", fontStyle: 'normal', halign: 'center'},
        //   margin: { top: 60},
        //   addPageContent: function(data){
        //     doc.text("Email Report", 40, 30);
        //   }
        // });
        // doc.save(this.date + 'Email_Report.pdf');
    };
    UpgradeComponent.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        __WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    //the status is changed to delayed
    UpgradeComponent.prototype.onDelayed = function (reportid, status) {
        var _this = this;
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //console.log(this.checklist);
        headers1.append("Content-Type", 'application/json');
        headers1.append("Accept", 'application/json');
        this.loading = true;
        var postParams1 = {
            ReportId: reportid,
            Status: status
        };
        this.http.post('https://mial.csia.in/MicroService/api/EscalationStatus/', JSON.stringify(postParams1), { headers: headers1 })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.loading = false;
        });
    };
    UpgradeComponent.prototype.onSearch = function () {
        var _this = this;
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        console.log(this.model);
        //console.log(this.checklist);
        headers1.append("Content-Type", 'application/json');
        headers1.append("Accept", 'application/json');
        this.loading = true;
        var postParams1 = {
            DateRange: this.model == null ? null : this.model.formatted,
            Department: this.dept
        };
        this.http.post('https://mial.csia.in/MicroService/api/EmailLogs/', JSON.stringify(postParams1), { headers: headers1 })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.emaillogs = data;
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.loading = false;
        });
    };
    //Needfull is done and escalation is closed
    UpgradeComponent.prototype.onCloseEscalation = function () {
    };
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-upgrade',
            template: __webpack_require__("../../../../../src/app/upgrade/upgrade.component.html"),
            styles: [__webpack_require__("../../../../../src/app/upgrade/upgrade.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], UpgradeComponent);
    return UpgradeComponent;
    var _a;
}());

//# sourceMappingURL=upgrade.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pokeball {\r\n    width: 150px;\r\n    height: 150px;\r\n    position: absolute;\r\n    display: inline-block;\r\n    -webkit-animation: rotate 1.5s linear infinite;\r\n            animation: rotate 1.5s linear infinite;\r\n    left: calc(50% - 75px);\r\n    top: calc(50% - 75px);\r\n    opacity: 0.5;\r\n    \r\n  }\r\n  .pokeball .inner {\r\n    width: 150px;\r\n    height: 75px;\r\n    border: 48px solid #f06969;\r\n    box-sizing: border-box;\r\n  }\r\n  .pokeball .upper, .pokeball .lower {\r\n    width: 100%;\r\n    position: absolute;\r\n    height: calc(53% - 5px);\r\n    overflow: hidden;\r\n  }\r\n  .pokeball .upper {\r\n    top: 0;\r\n  }\r\n  .pokeball .upper .inner {\r\n    border-radius: 123px 123px 0 0;\r\n    border-bottom: 0;\r\n    margin-bottom: -5px;\r\n  }\r\n  .pokeball .lower {\r\n    bottom: 0;\r\n  }\r\n  .pokeball .lower .inner {\r\n    margin-top: -5px;\r\n    border-radius: 0 0 123px 123px;\r\n    border-top: 0;\r\n  }\r\n  .pokeball .middle {\r\n    border-radius: 50%;\r\n    width: 40px;\r\n    height: 40px;\r\n    background-color: #f2f3ea;\r\n    position: absolute;\r\n    left: calc(50% - 20px);\r\n    top: calc(50% - 20px);\r\n  }\r\n  \r\n  @-webkit-keyframes rotate {\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  @keyframes rotate {\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n<div class=\"container-fluid\" >\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"red\">\n                    <h4 class=\"title\">User Profile</h4>\n                    <p class=\"category\">Manage your Users</p>\n                </div>\n                <div class=\"card-content\">\n                    <form [formGroup]=\"adduserForm\" (ngSubmit)=\"onAddUser()\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Department (Apron Control)</label>\n                                    <input type=\"text\" class=\"form-control\" disabled formControlName=\"department\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <!-- <label class=\"control-label\"></label> -->\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Username\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <!-- <label class=\"control-label\">Password</label> -->\n                                    <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\">\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <!-- <label class=\"control-label\">Fist Name</label> -->\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"firstname\" placeholder=\"First Name\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <!-- <label class=\"control-label\">Last Name</label> -->\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"lastname\" placeholder=\"Last Name\">\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <!-- <label class=\"control-label\">Email Id</label> -->\n                                    <input type=\"email\" class=\"form-control\" formControlName=\"emailid\" placeholder=\"Email Id\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"radio\" style=\"transform: scale(1.5);\" formControlName=\"profileoptionRadio\" value=\"1\" checked>\n                                </label>&nbsp;&nbsp;\n                                <label style=\"color: black;\">Duty Operator</label>\n                                &nbsp;&nbsp;\n                            \n                                <label>\n                                    <input type=\"radio\" style=\"transform: scale(1.5);\" formControlName=\"profileoptionRadio\" value=\"2\">\n                                </label>&nbsp;&nbsp;\n                                <label style=\"color: black;\">Duty Manager</label>\n                            </div>\n                            </div>\n                        </div>\n\n                        <!-- <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">City</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Country</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Postal Code</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                        </div> -->\n\n                        <!-- <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <label>About Me</label>\n                                    <div class=\"form-group form-black label-floating is-empty\">\n                                        <label class=\"control-label\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\n                                        <textarea class=\"form-control\" rows=\"5\"></textarea>\n                                    </div>\n                                </div>\n                            </div>\n                        </div> -->\n\n                        <button type=\"submit\" class=\"btn btn-danger pull-right\" [disabled]=\"!adduserForm.valid\">Add User</button>\n                        <div class=\"clearfix\"></div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4\">\n            <!-- <div class=\"card card-profile\">\n                <div class=\"card-avatar\">\n                    <a href=\"#pablo\">\n                        <img class=\"img\" src=\"../assets/img/faces/dheeraj.jpg\" />\n                    </a>\n                </div>\n\n                <div class=\"content\">\n                    <h6 class=\"category text-gray\">Dheeraj Anchan</h6>\n                    <h4 class=\"card-title\">Project Manager - Cloud</h4>\n                    <p class=\"card-content\">\n                        The path to the CEO's office should not be through the CEO's office and it should not be through the marketing department. It needs to be through engineering and design.\n                    </p>\n                    <a href=\"https://www.linkedin.com/in/dheeraj-anchan-55399a99/\" class=\"btn btn-danger btn-round\">Know more about him</a>\n                </div>\n            </div> -->\n        </div>\n\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"red\">\n                    <h4 class=\"title\">User Table</h4>\n                    <p class=\"category\">An interface to edit/delete your users</p>\n                </div>\n                <div class=\"card-content table-responsive\">\n                    <table class=\"table\">\n                        <thead class=\"text-danger\">\n                            <tr>\n                                <th>Id</th>\n                                <th>Name</th>\n                                <th>Email Id</th>\n                                <th>UserName</th>\n                                <th>Modify Records</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let user of users  | paginate: { itemsPerPage: 5, currentPage: p }; let i=index;\" >\n                                <td>{{ i+1 }}</td>\n                                <td>{{ user.Name }}</td>\n                                <td>{{ user.EMAIL_ID }}</td>\n                                <td class=\"text-danger\">{{ user.UM_USER_NAME }}</td>\n                                <td class=\"td-actions text-right\">\n                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" (click)=\"onUserEdit(user.UM_I)\" class=\"btn btn-primary btn-simple btn-xs\">\n                                        <i class=\"material-icons\">edit</i>\n                                    </button>\n                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" (click)=\"onUserDelete(user.UM_I)\" class=\"btn btn-danger btn-simple btn-xs\">\n                                        <i class=\"material-icons\">close</i>\n                                    </button>\n                                </td>\n                            </tr>                          \n                        </tbody>\n                    </table>\n                    <pagination-controls (pageChange)=\"p = $event\" ></pagination-controls>\n\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"col-md-12\">\n            <div class=\"card\" *ngIf=\"statuschange\">\n                <div class=\"card-header\" data-background-color=\"red\">\n                    <h4 class=\"title\">User Account Information</h4>\n                    <p class=\"category\">This component incorporates user account information.</p>\n                </div>\n\n                <div class=\"card-content\">\n                    <div class=\"table-responsive table-upgrade\">\n\n                        <table *ngFor=\"let user of getUserById;\" class=\"table\">\n                            <tbody>\n                                <tr>\n                                    <td style=\"font-weight: bold;\"> \n                                        Name \n                                    </td>\n                                    <td> <input type=\"text\" name=\"{{ 'firstname' }}\" [(ngModel)]=\"user.Name\"> </td>\n                                </tr>\n                                <tr>\n                                    <td style=\"font-weight: bold;\">\n                                        Email ID\n                                    </td>\n                                    <td> <input type=\"text\" name=\"{{ 'emailid' }}\" [(ngModel)]=\"user.EMAIL_ID\"> </td>\n                                </tr>\n                                <tr>\n                                    <td style=\"font-weight: bold;\">\n                                        Username\n                                    </td>\n                                    <td> <input type=\"text\" name=\"{{ 'username' }}\" [(ngModel)]=\"user.UM_USER_NAME\"> </td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n                        <button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"editUserInfo(user.UM_I)\"> Confirm Edit Action </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <app-dialog [(visible)]=\"showDialog\">\n        <h1>Data Saved Successfully!</h1>\n        <button (click)=\"showDialog = !showDialog\" class=\"btn\">Exit</button>\n    </app-dialog>\n</div>\n            <div *ngIf=\"!loading\" >\n                <div class=\"pokeball\">\n                  <div class=\"upper\">\n                    <div class=\"inner\"></div>\n                  </div>\n                  <div class=\"middle\"></div>\n                  <div class=\"lower\">\n                    <div class=\"inner\"></div>\n                  </div>\n                </div>\n            </div>\n    \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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





var UserProfileComponent = (function () {
    function UserProfileComponent(http, router) {
        this.http = http;
        this.router = router;
        this.loading = true;
        this.showDialog = false;
        this.p = 1;
        this.bindUserData();
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.initializeForm();
                return [2 /*return*/];
            });
        });
    };
    //bind user data
    UserProfileComponent.prototype.bindUserData = function () {
        var _this = this;
        this.loading = false;
        this.http.get('https://mial.csia.in/MicroService/api/UserAccount/').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.users = data;
            _this.loading = true;
        }, function (err) {
            //console.log("error has occurred");
        });
    };
    //Edit User Details
    UserProfileComponent.prototype.onUserEdit = function (userid) {
        var _this = this;
        this.loading = false;
        this.http.get('https://mial.csia.in/MicroService/api/UserAccount/?id=' + userid).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.getUserById = data;
            _this.loading = true;
        }, function (err) {
            _this.loading = true;
        });
    };
    //Delete User
    UserProfileComponent.prototype.onUserDelete = function (userid) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var postparams = {
            id: userid
        };
        this.http.post('https://mial.csia.in/MicroService/api/EditUser', JSON.stringify(postparams), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.showDialog = !_this.showDialog;
        }, function (error) {
            console.log(error);
        });
        this.bindUserData();
    };
    //Add Usser
    UserProfileComponent.prototype.onAddUser = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var value = this.adduserForm.value;
        console.log(this.adduserForm.value);
        var postparams = value;
        this.http.post('https://mial.csia.in/MicroService/api/UserAccount', JSON.stringify(postparams), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.showDialog = !_this.showDialog;
            _this.adduserForm.reset();
            console.log(_this.showDialog);
        }, function (error) {
            console.log(error);
        });
    };
    UserProfileComponent.prototype.editUserInfo = function (userid) {
    };
    UserProfileComponent.prototype.initializeForm = function () {
        this.adduserForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            department: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null),
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
            firstname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
            lastname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
            emailid: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
            profileoptionRadio: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null)
        });
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-user-profile',
            template: __webpack_require__("../../../../../src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], UserProfileComponent);
    return UserProfileComponent;
    var _a, _b;
}());

//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map