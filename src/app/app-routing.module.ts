import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstuctionsComponent } from './instuctions/instuctions.component';
import { HistoryComponent } from './history/history.component';
import { HelpscreenComponent } from './helpscreen/helpscreen.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'instructions', component: InstuctionsComponent },
  { path: 'help', component: HelpscreenComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
