import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Constant } from "../../service/constants";

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.scss']
})
export class CreditCardsComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(Constant.CREDIT_CARDS_TITLE);
  }

}
