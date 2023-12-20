import { Component, Input, OnInit } from '@angular/core';
import { JobFinderService } from '../../service/job-finder.service';
import { Job } from '../../interface/job';
import { LandingComponent } from '../landing/landing.component';

@Component({
	selector: 'app-featured-job',
	templateUrl: './featured-job.component.html',
	styleUrls: ['./featured-job.component.scss'],
})
export class FeaturedJobComponent implements OnInit {
	jobs: Job[] = [];

	constructor(
		private service: JobFinderService,
		private filters: LandingComponent
	) {}

	ngOnInit(): void {
		this.service.fetchJobs().subscribe((response) => {
			this.jobs = response;
		});

		this.filters.filteredJobs$.subscribe((response: any) => {
			this.jobs = response;
		});
	}
}
