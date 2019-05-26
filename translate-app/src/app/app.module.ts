import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
 
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterpriceComponent } from './pages/enterprice.component';
import { FeatureComponent } from './pages/feature.component';
import { PricingComponent } from './pages/pricing.component';
import { ProductComponent } from './pages/product.component';
import { SupportComponent } from './pages/support.component';
import { TourComponent } from './pages/tour.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterpriceComponent,
    FeatureComponent,
    PricingComponent,
    ProductComponent,
    SupportComponent,
    TourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
     }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
