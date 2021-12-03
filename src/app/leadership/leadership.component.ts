import { Component, OnInit } from '@angular/core';
import { Leader } from '../leader'; 

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent implements OnInit {

  leader: Leader = {
    id: 1, 
    name: 'Tăng Ngọc Hiển'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
