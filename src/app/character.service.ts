import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { Character } from './character'; 
import { CHARACTERS } from './characters'; 
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private messageService: MessageService) { }

  getCharacters(): Observable<Character[]> {
    const characters = of(CHARACTERS); 
    this.messageService.add('LeaderService: fetched leaders'); 
    return characters; 
  }

  getCharacter(id: number): Observable<Character> {
    const character = CHARACTERS.find(character => character.id === id)!; //'!' == non-null assertion operator  
    this.messageService.add(`LeaderService: fetched character id=${id}`);
    return of(character); 
  }
}
