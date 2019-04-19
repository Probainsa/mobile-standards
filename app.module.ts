import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FmdComponent } from './fmd/fmd.component';
import { AboutComponent } from './about/about.component';
import { PlanComponent } from './plan/plan.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FmdComponent,
    AboutComponent,
    PlanComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'about', component: AboutComponent},
      { path: 'fmd', component: FmdComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: 'plan', component: PlanComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
