import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Transactions } from "../../interface/transactions";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  tab: string = "accountDetails";
  accountNumber: string = "select";
  transactions: Transactions[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAccountDetails();
  }

  fetchAccountDetails() {
    console.log(this.accountNumber);
    this.http.get("./assets/response/transactions.json").subscribe((response: Transactions[]) => {
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
