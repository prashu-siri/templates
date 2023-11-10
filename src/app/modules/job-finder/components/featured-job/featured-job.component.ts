import { Component, OnInit } from '@angular/core';
import { JobFinderService } from '../../service/job-finder.service';
import { Job } from '../../interface/job';

@Component({
	selector: 'app-featured-job',
	templateUrl: './featured-job.component.html',
	styleUrls: ['./featured-job.component.scss'],
})
export class FeaturedJobComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {
		this.service.fetchJobs().subscribe((response) => {
			this.jobs = response;
		});
	}
}
