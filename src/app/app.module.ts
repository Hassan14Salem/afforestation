import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LicensesComponent } from './licenses/licenses.component';
import { EServicesComponent } from './eservices/eservices.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FAQComponent } from './faq/faq.component';
import { NewsComponent } from './news/news.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeNewsComponent } from './home-news/home-news.component';
import { RouterModule , ROUTES } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TestComponent } from './test/test.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LicensesComponent,
    EServicesComponent,
    NavbarComponent,
    FAQComponent,
    NewsComponent,
    HomeNewsComponent,
    TestComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule ,
    NgbPaginationModule,
     NgbAlertModule , 
     RouterModule , 
     BrowserAnimationsModule , CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
