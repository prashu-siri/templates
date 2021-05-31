import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../service/common.service";
import { UserAccount } from "../../interface/userAccount";
import { AccountTransactions } from "../../interface/accountTransactions";
import { Transaction } from "../../interface/transactions";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  tab: string = "accountDetails";
  selectedAccount: UserAccount;
  transactions: Transaction[];
  userAccounts: UserAccount[];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.userAccounts = this.commonService.getUserAccounts();
    this.selectedAccount = this.userAccounts[0];
    this.fetchAccountTransactions();
  }

  fetchAccountTransactions() {
    this.commonService.fetchTransactions(this.selectedAccount.accountNumber).subscribe((response: AccountTransactions[]) => {
      this.transactions = response[0].transactions;
    });
  }

  setTab(value: string) {
    this.tab = value;
  }

  isActiveTab(value: string) {
    return value === this.tab;
  }
}
