webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var mine_component_1 = __webpack_require__("./src/app/mine/mine.component.ts");
var buy_component_1 = __webpack_require__("./src/app/buy/buy.component.ts");
var sell_component_1 = __webpack_require__("./src/app/sell/sell.component.ts");
var browse_component_1 = __webpack_require__("./src/app/browse/browse.component.ts");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'mine', component: mine_component_1.MineComponent },
    { path: 'buy', component: buy_component_1.BuyComponent },
    { path: 'sell', component: sell_component_1.SellComponent },
    { path: 'browse', component: browse_component_1.BrowseComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: '**', component: home_component_1.HomeComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#top {\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"top\">\r\n  <button [routerLink]=\"['home']\">Home</button>\r\n  <button [routerLink]=\"['mine']\">Mine Coins</button>\r\n  <button [routerLink]=\"['buy']\">Buy Coins</button>\r\n  <button [routerLink]=\"['sell']\">Sell Coins</button>\r\n  <button [routerLink]=\"['browse']\">Browse Ledger</button>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._route.params.subscribe(function (params) { return console.log(params['id']); });
    };
    AppComponent.prototype.goHome = function () {
        this._router.navigate(['/home']);
    };
    AppComponent.prototype.goBuy = function () {
        this._router.navigate(['/buy']);
    };
    AppComponent.prototype.goSell = function () {
        this._router.navigate(['/sell']);
    };
    AppComponent.prototype.goBrowse = function () {
        this._router.navigate(['/browse']);
    };
    AppComponent.prototype.goMine = function () {
        this._router.navigate(['/mine']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var mine_component_1 = __webpack_require__("./src/app/mine/mine.component.ts");
var buy_component_1 = __webpack_require__("./src/app/buy/buy.component.ts");
var sell_component_1 = __webpack_require__("./src/app/sell/sell.component.ts");
var browse_component_1 = __webpack_require__("./src/app/browse/browse.component.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                mine_component_1.MineComponent,
                buy_component_1.BuyComponent,
                sell_component_1.SellComponent,
                browse_component_1.BrowseComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/browse/browse.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Browse the Ledger</h1>\r\n<p>Here you can browse all ShintoCoin transactions.</p>\r\n<table>\r\n  <tr>\r\n    <th>Action</th>\r\n    <th>Amount</th>\r\n    <th>Value</th>\r\n    <th></th>\r\n  </tr>\r\n  <tr *ngFor=\"let lg of log\">\r\n    <td>{{lg.action}}</td>\r\n    <td>{{lg.quantity}}</td>\r\n    <td>{{lg.value}}</td>\r\n    <td><button (click)=\"viewDetail()\"> Details </button></td>\r\n  </tr>\r\n</table>"

/***/ }),

/***/ "./src/app/browse/browse.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var BrowseComponent = /** @class */ (function () {
    function BrowseComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.log = [];
    }
    BrowseComponent.prototype.ngOnInit = function () {
        this.log = this._httpService.log;
    };
    BrowseComponent = __decorate([
        core_1.Component({
            selector: 'app-browse',
            template: __webpack_require__("./src/app/browse/browse.component.html"),
            styles: [__webpack_require__("./src/app/browse/browse.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], BrowseComponent);
    return BrowseComponent;
}());
exports.BrowseComponent = BrowseComponent;


/***/ }),

/***/ "./src/app/buy/buy.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/buy/buy.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Buy ShintoCoin</h1>\r\n<p>Current ShintoCoin Value: {{ value }}</p>\r\n<p>Number of ShintoCoins Owned: {{ owned }}</p>\r\n<input type=\"number\" name=\"quantity\" [(ngModel)]=\"quantity\" class='form-control'>\r\n<button class=\"btn btn-info\" (click)=\"buyCoin()\"> Buy </button>"

/***/ }),

