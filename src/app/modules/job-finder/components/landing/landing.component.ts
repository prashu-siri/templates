import { Component, OnInit } from '@angular/core';
import { JobFinderService } from '../../service/job-finder.service';
import { Job } from '../../interface/job';
import { Observable, Subject } from 'rxjs';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
	constructor(private service: JobFinderService) {}

	ngOnInit(): void {}

	jobs: Job[] = [];
	private jobsSource: Subject<[]> = new Subject<[]>();
	filteredJobs$ = this.jobsSource as Observable<[]>;

	toggleMenu(element) {
		document.querySelector('#' + element).classList.toggle('open');
	}

	selectOption(event: any, option: any, element) {
		event.preventDefault();
		document.querySelector('.' + element).innerHTML = option;

		if (
			option.toLowercase == 'city' &&
			option.toLowercase == 'experience' &&
			option.toLowercase == 'job type' &&
			option.toLowercase == 'date posted'
		) {
			this.service.fetchJobs().subscribe((response: any) => {
				console.log(response);
				this.jobsSource.next(response);
			});
		} else {
			this.service
				.filterJobs(element, option)
				.subscribe((response: any) => {
					console.log(response);
					this.jobsSource.next(response);
				});
		}
	}

	resetFilters() {
		document.querySelector('.city').innerHTML = 'City';
		document.querySelector('.experience').innerHTML = 'Experience';
		document.querySelector('.job-type').innerHTML = 'Job type';
		document.querySelector('.date-posted').innerHTML = 'Date posted';
		document.querySelector('.or').innerHTML = 'Onsite/Remote';
		document.querySelector('.search').innerHTML = '';

		this.service.fetchJobs().subscribe((response: any) => {
			this.jobsSource.next(response);
		});
	}

	search(event) {
		const searchString = event.target.value;
		this.service.searchJobs(searchString).subscribe((response: any) => {
			this.jobsSource.next(response);
		});
	}
}
