import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AppHeaderComponent } from './views/app-header/app-header.component';
import { AppFooterComponent } from './views/app-footer/app-footer.component';
import { AppDashboardComponent } from './views/app-dashboard/app-dashboard.component';
import { AppAboutUsComponent } from './views/app-about-us/app-about-us.component';
import { AppProductServiceComponent } from './views/app-product-service/app-product-service.component';
import { AppOrderComponent } from './views/app-order/app-order.component';
import { AppContactComponent } from './views/app-contact/app-contact.component';
import { HelloWorldComponent } from './views/hello-world/hello-world.component';
import { Header1Component } from './views/header1/header1.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppDashboardComponent,
    AppAboutUsComponent,
    AppProductServiceComponent,
    AppOrderComponent,
    AppContactComponent,
    HelloWorldComponent,
    Header1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
