import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-my-jobs',
	templateUrl: './my-jobs.component.html',
	styleUrls: ['./my-jobs.component.scss']
})
export class MyJobsComponent implements OnInit {

	constructor() { }
	appliedJobs: any[] = [];
	savedJobs: any[] = [];

	ngOnInit(): void {
		this.appliedJobs = [
			{
                "name": "GitLab",
                "logo": "../../../../../assets/img/gitlab.png",
                "title": "Senior UX Designer",
                "content": "Product Technologies",
                "appliedOn": "12-Aug-2023"
            },{
                "name": "Sketch",
                "logo": "../../../../../assets/img/sketch.png",
                "title": "Senior UX Designer",
                "content": "Product Technologies",
                "appliedOn": "12-Aug-2023"
            },{
                "name": "Figma",
                "logo": "../../../../../assets/img/figma.png",
                "title": "Senior UX Designer",
                "content": "Product Technologies",
                "appliedOn": "12-Aug-2023"
            },{
                "name": "Figma",
                "logo": "../../../../../assets/img/figma.png",
                "title": "Junior UX Designer",
                "content": "Product Technologies",
                "appliedOn": "12-Aug-2023"
            }
		];

		this.savedJobs = [
			{
                "name": "GitLab",
                "logo": "../../../../../assets/img/gitlab.png",
                "title": "Senior Developer",
                "content": "Product Technologies",
                "appliedOn": "12-Aug-2023"
            },{
                "name": "Sketch",
                "logo": "../../../../../assets/img/sketch.png",
                "title": "Junior Developer",
                "content": "Product Technologies",
                "appliedOn": "12-Aug-2023"
            },{
                "name": "Figma",
                "logo": "../../../../../assets/img/figma.png",
                "title": "Senior UX Designer",
                "content": "Product Technologies",
                "appliedOn": "12-Aug-2023"
            },{
                "name": "Figma",
                "logo": "../../../../../assets/img/figma.png",
                "title": "Junior UX Designer",
                "content": "Product Technologies",
                "appliedOn": "12-Aug-2023"
            }
		];
	}
	
	activateTab(event, tabId) {
		if (event) {
			event.preventDefault();
		}
		let tabs = document.querySelectorAll(".tab");
		tabs.forEach(tab => {
			tab.classList.remove('active');
		})
		event.target.classList.add('active');
		
		let tabContents = document.querySelectorAll(".tab-content > div");
		tabContents.forEach(content => {
			content.classList.remove('show')
		});
		
		document.querySelector('#'+tabId).classList.add('show');
	}
	
}
