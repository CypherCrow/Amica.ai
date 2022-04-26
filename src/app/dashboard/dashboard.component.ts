import { Component, OnInit } from '@angular/core';
import { Leader } from '../leader'; 
import { LeaderService } from '../leader.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  leadership: Leader[] = [];

  constructor(private leaderService: LeaderService) { }

  ngOnInit(): void {
    this.getLeaders(); 
  }

  getLeaders(): void {
    this.leaderService.getLeaders()
      .subscribe(leadership => this.leadership = leadership.slice(0, 3)); 
  }

}
