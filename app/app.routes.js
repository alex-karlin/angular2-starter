"use strict";
var welcome_component_1 = require('./home/welcome.component');
var product_list_component_1 = require('./products/product-list.component');
var product_detail_component_1 = require('./products/product-detail.component');
var product_guard_service_1 = require('./products/product-guard.service');
exports.appRoutes = [
    { path: 'products', component: product_list_component_1.ProductListComponent },
    { path: 'product/:id', component: product_detail_component_1.ProductDetailComponent, canActivate: [product_guard_service_1.ProductDetailGuard] },
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
//# sourceMappingURL=app.routes.js.map