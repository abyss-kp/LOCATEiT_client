import { Component, OnInit } from '@angular/core';
import { Common } from '../commonservice';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show=false;
  username=this.csin.googleName
 loc=localStorage.getItem('loggedIn')
   constructor(private csin:Common) { 
   }
 
   ngOnInit() {
    console.log("init ",this.csin.isloggenIn)
   }

   ngOnChanges(){
    console.log(" changes",this.csin.isloggenIn)
   }

ngDoCheck(){
  console.log("ngDoCheck ",this.csin.isloggenIn)
}
ngAfterContentInit(){
  console.log("ngAfterContentInit ",this.csin.isloggenIn)
}
ngAfterContentChecked(){
  console.log("ngAfterContentChecked ",this.csin.isloggenIn)
}
ngAfterViewInit(){
  console.log(" ngAfterViewInit",this.csin.isloggenIn)

}
ngAfterViewChecked(){
  console.log("ngAfterViewChecked ",this.csin.isloggenIn)
}
   private _opened: boolean = false;
   
 
   private _toggleSidebar() {
     this._opened = !this._opened;
   }  
   logout(){
     localStorage.removeItem('ID');
     localStorage.removeItem('access_token')
     this.csin.isloggenIn=false;
     this.show=false;
   }
 }