import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-infosec-manage',
  templateUrl: './infosec-manage.component.html',
  styleUrls: ['./infosec-manage.component.css']
})
export class InfosecManageComponent implements OnInit {

  infosecManageForm: FormGroup; 

  constructor(
    public fb: FormBuilder, 
    public router: Router
  ) {

    this.infosecManageForm = this.fb.group({

    })

  }

  ngOnInit(): void {
  }

  submitRequest(){
    
  }

}
