import { Component, OnInit } from '@angular/core';
//import { AlyansService } from './alyans.service'; 

@Component({
  selector: 'app-alyans',
  templateUrl: './alyans.component.html',
  styleUrls: ['./alyans.component.css']
})
export class AlyansComponent implements OnInit {

  emails: [] = []

  constructor(/* private alyansService: AlyansService */) { }

  ngOnInit(): void {
    //this.emails = this.alyansService.getEmails(); 
  }

}
