import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core'; 
import { StreamChatModule, StreamAutocompleteTextareaModule } from 'stream-chat-angular';  

import { AppComponent } from './app.component';
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
import { RegisterComponent } from './pages/register/register.component';
import { PlayerProfileComponent } from './pages/player-profile/player-profile.component';
import { AuthGuard } from './shared/auth.guard';
import { AuthInterceptor } from './shared/authconfig.interceptor';
import { AlyansComponent } from './amica-apps/alyans/alyans.component';
import { PlayerProgressSidebarComponent } from './components/player-progress-sidebar/player-progress-sidebar.component';
import { PrattleComponent } from './amica-apps/prattle/prattle.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavibarComponent,
    CharactersComponent,
    FooterComponent,
    AboutComponent, 
    LoginComponent, 
    HomepageComponent, 
    HowToComponent, 
    PortalComponent,
    RegisterComponent, 
    PlayerProfileComponent, 
    AlyansComponent, 
    PlayerProgressSidebarComponent, 
    PrattleComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    AppRoutingModule,
    BrowserAnimationsModule,  
    HttpClientModule, 
    RouterModule.forRoot([
      { path: '', component: HomepageComponent }, 
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent },
      { path: 'how-to', component: HowToComponent }, 
      { path: 'about', component: AboutComponent },
      { path: 'portal', component: PortalComponent },
      { path: 'player-profile/:id', component: PlayerProfileComponent, canActivate: [AuthGuard]}, 
      { path: 'alyans', component: AlyansComponent }, 
      { path: 'prattle', component: PrattleComponent }
    ]),
    TranslateModule.forRoot(), 
    StreamAutocompleteTextareaModule, 
    StreamChatModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
