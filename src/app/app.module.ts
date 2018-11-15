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
import {SocialLoginModule,AuthServiceConfig ,GoogleLoginProvider, } from 'angular-6-social-login';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { ShowComponent } from './show/show.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { FooterComponent } from './footer/footer.component'
import { DashGuardGuard } from './dash-guard.guard'


//import * as $ from 'jquery';


const routes:Routes=[
{path:'' ,component:HomeComponent},
{path : "dashbord" , component:DashboardComponent, canActivate:[DashGuardGuard ]},
{path :'posts',component:PostsComponent}
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
    HeaderComponent,
    DashboardComponent,
    PostsComponent,
    ShowComponent,
    AddComponent,
    EditComponent,
    FooterComponent
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
