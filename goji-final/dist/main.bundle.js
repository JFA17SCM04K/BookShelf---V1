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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_message__ = __webpack_require__("./node_modules/primeng/message.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__book_book_component__ = __webpack_require__("./src/app/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__book_detail_book_detail_component__ = __webpack_require__("./src/app/book-detail/book-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__book_create_book_create_component__ = __webpack_require__("./src/app/book-create/book-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__book_edit_book_edit_component__ = __webpack_require__("./src/app/book-edit/book-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_sidenav__ = __webpack_require__("./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_grid_list__ = __webpack_require__("./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_chips__ = __webpack_require__("./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_radio__ = __webpack_require__("./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_divider__ = __webpack_require__("./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material_list__ = __webpack_require__("./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material_progress_spinner__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_primeng_growl__ = __webpack_require__("./node_modules/primeng/growl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_primeng_growl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_primeng_growl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_primeng_inputtext__ = __webpack_require__("./node_modules/primeng/inputtext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_primeng_inputtext___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_primeng_inputtext__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_primeng_button__ = __webpack_require__("./node_modules/primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_primeng_radiobutton__ = __webpack_require__("./node_modules/primeng/radiobutton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_primeng_radiobutton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_primeng_radiobutton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_primeng_checkbox__ = __webpack_require__("./node_modules/primeng/checkbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_primeng_checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_primeng_checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_primeng_dropdown__ = __webpack_require__("./node_modules/primeng/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_primeng_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_primeng_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_primeng_calendar__ = __webpack_require__("./node_modules/primeng/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_primeng_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37_primeng_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_primeng_inputtextarea__ = __webpack_require__("./node_modules/primeng/inputtextarea.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_primeng_inputtextarea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_primeng_inputtextarea__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_primeng_spinner__ = __webpack_require__("./node_modules/primeng/spinner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_primeng_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_primeng_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_primeng_chart__ = __webpack_require__("./node_modules/primeng/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_primeng_chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_primeng_chart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__chart_chart_component__ = __webpack_require__("./src/app/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__shared_common_service__ = __webpack_require__("./src/app/shared/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_primeng_dialog__ = __webpack_require__("./node_modules/primeng/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_primeng_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43_primeng_dialog__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













































var appRoutes = [
    {
        path: 'books',
        component: __WEBPACK_IMPORTED_MODULE_8__book_book_component__["a" /* BookComponent */],
        data: { title: 'Book List' }
    },
    {
        path: 'books/charts',
        component: __WEBPACK_IMPORTED_MODULE_41__chart_chart_component__["a" /* ChartComponent */],
        data: { title: 'Charts' }
    },
    {
        path: 'book-details/:id',
        component: __WEBPACK_IMPORTED_MODULE_10__book_detail_book_detail_component__["a" /* BookDetailComponent */],
        data: { title: 'Book Details' }
    },
    {
        path: 'book-create',
        component: __WEBPACK_IMPORTED_MODULE_11__book_create_book_create_component__["a" /* BookCreateComponent */],
        data: { title: 'Create Book' }
    },
    {
        path: 'book-edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_12__book_edit_book_edit_component__["a" /* BookEditComponent */],
        data: { title: 'Edit Book' }
    },
    { path: '',
        redirectTo: '/books',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__book_book_component__["a" /* BookComponent */],
                __WEBPACK_IMPORTED_MODULE_10__book_detail_book_detail_component__["a" /* BookDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__book_create_book_create_component__["a" /* BookCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_12__book_edit_book_edit_component__["a" /* BookEditComponent */],
                __WEBPACK_IMPORTED_MODULE_13__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_41__chart_chart_component__["a" /* ChartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["d" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_32_primeng_inputtext__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_33_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_34_primeng_radiobutton__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_27_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_35_primeng_checkbox__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_36_primeng_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_37_primeng_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_38_primeng_inputtextarea__["InputTextareaModule"],
                __WEBPACK_IMPORTED_MODULE_39_primeng_spinner__["SpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_28__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__["b" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_material_divider__["a" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_40_primeng_chart__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_message__["MessageModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_31_primeng_growl__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_30__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_43_primeng_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_42__shared_common_service__["a" /* CommonService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-create/book-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book-create/book-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n<mat-drawer-container class=\"example-container\" style=\"background-color:#3f51b5;\">\r\n  <mat-drawer mode=\"side\" opened=\"true\" style=\"background-color:#3f51b5;\">\r\n    <div class=\"ui-g\">\r\n      <mat-list>\r\n        <mat-list-item style=\"cursor:pointer;color:white;\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/book-create\">Add Books</mat-list-item>\r\n        <mat-divider></mat-divider>\r\n        <mat-list-item style=\"cursor:pointer;color:white;\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/books/charts\">Analysis</mat-list-item>\r\n        <mat-divider></mat-divider>\r\n      </mat-list>\r\n    </div>\r\n  </mat-drawer>\r\n    <mat-drawer-content>\r\n      <div class=\"ui-g-12\">\r\n        <mat-card style=\"margin: 10px 200px 10px 100px;border: 0.1px solid;height: 1000px;\">\r\n          <h4 style=\"font-size:20px;margin: 20px 100px 20px 300px;\">ADD NEW BOOK</h4>\r\n               <form (ngSubmit)=\"saveBook(bookForm)\" #bookForm=\"ngForm\" style=\"margin: 40px 100px 20px 300px;\">\r\n               <span class=\"ui-float-label\">\r\n                   <input id=\"float-input\" type=\"text\" pInputText [(ngModel)]=\"book.isbn\" name=\"isbn\" required #isbn=\"ngModel\">\r\n                   <label for=\"float-input\">ISBN</label>\r\n                   <span *ngIf=\"!isbn.valid && isbn.touched\">\r\n                     <p-message severity=\"error\" text=\"Field is required\"></p-message>\r\n                   </span>\r\n               </span>\r\n               <br>\r\n               <span class=\"ui-float-label\">\r\n                   <input id=\"float-input\" type=\"text\" pInputText [(ngModel)]=\"book.title\" name=\"title\" required #title=\"ngModel\">\r\n                   <label for=\"float-input\">Title</label>\r\n                   <span *ngIf=\"!title.valid && title.touched\">\r\n                     <p-message severity=\"error\" text=\"Field is required\"></p-message>\r\n                   </span>\r\n               </span>\r\n               <br>\r\n               <span class=\"ui-float-label\">\r\n                   <input id=\"float-input\" type=\"text\" pInputText [(ngModel)]=\"book.author\" name=\"author\" required #author=\"ngModel\">\r\n                   <label for=\"float-input\">Author</label>\r\n                   <span *ngIf=\"!author.valid && author.touched\">\r\n                     <p-message severity=\"error\" text=\"Field is required\"></p-message>\r\n                   </span>\r\n               </span>\r\n               <br>\r\n               <span class=\"ui-float-label\">\r\n                   <input id=\"float-input\" type=\"text\" pInputText [(ngModel)]=\"book.description\" name=\"description\" required #description=\"ngModel\">\r\n                   <label for=\"float-input\">Description</label>\r\n                   <span *ngIf=\"!description.valid && description.touched\">\r\n                     <p-message severity=\"error\" text=\"Field is required\"></p-message>\r\n                   </span>\r\n               </span>\r\n\r\n               <br>\r\n               <span class=\"ui-float-label\">\r\n                   <input id=\"float-input\" type=\"text\" pInputText [(ngModel)]=\"book.publisher\" name=\"publisher\" required #publisher=\"ngModel\">\r\n                   <label for=\"float-input\">Publisher</label>\r\n                   <span *ngIf=\"!publisher.valid && publisher.touched\">\r\n                     <p-message severity=\"error\" text=\"Field is required\"></p-message>\r\n                   </span>\r\n               </span>\r\n               <br>\r\n                <h5>Published Date:</h5>\r\n                <p-calendar [(ngModel)]=\"book.published_date\" name=\"book.published_date\"></p-calendar>\r\n                <br>\r\n                <div class=\"ui-g\" style=\"display:block;\">\r\n                  <h5>Availability:</h5>\r\n                  <div class=\"ui-g-12\"><p-radioButton name=\"group1\" value=\"Yes\" label=\"Yes\" [(ngModel)]=\"book.available\" inputId=\"opt1\"></p-radioButton></div>\r\n                  <div class=\"ui-g-12\"><p-radioButton name=\"group1\" value=\"No\" label=\"No\" [(ngModel)]=\"book.available\" inputId=\"opt2\"></p-radioButton></div>\r\n                </div>\r\n                <h5>Genre:</h5>\r\n                <div class=\"ui-g\" style=\"width:250px;margin-bottom:10px\">\r\n                    <div class=\"ui-g-12\"><p-radioButton name=\"group2\" value=\"Fiction\" label=\"Fiction\" [(ngModel)]=\"book.genre\" inputId=\"Fiction\"></p-radioButton></div>\r\n                    <div class=\"ui-g-12\"><p-radioButton name=\"group2\" value=\"Science and Technology\" label=\"Science and Technology\" [(ngModel)]=\"book.genre\" inputId=\"Science and Technology\"></p-radioButton></div>\r\n                    <div class=\"ui-g-12\"><p-radioButton name=\"group2\" value=\"Comic\" label=\"Comic\" [(ngModel)]=\"book.genre\" inputId=\"Comic\"></p-radioButton></div>\r\n                    <div class=\"ui-g-12\"><p-radioButton name=\"group2\" value=\"Engineering\" label=\"Engineering\" [(ngModel)]=\"book.genre\" inputId=\"Engineering\"></p-radioButton></div>\r\n                </div>\r\n               <button mat-button type=\"submit\" style=\"border: 1px solid;\" [disabled]=\"!bookForm.form.valid\" color=\"primary\">ADD BOOK</button>\r\n               </form>\r\n          </mat-card>\r\n        </div>\r\n    </mat-drawer-content>\r\n  </mat-drawer-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/book-create/book-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_common_service__ = __webpack_require__("./src/app/shared/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookCreateComponent = /** @class */ (function () {
    function BookCreateComponent(router, commonService, route, snackBar) {
        this.router = router;
        this.commonService = commonService;
        this.route = route;
        this.snackBar = snackBar;
        this.book = {};
    }
    BookCreateComponent.prototype.ngOnInit = function () {
    };
    BookCreateComponent.prototype.saveBook = function (form) {
        var _this = this;
        console.log("Inside the on save");
        console.log("seeeeeeeeeeeeeeeeeee");
        console.log(form);
        this.commonService.storeRecipes(this.book)
            .subscribe(function (response) {
            console.log("res is");
            console.log(response);
            var id = response['_id'];
            console.log("id is" + id);
            _this.router.navigate(['/book-details', id], { relativeTo: _this.route });
            _this.snackBar.open("Book has been created", "OK", {
                duration: 20000,
            });
        }, function (err) {
            console.log(err);
        });
    };
    BookCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-create',
            template: __webpack_require__("./src/app/book-create/book-create.component.html"),
            styles: [__webpack_require__("./src/app/book-create/book-create.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatSnackBar */]])
    ], BookCreateComponent);
    return BookCreateComponent;
}());



/***/ }),

/***/ "./src/app/book-detail/book-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book-detail/book-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n<mat-drawer-container class=\"example-container\" style=\"background-color:#3f51b5;\">\r\n  <mat-drawer mode=\"side\" opened=\"true\" style=\"background-color:#3f51b5;\">\r\n    <div class=\"ui-g\">\r\n      <mat-list>\r\n        <mat-list-item style=\"cursor:pointer;color:white;\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/book-create\">Add Books</mat-list-item>\r\n        <mat-divider></mat-divider>\r\n        <mat-list-item style=\"cursor:pointer;color:white;\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/books/charts\">Analysis</mat-list-item>\r\n        <mat-divider></mat-divider>\r\n      </mat-list>\r\n    </div>\r\n  </mat-drawer>\r\n    <mat-drawer-content>\r\n      <mat-card style=\"margin: 10px 200px 10px 100px;border: 0.1px solid;height: 800px;\">\r\n        <mat-card-content>\r\n          <h2 class=\"example-h2\">{{ book.title }}</h2>\r\n          <mat-tab-group class=\"demo-tab-group\">\r\n            <mat-tab label=\"ISBN\">\r\n              <div class=\"demo-tab-content\" style=\"height: 200px\">\r\n                <br>\r\n                 <ul>\r\n                   <li>{{ book.isbn }}</li>\r\n                 </ul>\r\n              </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Author\">\r\n              <div class=\"demo-tab-content\" style=\"height: 200px\">\r\n                <br>\r\n                 <ul>\r\n                   <li>{{ book.author }}</li>\r\n                 </ul>\r\n              </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Description\">\r\n              <div class=\"demo-tab-content\" style=\"height: 200px\">\r\n                <br>\r\n                <ul>\r\n                  <li>\r\n                    {{ book.description }}\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Publisher\">\r\n              <div class=\"demo-tab-content\" style=\"height: 200px\">\r\n                <br>\r\n                <ul>\r\n                  <li>\r\n                    {{ book.publisher }}\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Published Date\">\r\n              <div class=\"demo-tab-content\" style=\"height: 200px\">\r\n                <br>\r\n                <ul>\r\n                  <li>\r\n                    {{ book.published_date }}\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Availability\">\r\n              <div class=\"demo-tab-content\" style=\"height: 200px\">\r\n                <br>\r\n                <ul>\r\n                  <li>\r\n                    {{ book.available }}\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Genre\">\r\n              <div class=\"demo-tab-content\" style=\"height: 200px\">\r\n                <br>\r\n                <ul>\r\n                  <li>\r\n                    {{ book.genre }}\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Types Available\">\r\n              <div class=\"demo-tab-content\" style=\"height: 200px\">\r\n                <br>\r\n                <ul>\r\n                  <li>\r\n                    {{ book.type }}\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </mat-tab>\r\n          </mat-tab-group>\r\n          <mat-card-actions>\r\n            <!-- <a [routerLink]=\"['/book-edit', book._id]\" class=\"btn btn-success\">EDIT</a> -->\r\n            <button mat-button style=\"border: 1px solid;\" [routerLink]=\"['/book-edit', book._id]\" color=\"primary\">EDIT</button>\r\n            <button mat-button style=\"border: 1px solid;\" (click)=\"deleteBook(book._id)\" color=\"accent\">DELETE</button>\r\n            <!-- <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteBook(book._id)\">DELETE</button> -->\r\n          </mat-card-actions>\r\n        </mat-card-content>\r\n      </mat-card>\r\n\r\n    </mat-drawer-content>\r\n</mat-drawer-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/book-detail/book-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_common_service__ = __webpack_require__("./src/app/shared/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookDetailComponent = /** @class */ (function () {
    function BookDetailComponent(router, route, http, commonService, snackBar) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.commonService = commonService;
        this.snackBar = snackBar;
        this.book = {};
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        this.getBookDetail(this.route.snapshot.params['id']);
    };
    BookDetailComponent.prototype.getBookDetail = function (id) {
        var _this = this;
        this.commonService.getOneBook(id)
            .subscribe(function (data) {
            _this.book = data;
        });
    };
    BookDetailComponent.prototype.deleteBook = function (id) {
        var _this = this;
        this.commonService.deleteOneBook(id)
            .subscribe(function (res) {
            _this.router.navigate(['/books'], { relativeTo: _this.route });
            _this.snackBar.open("Book has been deleted", "OK", {
                duration: 20000,
            });
        }, function (err) {
            console.log(err);
        });
    };
    BookDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-detail',
            template: __webpack_require__("./src/app/book-detail/book-detail.component.html"),
            styles: [__webpack_require__("./src/app/book-detail/book-detail.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__shared_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatSnackBar */]])
    ], BookDetailComponent);
    return BookDetailComponent;
}());



/***/ }),

/***/ "./src/app/book-edit/book-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book-edit/book-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"ui-g-12\">\r\n<mat-drawer-container class=\"example-container\" style=\"background-color:#3f51b5;\">\r\n  <mat-drawer mode=\"side\" opened=\"true\" style=\"background-color:#3f51b5;\">\r\n    <div class=\"ui-g\">\r\n      <mat-list>\r\n        <mat-list-item style=\"cursor:pointer;color:white;\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/book-create\">Add Books</mat-list-item>\r\n        <mat-divider></mat-divider>\r\n        <mat-list-item style=\"cursor:pointer;color:white;\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/books/charts\">Analysis</mat-list-item>\r\n        <mat-divider></mat-divider>\r\n      </mat-list>\r\n    </div>\r\n  </mat-drawer>\r\n    <mat-drawer-content>\r\n      <mat-card style=\"margin: 10px 200px 10px 100px;border: 0.1px solid;height: 800px;\">\r\n\r\n        <h4 style=\"font-size:20px;margin: 20px 100px 20px 300px;\">EDIT BOOK</h4>\r\n        <button type=\"button\" pButton (click)=\"clear(bookForm)\" icon=\"fa-close\" style=\"float:left\" label=\"Clear Form\" class=\"ui-button-danger\"></button>\r\n         <form (ngSubmit)=\"updateBook(book._id,book)\" #bookForm=\"ngForm\" style=\"margin: 40px 100px 20px 200px;\">\r\n         <span class=\"ui-float-label\">\r\n             <input id=\"float-input\" type=\"text\" pInputText [(ngModel)]=\"book.isbn\" name=\"isbn\" required>\r\n             <label for=\"float-input\">ISBN</label>\r\n         </span>\r\n         <br>\r\n         <span class=\"ui-float-label\">\r\n             <input id=\"float-input\" type=\"text\" pInputText [(ngModel)]=\"book.title\" name=\"title\" required>\r\n             <label for=\"float-input\">Title</label>\r\n         </span>\r\n         <br>\r\n         <span class=\"ui-float-label\">\r\n             <input id=\"float-input\" type=\"text\" pInputText [(ngModel)]=\"book.author\" name=\"author\" required>\r\n             <label for=\"float-input\">Author</label>\r\n         </span>\r\n         <br>\r\n         <span class=\"ui-float-label\">\r\n             <input id=\"float-input\" type=\"text\" pInputText [(ngModel)]=\"book.description\" name=\"description\" required>\r\n             <label for=\"float-input\">Description</label>\r\n             <!-- <textarea rows=\"5\" cols=\"30\" pInputTextarea autoResize=\"autoResize\"></textarea> -->\r\n         </span>\r\n         <br>\r\n         <span class=\"ui-float-label\">\r\n             <input id=\"float-input\" type=\"text\" pInputText [(ngModel)]=\"book.publisher\" name=\"publisher\" required>\r\n             <label for=\"float-input\">Publisher</label>\r\n         </span>\r\n         <br>\r\n         <!-- <div class=\"ui-g-12 ui-md-4\" style=\"display:block;\">\r\n          <h5>Published Date</h5>\r\n          <p-calendar [(ngModel)]=\"book.published_date\" name=\"book.published_date\"></p-calendar>\r\n          </div> -->\r\n\r\n\r\n            <h5>Availability:</h5>\r\n            <div class=\"ui-g-12\"><p-radioButton name=\"group1\" value=\"Yes\" label=\"Yes\" [(ngModel)]=\"book.available\" inputId=\"opt1\"></p-radioButton></div>\r\n            <div class=\"ui-g-12\"><p-radioButton name=\"group1\" value=\"No\" label=\"No\" [(ngModel)]=\"book.available\" inputId=\"opt2\"></p-radioButton></div>\r\n\r\n\r\n\r\n          <h5>Genre:</h5>\r\n          <div class=\"ui-g\" style=\"width:250px;margin-bottom:10px\">\r\n              <div class=\"ui-g-12\"><p-checkbox name=\"group2\" value=\"Fiction\" label=\"Fiction\" [(ngModel)]=\"book.genre\" inputId=\"Fiction\"></p-checkbox></div>\r\n              <div class=\"ui-g-12\"><p-checkbox name=\"group2\" value=\"Science and Technology\" label=\"Science and Technology\" [(ngModel)]=\"book.genre\" inputId=\"Science and Technology\"></p-checkbox></div>\r\n              <div class=\"ui-g-12\"><p-checkbox name=\"group2\" value=\"Comic\" label=\"Comic\" [(ngModel)]=\"book.genre\" inputId=\"Comic\"></p-checkbox></div>\r\n              <div class=\"ui-g-12\"><p-checkbox name=\"group2\" value=\"Engineering\" label=\"Engineering\" [(ngModel)]=\"book.genre\" inputId=\"Engineering\"></p-checkbox></div>\r\n          </div>\r\n\r\n         <button mat-button type=\"submit\" style=\"border: 1px solid;\" [disabled]=\"!bookForm.form.valid\" color=\"primary\">SAVE</button>\r\n         </form>\r\n      </mat-card>\r\n    </mat-drawer-content>\r\n</mat-drawer-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/book-edit/book-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_common_service__ = __webpack_require__("./src/app/shared/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookEditComponent = /** @class */ (function () {
    function BookEditComponent(http, router, route, commonService, snackBar) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.commonService = commonService;
        this.snackBar = snackBar;
        this.book = {};
    }
    BookEditComponent.prototype.ngOnInit = function () {
        this.getBook(this.route.snapshot.params['id']);
    };
    BookEditComponent.prototype.getBook = function (id) {
        var _this = this;
        this.commonService.getOneBook(id)
            .subscribe(function (data) {
            _this.book = data;
        });
    };
    BookEditComponent.prototype.updateBook = function (id, data) {
        var _this = this;
        this.commonService.updateExistingBook(id, data)
            .subscribe(function (response) {
            var id = response['_id'];
            _this.router.navigate(['/book-details', id], { relativeTo: _this.route });
            _this.snackBar.open("Book has been edited", "OK", {
                duration: 20000,
            });
        }, function (err) {
            console.log(err);
        });
    };
    BookEditComponent.prototype.clear = function (bf) {
        bf.reset();
    };
    BookEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-edit',
            template: __webpack_require__("./src/app/book-edit/book-edit.component.html"),
            styles: [__webpack_require__("./src/app/book-edit/book-edit.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shared_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatSnackBar */]])
    ], BookEditComponent);
    return BookEditComponent;
}());

// openSnackBar() {
//   this.snackBar.open("Book with this ISBN already exists", "OK", {
//     duration: 2000,
//   });
// }


/***/ }),

/***/ "./src/app/book/book.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n<mat-drawer-container class=\"example-container\" style=\"background-color:#3f51b5;\">\r\n  <mat-drawer mode=\"side\" opened=\"true\" style=\"background-color:#3f51b5;\">\r\n    <div class=\"ui-g\">\r\n      <mat-list>\r\n        <mat-list-item style=\"cursor:pointer;color:white;\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/book-create\">Add Books</mat-list-item>\r\n        <mat-divider></mat-divider>\r\n        <mat-list-item style=\"cursor:pointer;color:white;\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/books/charts\">Analysis</mat-list-item>\r\n        <mat-divider></mat-divider>\r\n      </mat-list>\r\n    </div>\r\n  </mat-drawer>\r\n  <mat-drawer-content>\r\n    <div class=\"ui-g-12\">\r\n      <mat-card style=\"margin: 10px 200px 10px 100px;border: 0.1px solid;height: 800px;\">\r\n      <p-table [value]=\"books\">\r\n          <ng-template pTemplate=\"header\">\r\n              <tr>\r\n                  <th>Title</th>\r\n                  <th>Author</th>\r\n                  <th>Action</th>\r\n              </tr>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"body\" let-book>\r\n              <tr>\r\n                  <td>{{book.title}}</td>\r\n                  <td>{{book.author}}</td>\r\n                  <td>\r\n                    <mat-chip-list>\r\n                      <mat-chip style=\"color:#3f51b5;cursor:pointer;background-color: white;border: 1px solid rgb(63, 81, 181);\" selected=\"true\" [routerLink]=\"['/book-details',book._id]\">Show Detail</mat-chip>\r\n                      </mat-chip-list>\r\n                  </td>\r\n              </tr>\r\n          </ng-template>\r\n      </p-table>\r\n  </mat-card>\r\n  </div>\r\n  </mat-drawer-content>\r\n</mat-drawer-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_common_service__ = __webpack_require__("./src/app/shared/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookComponent = /** @class */ (function () {
    function BookComponent(http, router, commonService) {
        this.http = http;
        this.router = router;
        this.commonService = commonService;
        this.total = 0;
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonService.getBooks()
            .subscribe(function (data) {
            _this.books = data;
        });
    };
    BookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book',
            template: __webpack_require__("./src/app/book/book.component.html"),
            styles: [__webpack_require__("./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__shared_common_service__["a" /* CommonService */]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/chart/chart.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n<mat-drawer-container class=\"example-container\" style=\"background-color:#3f51b5;\">\r\n  <mat-drawer mode=\"side\" opened=\"true\" style=\"background-color:#3f51b5;\">\r\n    <div class=\"ui-g\">\r\n      <mat-list>\r\n        <mat-list-item style=\"cursor:pointer;color:white;\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/book-create\">Add Books</mat-list-item>\r\n        <mat-divider></mat-divider>\r\n        <mat-list-item style=\"cursor:pointer;color:white;\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/books/charts\">Analysis</mat-list-item>\r\n        <mat-divider></mat-divider>\r\n      </mat-list>\r\n    </div>\r\n  </mat-drawer>\r\n    <mat-drawer-content style=\"background-color: white;\">\r\n      <mat-card style=\"margin: 10px 200px 10px 100px;border: 0.1px solid;\">\r\n        <h2>BOOKS ANALYTICS</h2>\r\n      <div class=\"ui-g\">\r\n        <div class=\"ui-g-12\">\r\n          <!-- <p-button label=\"Click\" (click)=\"getCharts()\"></p-button> -->\r\n          <button mat-button style=\"border: 1px solid;\" color=\"primary\" (click)=\"getChartAsPerGenre('availability')\">AVAILABILITY STATISTICS</button>\r\n          <button mat-button style=\"border: 1px solid;\" color=\"primary\" (click)=\"getChartAsPerGenre('genre')\">GENRE STATISTICS</button>\r\n          <!-- <p-button label=\"Analyse As Per Genre\" (click)=\"getChartAsPerGenre()\"></p-button> -->\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n          <p-chart type=\"pie\" [data]=\"data\" [options]=\"options\"></p-chart>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n    </mat-drawer-content>\r\n</mat-drawer-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_common_service__ = __webpack_require__("./src/app/shared/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartComponent = /** @class */ (function () {
    function ChartComponent(http, commonService) {
        this.http = http;
        this.commonService = commonService;
        this.totalNo = 0;
        this.totalYes = 0;
        this.toggle = 1;
    }
    ChartComponent.prototype.ngOnInit = function () { };
    ChartComponent.prototype.getChartAsPerGenre = function (value) {
        var _this = this;
        console.log("value is " + value);
        this.data = {
            labels: [],
            datasets: [
                {
                    data: [],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#41552B",
                        "#72162F"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#41552B",
                        "#72162F"
                    ]
                }
            ]
        };
        this.options = {
            title: {
                display: true,
                text: 'Chart',
                fontSize: 14
            },
            legend: {
                position: 'bottom'
            }
        };
        if (value == 'genre') {
            console.log("if part is triggered");
            this.commonService.getChartDataNew()
                .subscribe(function (data) {
                var i2 = 0;
                var arrayLabels2 = [];
                var valueLabels2 = [];
                while (data[i2]) {
                    arrayLabels2.push(data[i2]._id);
                    valueLabels2.push(data[i2].total);
                    i2 = i2 + 1;
                }
                _this.data.labels = arrayLabels2;
                console.log("the this.data.labels" + _this.data.labels);
                _this.data.datasets[0].data = valueLabels2;
                console.log("the this.data.datasets[0].data" + _this.data.datasets[0].data);
                _this.options.title.text = "Analyzing the books as per GENRE";
                console.log("my title");
                console.log(_this.options.title.text);
            });
        }
        else {
            console.log("else part is triggered");
            this.commonService.getChartData()
                .subscribe(function (data) {
                var i = 0;
                var arrayLabels = [];
                var valueLabels = [];
                while (data[i]) {
                    arrayLabels.push(data[i]._id);
                    valueLabels.push(data[i].total);
                    i = i + 1;
                }
                _this.data.labels = arrayLabels;
                console.log("the this.data.labels" + _this.data.labels);
                _this.data.datasets[0].data = valueLabels;
                console.log("the this.data.datasets[0].data" + _this.data.datasets[0].data);
                _this.options.title.text = "Analyzing the books as per AVAILABILITY";
            });
        }
    };
    ChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__("./src/app/chart/chart.component.html"),
            styles: [__webpack_require__("./src/app/chart/chart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__shared_common_service__["a" /* CommonService */]])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "/* .menu-first,.menu-button{\r\n  background-color: #3f51b5;\r\n} */\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "    <!-- <div class=\"navbar-header\">\n      <a routerLink=\"/books\" class=\"navbar-brand\">Book Shelf</a>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a routerLink=\"/book-create\">Add Books</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"\">Sign Up</a></li>\n        <li routerLinkActive=\"active\">Sign In</li>\n      </ul>\n    </div> -->\n    <mat-toolbar color=\"primary\">\n      <button type=\"button\" (click)=\"showDialog()\" pButton icon=\"fa-external-link-square\" label=\"BOOK SHELF\"></button>\n    </mat-toolbar>\n    <div class=\"menu-first\" style=\"border-bottom: 0.5px solid black;\">\n      <button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n      <mat-menu class=\"menu-button\" #menu=\"matMenu\" [overlapTrigger]=\"false\">\n        <button class=\"menu-button\" mat-menu-item routerLink=\"/books\" color=\"primary\">Home</button>\n        <button class=\"menu-button\" mat-menu-item routerLink=\"/book-create\" color=\"primary\">Add Books</button>\n      </mat-menu>\n    </div>\n\n    <p-dialog header=\"How does Book Shelf work?\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [width]=\"350\" [minWidth]=\"200\" [minY]=\"70\">\n        <span>\n          Book Shelf is an app that helps add/edit/delete/view the books in/from the database. Also, it provides with\n          the analytics section. The analytics section helps analyse the books stored in the database. Here, it helps\n          analysing the books based on availability and genre.\n        </span>\n            <p-footer>\n                <button type=\"button\" pButton icon=\"fa-check\" (click)=\"display=false\" label=\"Got It!\"></button>\n            </p-footer>\n    </p-dialog>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.display = false;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.showDialog = function () {
        this.display = true;
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommonService = /** @class */ (function () {
    function CommonService(http, router) {
        this.http = http;
        this.router = router;
    }
    //Get books
    CommonService.prototype.getBooks = function () {
        return this.http.get('/book', {
            observe: 'body',
            responseType: 'json',
        })
            .map(function (books) {
            console.log(books);
            return books;
        });
    };
    //Create Books - post
    CommonService.prototype.storeRecipes = function (newBook) {
        console.log("the value of new book is" + newBook);
        return this.http.post('/book', newBook, {
            observe: 'body'
        });
    };
    //Update the Book
    CommonService.prototype.updateExistingBook = function (id, updatedBook) {
        console.log("the value of new book is" + updatedBook);
        return this.http.put('/book/' + id, updatedBook, {
            observe: 'body'
        });
    };
    //Get Book details
    CommonService.prototype.getOneBook = function (id) {
        return this.http.get('/book/' + id, {
            observe: 'body'
        });
    };
    //Delete Books
    CommonService.prototype.deleteOneBook = function (id) {
        return this.http.delete('/book/' + id, {
            observe: 'body'
        });
    };
    //charts
    CommonService.prototype.getChartData = function () {
        return this.http.get('/book/charts', {
            observe: 'body'
        });
    };
    CommonService.prototype.getChartDataNew = function () {
        return this.http.get('/book/charts/aggr2', {
            observe: 'body'
        });
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map