"use strict";
var product_service_1 = require('./products/product.service');
var product_guard_service_1 = require('./products/product-guard.service');
// Dependency injection config
exports.serviceProviders = [
    { provide: 'ProductService', useClass: product_service_1.DummyProductService },
    product_guard_service_1.ProductDetailGuard
];
//# sourceMappingURL=service.providers.js.map