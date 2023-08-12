import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';

const routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'home', component: LandingComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'home' }
    ]
  }
]

@NgModule({
  declarations: [
    LandingComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class JobFinderModule { }