/***/ "./src/app/buy/buy.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var BuyComponent = /** @class */ (function () {
    function BuyComponent(_httpService) {
        this._httpService = _httpService;
        this.value = 0;
        this.owned = 0;
        this.quantity = 0;
    }
    BuyComponent.prototype.ngOnInit = function () {
        this.value = this._httpService.getValue();
        this.owned = this._httpService.getOwned();
    };
    BuyComponent.prototype.buyCoin = function () {
        console.log(this._httpService.getOwned());
        if (this._httpService.getBalance() >= this.quantity * this._httpService.getValue()) {
            this._httpService.owned += this.quantity;
            this._httpService.value++;
            this.owned = this._httpService.getOwned();
            this._httpService.log.push({ action: 'Bought', quantity: this.quantity, value: this.value, id: this._httpService.log.length });
            this.value = this._httpService.getValue();
            this.owned = this._httpService.getOwned();
        }
    };
    BuyComponent = __decorate([
        core_1.Component({
            selector: 'app-buy',
            template: __webpack_require__("./src/app/buy/buy.component.html"),
            styles: [__webpack_require__("./src/app/buy/buy.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], BuyComponent);
    return BuyComponent;
}());
exports.BuyComponent = BuyComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>ShintoCoin</h1>\r\n<p>Welcome to ShintoCoins! ShintoCoins are coins made by solving algorithms! To get started, head over to Mine Coins and get to work!</p>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        this.value = 1;
        this.owned = 0;
        this.balance = 0;
        this.log = [];
        this.answered = false;
    }
    HttpService.prototype.getValue = function () {
        return this.value;
    };
    HttpService.prototype.getOwned = function () {
        return this.owned;
    };
    HttpService.prototype.getBalance = function () {
        return this.balance;
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/mine/mine.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mine/mine.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Mine ShintoCoin</h1>\r\n<p>Here you can mine ShintoCoins by being the first to solve the algorithm:</p>\r\n<div> What is the 7th Fibonacci Number?</div>\r\n\r\n<input type=\"number\" name=\"answer\" [(ngModel)]=\"answer\" class='form-control'>\r\n<button class=\"btn btn-info\" (click)=\"mineCoin()\"> Mine </button>"

/***/ }),

/***/ "./src/app/mine/mine.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var MineComponent = /** @class */ (function () {
    function MineComponent(_httpService) {
        this._httpService = _httpService;
        this.value = 0;
        this.owned = 0;
        this.quantity = 0;
        this.answer = 0;
    }
    MineComponent.prototype.ngOnInit = function () {
        this.value = this._httpService.getValue();
        this.owned = this._httpService.getOwned();
    };
    MineComponent.prototype.mineCoin = function () {
        if (this.answer === 13 && this._httpService.answered === false) {
            this._httpService.value++;
            this._httpService.owned++;
            this._httpService.answered = true;
            this._httpService.log.push({ action: 'Mined', quantity: 1, value: this.value, id: this._httpService.log.length });
            console.log('mined');
            this._httpService.answered = true;
        }
    };
    MineComponent = __decorate([
        core_1.Component({
            selector: 'app-mine',
            template: __webpack_require__("./src/app/mine/mine.component.html"),
            styles: [__webpack_require__("./src/app/mine/mine.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], MineComponent);
    return MineComponent;
}());
exports.MineComponent = MineComponent;


/***/ }),

/***/ "./src/app/sell/sell.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sell/sell.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Sell ShintoCoin</h1>\r\n<p>Current ShintoCoin Value: {{ value }}</p>\r\n<p>Number of ShintoCoins Owned: {{ owned }}</p>\r\n<input type=\"number\" name=\"quantity\" [(ngModel)]=\"quantity\" class='form-control'>\r\n<button class=\"btn btn-info\" (click)=\"sellCoin()\"> Sell </button>"

/***/ }),

/***/ "./src/app/sell/sell.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var SellComponent = /** @class */ (function () {
    function SellComponent(_httpService) {
        this._httpService = _httpService;
        this.value = 0;
        this.owned = 0;
        this.quantity = 0;
    }
    SellComponent.prototype.ngOnInit = function () {
        this.value = this._httpService.getValue();
        this.owned = this._httpService.getOwned();
    };
    SellComponent.prototype.sellCoin = function () {
        console.log(this._httpService.getOwned());
        if (this._httpService.getOwned() >= this.quantity) {
            this._httpService.balance += this.value * this.quantity;
            this._httpService.value -= this.quantity;
            this._httpService.log.push({ action: 'Sold', quantity: this.quantity, value: this.value, id: this._httpService.log.length });
            if (this._httpService.value <= 1) {
                this._httpService.value = 1;
            }
            this._httpService.owned -= this.quantity;
            this.value = this._httpService.getValue();
            this.owned = this._httpService.getOwned();
        }
    };
    SellComponent = __decorate([
        core_1.Component({
            selector: 'app-sell',
            template: __webpack_require__("./src/app/sell/sell.component.html"),
            styles: [__webpack_require__("./src/app/sell/sell.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], SellComponent);
    return SellComponent;
}());
exports.SellComponent = SellComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map