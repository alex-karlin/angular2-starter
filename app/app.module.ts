import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductFilterPipe } from './products/product.filter.pipe';
import { StarComponent } from './shared/star.component';
import { serviceProviders } from './service.providers';
import { appRoutes } from './app.routes';
import { ProductDetailGuard } from './products/product-guard.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe,
    StarComponent
  ],
  bootstrap: [
    AppComponent // Root component
  ],
  // Dependency injection registration
  providers: serviceProviders
})
export class AppModule {
}