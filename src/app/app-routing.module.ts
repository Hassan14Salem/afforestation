import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicensesComponent } from './licenses/licenses.component';
import { EServicesComponent } from './eservices/eservices.component';
import { FAQComponent } from './faq/faq.component';
import { NewsComponent } from './news/news.component';
import { HomeNewsComponent } from './home-news/home-news.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path:"",redirectTo:"licenses" ,pathMatch:'full'},
  { path:"licenses",component:LicensesComponent},
  { path:"EServices",component:EServicesComponent},
  { path:"FAQ",component:FAQComponent},
  { path:"News",component:NewsComponent},
  { path:"homeNews",component:HomeNewsComponent},
  { path:"test",component:TestComponent},


  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
