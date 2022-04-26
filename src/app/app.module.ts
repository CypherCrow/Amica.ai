import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { LeaderDetailComponent } from './leader-detail/leader-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaderListTestComponent } from './leader-list-test/leader-list-test.component';

@NgModule({
  declarations: [
    AppComponent,
    LeadershipComponent,
    LeaderDetailComponent,
    MessagesComponent,
    DashboardComponent,
    LeaderListTestComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
