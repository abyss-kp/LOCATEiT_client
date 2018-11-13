import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
const routes:Routes=[
{path:'' ,component:HomeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
