(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title class=\"ion-text-center\">\n      <strong>Piet Laureyns</strong> - Ionic Project - Fun Animal Facts!\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- LISTVIEW AND GRIDVIEW OPTIONS??????? -->\n<!-- <ion-grid>\n  <ion-row col-12>\n    <ion-col col-6 *ngFor=\"let item of items\">\n      <div class=\"card card-1\">\n        <img src=\"{{item.imageUrl}}\">\n        <p style=\"font-size: 9px;\">{{item.title}}</p>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid> -->\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"8\" offset-md=\"2\">\n        <ion-card class=\"ion-padding\" color=\"dark\">\n          <ion-card-title class=\"ion-text-center\">\n            <ion-title>Animals</ion-title>\n          </ion-card-title>\n          <ion-card-header>\n            <ion-item color=\"dark\">\n              <ion-searchbar showCancelButton=\"focus\" placeholder=\"Dog\" (onChange)=\"searchBarChange()\"></ion-searchbar>\n              <ion-button color=\"success\" (click)=\"createNewItemClicked()\">\n                <ion-icon slot=\"start\" name=\"add\"></ion-icon> New Item\n              </ion-button>\n            </ion-item>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list class=\"ion-no-padding\">\n              <ion-item *ngFor=\"let item of items\" class=\"ion-no-padding\" (click)=\"itemClicked(item)\"\n                id=\"{{item.title}}\">\n                <ion-thumbnail class=\"ion-no-margin\">\n                  <img src='{{item.imageUrl}}' />\n                </ion-thumbnail>\n                <ion-title size=\"large\">{{ item.title }}</ion-title>\n                <ion-button (click)=\"selectItem(item)\">\n                  <ion-icon slot=\"start\" name=\"arrow-dropdown\"></ion-icon> Show More\n                </ion-button>\n                <ion-button type=\"button\" color=\"danger\" (click)=\"deleteItem(item)\">\n                  <ion-icon name=\"close\"></ion-icon>\n                </ion-button>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list ion-item:hover {\n  cursor: pointer;\n  opacity: 90%;\n}\n\n@media only screen and (max-width: 450px) {\n  ion-button {\n    font-size: 60%;\n  }\n\n  ion-title {\n    font-size: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFBpZXQgTGF1cmV5bnNcXERlc2t0b3BcXElvbmljIEdpdGh1YlxcaW9uaWMtbGlzdC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBRUk7SUFDSSxjQUFBO0VDQU47O0VER0U7SUFDSSxjQUFBO0VDQU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdCBpb24taXRlbTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogOTAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG5cbiAgICBpb24tYnV0dG9ue1xuICAgICAgICBmb250LXNpemU6IDYwJTtcbiAgICB9XG5cbiAgICBpb24tdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogNzAlO1xuICAgIH1cblxufVxuIiwiaW9uLWxpc3QgaW9uLWl0ZW06aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDkwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICBpb24tYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDYwJTtcbiAgfVxuXG4gIGlvbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiA3MCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item.service */ "./src/app/item.service.ts");
/* harmony import */ var _create_item_create_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create-item/create-item.component */ "./src/app/create-item/create-item.component.ts");





let HomePage = class HomePage {
    constructor(modalController, alertController, itemService) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.itemService = itemService;
        this.items = [];
    }
    ngOnInit() {
        this.items = this.itemService.getAllItems();
    }
    itemSelected(item) {
        console.log(item);
    }
    itemClicked(item) {
        const randomColorLight = this.createHexcode(Math, 'ABCDEF', 4);
        const randomColorDark = this.createHexcode(Math, '0123456789', 4);
        const random = Math.floor(Math.random() * 2);
        if (random === 1) {
            document.getElementById(item.title).setAttribute('style', '--background:#' + randomColorLight + ';color: #' + randomColorDark + ';');
        }
        else {
            document.getElementById(item.title).setAttribute('style', '--background:#' + randomColorDark + ';color: #' + randomColorLight + ';');
        }
    }
    // TODO Searchbar https://ionicframework.com/docs/api/searchbar
    // TODO Alerts    https://ionicframework.com/docs/api/toast
    // TODO Inifinte  Scroll/ Virtual Scroll https://ionicframework.com/docs/api/infinite-scroll
    // Deploy         https://stackoverflow.com/questions/53036381/how-to-deploy-ionic-4-app-to-github-pages
    createHexcode(m, s, c) {
        return s[m.floor(m.random() * s.length)] + (c && this.createHexcode(m, s, c - 1));
        // Source https://stackoverflow.com/questions/13833463/how-do-i-generate-a-random-hex-code-that-of-a-lighter-color-in-javascript
    }
    createNewItemClicked() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _create_item_create_item_component__WEBPACK_IMPORTED_MODULE_4__["CreateItemComponent"]
            });
            yield modal.present();
            modal.onDidDismiss().then(res => {
                if (res.data) {
                    this.items.push(res.data);
                }
            });
        });
    }
    selectItem(item) {
    }
    // Ionic Alert Animations?
    deleteItem(item) {
        this.alertController.create({
            header: 'Are you sure?',
            message: 'Are you sure that you want to delete <strong>' + item.title + '</strong>?',
            buttons: [{
                    text: 'Yes',
                    cssClass: 'success',
                    handler: () => {
                        const index = this.items.indexOf(item);
                        if (index !== -1) {
                            this.items.splice(index, 1);
                        }
                    }
                }, {
                    text: 'No',
                    role: 'cancel',
                    cssClass: 'danger'
                }]
        }).then(alertElement => {
            alertElement.present();
        });
    }
    searchBarChange() {
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]])
], HomePage);



/***/ }),

/***/ "./src/app/item.service.ts":
/*!*********************************!*\
  !*** ./src/app/item.service.ts ***!
  \*********************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _imageItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageItem */ "./src/app/imageItem.ts");



let ItemService = class ItemService {
    constructor() {
        this.items = [
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/dog.jpg', 'Dog', 'Mankinds best friend!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/elephant.jpg', 'Elephant', 'Elephants cannot jump!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/giraffe.jpg', 'Giraffe', 'A Giraffe has the same amount of bones in their neck as humans!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/kangaroo.jpg', 'Kangaroo', 'Kangaroos are the only large animal to use hopping as their primary method of movement!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/lion.jpg', 'Lion', 'Kangaroos are the only large'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/panda.jpg', 'Panda', 'Kangaroos are the only large'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/tiger.jpeg', 'Tiger', 'Kangaroos are the only large '),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/wolf.jpg', 'Wolf', 'Kangaroos are the only large '),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/zebra.jpg', 'Zebra', 'Kangaroos are the only large ')
        ];
    }
    getAllItems() {
        return [...this.items];
    }
};
ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ItemService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map