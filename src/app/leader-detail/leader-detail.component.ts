import { Component, OnInit, Input } from '@angular/core';
import { Leader } from '../leader'

@Component({
  selector: 'app-leader-detail',
  templateUrl: './leader-detail.component.html',
  styleUrls: ['./leader-detail.component.css']
})
export class LeaderDetailComponent implements OnInit {

  @Input() leader?: Leader; 

  constructor() { }

  ngOnInit(): void {
  }

}
