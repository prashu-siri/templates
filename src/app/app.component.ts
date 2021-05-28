import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	showMain = true;
	emailTemplate = false;
	bankingTemplate = false;
	easyBankTemplate = false;

	showTemplate(name: string) {
		this.reset();

		if (name.toUpperCase() === 'ET') {
			this.emailTemplate = true;
		} else if (name.toUpperCase() === 'BT') {
			this.bankingTemplate = true;
		} else if (name.toUpperCase() === 'EBT') {
			this.easyBankTemplate = true;
		}

		this.showMain = false;
	}

	reset() {
		this.emailTemplate = false;
		this.bankingTemplate = false;
		this.easyBankTemplate = false;
	}
}
