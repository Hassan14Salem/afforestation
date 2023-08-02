import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicensesComponent } from './licenses/licenses.component';
import { EServicesComponent } from './eservices/eservices.component';
import { FAQComponent } from './faq/faq.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path:"",redirectTo:"licenses" ,pathMatch:'full'},
  { path:"licenses",component:LicensesComponent},
  { path:"EServices",component:EServicesComponent},
  { path:"FAQ",component:FAQComponent},
  { path:"News",component:NewsComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
