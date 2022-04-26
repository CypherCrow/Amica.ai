import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadershipComponent } from './leadership/leadership.component'; 
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { LeaderDetailComponent } from './leader-detail/leader-detail.component';
import { LeaderListTestComponent } from './leader-list-test/leader-list-test.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'leaders', component: LeadershipComponent }, 
  { path: 'leader/:id', component: LeaderDetailComponent }, 
  { path: 'leaders-test', component: LeaderListTestComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
