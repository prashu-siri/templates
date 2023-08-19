import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { SuggestedJobComponent } from './components/suggested-job/suggested-job.component';
import { PopularCompanyComponent } from './components/popular-company/popular-company.component';
import { FeaturedJobComponent } from './components/featured-job/featured-job.component';
import { FaqComponent } from './components/faq/faq.component';
import { MyJobsComponent } from './components/my-jobs/my-jobs.component';

const routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'home', component: LandingComponent },
      { path: 'faq', component: FaqComponent},
      { path: 'my-jobs', component: MyJobsComponent},
      { path: '**', pathMatch: 'full', redirectTo: 'home' }
    ]
  }
]

@NgModule({
  declarations: [
    LandingComponent,
    MainComponent,
    HeaderComponent,
    SuggestedJobComponent,
    PopularCompanyComponent,
    FeaturedJobComponent,
    FaqComponent,
    MyJobsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class JobFinderModule { }
