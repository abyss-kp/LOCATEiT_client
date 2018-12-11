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
import { DashGuardGuard } from './dash-guard.guard';
import { AddbtnComponent } from './addbtn/addbtn.component'
import { CKEditorModule } from 'ngx-ckeditor';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
//import * as $ from 'jquery';


const routes:Routes=[
{path:'' ,component:HomeComponent},
{path : "dashbord" , component:DashboardComponent, canActivate:[DashGuardGuard ]},
{path :'posts',component:PostsComponent},
{path :'add',component:AddComponent},
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
    FooterComponent,
    AddbtnComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),MzButtonModule,
     MzInputModule, MzSidenavModule ,SidebarModule,
    SocialLoginModule,FormsModule ,CKEditorModule,
    HttpModule,HttpClientModule
  ],
  providers: [Common,{
    provide:AuthServiceConfig,
    useFactory:getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
