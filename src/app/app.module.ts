import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms'
import { MzButtonModule ,MzInputModule,MzSidenavModule } from 'ngx-materialize'
import { Common} from "./commonservice";
import { SidebarModule } from 'ng-sidebar';
import {SocialLoginModule,AuthServiceConfig ,GoogleLoginProvider, } from 'angular-6-social-login'
//import * as $ from 'jquery';
const routes:Routes=[
{path:'' ,component:HomeComponent}
]
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("373941203091-i6s44m0o6ohjvt8hktcpnfkq6dogh2ok.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),MzButtonModule, MzInputModule,
    MzSidenavModule ,SidebarModule,
    SocialLoginModule,FormsModule 
  ],
  providers: [Common,{
    provide:AuthServiceConfig,
    useFactory:getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
