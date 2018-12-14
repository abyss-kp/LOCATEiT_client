import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
postArray=[];
  constructor(private http:HttpClient) {
     
    this.http.post("http://localhost:5000/find/posts",{})
    .subscribe((res)=>{
console.log("done",res["data"]);
var json=res['data']
this.postArray.push(res["data"])
console.log(this.postArray)
/*
json.forEach(function(data)
{
  //console.log(data); 
  //console.log(data.body); 
//this.postArray=[];
  this.postArray.push(data)
  //var stripedHtml = data.body.replace(/<[^>]+>/g, '');
 // var decodedStripedHtml = he.decode(stripedHtml);
 console.log(data.id );
});*/
    })
   }

  ngOnInit() {
  }

}
