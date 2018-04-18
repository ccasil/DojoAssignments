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

/***/ "./src/app/add/add.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"cancelButton()\"> Home </button>\r\n<h4> Add a new author: </h4>\r\n<input type=\"text\" name=\"name\" [(ngModel)]=\"name\">\r\n<button (click)=\"cancelButton()\"> Cancel </button>\r\n<button (click)=\"submitButton()\"> Submit </button>\r\n<br> {{error}}"

/***/ }),

/***/ "./src/app/add/add.component.ts":
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
var AddComponent = /** @class */ (function () {
    function AddComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.cancelButton = function () {
        this._router.navigate(['/home']);
    };
    AddComponent.prototype.submitButton = function () {
        var _this = this;
        var observable = this._httpService.newAuthor(this.name);
        observable.subscribe(function (data) {
            if (data.message === 'Success') {
                _this._router.navigate(['/home']);
            }
            else {
                _this.error = 'Name must be at least 3 characters';
            }
        });
        console.log(this.name);
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'app-add',
            template: __webpack_require__("./src/app/add/add.component.html"),
            styles: [__webpack_require__("./src/app/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;


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
var add_component_1 = __webpack_require__("./src/app/add/add.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'add', component: add_component_1.AddComponent },
    { path: 'edit', component: edit_component_1.EditComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' }
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

module.exports = "<h1>Favorite authors</h1>\r\n\r\n<router-outlet></router-outlet>\r\n"

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
var add_component_1 = __webpack_require__("./src/app/add/add.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                add_component_1.AddComponent,
                edit_component_1.EditComponent,
                home_component_1.HomeComponent
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

/***/ "./src/app/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"cancelButton()\"> Home </button>\r\n<div *ngIf=\"author\">\r\n  <h4> Edit this author: </h4>\r\n  <input type=\"text\" name=\"name\" [(ngModel)]=\"author.name\">\r\n  <button (click)=\"cancelButton()\"> Cancel </button>\r\n  <button (click)=\"submitButton()\"> Submit </button>\r\n  <br> {{error}}\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
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
var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    EditComponent.prototype.ngOnInit = function () {
        this.author = this._httpService.selected;
    };
    EditComponent.prototype.cancelButton = function () {
        this._router.navigate(['/home']);
    };
    EditComponent.prototype.submitButton = function () {
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
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"addAuthor()\"> Add an Author </button>\r\n<h4>We have quotes by:</h4>\r\n\r\n<table>\r\n  <tr>\r\n    <th>Author</th>\r\n    <th>Actions available</th>\r\n  </tr>\r\n  <tr *ngFor=\"let author of authors\">\r\n    <td> {{author.name}} </td>\r\n    <td><button (click)=\"editAuthor(author)\"> Edit </button><button (click)=\"deleteAuthor(author)\"> Delete </button></td>\r\n  </tr>\r\n</table>"

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
            _this.authors = data.data;
        });
    };
    HomeComponent.prototype.addAuthor = function () {
        this._router.navigate(['/add']);
    };
    HomeComponent.prototype.editAuthor = function (author) {
        console.log(author);
        this._httpService.selected = author;
        this._router.navigate(['/edit']);
    };
    HomeComponent.prototype.deleteAuthor = function (author) {
        var _this = this;
        var observable = this._httpService.deleteAuthor(author);
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
    HttpService.prototype.getAuthors = function () {
        return this._http.get('/authors');
    };
    HttpService.prototype.newAuthor = function (name) {
        return this._http.post('/new', { name: name });
    };
    HttpService.prototype.editAuthor = function (author) {
        console.log(author);
        return this._http.put('/edit', { id: author._id, name: author.name });
    };
    HttpService.prototype.deleteAuthor = function (author) {
        console.log('deleting ', author);
        return this._http.delete('/delete/' + author._id);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


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