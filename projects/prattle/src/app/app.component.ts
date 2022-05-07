import { Component } from '@angular/core';
import { StreamChat, ChannelData, Message, User } from 'stream-chat'; 
import axios from 'axios'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prattle';
  channel: ChannelData; 
  username = ''; 
  messages: Message[] = []; 
  newMessage = ''; 
  chanelList: ChannelData[];
  chatClient: any; 
  currentUser: User;

  async joinChat() {
    const { username } = this;

    try {
      const response = await axios.post('http://localhost:5500/join', {
        username
      }); 
    }
  }
}
