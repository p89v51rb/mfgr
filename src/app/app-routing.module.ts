import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDashboardComponent } from './views/app-dashboard/app-dashboard.component';
import { AppAboutUsComponent } from './views/app-about-us/app-about-us.component';
import { AppContactComponent } from './views/app-contact/app-contact.component';
import { AppOrderComponent } from './views/app-order/app-order.component';
import { AppProductServiceComponent } from './views/app-product-service/app-product-service.component';
import { HelloWorldComponent } from './views/hello-world/hello-world.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'hello', component: HelloWorldComponent },
  { path: 'dashboard', component: AppDashboardComponent },
  { path: 'aboutus', component: AppAboutUsComponent },
  { path: 'contact', component: AppContactComponent },
  { path: 'order', component: AppOrderComponent },
  { path: 'product', component: AppProductServiceComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }