import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from "@angular/common/http";


const san = [
  // {path:'',redirectTo:'/signup',pathMatch:'full'},
  // {path:'signin',component:SigninComponent},
  // {path:'signup',component:SignupComponent,}
];
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(san),
  FormsModule,
  HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
