import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Router} from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  title
  editorValue: string = '';
  ide = JSON.parse(localStorage.getItem('ID'));
  img = localStorage.getItem('image');
  nam=localStorage.getItem('name');
  constructor(private http1:HttpClient,private myRoute: Router) { }
 Addpost(){
 
  console.log("click")
  var stripedHtml = this.editorValue.replace(/<[^>]+>/g, '');
  this.http1.post("http://localhost:5000/posts/add",{
"title":this.title.toUpperCase(),
"desc":stripedHtml,
"ied":this.ide,
"image":this.img,
"name":this.nam
  })
  .subscribe((res)=>{
    console.log("response from api")
    this.myRoute.navigate(["/dashbord"]);
  })
   
  
 }
  ngOnInit() {
  }

}
