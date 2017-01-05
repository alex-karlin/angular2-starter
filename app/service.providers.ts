import { DummyProductService, HttpProductService } from './products/product.service';
import { ProductDetailGuard } from './products/product-guard.service';

// Dependency injection config
export let serviceProviders = [
    { provide: 'ProductService', useClass: DummyProductService },
    ProductDetailGuard
];