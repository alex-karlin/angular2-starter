import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { appServices } from './app.services';
import { appRoutes } from './app.routes';
import { ProductModule } from './products/product.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: false }),
    ProductModule // Feature module
  ],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  bootstrap: [
    AppComponent // Root component
  ],
  // DI configuration  
  providers: appServices
})
export class AppModule {
}