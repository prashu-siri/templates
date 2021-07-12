import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
	selector: 'app-address',
	templateUrl: './address.component.html',
	styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

	@Input()
	form: FormGroup;

	@Input()
	states: any[];

	isFormComplete: boolean = false;

	constructor() {
	}

	ngOnInit(): void {

	}

	submit() {
		if(this.form.valid) {
			this.isFormComplete = true;
		} else {
			this.form.markAllAsTouched();
		}
	}

	get firstName(): FormControl {
		return this.form.get('firstName') as FormControl;
	}

	get lastName(): FormControl {
		return this.form.get('lastName') as FormControl;
	}

	get phoneNumber(): FormControl {
		return this.form.get('phoneNumber') as FormControl;
	}

	get address(): FormControl {
		return this.form.get('address') as FormControl;
	}

	get apartment(): FormControl {
		return this.form.get('apartment') as FormControl;
	}

	get city(): FormControl {
		return this.form.get('city') as FormControl;
	}

	get state(): FormControl {
		return this.form.get('state') as FormControl;
	}

	get postCode(): FormControl {
		return this.form.get('postalCode') as FormControl;
	}
}
