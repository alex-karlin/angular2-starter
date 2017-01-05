import { DummyProductService, HttpProductService } from './product.service';
import { ProductDetailGuard } from './product-guard.service';

// Dependency injection config
export let productServices = [
    { provide: 'ProductService', useClass: DummyProductService },
    ProductDetailGuard
];