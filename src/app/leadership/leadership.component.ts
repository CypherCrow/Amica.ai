import { Component, OnInit } from '@angular/core';
import { Leader } from '../leader'; 
import { LeaderService } from '../leader.service';

@Component({
  // RECAP: element selector matches name of HTML element that identifies this component
  // within a parent component's HTML template file (where this component is used)
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})

//ALWAYS export component class to import it elsewhere, like in AppModule
export class LeadershipComponent implements OnInit {

  leadership: Leader[] = [];

  constructor(private leaderService: LeaderService) { }

  // lifecycle hook. Angular calls this shortly after creating a component
  // Good place to put initialization logic
  ngOnInit(): void {
    this.getLeaders(); 
  }

  getLeaders(): void {
    this.leaderService.getLeaders()
      .subscribe(leadership => this.leadership = leadership);
  }

}
