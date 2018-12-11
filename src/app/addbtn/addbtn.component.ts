import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-addbtn',
  templateUrl: './addbtn.component.html',
  styleUrls: ['./addbtn.component.css']
})
export class AddbtnComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
