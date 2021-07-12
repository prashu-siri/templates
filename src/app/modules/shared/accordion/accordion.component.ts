import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-accordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
	@Input()
	heading: string;

	constructor() {
	}

	ngOnInit(): void {
	}

	toggleAccordion($event) {
		$event.currentTarget.classList.toggle('active');
	}
}
