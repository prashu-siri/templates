import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {
  tab = 0;
  emails: any[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEmails();
  }

  activateTab(tabId: number, event) {
        if (event) {
            event.preventDefault();
        }
        this.tab = tabId;
  }

  getEmails() {
    this.http.get("../../../assets/emails.json").subscribe((response: any[])=> {
      this.emails = response;
    })
  }

}
