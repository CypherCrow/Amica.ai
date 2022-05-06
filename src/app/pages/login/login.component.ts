import { Component, OnInit } from '@angular/core';
import { FormBuiler } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String = "";
  password: String = ""; 

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(e) {
    e.preventDefault();
    alert.(this.msg)
  }

}
