import { Component, OnInit } from '@angular/core';
import { Leader } from '../leader'; 
import { LeaderService } from '../leader.service';
import { MessageService } from '../message.service'; 

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent implements OnInit {

  leadership: Leader[] = [];
  selectedLeader ? : Leader;

  constructor(private leaderService: LeaderService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getLeaders(); 
  }

  onSelect(leader: Leader): void {
    this.selectedLeader = leader;
    this.messageService.add(`LeadershipComponent: Selected leader id=${leader.id}`);
  }

  getLeaders(): void {
    this.leaderService.getLeaders()
      .subscribe(leadership => this.leadership = leadership);
  }

}
