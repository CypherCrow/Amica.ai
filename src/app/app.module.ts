import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { NavibarComponent } from './navibar/navibar.component';
import { CharactersComponent } from './characters/characters.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HowToComponent } from './pages/how-to/how-to.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortalComponent } from './pages/portal/portal.component';
import { InfosecManageComponent } from './pages/portal/pages/infosec-manage/infosec-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NavibarComponent,
    CharactersComponent,
    FooterComponent,
    AboutComponent, 
    LoginComponent, HomepageComponent, HowToComponent, PortalComponent, InfosecManageComponent
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
