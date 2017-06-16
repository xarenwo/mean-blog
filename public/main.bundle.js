webpackJsonp([1,4],{

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken(); // load the token from local storage
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/auth.service.js.map

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 390;


/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(509);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/main.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
    }
    PostsService.prototype.getPosts = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken(); // load the token from local storage
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('http://localhost/posts/get', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.getPostById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken(); // load the token from local storage
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('http://localhost/posts/get/id/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.getPostsByCatName = function (catname) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken(); // load the token from local storage
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('http://localhost/posts/get/category/' + catname, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.getPostsByAuthor = function (author) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken(); // load the token from local storage
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('http://localhost/posts/get/author/' + author, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    PostsService.prototype.getCategories = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken(); // load the token from local storage
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('http://localhost/categories/get', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.updatePost = function (newPost) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken(); // load the token from local storage
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.post('http://localhost/posts/update', newPost, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.addPost = function (newPost) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken(); // load the token from local storage
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.post('http://localhost/posts/add', newPost, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.addCategory = function (newCategory) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken(); // load the token from local storage
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.post('http://localhost/categories/add', newCategory, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.deletePost = function (postId) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', this.authToken);
        this.delOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
        return this.http.delete('http://localhost/posts/delete/' + postId, this.delOptions).map(function (res) { return res.json(); });
    };
    PostsService.prototype.deleteComment = function (postId, commentId, userId, commentAuthor) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', this.authToken);
        this.delOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
        return this.http.delete('http://localhost/posts/comments/delete/' + postId + '/' + commentId, this.delOptions).map(function (res) { return res.json(); });
    };
    PostsService.prototype.addcomment = function (newComment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken(); // load the token from local storage
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.post('http://localhost/posts/addcomment', newComment, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], PostsService);
    return PostsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/posts.service.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(691),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/app.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_validate_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_posts_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_showposts_showposts_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_editpost_editpost_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_showbycategory_showbycategory_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_showbyauthor_showbyauthor_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_addpost_addpost_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_addcategory_addcategory_component__ = __webpack_require__(510);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'show/:id', component: __WEBPACK_IMPORTED_MODULE_17__components_showposts_showposts_component__["a" /* ShowPostsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_editpost_editpost_component__["a" /* EditPostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'show/category/:catname', component: __WEBPACK_IMPORTED_MODULE_19__components_showbycategory_showbycategory_component__["a" /* ShowByCategoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'show/author/:author', component: __WEBPACK_IMPORTED_MODULE_20__components_showbyauthor_showbyauthor_component__["a" /* ShowByAuthorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'addpost', component: __WEBPACK_IMPORTED_MODULE_21__components_addpost_addpost_component__["a" /* AddpostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'addcategory', component: __WEBPACK_IMPORTED_MODULE_22__components_addcategory_addcategory_component__["a" /* AddcategoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_showposts_showposts_component__["a" /* ShowPostsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_editpost_editpost_component__["a" /* EditPostComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_showbycategory_showbycategory_component__["a" /* ShowByCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_showbyauthor_showbyauthor_component__["a" /* ShowByAuthorComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_addpost_addpost_component__["a" /* AddpostComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_addcategory_addcategory_component__["a" /* AddcategoryComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__["FlashMessagesModule"],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__services_posts_service__["a" /* PostsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/app.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_posts_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddcategoryComponent = (function () {
    function AddcategoryComponent(validateService, flashMessage, authService, router, post) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.post = post;
    }
    AddcategoryComponent.prototype.ngOnInit = function () {
    };
    AddcategoryComponent.prototype.onAddCategory = function (event) {
        var _this = this;
        event.preventDefault();
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile;
            console.log(_this.user);
            _this.createdBy = _this.user.user.username;
            var newCategory = {
                name: _this.name,
                createdBy: _this.createdBy
            };
            //Required fields
            if (!(_this.validateService.validateCategory(newCategory))) {
                _this.flashMessage.show('Please fill in all fields !', { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            //Register user
            _this.post.addCategory(newCategory).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('Your category has been added !', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/dashboard']);
                }
                else {
                    _this.flashMessage.show('Something went wrong !', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/addcategory']);
                }
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    AddcategoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addcategory',
            template: __webpack_require__(692),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_posts_service__["a" /* PostsService */]) === 'function' && _e) || Object])
    ], AddcategoryComponent);
    return AddcategoryComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/addcategory.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_posts_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__plugins_multipart_upload_multipart_item__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__plugins_multipart_upload_multipart_uploader__ = __webpack_require__(524);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddpostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var URL = '/posts/add';
var AddpostComponent = (function () {
    function AddpostComponent(route, post, auth, validateService, flashMessage, router, http) {
        this.route = route;
        this.post = post;
        this.auth = auth;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.http = http;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_8__plugins_multipart_upload_multipart_uploader__["a" /* MultipartUploader */]({ url: URL });
        this.multipartItem = new __WEBPACK_IMPORTED_MODULE_7__plugins_multipart_upload_multipart_item__["a" /* MultipartItem */](this.uploader);
    }
    AddpostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getProfile().subscribe(function (profile) {
            _this.post.getCategories().subscribe(function (categories) {
                _this.user = profile.user;
                _this.categories = categories.data;
                _this.author = _this.user.username;
                _this.upload = function () {
                    if (null == _this.file || null == _this.title || null == _this.category || null == _this.author || null == _this.body) {
                        console.error("addpost.ts & upload() form invalid.");
                        var errx = 'Invalid data entered !';
                        _this.flashMessage.show(errx, { cssClass: 'alert-danger', timeout: 3000 });
                        return;
                    }
                    if (_this.multipartItem == null) {
                        _this.multipartItem = new __WEBPACK_IMPORTED_MODULE_7__plugins_multipart_upload_multipart_item__["a" /* MultipartItem */](_this.uploader);
                    }
                    if (_this.multipartItem.formData == null)
                        _this.multipartItem.formData = new FormData();
                    _this.multipartItem.formData.append("title", _this.title);
                    _this.multipartItem.formData.append("category", _this.category);
                    _this.multipartItem.formData.append("body", _this.body);
                    _this.multipartItem.formData.append("author", _this.user.username);
                    _this.multipartItem.formData.append("image", _this.file);
                    _this.multipartItem.callback = _this.uploadCallback;
                    _this.multipartItem.upload();
                };
                _this.uploadCallback = function (data) {
                    var xaren = JSON.parse(data);
                    _this.file = null;
                    if (xaren.success) {
                        _this.flashMessage.show(xaren.msg, { cssClass: 'alert-success', timeout: 3000 });
                        _this.router.navigate(['/show', xaren.data._id]);
                    }
                    else {
                        console.error("addpost.ts & uploadCallback() upload file false.");
                        _this.flashMessage.show('There has been an error, try again !', { cssClass: 'alert-danger', timeout: 3000 });
                    }
                };
            }, function (err) {
                console.log(err);
                return false;
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    /*
    
      onAddPostSubmit(event) {
    
    
         console.log(this.newPost);
    
    
    
    
    
    
    
    
    
          if(!(this.validateService.validatePost(this.newPost))) {
              this.flashMessage.show('Please fill in all fields !',{cssClass: 'alert-danger', timeout: 3000});
              return false;
          }
    
    
          this.post.addPost(this.newPost).subscribe(data => {
              if(data.success) {
                  this.flashMessage.show('Your post has been added successfully !', {cssClass:'alert-success', timeout:3000});
                  console.log(data);
                 // this.router.navigate(['/login']);
              }else {
                  this.flashMessage.show('Something went wrong !', {cssClass:'alert-danger', timeout:3000});
                  //this.router.navigate(['/register']);
              }
          });
    
    
    
    
    
      }
    */
    AddpostComponent.prototype.selectFile = function ($event) {
        var inputValue = $event.target;
        if (null == inputValue || null == inputValue.files[0]) {
            console.debug("Input file error.");
            return;
        }
        else {
            this.file = inputValue.files[0];
            console.log('Selected : ' + this.file.name + ' of size ' + this.file.size);
            console.debug("Input File name: " + this.file.name + " type:" + this.file.size + " size:" + this.file.size);
        }
    };
    AddpostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addpost',
            template: __webpack_require__(693),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_posts_service__["a" /* PostsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]) === 'function' && _g) || Object])
    ], AddpostComponent);
    return AddpostComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/addpost.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_posts_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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
    function DashboardComponent(auth, router, posts) {
        this.auth = auth;
        this.router = router;
        this.posts = posts;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.posts.getPosts().subscribe(function (posts) {
            _this.post = posts.data;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(694),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_posts_service__["a" /* PostsService */]) === 'function' && _c) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/dashboard.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_posts_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditPostComponent = (function () {
    function EditPostComponent(route, post, auth, validateService, flashMessage, router) {
        this.route = route;
        this.post = post;
        this.auth = auth;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    EditPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
        this.post.getPostById(this.id).subscribe(function (posts) {
            _this.auth.getProfile().subscribe(function (profile) {
                _this.post.getCategories().subscribe(function (categories) {
                    _this.user = profile.user;
                    _this.id = posts.data._id;
                    _this.postData = posts.data;
                    _this.categories = categories.data;
                    _this.body = posts.data.body;
                    _this.category = posts.data.category;
                    _this.title = posts.data.title;
                    console.log(categories.data);
                }, function (err) {
                    console.log(err);
                    return false;
                });
            }, function (err) {
                console.log(err);
                return false;
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    EditPostComponent.prototype.onSaveSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        var newPost = {
            postId: this.id,
            title: this.title,
            category: this.category,
            body: this.body,
        };
        //Required fields
        if (!(this.validateService.validateUpdate(newPost))) {
            this.flashMessage.show('Please fill in all fields !', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register user
        this.post.updatePost(newPost).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Your post has been updated !', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/show/' + newPost.postId]);
            }
            else {
                _this.flashMessage.show('Something went wrong !', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    EditPostComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    EditPostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */]]
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editpost',
            template: __webpack_require__(695),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _f) || Object])
    ], EditPostComponent);
    return EditPostComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/editpost.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(696),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/home.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(auth, router, flashMessage, validateService) {
        this.auth = auth;
        this.router = router;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        var user = {
            username: this.username,
            password: this.password
        };
        if (!(this.validateService.validateLogin(user))) {
            this.flashMessage.show('Please fill in all fields !', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.auth.authenticateUser(user).subscribe(function (data) {
            if (data.success == true) {
                _this.auth.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in !', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show('Some error', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(697),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/login.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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
    function NavbarComponent(auth, flashMessage, router) {
        this.auth = auth;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.auth.logout();
        this.flashMessage.show('You have been logged out !', { cssClass: 'alert-info', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(698),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/navbar.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_posts_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(auth, router, post) {
        this.auth = auth;
        this.router = router;
        this.post = post;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.post.getPostsByAuthor(_this.user.username).subscribe(function (posts) {
                _this.postData = posts.data;
            }, function (err) {
                console.log(err);
                return false;
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(699),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_posts_service__["a" /* PostsService */]) === 'function' && _c) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/profile.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        var newUser = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        //Required fields
        if (!(this.validateService.validateRegister(newUser))) {
            this.flashMessage.show('Please fill in all fields !', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!(this.validateService.validateEmail(newUser.email))) {
            this.flashMessage.show('Email is not valid !', { cssClass: 'alert-danger', timeout: 3000 });
        }
        //Register user
        this.authService.registerUser(newUser).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in !', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong !', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(700),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/register.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_posts_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowByAuthorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowByAuthorComponent = (function () {
    function ShowByAuthorComponent(route, post, auth) {
        this.route = route;
        this.post = post;
        this.auth = auth;
    }
    ShowByAuthorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.author = params['author'];
        });
        console.log(this.author);
        this.post.getPostsByAuthor(this.author).subscribe(function (posts) {
            _this.auth.getProfile().subscribe(function (profile) {
                _this.user = profile.user;
                _this.postData = posts.data;
                console.log(_this.postData);
            }, function (err) {
                console.log(err);
                return false;
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ShowByAuthorComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ShowByAuthorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-showbyauthor',
            template: __webpack_require__(701),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], ShowByAuthorComponent);
    return ShowByAuthorComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/showbyauthor.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_posts_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowByCategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowByCategoryComponent = (function () {
    function ShowByCategoryComponent(route, post, auth) {
        this.route = route;
        this.post = post;
        this.auth = auth;
    }
    ShowByCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.catname = params['catname']; // (+) converts string 'id' to a number
        });
        this.post.getPostsByCatName(this.catname).subscribe(function (posts) {
            _this.auth.getProfile().subscribe(function (profile) {
                _this.user = profile.user;
                _this.postData = posts.data;
            }, function (err) {
                console.log(err);
                return false;
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ShowByCategoryComponent.prototype.deletePost = function (postId, userId) {
        var _this = this;
        this.auth.getProfile().subscribe(function (profile) {
            if (profile.user._id == userId) {
                _this.post.deletePost(postId).subscribe(function (post) {
                    _this.dPost = post;
                    console.log(post);
                }, function (err) {
                    console.log(err);
                    return false;
                });
            }
            else {
                console.log('Unauthorized !');
                return false;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ShowByCategoryComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ShowByCategoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-showbycategory',
            template: __webpack_require__(702),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], ShowByCategoryComponent);
    return ShowByCategoryComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/showbycategory.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_posts_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowPostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowPostsComponent = (function () {
    function ShowPostsComponent(route, post, auth, router) {
        this.route = route;
        this.post = post;
        this.auth = auth;
        this.router = router;
    }
    ShowPostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
        this.post.getPostById(this.id).subscribe(function (posts) {
            _this.auth.getProfile().subscribe(function (profile) {
                console.log(profile);
                _this.user = profile.user;
                _this.postData = posts.data;
            }, function (err) {
                console.log(err);
                return false;
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ShowPostsComponent.prototype.onAddComment = function (postId) {
        var _this = this;
        this.auth.getProfile().subscribe(function (profile) {
            console.log(_this.commentBody);
            event.preventDefault();
            var newComment = {
                postId: postId,
                name: _this.commentName,
                email: _this.commentEmail,
                body: _this.commentBody,
                commentAuthor: profile.user.username
            };
            _this.post.addcomment(newComment).subscribe(function (data) {
                location.reload();
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ShowPostsComponent.prototype.deletePost = function (postId, userId) {
        var _this = this;
        this.auth.getProfile().subscribe(function (profile) {
            if (profile.user._id == userId) {
                _this.post.deletePost(postId).subscribe(function (post) {
                    _this.dPost = post;
                    if (post.success) {
                        _this.router.navigate(['/dashboard']);
                    }
                }, function (err) {
                    console.log(err);
                    return false;
                });
            }
            else {
                console.log('Unauthorized !');
                return false;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ShowPostsComponent.prototype.deleteComment = function (postId, commentId, userId, commentAuthor) {
        var _this = this;
        this.auth.getProfile().subscribe(function (profile) {
            if (profile.user._id == userId || profile.user.username == commentAuthor) {
                _this.post.deleteComment(postId, commentId, userId, commentAuthor).subscribe(function (comment) {
                    _this.dComment = comment;
                    console.log(comment);
                    location.reload();
                }, function (err) {
                    console.log(err);
                    return false;
                });
            }
            else {
                console.log('Unauthorized !');
                return false;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ShowPostsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ShowPostsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-showposts',
            template: __webpack_require__(703),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], ShowPostsComponent);
    return ShowPostsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/showposts.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/auth.guard.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipartItem; });
var MultipartItem = (function () {
    function MultipartItem(uploader) {
        this.uploader = uploader;
        this.alias = 'file';
        this.url = '/';
        this.method = 'POST';
        this.headers = [];
        this.withCredentials = true;
        this.formData = null;
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = null;
        this.callback = null;
    }
    MultipartItem.prototype.upload = function () {
        try {
            console.debug("multipart-item.ts & upload() ==>.");
            this.uploader.uploadItem(this);
        }
        catch (e) {
        }
    };
    MultipartItem.prototype.init = function () {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.formData = null;
        this.callback = null;
    };
    MultipartItem.prototype.onBeforeUpload = function () {
    };
    MultipartItem.prototype.onProgress = function (progress) {
    };
    MultipartItem.prototype.onSuccess = function (response, status, headers) {
    };
    MultipartItem.prototype.onError = function (response, status, headers) {
    };
    MultipartItem.prototype.onCancel = function (response, status, headers) {
    };
    MultipartItem.prototype.onComplete = function (response, status, headers) {
        this.callback(response);
        this.init();
    };
    MultipartItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    MultipartItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    MultipartItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = null;
        this.onSuccess(response, status, headers);
    };
    MultipartItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = null;
        this.onError(response, status, headers);
        this.callback(response);
    };
    MultipartItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = null;
        this.onCancel(response, status, headers);
    };
    MultipartItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
    };
    MultipartItem.prototype._prepareToUploading = function () {
        this.isReady = true;
    };
    return MultipartItem;
}());
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/multipart-item.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipartUploader; });
var MultipartUploader = (function () {
    function MultipartUploader(options) {
        this.options = options;
        this.isUploading = false;
        this.progress = 0;
        this.isHTML5 = true;
        this.timeout = 10000;
        // Object.assign(this, options);
        this.url = options.url;
        this.authToken = localStorage.getItem('id_token');
    }
    MultipartUploader.prototype.uploadItem = function (item) {
        if (this.isUploading) {
            console.log("multipart-uploader.ts & uploadItem() uploader is uploading now.");
            return;
        }
        this.isUploading = true;
        this._xhrTransport(item);
    };
    MultipartUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
    };
    MultipartUploader.prototype._parseHeaders = function (headers) {
        var parsed = {}, key, val, i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    MultipartUploader.prototype._transformResponse = function (response, headers) {
        return response;
    };
    MultipartUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    MultipartUploader.prototype._render = function () {
        // todo: ?
    };
    MultipartUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        console.debug("multipart-uploader.ts & _xhrTransport() ==>.");
        var xhr = item._xhr = new XMLHttpRequest();
        xhr.timeout = this.timeout;
        //if (item.formData.length === 0){
        //  throw new TypeError('Invalid form,form is empty.');
        //}
        this._onBeforeUploadItem(item);
        xhr.upload.onprogress = function (event) {
        };
        xhr.onload = function () {
            console.debug("multipart-uploader.ts & _xhrTransport.onload() ==>");
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            console.debug("multipart-uploader.ts & _xhrTransport.onerror() ==>");
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            //this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.ontimeout = function () {
            console.debug("multipart-uploader.ts & _xhrTransport.ontimeout() ==>");
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            //this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            console.debug("multipart-uploader.ts & _xhrTransport.onabort() ==>");
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            //this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, this.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.authToken) {
            xhr.setRequestHeader('Authorization', this.authToken);
        }
        console.debug("multipart-uploader.ts & _xhrTransport() send...");
        xhr.send(item.formData);
        this._render();
    };
    MultipartUploader.prototype.onSuccessItem = function (item, response, status, headers) {
    };
    MultipartUploader.prototype.onErrorItem = function (item, response, status, headers) {
        this.isUploading = false;
    };
    MultipartUploader.prototype.onCancelItem = function (item, response, status, headers) {
    };
    MultipartUploader.prototype.onCompleteItem = function (item, response, status, headers) {
    };
    MultipartUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    MultipartUploader.prototype._onErrorItem = function (item, response, status, headers) {
        console.debug("multipart-uploader.ts & _onErrorItem() ==>" + " Error status:" + status);
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    MultipartUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    MultipartUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        this.isUploading = false;
        //this.progress = this._getTotalProgress();
        this._render();
    };
    return MultipartUploader;
}());
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/multipart-uploader.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: true
};
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/environment.js.map

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ".battery:after {\r\n    background-color: #fff;\r\n    border: 2px solid #000;\r\n    content: \"\";\r\n    display: block;\r\n    height: 16px;\r\n    position: absolute;\r\n    right: -6px;\r\n    top: 6px;\r\n    width: 6px;\r\n}\r\n.battery {\r\n    background-color: #fff;\r\n    border: 2px solid #000;\r\n    height: 32px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    position: relative;\r\n    width: 100px;\r\n}\r\n.battery .battery-level {\r\n    background-color: #666;\r\n    height: 100%;\r\n}\r\n.battery .battery-level.high {\r\n    background-color: #66CD00;\r\n}\r\n.battery .battery-level.medium {\r\n    background-color: #FCD116;\r\n}\r\n.battery .battery-level.low {\r\n    background-color: #FF3333;\r\n}\r\n.battery .battery-level {\r\n    text-align: center;\r\n}"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Add new category</h2>\n<form (submit)=\"onAddCategory($event)\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Register\">\n</form>"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Add a new post</h2>\n<form>\n  <div class=\"form-group\">\n    <label>Title</label>\n    <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control\">\n  </div>\n\n  <div *ngIf=\"categories\">\n    <label>Select Category</label>\n    <div class=\"form-group\">\n      <select  name=\"category\" [(ngModel)]=\"category\" id=\"category\" class=\"form-control\">\n\n        <option *ngFor=\"let c of categories; let i = index;\" value=\"{{c.name}}\">{{c.name}}</option>\n\n      </select>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Body</label>\n    <textarea [(ngModel)]=\"body\" name=\"body\" class=\"form-control\"></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label>Image</label>\n    <input type=\"file\"   name=\"postImage\" (change)=\"selectFile($event)\" placeholder=\"Select your image\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" id=\"btnSubmit\" (click)=\"upload();\" value=\"Add Post\">\n</form>"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your dashboard</p>\n\n\n<div *ngIf=\"post\">\n\n    <div class=\"row\">\n        <div *ngFor=\"let p of post; let i = index;\"  class=\"col-sm-12 col-md-12 col-lg-12  well well-lg\">\n            <h1>{{p.title}}</h1>\n            <p class=\"small\">Posted in <b><a [routerLink]=\"['/show/category/',p.category]\">{{p.category}}</a></b> by <b><a [routerLink]=\"['/show/author/',p.author]\">{{p.author}}</a></b> on {{p.date}}</p>\n            <img src=\"../uploads/images/posts/{{p.image}}\" alt=\"{{p.title}}\" class=\"img-responsive\">\n            <br/>\n            <p>{{p.body}}</p>\n            <a class=\"btn btn-lg btn-info\" [routerLink]=\"['/show/',p._id]\">Read more</a>\n        </div>\n    </div>\n\n</div>\n\n\n\n"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"postData\">\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-12 col-md-12 col-lg-12  well well-lg\">\n      <form (submit)=\"onSaveSubmit($event)\">\n        <div class=\"form-group\">\n          <label>Change Title</label>\n        <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" placeholder=\"{{postData.title}}\" class=\"form-control\">\n        </div>\n        <div *ngIf=\"categories\">\n            <label>Change Category</label>\n            <div class=\"form-group\">\n              <select  name=\"category\" [(ngModel)]=\"category\" id=\"category\" class=\"form-control\">\n\n                <option *ngFor=\"let c of categories; let i = index;\" value=\"{{c.name}}\">{{c.name}}</option>\n\n              </select>\n            </div>\n        </div>\n\n      <p class=\"small\">Posted in <b><a href=\"/posts/get/category/{{postData.category}}\">{{postData.category}}</a></b> by <b>{{postData.author}}</b> on {{postData.date}}</p>\n\n\n      <img src=\"../uploads/images/posts/{{postData.image}}\" alt=\"{{postData.title}}\" class=\"img-responsive\">\n      <br/>\n      <textarea class=\"form-control\"  [(ngModel)]=\"body\" name=\"body\"></textarea>\n\n<br/>\n        <input class=\"btn btn-lg btn-info\" type=\"submit\" value=\"Save\">\n      </form>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Unimi Blog Cms</h1>\n  <p class=\"lead\">Un Blog veloce, responsive e facile da usare</p>\n  <div>\n     <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>&nbsp;<a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Angular 4 & Ajax</h3>\n    <p>Questo proggetto utilizza il framework Angular 4, che permette di fare richieste ad un API REST servito da un server in NodeJS. Per il caricamento del file ho dovuto usare delle richieste XMLHttpRequest costruendo un FormData, cosi potendo mandare la richiesta all'api in formato \"multipart/form-data\", in quanto Angular 4 e' appena uscito e non c'e` ancora un modo per fare queste richieste perche' i plugin sono stati abbandonati dopo il passaggio da Angular 2</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>NodeJS & ExpressJS</h3>\n    <p>Questo proggetto si basa su un server NodeJS e il framework ExpressJS, con delle API REST disponibili ed utilizzando Angular 4, vengono fatte delle richieste di GET,POST,DELETE e PUT, e mandato un token di autorizzazione nel header per poter autenticare in modo sicuro l'utente, cosi togliendo qualsiasi problema di sicurezza.</p>\n  </div>\n   <div class=\"col-md-4\">\n    <h3>MongoDB</h3>\n    <p>Tutti i dati utilizzati da questa applicazione, sono stoccati in una banca dati MongoDB, i file invece vengono stoccati sul server e viene salvato l'url del file nel database.</p>\n  </div>\n</div>"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit($event)\">\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" id=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" id=\"password\" name=\"username\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-lg btn-success\" value=\"Login\">\n\n\n</form>"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Unimi</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-left\">\n       <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a  [routerLink]=\"['/']\">Home</a></li>\n        <li *ngIf=\"auth.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"auth.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/addpost']\">Add new Post</a></li>\n        <li *ngIf=\"auth.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/addcategory']\">Add new Category</a></li>\n        <li *ngIf=\"auth.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n\n        <li *ngIf=\"!auth.loggedIn()\"[routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"!auth.loggedIn()\"[routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n        <li><a *ngIf=\"auth.loggedIn()\" (click)=\"onLogoutClick()\">Logout</a></li>\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div *ngIf=\"user\">\n\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\"><b>Username</b>  : {{user.username}}</li>\n    <li class=\"list-group-item\"><b>Email</b> : {{user.email}}</li>\n      </ul>\n\n</div>\n\n\n  <h1>Your posts</h1>\n  <div *ngIf=\"postData\">\n    <hr>\n    <div class=\"row\">\n      <div *ngFor=\"let p of postData; let i = index;\"  class=\"col-sm-12 col-md-12 col-lg-12  well well-lg\">\n        <h1>{{p.title}}</h1>\n        <p class=\"small\">Posted in <b><a [routerLink]=\"['/show/category/',p.category]\">{{p.category}}</a></b> by <b><a [routerLink]=\"['/show/author/',p.author]\">{{p.author}}</a></b> on {{p.date}}</p>\n        <img src=\"../uploads/images/posts/{{p.image}}\" alt=\"{{p.title}}\"  class=\"img-responsive\">\n        <br/>\n        <p>{{p.body}}</p>\n        <a class=\"btn btn-lg btn-info\" [routerLink]=\"['/show/',p._id]\">Read more</a>\n      </div>\n    </div>\n\n\n  </div>\n\n</div>"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit($event)\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"text\"  [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Register\">\n</form>"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "\n\n\n<div *ngIf=\"postData\">\n  <h2 class=\"page-header\"><b>Posts by</b> {{postData[0].author}}</h2>\n  <hr>\n  <div class=\"row\">\n    <div *ngFor=\"let p of postData; let i = index;\"  class=\"col-sm-12 col-md-12 col-lg-12  well well-lg\">\n      <h1>{{p.title}}</h1>\n      <p class=\"small\">Posted in <b><a [routerLink]=\"['/show/category/',p.category]\">{{p.category}}</a></b> by <b><a [routerLink]=\"['/show/author/',p.author]\">{{p.author}}</a></b> on {{p.date}}</p>\n      <img src=\"../uploads/images/posts/{{p.image}}\" alt=\"{{p.title}}\" class=\"img-responsive\">\n      <br/>\n      <p>{{p.body}}</p>\n      <a class=\"btn btn-lg btn-info\" [routerLink]=\"['/show/',p._id]\">Read more</a>\n    </div>\n  </div>\n\n</div>\n\n\n\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "\n\n\n<div *ngIf=\"postData\">\n  <h2 class=\"page-header\"><b>Posts by</b> {{postData[0].category}}</h2>\n  <hr>\n  <div class=\"row\">\n    <div *ngFor=\"let p of postData; let i = index;\"  class=\"col-sm-12 col-md-12 col-lg-12  well well-lg\">\n      <h1>{{p.title}}</h1>\n      <p class=\"small\">Posted in <b><a [routerLink]=\"['/show/category/',p.category]\">{{p.category}}</a></b> by <b><a [routerLink]=\"['/show/author/',p.author]\">{{p.author}}</a></b> on {{p.date}}</p>\n      <img src=\"../uploads/images/posts/{{p.image}}\" alt=\"{{p.title}}\" class=\"img-responsive\">\n      <br/>\n      <p>{{p.body}}</p>\n      <a class=\"btn btn-lg btn-info\" [routerLink]=\"['/show/',p._id]\">Read more</a>\n    </div>\n  </div>\n\n</div>\n\n\n\n"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"postData\">\n\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-12 col-lg-12  well well-lg\">\n      <h1>{{postData.title}}</h1>\n      <p class=\"small\">Posted in <b><a [routerLink]=\"['/show/category/',postData.category]\">{{postData.category}}</a></b> by <b><a [routerLink]=\"['/show/author/',postData.author]\">{{postData.author}}</a></b> on {{postData.date}}</p>\n\n      <div *ngIf=\"user && user.username == postData.author\">\n        <a class=\"btn btn-sm btn-warning\" [routerLink]=\"['/edit/',postData._id]\">Edit</a>\n        <a class=\"btn btn-sm btn-danger\" (click)=\"deletePost(postData._id,user._id)\">Delete</a>\n        <br/><br/>\n      </div>\n      <img src=\"../uploads/images/posts/{{postData.image}}\" alt=\"{{postData.title}}\" class=\"img-responsive\">\n      <br/>\n      <p>{{postData.body}}</p>\n\n    </div>\n  </div>\n\n  <div *ngIf=\"postData.comments && user\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h3>Comments</h3>\n        <div class=\"row\">\n          <div *ngFor=\"let comment of postData.comments; let i= index;\" class=\"col-md-12 alert alert-info\">\n            <p><b>{{comment.name}}</b></p>\n            <p>{{comment.body}}</p>\n            <br/><br/>\n            <div *ngIf=\"user.username == postData.author || user.username == comment.commentAuthor\">\n              <a class=\"btn btn-sm btn-danger\" (click)=\"deleteComment(postData._id,comment._id,user._id,comment.commentAuthor)\">Delete</a>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <h3>Add comment</h3>\n  <form *ngIf=\"user\" (submit)=\"onAddComment(postData._id)\">\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input type=\"text\" [(ngModel)]=\"commentName\" class=\"form-control\" name=\"commentName\">\n    </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"email\" [(ngModel)]=\"commentEmail\" class=\"form-control\" name=\"commentEmail\">\n  </div>\n    <div class=\"form-group\">\n      <label>Comment</label>\n      <textarea [(ngModel)]=\"commentBody\" class=\"form-control\" name=\"commentBody\"></textarea>\n    </div>\n    <input type=\"submit\" class=\"btn btn-lg btn-success\" value=\"Add Comment\">\n  </form>\n\n</div>"

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(391);


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined || user.email === undefined || user.username === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validatePost = function (post) {
        if (post.title === undefined || post.category === undefined || post.body === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateCategory = function (category) {
        if (category.name === undefined || category.createdBy === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.username === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateUpdate = function (post) {
        if (post.title === undefined || post.category === undefined || post.body === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=C:/Users/xarenwo/PhpstormProjects/unimi/client/src/validate.service.js.map

/***/ })

},[726]);
//# sourceMappingURL=main.bundle.map