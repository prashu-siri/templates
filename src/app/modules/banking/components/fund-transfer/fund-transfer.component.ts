import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-fund-transfer',
    templateUrl: './fund-transfer.component.html',
    styleUrls: ['./fund-transfer.component.scss']
})
export class FundTransferComponent implements OnInit {

    tab: string = 'transfer';

    constructor() {
    }

    ngOnInit(): void {}

  activeTab(selectedTab: string) {
    return this.tab === selectedTab;
  }
}
