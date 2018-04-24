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

/***/ "./src/app/addauthor/addauthor.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/addauthor/addauthor.component.html":
/***/ (function(module, exports) {

module.exports = "<button [routerLink]=\"['/home']\"> Home </button>\n<h4> Add a new quotable author: </h4>\n<input type=\"text\" name=\"name\" [(ngModel)]=\"name\">\n<button [routerLink]=\"['/home']\"> Cancel </button>\n<button (click)=\"submitButton()\"> Submit </button>\n<br> {{error}}"

/***/ }),

/***/ "./src/app/addauthor/addauthor.component.ts":
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
var AddauthorComponent = /** @class */ (function () {
    function AddauthorComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    AddauthorComponent.prototype.ngOnInit = function () {
    };
    // submitButton pressed newAuthor service
    AddauthorComponent.prototype.submitButton = function () {
        var _this = this;
        var observable = this._httpService.newAuthor(this.name);
        observable.subscribe(function (data) {
            if (data.message === 'Success') {
                _this._router.navigate(['/home']);
            }
            else {
                // error message display
                _this.error = 'Name must be at least 3 characters';
            }
        });
        console.log(this.name);
    };
    AddauthorComponent = __decorate([
        core_1.Component({
            selector: 'app-addauthor',
            template: __webpack_require__("./src/app/addauthor/addauthor.component.html"),
            styles: [__webpack_require__("./src/app/addauthor/addauthor.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], AddauthorComponent);
    return AddauthorComponent;
}());
exports.AddauthorComponent = AddauthorComponent;


/***/ }),

/***/ "./src/app/addquote/addquote.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/addquote/addquote.component.html":
/***/ (function(module, exports) {

module.exports = "<button [routerLink]=\"['/home']\"> Home </button>\n<h4> Provide a quote by {{ author.name }}: </h4>\n<input type=\"text\" name=\"quote\" [(ngModel)]=\"quote\">\n<button (click)=\"cancelButton(author)\"> Cancel </button>\n<button (click)=\"submitButton()\"> Submit </button>\n<br> {{error}}"

/***/ }),

/***/ "./src/app/addquote/addquote.component.ts":
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
var AddquoteComponent = /** @class */ (function () {
    function AddquoteComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    AddquoteComponent.prototype.ngOnInit = function () {
        this.author = this._httpService.selected;
    };
    AddquoteComponent.prototype.cancelButton = function (author) {
        console.log(author);
        this._router.navigate(['/viewquotes/' + author._id]);
    };
    AddquoteComponent.prototype.submitButton = function () {
        var _this = this;
        var observable = this._httpService.newQuote(this.quote);
        observable.subscribe(function (data) {
            if (data.message === 'Success') {
                _this._router.navigate(['/home']);
            }
            else {
                // error message display
                _this.error = 'Quote must be at least 5 characters';
            }
        });
        console.log(this.quote);
    };
    AddquoteComponent = __decorate([
        core_1.Component({
            selector: 'app-addquote',
            template: __webpack_require__("./src/app/addquote/addquote.component.html"),
            styles: [__webpack_require__("./src/app/addquote/addquote.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], AddquoteComponent);
    return AddquoteComponent;
}());
exports.AddquoteComponent = AddquoteComponent;


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
var addauthor_component_1 = __webpack_require__("./src/app/addauthor/addauthor.component.ts");
var editauthor_component_1 = __webpack_require__("./src/app/editauthor/editauthor.component.ts");
var viewquotes_component_1 = __webpack_require__("./src/app/viewquotes/viewquotes.component.ts");
var addquote_component_1 = __webpack_require__("./src/app/addquote/addquote.component.ts");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'addauthor', component: addauthor_component_1.AddauthorComponent },
    { path: 'editauthor', component: editauthor_component_1.EditauthorComponent },
    { path: 'viewquotes/:id', component: viewquotes_component_1.ViewquotesComponent },
    { path: 'addquote/:id', component: addquote_component_1.AddquoteComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Quote Ranks</h1>\n\n\n<router-outlet></router-outlet>\n"

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
    function AppComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            http_service_1.HttpService])
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
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var addauthor_component_1 = __webpack_require__("./src/app/addauthor/addauthor.component.ts");
var editauthor_component_1 = __webpack_require__("./src/app/editauthor/editauthor.component.ts");
var viewquotes_component_1 = __webpack_require__("./src/app/viewquotes/viewquotes.component.ts");
var addquote_component_1 = __webpack_require__("./src/app/addquote/addquote.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                addauthor_component_1.AddauthorComponent,
                editauthor_component_1.EditauthorComponent,
                viewquotes_component_1.ViewquotesComponent,
                addquote_component_1.AddquoteComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/editauthor/editauthor.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/editauthor/editauthor.component.html":
/***/ (function(module, exports) {

module.exports = "<button [routerLink]=\"['/home']\"> Home </button>\n<div *ngIf=\"author\">\n  <h4> Edit this author: </h4>\n  <input type=\"text\" name=\"name\" [(ngModel)]=\"author.name\">\n  <button [routerLink]=\"['/home']\"> Cancel </button>\n  <button (click)=\"submitButton()\"> Submit </button>\n  <br> {{error}}\n</div>"

/***/ }),

/***/ "./src/app/editauthor/editauthor.component.ts":
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
var EditauthorComponent = /** @class */ (function () {
    function EditauthorComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    // Load name in input
    EditauthorComponent.prototype.ngOnInit = function () {
        this.author = this._httpService.selected;
    };
    // submitButton clicked and update author
    EditauthorComponent.prototype.submitButton = function () {
        var _this = this;
        var observable = this._httpService.editAuthor(this.author);
        observable.subscribe(function (data) {
            console.log(data);
            if (data.message === 'Success') {
                _this._router.navigate(['/home']);
            }
            else {
                _this.error = 'Name must be at least 3 characters';
            }
        });
    };
    EditauthorComponent = __decorate([
        core_1.Component({
            selector: 'app-editauthor',
            template: __webpack_require__("./src/app/editauthor/editauthor.component.html"),
            styles: [__webpack_require__("./src/app/editauthor/editauthor.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], EditauthorComponent);
    return EditauthorComponent;
}());
exports.EditauthorComponent = EditauthorComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<button [routerLink]=\"['/addauthor']\"> Add a quotable author </button>\n<h4>We have quotes by:</h4>\n\n<table>\n  <tr>\n    <th>Author</th>\n    <th>Actions available</th>\n  </tr>\n  <tr *ngFor=\"let author of authors\">\n    <td> {{ author.name }} </td>\n    <td>\n      <button (click)=\"viewQuotes(author)\"> View Quotes </button>\n      <button (click)=\"editAuthor(author)\"> Edit </button>\n      <button (click)=\"deleteAuthor(author)\"> Delete </button>\n    </td>\n  </tr>\n</table>"

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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.authors = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getAuthors();
    };
    HomeComponent.prototype.getAuthors = function () {
        var _this = this;
        var observable = this._httpService.getAuthors();
        observable.subscribe(function (data) {
            console.log(data);
            _this.authors = data.data;
        });
    };
    // Click 'viewQuotes' button and navigates to /viewQuotes component
    HomeComponent.prototype.viewQuotes = function (author) {
        console.log(author._id);
        this._httpService.selected = author;
        this._router.navigate(['/viewquotes/' + author._id]);
    };
    // Click 'editAuthor' button and navigates to /edit component
    HomeComponent.prototype.editAuthor = function (author) {
        console.log(author);
        this._httpService.selected = author;
        this._router.navigate(['/editauthor']);
    };
    // CLick 'deleteAuthor' button and uses a service to deliver data to the controller
    HomeComponent.prototype.deleteAuthor = function (author) {
        var _this = this;
        var observable = this._httpService.deleteAuthor(author);
        // an observable will deliver its data to any part of the app that has subscribed to it
        observable.subscribe(function (data) {
            console.log(data);
            _this.getAuthors();
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            http_service_1.HttpService])
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
    }
    // Methods shared between components
    // Goes to server.js routes
    HttpService.prototype.getAuthors = function () {
        return this._http.get('/authors');
    };
    HttpService.prototype.findAuthor = function (id) {
        return this._http.get('/viewquotes/' + id);
    };
    HttpService.prototype.newAuthor = function (name) {
        return this._http.post('/new', { name: name });
    };
    HttpService.prototype.findQuote = function (id) {
        return this._http.get('/viewquote/' + id);
    };
    HttpService.prototype.newQuote = function (quote) {
        return this._http.put('/quotes/' + this.selected._id, { quote: quote });
    };
    HttpService.prototype.editAuthor = function (author) {
        console.log(author);
        return this._http.put('/edit', { id: author._id, name: author.name });
    };
    HttpService.prototype.deleteAuthor = function (author) {
        console.log('deleting ', author);
        return this._http.delete('/delete/' + author._id);
    };
    HttpService.prototype.deleteQuote = function (author, quote) {
        console.log('delete quote', quote);
        return this._http.put('/deletequote/' + quote._id, { author: author });
    };
    HttpService.prototype.voteUpQuote = function (author, quote) {
        return this._http.put('/voteupquote/' + quote._id, { author: author });
    };
    HttpService.prototype.voteDownQuote = function (author, quote) {
        return this._http.put('/votedownquote/' + quote._id, { author: author });
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/viewquotes/viewquotes.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/viewquotes/viewquotes.component.html":
/***/ (function(module, exports) {

module.exports = "<button [routerLink]=\"['/home']\"> Home </button>\n<button (click)=\"addQuote(author)\"> Add a quote </button>\n<h4>Quotes by {{ author.name }}:</h4>\n\n<table>\n  <tr>\n    <th>Quote</th>\n    <th>Votes</th>\n    <th>Actions available</th>\n  </tr>\n  <tr *ngFor=\"let quote of author.quotes\">\n    <td> {{ quote.quote }} </td>\n    <td> {{ quote.votes }}</td>\n    <td>\n      <button (click)=\"voteUp(quote)\"> Vote up </button>\n      <button (click)=\"voteDown(quote)\"> Vote down </button>\n      <button (click)=\"deleteQuote(quote)\"> Delete </button>\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/viewquotes/viewquotes.component.ts":
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
var ViewquotesComponent = /** @class */ (function () {
    function ViewquotesComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ViewquotesComponent.prototype.ngOnInit = function () {
        this.author = this._httpService.selected;
    };
    ViewquotesComponent.prototype.findAuthor = function (author) {
        var _this = this;
        console.log(author);
        var observable = this._httpService.findAuthor(author);
        observable.subscribe(function (data) {
            // console.log('DATAAAAAAAA', data);
            _this.author = data.data;
        });
    };
    ViewquotesComponent.prototype.voteUp = function (quote) {
        var _this = this;
        console.log(quote);
        var observable = this._httpService.voteUpQuote(this.author, quote);
        // an observable will deliver its data to any part of the app that has subscribed to it
        observable.subscribe(function (data) {
            _this.findAuthor(_this.author._id);
        });
    };
    ViewquotesComponent.prototype.voteDown = function (quote) {
        var _this = this;
        console.log(quote);
        var observable = this._httpService.voteDownQuote(this.author, quote);
        // an observable will deliver its data to any part of the app that has subscribed to it
        observable.subscribe(function (data) {
            _this.findAuthor(_this.author._id);
        });
    };
    ViewquotesComponent.prototype.addQuote = function (author) {
        this._httpService.selected = author;
        this._router.navigate(['/addquote/' + author._id]);
    };
    // CLick 'deleteQuote' button and uses a service to deliver data to the controller
    ViewquotesComponent.prototype.deleteQuote = function (quote) {
        var _this = this;
        console.log(quote);
        var observable = this._httpService.deleteQuote(this.author, quote);
        // an observable will deliver its data to any part of the app that has subscribed to it
        observable.subscribe(function (data) {
            _this.findAuthor(_this.author._id);
        });
    };
    ViewquotesComponent = __decorate([
        core_1.Component({
            selector: 'app-viewquotes',
            template: __webpack_require__("./src/app/viewquotes/viewquotes.component.html"),
            styles: [__webpack_require__("./src/app/viewquotes/viewquotes.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], ViewquotesComponent);
    return ViewquotesComponent;
}());
exports.ViewquotesComponent = ViewquotesComponent;


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