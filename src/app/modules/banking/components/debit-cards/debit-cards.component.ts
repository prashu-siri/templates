import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Constant } from "../../service/constants";

@Component({
  selector: 'app-debit-cards',
  templateUrl: './debit-cards.component.html',
  styleUrls: ['./debit-cards.component.scss']
})
export class DebitCardsComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(Constant.DEBIT_CARDS_TITLE);
  }

}
