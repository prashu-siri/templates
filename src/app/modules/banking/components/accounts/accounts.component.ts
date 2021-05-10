import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Transactions } from "../../interface/transactions";
import { CommonService } from "../../service/common.service";
import { UserAccount } from "../../interface/userAccount";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  tab: string = "accountDetails";
  selectedAccount: UserAccount;
  transactions: Transactions[];
  userAccounts: UserAccount[];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.userAccounts = this.commonService.getUserAccounts();
    this.selectedAccount = this.userAccounts[0];
    this.fetchAccountTransactions();
  }

  fetchAccountTransactions() {
    this.commonService.fetchTransactions(this.selectedAccount.accountNumber).subscribe((response: Transactions[]) => {
      this.transactions = response;
    });
  }

  setTab(value: string) {
    this.tab = value;
  }

  isActiveTab(value: string) {
    return value === this.tab;
  }
}
