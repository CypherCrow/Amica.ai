import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 

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
import { InfosecManageComponent } from './pages/infosec-manage/infosec-manage.component';
import { AlyansComponent } from './amica-apps/alyans/alyans.component';
import { PrattleComponent } from './amica-apps/prattle/prattle.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './shared/auth.guard';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NavibarComponent,
    CharactersComponent,
    FooterComponent,
    AboutComponent, 
    LoginComponent, HomepageComponent, HowToComponent, PortalComponent, InfosecManageComponent, AlyansComponent, PrattleComponent, RegisterComponent, UserProfileComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
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
      { path: 'apps/alyans', component: AlyansComponent },
      { path: 'apps/prattle', component: PrattleComponent },
      { path: 'user-profile/:id', canActivate: [AuthGuard]}
    ]),
  ],
  providers: [
    {
      provide: HTTPO_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
