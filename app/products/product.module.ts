import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from '../products/product-list.component';
import { ProductDetailComponent } from '../products/product-detail.component';
import { ProductFilterPipe } from '../products/product.filter.pipe';
import { productServices } from './product.services';
import { productRoutes } from './product.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    // HttpModule,
    RouterModule.forRoot(productRoutes),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe    
  ],
  providers: productServices
})
export class ProductModule {
}