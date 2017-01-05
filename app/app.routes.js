"use strict";
var welcome_component_1 = require('./home/welcome.component');
exports.appRoutes = [
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
//# sourceMappingURL=app.routes.js.map