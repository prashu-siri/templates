import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-email-template',
    templateUrl: './email-template.component.html',
    styleUrls: ['./email-template.component.scss']
})
export class EmailTemplateComponent implements OnInit {
    sortOptions: any[];
    primaryOptions: any[];
    labels: any[];

    constructor() {
      this.sortOptions = [{
        id: "newest",
        value: "Newest first"
      },{
        id: "oldest",
        value: "Oldest first"
      },{
        id: "alphabetical",
        value: "A-Z"
      }];

      this.primaryOptions = [{
          id: "inbox",
          value: "Inbox",
          active: true
      },{
          id: "sent",
          value: "Sent",
          active: false
      },{
          id: "draft",
          value: "Draft",
          active: false
      },{
          id: "archive",
          value: "Archive",
          active: false
      },{
          id: "spam",
          value: "Spam",
          active: false
      },{
          id: "trash",
          value: "Trash",
          active: false
      },{
          id: "reminder",
          value: "Reminder",
          active: false
      }]
    }

    ngOnInit(): void {
    }

    toggleMenu(id) {
        document.querySelector("#"+id).classList.toggle('open');
    }

    selectOption(option) {
        document.querySelector(".menu-option").textContent = option;
    }

    activate(primaryOption: any) {
        this.primaryOptions.forEach((option) => {
            option.active = false;
        });

        primaryOption.active = true;
    }
}
