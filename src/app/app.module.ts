import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LicensesComponent } from './licenses/licenses.component';
import { EServicesComponent } from './eservices/eservices.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FAQComponent } from './faq/faq.component';
import { NewsComponent } from './news/news.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
