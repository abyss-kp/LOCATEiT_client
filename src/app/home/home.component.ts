import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import { Common } from '../commonservice';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  show = this.cs.isloggenIn;
  constructor( private cs: Common, private socialAuthService: AuthService) {
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
      console.log (userData.email);
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
    //   this.cs.googleID= localStorage.getItem('ID')
    //   this.cs.isloggenIn=true;
       this.show=true
        this.cs.updateData(userData)
      // this.refresh()
      }
    );
  }
refresh(): void {
    window.location.reload();
}
}

