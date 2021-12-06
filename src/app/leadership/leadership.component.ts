import { Component, OnInit } from '@angular/core';
import { Leader } from '../leader'; 
import { LeaderService } from '../leader.service';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent implements OnInit {

  leadership: Leader[] = [];

  constructor(private leaderService: LeaderService) { }

  ngOnInit(): void {
    this.getLeaders(); 
  }

  getLeaders(): void {
    this.leaderService.getLeaders()
      .subscribe(leadership => this.leadership = leadership);
  }

}
