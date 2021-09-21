import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

const routes: Routes = [
  {path: 'todo/login', component: LoginPageComponent},
  {path: 'todo/landingpage', component: LandingPageComponent},
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
