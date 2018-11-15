import { Component, OnInit } from '@angular/core';
import { Common } from '../commonservice';
import { Router } from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show=false;
  username
 //loc=localStorage.getItem('loggedIn')
   constructor(private csin:Common,private router: Router) { 
   // this.show=this.csin.isloggenIn;
   // console.log(this.csin.isloggenIn, this.show)
   if (localStorage.getItem('loggedIn')=="true") {
    this.show = true;
    this.username=localStorage.getItem('name')
  } 
   }
 
   ngOnInit() {
     //this.show=this.csin.isloggenIn;
     this.csin.newGoogleData.subscribe(
       data=>{
         console.log(data)
         this.show=true
         this.username=data.name;
       }
     )
   }

   _opened: boolean = false;
   
 
   _toggleSidebar() {
     this._opened = !this._opened;
   }  
   logout(){
     localStorage.removeItem('ID');
     localStorage.removeItem('access_token')
     localStorage.removeItem('loggedIn')
     localStorage.removeItem('name')
     this.csin.isloggenIn=false;
     this.show=false;
     this.router.navigate([]);
     this.refresh();
   }
   refresh(): void {
    window.location.reload();
}
 }