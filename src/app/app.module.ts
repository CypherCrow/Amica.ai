import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { NavibarComponent } from './components/navibar/navibar.component';
import { CharactersComponent } from './components/characters/characters.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HowToComponent } from './pages/how-to/how-to.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortalComponent } from './pages/portal/portal.component';
import { InfosecManageComponent } from './pages/portal/pages/infosec-manage/infosec-manage.component';
import { AlyansComponent } from './amica-apps/alyans/alyans.component';
import { PrattleComponent } from './amica-apps/prattle/prattle.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NavibarComponent,
    CharactersComponent,
    FooterComponent,
    AboutComponent, 
    LoginComponent, HomepageComponent, HowToComponent, PortalComponent, InfosecManageComponent, AlyansComponent, PrattleComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    AppRoutingModule,
    BrowserAnimationsModule,  
    RouterModule.forRoot([
      { path: '', component: HomepageComponent }, 
      { path: 'how-to', component: HowToComponent }, 
      { path: 'about', component: AboutComponent },
      { path: 'portal', component: PortalComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
