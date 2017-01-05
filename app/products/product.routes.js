"use strict";
var product_list_component_1 = require('./product-list.component');
var product_detail_component_1 = require('./product-detail.component');
var product_guard_service_1 = require('./product-guard.service');
exports.productRoutes = [
    { path: 'products', component: product_list_component_1.ProductListComponent },
    { path: 'product/:id', component: product_detail_component_1.ProductDetailComponent, canActivate: [product_guard_service_1.ProductDetailGuard] }
];
//# sourceMappingURL=product.routes.js.map