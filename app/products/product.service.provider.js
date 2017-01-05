"use strict";
var product_service_1 = require('./product.service');
exports.productServiceProvider = {
    provide: 'ProductService', useClass: product_service_1.ProductService
};
//# sourceMappingURL=product.service.provider.js.map