import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
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
  constructor(private http1:HttpClient) { }
 Addpost(){
 
  console.log("click")
  var stripedHtml = this.editorValue.replace(/<[^>]+>/g, '');
  this.http1.post("https://locate-it-server.herokuapp.com/posts/add",{
"title":this.title,
"desc":stripedHtml,
"ied":this.ide,
"image":this.img,
"name":this.nam
  })
  .subscribe((res)=>{
    console.log("response from api",res)
    
  })
   
  
 }
  ngOnInit() {
  }

}
