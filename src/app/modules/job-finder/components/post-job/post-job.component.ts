import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-post-job',
	templateUrl: './post-job.component.html',
	styleUrls: ['./post-job.component.scss']
})
export class PostJobComponent implements OnInit {

	jobTypes: any[] = [];
	locations: any[] = [];
	postJobForm: FormGroup;
	isSuccess = false;
	
	constructor() {
		this.jobTypes = [
			{name: "Onsite", value:"onsite"},
			{name: "Remote", value:"remote"},
			{name: "Hybrid", value:"hybrid"},
		]

		this.locations = [
			{name: "Delhi", value: "delhi"},
			{name: "Mumbai", value: "mumbai"},
			{name: "Pune", value: "pune"},
			{name: "Hyderabad", value: "hyderabad"},
			{name: "Bengaluru", value: "bengaluru"},
			{name: "Chennai", value: "chennai"},
			{name: "Noida", value: "noida"},
			{name: "Gurugram", value: "gurugram"}
		];

		this.postJobForm = new FormGroup({
			'company': new FormControl('', [Validators.required]),
			'title': new FormControl('', [Validators.required]),
			'jobType': new FormControl('', [Validators.required]),
			'location': new FormControl('', [Validators.required]),
			'salary': new FormControl('', [Validators.required]),
			'description': new FormControl('', [Validators.required])
		});
	 }
	
	ngOnInit(): void {
	}

	submitForm() {
		this.isSuccess = false;
		if(!this.postJobForm.valid) {
			this.postJobForm.markAllAsTouched();
			return;
		}

		this.isSuccess = true;
		this.postJobForm.reset();
	}

	isFieldInvalid(formControl) {
		return formControl.invalid && (formControl.touched || formControl.dirty);
	}

	get company(): FormControl {
		return this.postJobForm.get('company') as FormControl;
	}

	get title(): FormControl {
		return this.postJobForm.get('title') as FormControl;
	}

	get jobType(): FormControl {
		return this.postJobForm.get('jobType') as FormControl;
	}

	get location(): FormControl {
		return this.postJobForm.get('location') as FormControl;
	}

	get salary(): FormControl {
		return this.postJobForm.get('salary') as FormControl;
	}

	get description(): FormControl {
		return this.postJobForm.get('description') as FormControl;
	}
	
}
