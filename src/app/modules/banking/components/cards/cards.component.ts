import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  tab: string = 'credit';

  constructor() { }

  ngOnInit(): void {
  }

  activeTab(tabName: string) {
    return this.tab === tabName;
  }
}
