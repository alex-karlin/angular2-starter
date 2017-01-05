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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var HttpProductService = (function () {
    function HttpProductService(_http) {
        this._http = _http;
        this._productUrl = 'api/products/products.json';
    }
    HttpProductService.prototype.getProducts = function () {
        return this._http.get(this._productUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HttpProductService.prototype.getProduct = function (id) {
        return this._http.get(this._productUrl)
            .map(function (response) {
            var products = response.json();
            return products.find(function (product) { return product.productId === id; });
        });
    };
    HttpProductService.prototype.updateRating = function (productId, rating) {
        throw new Error("Not Implemented");
    };
    HttpProductService.prototype.handleError = function (error) {
        console.error("Error occurred: " + error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    HttpProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpProductService);
    return HttpProductService;
}());
exports.HttpProductService = HttpProductService;
var DummyProductService = (function () {
    function DummyProductService() {
        this._products = [{
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2016",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95,
                "starRating": 3.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            },
            {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2016",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            },
            {
                "productId": 8,
                "productName": "Saw",
                "productCode": "TBX-0022",
                "releaseDate": "May 15, 2016",
                "description": "15-inch steel blade hand saw",
                "price": 11.55,
                "starRating": 3.7,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
            },
            {
                "productId": 10,
                "productName": "Video Game Controller",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2015",
                "description": "Standard two-button video game controller",
                "price": 35.95,
                "starRating": 4.6,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
            }];
    }
    DummyProductService.prototype.getProducts = function () {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(_this._products);
            observer.complete();
        });
    };
    DummyProductService.prototype.getProduct = function (id) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            var product = _this._products.find(function (product) { return product.productId === id; });
            observer.next(product);
            observer.complete();
        });
    };
    DummyProductService.prototype.updateRating = function (productId, rating) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            var product = _this._products.find(function (product) { return product.productId === productId; });
            product.starRating = rating;
            observer.next(product);
            observer.complete();
        });
    };
    DummyProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DummyProductService);
    return DummyProductService;
}());
exports.DummyProductService = DummyProductService;
//# sourceMappingURL=product.service.js.map