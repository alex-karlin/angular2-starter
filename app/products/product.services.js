"use strict";
var product_service_1 = require('./product.service');
var product_guard_service_1 = require('./product-guard.service');
// Dependency injection config
exports.productServices = [
    { provide: 'ProductService', useClass: product_service_1.DummyProductService },
    product_guard_service_1.ProductDetailGuard
];
//# sourceMappingURL=product.services.js.map