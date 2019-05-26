import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TourComponent } from './pages/tour.component';
import { ProductComponent } from './pages/product.component';
import { FeatureComponent } from './pages/feature.component';
import { EnterpriceComponent } from './pages/enterprice.component';
import { SupportComponent } from './pages/support.component';
import { PricingComponent } from './pages/pricing.component';
 
const routes: Routes = [
  { path: 'tour', component: TourComponent },
  { path: 'product', component: ProductComponent },
  { path: 'features', component: FeatureComponent },
  { path: 'enterprice', component: EnterpriceComponent },
  { path: 'support', component: SupportComponent },
  { path: 'pricing', component: PricingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
