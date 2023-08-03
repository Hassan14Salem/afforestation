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
@NgModule({
  declarations: [
    AppComponent,
    LicensesComponent,
    EServicesComponent,
    NavbarComponent,
    FAQComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule ,
    NgbPaginationModule,
     NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
