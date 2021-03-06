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
import { Header1Component } from './views/header1/header1.component';
import { DashboardSwiperComponent } from './views/card/dashboard-swiper/dashboard-swiper.component';
import { ImageAutoPlayComponent } from './views/image-auto-play/image-auto-play.component';
import {CarouselModule} from 'ngx-bootstrap';
import {ButtonsModule} from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { OrderDetailComponent } from './views/card/order-detail/order-detail.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppQualityCertificationComponent } from './views/app-quality-certification/app-quality-certification.component';
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
    Header1Component,
    DashboardSwiperComponent,
    ImageAutoPlayComponent,
    OrderDetailComponent,
    ProductDetailComponent,
    LoginComponent,
    AppQualityCertificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    ButtonsModule.forRoot(),
    AccordionModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



