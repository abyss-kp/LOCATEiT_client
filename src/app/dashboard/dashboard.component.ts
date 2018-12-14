import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  postArray=[];
  searchText
username=localStorage.getItem('name')
id=JSON.parse(localStorage.getItem('ID'))
constructor(private http:HttpClient) {
     
  this.http.post("http://localhost:5000/find/myposts",{
"gid":this.id
  })
  .subscribe((res)=>{
console.log("done",res["data"]);
var json=res['data']
this.postArray.push(res["data"])
console.log(this.postArray)
  })
 }

  ngOnInit() {
  }

}
