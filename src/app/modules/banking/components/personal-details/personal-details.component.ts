import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Constant } from "../../service/constants";

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(Constant.PERSONAL_DETAILS_TITLE);
  }

}
