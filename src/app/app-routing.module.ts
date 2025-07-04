import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponent/home/home.component';
import { EmailComponent } from './MyComponent/email/email.component';

const routes: Routes = [
  { path:'sendEmail', component:EmailComponent, pathMatch: "full" },
 { path:'', component:HomeComponent, pathMatch: "full" }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
