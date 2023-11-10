import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../service/common.service';
import { Job } from '../../../job-finder/interface/job';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-jobs',
	templateUrl: './jobs.component.html',
	styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
	jobs: any;
	filterForm: FormGroup;
	jobTypes: any[];
	applicants: any[];

	constructor(private route: Router, private service: CommonService) {}

	ngOnInit(): void {
		this.jobTypes = [
			{
				name: 'Full Time',
				value: 'full-time',
			},
			{
				name: 'Freelancing',
				value: 'freelancing',
			},
			{
				name: 'Part Time',
				value: 'part-time',
			},
		];

		this.applicants = [
			{ name: '< 10', value: 10 },
			{ name: '10 - 50', value: 50 },
			{ name: '10 - 50', value: 100 },
			{ name: '> 100', value: 101 },
		];

		this.filterForm = new FormGroup({
			jobType: new FormArray([]),
			applicant: new FormControl([]),
		});

		this.getJobs();
	}

	getJobs() {
		this.service.getJobs().subscribe((response: Job[]) => {
			this.jobs = response;
		});
	}

	navigateToDetails(id) {
		this.route.navigateByUrl(`super-lancer/job/${id}`);
	}

	applyFilters() {
		this.service.getJobs().subscribe((response: Job[]) => {
			this.jobs = response;
			const applicant = this.filterForm.get('applicant').value;
			const jobTypes: Array<any> = this.filterForm.get('jobType')
				.value as Array<any>;
			if (jobTypes.length > 0) {
				this.jobs = this.jobs.filter((job) => {
					return jobTypes.indexOf(job.jobType) > -1;
				});
			}

			if (applicant > 0) {
				this.jobs = this.jobs.filter((job) => {
					if (applicant == 10) {
						return job.applicants < 10;
					} else if (applicant == 50) {
						return job.applicants >= 10 && job.applicants <= 50;
					} else if (applicant == 100) {
						return job.applicants >= 51 && job.applicants <= 100;
					} else {
						return job.applicants > 100;
					}
				});
			}
		});
	}

	onChangeType($event: any) {
		const types: FormArray = this.filterForm.get('jobType') as FormArray;
		if ($event.target.checked) {
			types.push(new FormControl($event.target.value));
		} else {
			let i = 0;
			types.controls.forEach((item: any) => {
				if (item.value == $event.target.value) {
					types.removeAt(i);
					return;
				}
				i++;
			});
		}
	}

	reset(event) {
		if (event) {
			event.preventDefault();
		}

		//TODO Clear the checkboxes
		const types = this.filterForm.get('jobType') as FormArray;
		types.controls.forEach(() => {
			types.removeAt(0);
		});

		this.filterForm.reset();
		this.getJobs();
	}
}
