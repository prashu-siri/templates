import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-featured-job',
	templateUrl: './featured-job.component.html',
	styleUrls: ['./featured-job.component.scss']
})
export class FeaturedJobComponent implements OnInit {
	
	constructor() { }
	
	ngOnInit(): void {
	}
	
	saveJob(event) {
		if(event) {
			event.preventDefault();
		}

		if(event.target.nextElementSibling != null) {
			if( event.target.nextElementSibling.innerHTML == 'Saved') {
				event.target.nextElementSibling.innerHTML = '';	
			} else {
				event.target.nextElementSibling.innerHTML = 'Saved';
			}
			
		} else {
			event.target.innerHTML = event.target.innerHTML == 'Saved' ? '' : 'Saved';
		}
	}
}
