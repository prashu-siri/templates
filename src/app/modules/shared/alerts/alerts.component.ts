import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Alert } from "../interface/alert";

@Component({
	selector: 'app-alerts',
	templateUrl: './alerts.component.html',
	styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit, OnDestroy {
	timeout;
	@Input()
	alertDetails: Alert;

	constructor() {
	}

	ngOnDestroy(): void {
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
	}

	ngOnInit(): void {
		this.alertDetails = {
			message: '',
			isErrorMessage: false,
			isSuccessMessage: false
		}
	}

	isShowAlert() {
		if (this.alertDetails.isSuccessMessage || this.alertDetails.isErrorMessage) {
			this.focus();
		}
		return this.alertDetails.isSuccessMessage || this.alertDetails.isErrorMessage;
	}

	focus() {
		const element = document.getElementById('alert');
		if (element != null) {
			window.scrollTo({
			  top: element.offsetTop - 100,
			  behavior: "smooth"
			});
		}
	}
}
