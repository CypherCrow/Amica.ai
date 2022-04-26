import { Component, OnInit } from '@angular/core';
import { LeaderListTestService } from '../leader-list-test.service'

@Component({
  selector: 'app-leader-list-test',
  templateUrl: './leader-list-test.component.html',
  styleUrls: ['./leader-list-test.component.css']
})
export class LeaderListTestComponent implements OnInit {

  leaders: any = [];

  constructor(private lltService: LeaderListTestService) { }

  ngOnInit(): void {

    this.lltService.getAllLeaders().subscribe(leaders => {
      this.leaders = leaders;
    })

  }

}
