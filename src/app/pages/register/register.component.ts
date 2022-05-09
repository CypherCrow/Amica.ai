import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; 
import { AuthService } from '../../shared/auth.service'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup; 
  /* readonly passwordRegex: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  readonly mobileRegex: RegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{4}/; 
  */

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router 
  ) {
    this.registerForm = this.fb.group({
      username: [''],
      email: [''], 
      password: [''],
    })
  }

  ngOnInit(): void {
  }

  registerPlayer(){

    this.authService.signUp(this.registerForm.value).subscribe((res) => {
      if(res.result){
        this.registerForm.reset(); 
        this.router.navigate(['register-player']);
      }
    });
  }

}
