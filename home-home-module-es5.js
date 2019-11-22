(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-title class=\"ion-text-center\">\r\n      <strong>Piet Laureyns</strong> - Ionic Project - Fun Animal Facts!\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size-md=\"8\" offset-md=\"2\" class=\"ion-margin\">\r\n        <ion-card class=\"ion-padding\" color=\"dark\">\r\n\r\n          <ion-card-title class=\"ion-text-center\">\r\n            <ion-title>Animals</ion-title>\r\n          </ion-card-title>\r\n\r\n          <ion-card-header>\r\n            <ion-item color=\"dark\">\r\n              <ion-searchbar showCancelButton=\"focus\" placeholder=\"Type the name of an animal\"\r\n                (ionInput)=\"searchItems($event)\"></ion-searchbar>\r\n              <ion-button color=\"success\" (click)=\"createNewItemClicked()\">\r\n                <ion-icon slot=\"start\" name=\"add\"></ion-icon> New Animal<ion-icon name=\"paw\" slot='end'></ion-icon>\r\n              </ion-button>\r\n            </ion-item>\r\n          </ion-card-header>\r\n\r\n          <div class=\"ion-text-center ion-padding-top\" [hidden]=!noItemsMessage>\r\n            <ion-label color=\"primary\">{{noItemsMessage}}</ion-label>\r\n          </div>\r\n\r\n          <ion-virtual-scroll [items]=\"filteredItems\" #virtualScroll>\r\n            <div class=\"item\" *virtualItem=\"let item\" [ngStyle]=\"{'background-color': item.getBackgroundColor()}\"\r\n              (click)=\"itemClicked(item);$event.stopPropagation();\" [id]=\"item.title\">\r\n\r\n              <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n                <ion-thumbnail class=\"ion-no-margin\" (click)=\"imageClicked(item);$event.stopPropagation();\">\r\n                  <img [src]='item.imageUrl' />\r\n                </ion-thumbnail>\r\n                <ion-label class=\"ion-padding-start\" [ngStyle]=\"{'color': item.getTextColor()}\">\r\n                  {{ item.title }}\r\n                </ion-label>\r\n                <ion-button [hidden]=item.showDescription\r\n                  (click)=\"showMoreButtonClicked(item);$event.stopPropagation();\">\r\n                  <ion-icon name=\"arrow-dropdown\"></ion-icon> <span class=\"showMoreButton\">Show Fun Fact</span>\r\n                </ion-button>\r\n                <ion-button [hidden]=!item.showDescription\r\n                  (click)=\"showMoreButtonClicked(item);$event.stopPropagation();\">\r\n                  <ion-icon name=\"arrow-dropup\"></ion-icon> <span class=\"showMoreButton\">Hide Fun Fact</span>\r\n                </ion-button>\r\n                <ion-button type=\"button\" color=\"danger\" (click)=\"deleteItemClicked(item);$event.stopPropagation();\">\r\n                  <ion-icon name=\"close\"></ion-icon>\r\n                </ion-button>\r\n              </ion-item>\r\n\r\n              <div [hidden]=!item.showDescription class=\"itemDescription ion-text-center\"\r\n                [ngStyle]=\"{'color': item.getTextColor()}\">\r\n                <p><strong>Fun Fact: </strong>{{ item.description }}</p>\r\n              </div>\r\n\r\n            </div>\r\n          </ion-virtual-scroll>\r\n\r\n\r\n          <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreData($event)\">\r\n            <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n            </ion-infinite-scroll-content>\r\n          </ion-infinite-scroll>\r\n\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
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
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-virtual-scroll ion-item:hover {\n  cursor: pointer;\n  opacity: 90%;\n}\n\n.item {\n  border: solid 1px var(--ion-color-dark);\n  border-radius: 1vw;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n\n.itemDescription {\n  padding-top: 0.1vh;\n  padding-bottom: 0.1vh;\n}\n\nion-thumbnail:hover {\n  cursor: -webkit-zoom-in;\n  cursor: zoom-in;\n}\n\n.noButton {\n  color: var(--ion-color-light) !important;\n  background-color: var(--ion-color-danger) !important;\n}\n\n.yesButton {\n  color: var(--ion-color-light) !important;\n  background-color: var(--ion-color-success) !important;\n}\n\n@media only screen and (max-width: 450px) {\n  ion-button {\n    font-size: 50%;\n  }\n\n  ion-title {\n    font-size: 70%;\n    margin: 0;\n    padding-right: 0;\n  }\n\n  .showMoreButton {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFBpZXQgTGF1cmV5bnNcXERlc2t0b3BcXElvbmljIEdpdGh1YlxcaW9uaWMtbGlzdC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQUEsZUFBQTtBQ0NGOztBREVBO0VBQ0Usd0NBQUE7RUFDQSxvREFBQTtBQ0NGOztBREVBO0VBQ0Usd0NBQUE7RUFDQSxxREFBQTtBQ0NGOztBRElBO0VBQ0U7SUFDRSxjQUFBO0VDREY7O0VESUE7SUFDRSxjQUFBO0lBQ0EsU0FBQTtJQUNBLGdCQUFBO0VDREY7O0VESUE7SUFDRSxhQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdmlydHVhbC1zY3JvbGwgaW9uLWl0ZW06aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiA5MCU7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uaXRlbURlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nLXRvcDogMC4xdmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDAuMXZoO1xyXG59XHJcblxyXG5pb24tdGh1bWJuYWlsOmhvdmVyIHtcclxuICBjdXJzb3I6IHpvb20taW47XHJcbn1cclxuXHJcbi5ub0J1dHRvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ueWVzQnV0dG9uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICBpb24tYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogNTAlO1xyXG4gIH1cclxuXHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogNzAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5zaG93TW9yZUJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iLCJpb24tdmlydHVhbC1zY3JvbGwgaW9uLWl0ZW06aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDkwJTtcbn1cblxuLml0ZW0ge1xuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGJvcmRlci1yYWRpdXM6IDF2dztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5pdGVtRGVzY3JpcHRpb24ge1xuICBwYWRkaW5nLXRvcDogMC4xdmg7XG4gIHBhZGRpbmctYm90dG9tOiAwLjF2aDtcbn1cblxuaW9uLXRodW1ibmFpbDpob3ZlciB7XG4gIGN1cnNvcjogem9vbS1pbjtcbn1cblxuLm5vQnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbn1cblxuLnllc0J1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIGlvbi1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogNTAlO1xuICB9XG5cbiAgaW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDcwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuXG4gIC5zaG93TW9yZUJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item.service */ "./src/app/item.service.ts");
/* harmony import */ var _create_item_create_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create-item/create-item.component */ "./src/app/create-item/create-item.component.ts");
/* harmony import */ var _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image-viewer/image-viewer.component */ "./src/app/image-viewer/image-viewer.component.ts");






var HomePage = /** @class */ (function () {
    function HomePage(modalController, alertController, itemService, toastController, popoverController) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.itemService = itemService;
        this.toastController = toastController;
        this.popoverController = popoverController;
        this.items = [];
        this.filteredItems = [];
        this.page = 0;
    }
    HomePage.prototype.ngOnInit = function () {
        this.loadItems();
        this.filteredItems = this.items;
    };
    HomePage.prototype.imageClicked = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ImageViewerComponent"],
                            componentProps: {
                                imageUrl: item.imageUrl
                            },
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.loadItems = function (infiniteScroll) {
        this.items = this.items.concat(this.itemService.getItemsFromPage(this.page));
        this.filteredItems = this.items;
        if (infiniteScroll) {
            infiniteScroll.target.complete();
        }
    };
    HomePage.prototype.loadMoreData = function (infiniteScroll) {
        this.page++;
        this.loadItems(infiniteScroll);
        if (this.page === this.itemService.maxPageNumber) {
            infiniteScroll.target.disabled = true;
        }
    };
    // Assign random colors to the background-color and color of clicked item
    HomePage.prototype.itemClicked = function (item) {
        var randomColorLight = this.createHexcode(Math, 'ABCDEF98', 4);
        var randomColorDark = this.createHexcode(Math, '01234567', 4);
        var random = Math.floor(Math.random() * 2);
        if (random === 1) {
            item.setBackgroundColor('#' + randomColorDark);
            item.setTextColor('#' + randomColorLight);
        }
        else {
            item.setBackgroundColor('#' + randomColorLight);
            item.setTextColor('#' + randomColorDark);
        }
    };
    HomePage.prototype.createHexcode = function (m, s, c) {
        return s[m.floor(m.random() * s.length)] + (c && this.createHexcode(m, s, c - 1));
    };
    HomePage.prototype.createNewItemClicked = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            cssClass: 'custom-modal',
                            component: _create_item_create_item_component__WEBPACK_IMPORTED_MODULE_4__["CreateItemComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            if (res.data) {
                                var newItem = res.data;
                                _this.items.push(newItem);
                                _this.filteredItems = _this.filteredItems.slice();
                                _this.presentToast(newItem.title + ' has been added to the list list.');
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.showMoreButtonClicked = function (item) {
        item.showDescription = !item.showDescription;
        this.ordersVirtualScroll.checkRange(this.filteredItems.indexOf(item), 1);
    };
    HomePage.prototype.deleteItemClicked = function (item) {
        var _this = this;
        this.alertController.create({
            header: 'Are you sure?',
            message: 'Are you sure that you want to delete <strong>' + item.title + '</strong>?',
            buttons: [{
                    text: 'Yes',
                    cssClass: 'yesButton',
                    handler: function () {
                        var index = _this.items.indexOf(item);
                        if (index !== -1) {
                            _this.items.splice(index, 1);
                            _this.filteredItems = _this.filteredItems.slice();
                        }
                        _this.presentToast(item.title + ' has been deleted from the list.');
                    }
                }, {
                    text: 'No',
                    role: 'cancel',
                    cssClass: 'noButton'
                }]
        }).then(function (alertElement) {
            alertElement.present();
        });
    };
    HomePage.prototype.searchItems = function (event) {
        if (event.detail) { // Check if something is typed in the search input
            var input = event.detail.srcElement.value.toLowerCase();
            if (input === '') { // If search field is empty => show entire list
                this.filteredItems = this.items;
                this.noItemsMessage = '';
            }
            else {
                var matchingItems = this.itemService.getItemsMatchingSearchString(input);
                if (matchingItems.length === 0) {
                    this.noItemsMessage = 'There are no animals in the list that match "' + input + '".';
                    this.filteredItems = [];
                }
                else {
                    this.filteredItems = matchingItems;
                }
            }
        }
        else {
            this.filteredItems = this.items;
            this.noItemsMessage = '';
        }
    };
    HomePage.prototype.presentToast = function (toastMessage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: toastMessage,
                            showCloseButton: true,
                            position: 'bottom',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('virtualScroll', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonVirtualScroll"])
    ], HomePage.prototype, "ordersVirtualScroll", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], HomePage);
    return HomePage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _imageItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageItem */ "./src/app/imageItem.ts");



var ItemService = /** @class */ (function () {
    function ItemService() {
        this.items = [
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/dog.jpg', 'Dog', 'Mankinds best friend!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/elephant.jpg', 'Elephant', 'Elephants cannot jump!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/giraffe.jpg', 'Giraffe', 'A Giraffe has the same amount of bones in their neck as humans!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/kangaroo.jpg', 'Kangaroo', 'Kangaroos are the only large animal to use hopping as their primary method of movement!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/lion.jpg', 'Lion', ' A lion may sleep up to 20 hours a day!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/turtle.jpg', 'Turtle', 'The oldest turtle ever recorded passed away at the grand old age of 188!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/panda.jpg', 'Panda', 'A panda can poop 28 Kilos per day!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/tiger.jpeg', 'Tiger', 'No two tigers have the same pattern of stripes!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/wolf.jpg', 'Wolf', 'zebras are black with white stripes!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/zebra.jpg', 'Zebra', 'Zebras are black with white stripes and not the other way around!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/hamster.jpg', 'Hamster', 'Hamsters can store food in special pouches in their cheeks!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/hippo.jpg', 'Hippo', 'Hippos can hold their breath for up to five minutes underwater!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/tortoise.jpg', 'Tortoise', 'A group of tortoises is called a creep!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/dog.jpg', 'Dog2', 'Mankinds best friend!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/elephant.jpg', 'Elephant2', 'Elephants cannot jump!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/giraffe.jpg', 'Giraffe2', 'A Giraffe has the same amount of bones in their neck as humans!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/kangaroo.jpg', 'Kangaroo2', 'Kangaroos are the only large animal to use hopping as their primary method of movement!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/lion.jpg', 'Lion2', ' A lion may sleep up to 20 hours a day!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/turtle.jpg', 'Turtle2', 'The oldest turtle ever recorded passed away at the grand old age of 188!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/panda.jpg', 'Panda2', 'A panda can poop 28 Kilos per day!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/tiger.jpeg', 'Tiger2', 'No two tigers have the same pattern of stripes!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/wolf.jpg', 'Wolf2', 'zebras are black with white stripes!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/zebra.jpg', 'Zebra2', 'Zebras are black with white stripes and not the other way around!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/hamster.jpg', 'Hamster2', 'Hamsters can store food in special pouches in their cheeks!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/hippo.jpg', 'Hippo2', 'Hippos can hold their breath for up to five minutes underwater!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/tortoise.jpg', 'Tortoise2', 'A group of tortoises is called a creep!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/dog.jpg', 'Dog3', 'Mankinds best friend!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/elephant.jpg', 'Elephant3', 'Elephants cannot jump!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/giraffe.jpg', 'Giraffe3', 'A Giraffe has the same amount of bones in their neck as humans!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/kangaroo.jpg', 'Kangaroo3', 'Kangaroos are the only large animal to use hopping as their primary method of movement!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/lion.jpg', 'Lion3', ' A lion may sleep up to 20 hours a day!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/turtle.jpg', 'Turtle3', 'The oldest turtle ever recorded passed away at the grand old age of 188!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/panda.jpg', 'Panda3', 'A panda can poop 28 Kilos per day!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/tiger.jpeg', 'Tiger3', 'No two tigers have the same pattern of stripes!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/wolf.jpg', 'Wolf3', 'zebras are black with white stripes!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/zebra.jpg', 'Zebra3', 'Zebras are black with white stripes and not the other way around!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/hamster.jpg', 'Hamster3', 'Hamsters can store food in special pouches in their cheeks!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/hippo.jpg', 'Hippo3', 'Hippos can hold their breath for up to five minutes underwater!'),
            new _imageItem__WEBPACK_IMPORTED_MODULE_2__["ImageItem"]('./assets/images/tortoise.jpg', 'Tortoise3', 'A group of tortoises is called a creep!')
        ];
        this.amountPerPage = 13;
        this.maxPageNumber = 3;
    }
    ItemService.prototype.getAllItems = function () {
        return this.items.slice();
    };
    ItemService.prototype.getItemsFromPage = function (page) {
        if (page < this.maxPageNumber) {
            return this.items.slice(page * this.amountPerPage, (page + 1) * this.amountPerPage);
        }
        else {
            return [];
        }
    };
    ItemService.prototype.getItemsMatchingSearchString = function (searchString) {
        return this.items.filter(function (item) {
            return item.title.toLowerCase().includes(searchString);
        });
    };
    ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ItemService);
    return ItemService;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map