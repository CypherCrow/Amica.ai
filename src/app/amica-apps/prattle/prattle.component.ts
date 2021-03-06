import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ChatClientService, ChannelService, StreamI18nService, MessageContext, CustomTemplatesService } from 'stream-chat-angular';

@Component({
  selector: 'app-prattle',
  templateUrl: './prattle.component.html',
  styleUrls: ['./prattle.component.css'],
})
export class PrattleComponent implements OnInit, AfterViewInit {
  // Create a reference to your custom template
  @ViewChild('customMessageTemplate') messageTemplate!: TemplateRef<MessageContext>;

  constructor(
    private chatService: ChatClientService,
    private channelService: ChannelService,
    private streamI18nService: StreamI18nService,
    private customTemplatesService: CustomTemplatesService // Import the CustomTemplatesService
  ) {
    const apiKey = 'dz5f4d5kzrue';
    const userId = 'wandering-hat-5';
    const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoid2FuZGVyaW5nLWhhdC01IiwiZXhwIjoxNjUyMDgxOTExfQ.Kjx2OLAXql93z2ScoI_nGvqZCDrUqcOsYELHXyCSCjE';
    this.chatService.init(apiKey, userId, userToken);
    this.streamI18nService.setTranslation();
  }

  async ngOnInit() {
    const channel = this.chatService.chatClient.channel('messaging', 'talking-about-angular', {
      // add as many custom fields as you'd like
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
      name: 'Talking about Angular',
    });
    await channel.create();
    this.channelService.init({
      type: 'messaging',
      id: { $eq: 'talking-about-angular' },
    });
  }

  ngAfterViewInit(): void {
    // Register your template
    this.customTemplatesService.messageTemplate$.next(this.messageTemplate);
  }
}