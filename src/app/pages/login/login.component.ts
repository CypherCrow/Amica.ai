import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg: String = ''; 

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    alert(this.msg)
  }

}
