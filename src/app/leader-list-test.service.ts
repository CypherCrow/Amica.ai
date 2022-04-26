import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class LeaderListTestService {

  constructor(private http: HttpClient) { }

  getAllLeaders() {
    return this.http.get<{name: string}>('/api/leaders')
      .pipe(map(response => response || [])); 
  }
}
