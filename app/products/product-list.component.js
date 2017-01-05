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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var ProductListComponent = (function () {
    function ProductListComponent(productService) {
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.listFilter = '';
        this._productService = productService;
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (products) { return _this.products = products; });
    };
    ProductListComponent.prototype.onRatingChanged = function (productId, newRating) {
        var _this = this;
        this._productService.updateRating(productId, newRating)
            .subscribe(function (product) { return _this.ngOnInit(); });
    };
    ProductListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'product-list.component.html',
            styleUrls: ['product-list.component.css']
        }),
        __param(0, core_1.Inject('ProductService')), 
        __metadata('design:paramtypes', [Object])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map