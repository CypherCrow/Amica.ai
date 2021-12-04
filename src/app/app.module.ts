import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { LeaderDetailComponent } from './leader-detail/leader-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LeadershipComponent,
    LeaderDetailComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
