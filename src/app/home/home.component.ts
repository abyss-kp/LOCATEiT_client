import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import { Common } from '../commonservice';
import { HttpClient } from "@angular/common/http";
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  show = this.cs.isloggenIn;
  constructor( private cs: Common, private socialAuthService: AuthService,private http:HttpClient) {
     if (localStorage.getItem('loggedIn')=="true") {
      this.show = true;
    } 
  }

  ngOnInit() {
  }
  public googleSignIn() {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
      //  console.log(" sign in data : ", userData);
      //console.log (userData);
        // Now store userData
        // ...
       /*  this.cs.email=userData.email;
        this.cs.googleID=userData.id;
        this.cs.idToken=userData.idToken;
        this.cs.imageUrl=userData.image;
        this.cs.googleName=userData.name;
        this.cs.token=userData.token;
        this.cs.isloggenIn=true; */
       // localStorage.setItem('view','true')
       // this.cs.isloggenIn= localStorage.getItem('view')=='true'
       // this.refresh();
       localStorage.setItem('ID',userData.id);
       localStorage.setItem('access_token',userData.token);
       localStorage.setItem('loggedIn',"true");
       localStorage.setItem('name',userData.name);
       localStorage.setItem('image',userData.image);
    //   this.cs.googleID= localStorage.getItem('ID')
    //   this.cs.isloggenIn=true;
      console.log("img",userData.image)
      // this.refresh()
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://locate-it-server.herokuapp.com/oauth/google"; // site that doesn’t send Access-Control-*

      this.http.post(proxyurl + url,{
        "data":userData
      })
      .subscribe((res)=>{
        console.log("response from api",res["msg"])
     // console.log("img")
      })
      this.show=true
      this.cs.isloggenIn=true
       this.cs.updateData(userData)
      }
    );
  }
refresh(): void {
    window.location.reload();
}
}

