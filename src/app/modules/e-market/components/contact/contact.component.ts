import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Alert } from "../../../shared/interface/alert";

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	contactForm: FormGroup;
	alertDetails: Alert;

	constructor() {
	}

	ngOnInit(): void {
		this.contactForm = new FormGroup({
			'name': new FormControl('', Validators.required),
			'email': new FormControl('', [Validators.required, Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]),
			'message': new FormControl('')
		});
	}

	submit() {
		if (this.contactForm.valid) {
			this.alertDetails = {
				isSuccessMessage: true,
				message: "We have received your message."
			}
		} else {
			this.alertDetails = {
				isErrorMessage: true,
				message: "Please fill the mandatory fields"
			}
		}
	}

	get name(): FormControl {
		return this.contactForm.get('name') as FormControl;
	}

	get email(): FormControl {
		return this.contactForm.get('email') as FormControl;
	}

	get message(): FormControl {
		return this.contactForm.get('message') as FormControl;
	}
}
