import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { Leader } from './leader'; 
import { LEADERSHIP } from './leadership'; 
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private messageService: MessageService) { }

  getLeaders(): Observable<Leader[]> {
    const leadership = of(LEADERSHIP); 
    this.messageService.add('LeaderService: fetched leaders'); 
    return leadership; 
  }

  getLeader(id: number): Observable<Leader> {
    const leader = LEADERSHIP.find(leader => leader.id === id)!; 
    this.messageService.add(`LeaderService: fetched leader id=${id}`);
    return of(leader); 
  }
}
