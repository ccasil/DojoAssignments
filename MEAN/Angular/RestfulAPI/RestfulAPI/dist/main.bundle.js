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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#wrapper {\n    text-align: left;\n}\nh1 {\n    text-align: center;\n}\n#top {\n    display: block;\n}\n#bottom {\n    display: inline-block;\n    width: 400px;\n    vertical-align: top;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<h1>{{ title }}</h1>\n\n<div id=\"wrapper\">\n\n<div id=\"top\">\n  <h2>New Task</h2>\n  <form (submit)=\"onSubmit()\">\n    <p>Title: <input type=\"text\" name=\"newTask.title\" [(ngModel)]=\"newTask.title\" /></p>\n    <p>Description: <input type=\"text\" name=\"newTask.description\" [(ngModel)]=\"newTask.description\" /><input type=\"submit\" value=\"Create\" /></p>\n    <!-- use the json pipe to see how newTask changes in real time -->\n    <p>{{ newTask | json }}</p>\n  </form>\n</div>\n\n<div id=\"bottom\">\n  <h2>Task List</h2>\n  <p><input #idtext type=\"text\" name=\"id\"><button (click)=\"onButtonClickOne(idtext.value)\">Get one task</button></p>\n  <ul>\n    <li *ngFor='let task of tasks'>\n      <h3> {{ task['title'] }} <button (click)=\"getTaskFromService(task._id)\">Edit</button></h3>\n        <h4>{{ task['description'] }} <button (click)=\"deleteTaskFromService(task._id)\">Delete</button></h4>\n    </li>\n  </ul>\n</div>\n\n<div id=\"bottom\">\n  <div *ngIf = \"edit\">\n    <h2>Edit a Task</h2>\n    <form (submit)=\"editSubmit(task._id)\">\n      <p>Title:\n        <input type=\"text\" name=\"editTask.title\" [(ngModel)]=\"editTask.title\" />\n      </p>\n      <p>Description:\n        <input type=\"text\" name=\"editTask.description\" [(ngModel)]=\"editTask.description\" />\n        <input type=\"submit\" value=\"Edit\" />\n      </p>\n      <!-- use the json pipe to see how editTask changes in real time -->\n      <p>{{ editTask | json }}</p>\n    </form>\n  </div>\n</div>\n\n</div>\n"

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
var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        // Set the attribute tasks to be an array.
        this.title = 'Restful Tasks API';
        this.tasks = [];
        this.task = {};
        this.edit = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getTasksFromService();
        this.newTask = { title: '', description: '' };
    };
    AppComponent.prototype.getTasksFromService = function () {
        var _this = this;
        var observable = this._httpService.getTasks();
        observable.subscribe(function (data) {
            console.log('Got our tasks!', data);
            _this.tasks = data['tasks'];
            console.log('this.tasks', _this.tasks);
        });
    };
    AppComponent.prototype.getTaskFromService = function (id) {
        var _this = this;
        if (id) {
            var observable = this._httpService.getTask(id);
            observable.subscribe(function (data) {
                console.log('Got our task!', data);
                _this.task = data['tasks'];
                console.log('this.task', _this.task);
                console.log('TITLE', _this.task['title']);
                _this.editTask = { id: _this.task['_id'], title: _this.task['title'], description: _this.task['description'] };
                console.log('this.editTask', _this.editTask);
                _this.edit = true;
            });
        }
        else {
            console.log('Error');
        }
    };
    AppComponent.prototype.onButtonClickOne = function (id) {
        this.getTaskFromService(id);
        console.log('Click event is working, id:', id);
    };
    AppComponent.prototype.onSubmit = function () {
        // Code to send off the form data (this.newTask) to the Service
        var observable = this._httpService.addTask(this.newTask);
        observable.subscribe(function (data) {
            console.log('Got data from post back!', data);
        });
        this.getTasksFromService();
        // Reset this.newTask to a new, clean object.
        this.newTask = { title: '', description: '' };
    };
    AppComponent.prototype.editSubmit = function (id) {
        var _this = this;
        console.log(id);
        var observable = this._httpService.editTask(id, this.editTask);
        observable.subscribe(function (data) {
            console.log('Got data from put back!', data);
            _this.getTasksFromService();
            _this.edit = false;
        });
    };
    AppComponent.prototype.deleteTaskFromService = function (id) {
        var _this = this;
        var observable = this._httpService.deleteTask(id);
        observable.subscribe(function (data) {
            console.log('Removed the task');
            _this.getTasksFromService();
            _this.task = {};
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
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
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
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
    HttpService.prototype.getTasks = function () {
        // Remove the lines of code where we make the variable 'tempObservable' and subscribe to it.
        // tempObservable = this._http.get('/tasks');
        // tempObservable.subscribe(data => console.log("Got our tasks!", data));
        // Return the observable to wherever the getTasks method was invoked.
        return this._http.get('/tasks');
    };
    HttpService.prototype.getTask = function (id) {
        // // our http response is an Observable, store it in a variable
        // const tempObservable = this._http.get('/tasks/' + id + '');
        // // subscribe to the Observable and provide the code we would like to do with our data from the response
        // tempObservable.subscribe(data => console.log('Got our task!', data));
        return this._http.get('/tasks/' + id);
    };
    HttpService.prototype.addTask = function (newTask) {
        return this._http.post('/tasks', newTask);
    };
    HttpService.prototype.deleteTask = function (id) {
        return this._http.delete('/tasks/' + id);
    };
    HttpService.prototype.editTask = function (id, editTask) {
        return this._http.put('/tasks/' + id, editTask);
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