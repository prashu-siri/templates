import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-suggested-job',
    templateUrl: './suggested-job.component.html',
    styleUrls: ['./suggested-job.component.scss']
})
export class SuggestedJobComponent implements OnInit {

    suggestedJobs: any[];

    constructor() {
        this.suggestedJobs = [
            {
                "name": "GitLab",
                "logo": "../../../../../assets/img/gitlab.png",
                "title": "Senior UX Designer",
                "content": "Product Technologies",
                "footer": "1 day ago . 13 Applied"
            },{
                "name": "Sketch",
                "logo": "../../../../../assets/img/sketch.png",
                "title": "Senior UX Designer",
                "content": "Product Technologies",
                "footer": "2 day ago . 18 Applied"
            },{
                "name": "Figma",
                "logo": "../../../../../assets/img/figma.png",
                "title": "Senior UX Designer",
                "content": "Product Technologies",
                "footer": "2 day ago . 53 Applied"
            },{
                "name": "Figma",
                "logo": "../../../../../assets/img/figma.png",
                "title": "Junior UX Designer",
                "content": "Product Technologies",
                "footer": "2 day ago . 55 Applied"
            }
        ]
    }

    ngOnInit(): void {
    }

    showMenu(event, index) {
        if(event) {
            event.preventDefault();
        }

        document.querySelector("#"+index).classList.toggle("hide");
    }

    hideMenu(event, index) {
        if(event) {
            event.preventDefault();
        }

        document.querySelector("#"+index).classList.toggle("hide");
    }
}
