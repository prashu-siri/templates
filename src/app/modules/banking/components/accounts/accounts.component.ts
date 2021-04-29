import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Transactions } from "../../interface/transactions";
import { CommonService } from "../../service/common.service";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  tab: string = "accountDetails";
  accountNumber: string = "select";
  transactions: Transactions[];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.fetchAccountDetails();
  }

  fetchAccountDetails() {
    console.log(this.accountNumber);
    this.commonService.fetchTransactions().subscribe((response: Transactions[]) => {
      this.transactions = response;
      console.log(response);
    });
  }

  setTab(value: string) {
    this.tab = value;
  }

  isActiveTab(value: string) {
    return value === this.tab;
  }
}
