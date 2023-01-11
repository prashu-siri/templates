import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobDetailsComponent} from './components/job-details/job-details.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {JobsComponent} from './components/jobs/jobs.component';
import {FreelancersComponent} from './components/freelancers/freelancers.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonService} from "./service/common.service";
import {ReactiveFormsModule} from "@angular/forms";
import { FreelancerComponent } from './components/freelancer/freelancer.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            {
                path: 'job/:id', component: JobDetailsComponent
            },
            {
                path: 'jobs', component: JobsComponent
            },
            {
                path: 'freelancers', component: FreelancersComponent
            },
            {
                path: 'freelancer/:id', component: FreelancerComponent
            }
        ]
    },

];

@NgModule({
    declarations: [JobDetailsComponent, HeaderComponent, HomeComponent, JobsComponent, FreelancersComponent, FreelancerComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [CommonService]
})
export class SuperLancerModule {
}
