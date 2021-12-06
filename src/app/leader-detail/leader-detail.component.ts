import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; 
import { Leader } from '../leader'; 
import { LeaderService } from '../leader.service'

@Component({
  selector: 'app-leader-detail',
  templateUrl: './leader-detail.component.html',
  styleUrls: ['./leader-detail.component.css']
})
export class LeaderDetailComponent implements OnInit {

  leader: Leader | undefined; 

  constructor(
    private route: ActivatedRoute, 
    private leaderService: LeaderService, 
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getLeader(); 
  }

  getLeader(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.leaderService.getLeader(id)
      .subscribe(leader => this.leader = leader);
  }

}
