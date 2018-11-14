import { Injectable } from "@angular/core";
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Subject } from 'rxjs'
 @Injectable()
export class Common {
  //  private messageSource=new BehaviorSubject('default msg');
//currentmessage =this.messageSource.asObervable();
public newGoogleData=new Subject<any>();
constructor(){ }    
    email
    googleID
    idToken
    imageUrl
    googleName
    token
    isloggenIn=false;
    updateData(data){
      this.newGoogleData.next(data)
    }
}