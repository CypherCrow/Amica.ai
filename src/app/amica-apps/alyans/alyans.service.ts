/* import { Injectable } from '@angular/core';
import { Choices } from '../../choices';

@Injectable({
  providedIn: 'root'
})
export class AlyansService {

  emails: { type: string, 
    sender: string, 
    subject: string,  
    questionMessageOrMore: string | string[], 
    choices: { a: string, b: string }, 
    resultMessages: string[]
  }[] = [];

  constructor() { }

  getEmails(){
    for(let choice in Choices){
      console.log(`Type of choice: ${typeof choice}`); 
      if(choice.type === 'email'){
        this.emails.push(choice);
      }
    }

    return this.emails; 
  }
} */
