import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-guard.service';

export let appRoutes = [
    { path: 'products', component: ProductListComponent },
    { path: 'product/:id', component: ProductDetailComponent, canActivate: [ ProductDetailGuard ] },
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];