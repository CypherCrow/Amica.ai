import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { Leader } from './leader'; 
import { LEADERSHIP } from './leadership'; 

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    const leadership = of(LEADERSHIP); 
    return leadership; 
  }
}
