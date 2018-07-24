import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { FormPoster } from './services/form-poster.service';
import { HttpModule } from '@angular/http';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { RatingModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    RatingModule.forRoot(),
    FormsModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot([
     
      {path: 'home', component: HomeComponent },
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: "**", redirectTo: 'home', pathMatch: 'full'}

    ])
  ],
  providers: [FormPoster],
  bootstrap: [AppComponent]
})
export class AppModule { }
