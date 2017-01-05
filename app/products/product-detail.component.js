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
var router_1 = require('@angular/router');
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_route, _router, _productService) {
        this._route = _route;
        this._router = _router;
        this._productService = _productService;
        this.pageTitle = 'Product Detail';
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subsciption = this._route.params.subscribe(function (params) {
            return _this.getProduct(parseInt(params['id']));
        });
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        this._subsciption.unsubscribe();
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this._productService.getProduct(id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    ProductDetailComponent.prototype.onRatingClicked = function (newRating) {
        var _this = this;
        this._productService.updateRating(this.product.productId, newRating)
            .subscribe(function (product) { return _this.ngOnInit(); });
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/products/product-detail.component.html'
        }),
        __param(2, core_1.Inject('ProductService')), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, Object])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map