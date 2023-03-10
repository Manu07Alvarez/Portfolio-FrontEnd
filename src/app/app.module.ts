import { CvModule } from './cv/cv.module';
import { LoginModule } from './login/login.module';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    CvModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
