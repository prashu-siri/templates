import { Component, OnInit } from '@angular/core';
import { Transactions } from "../../interface/transactions";
import { CommonService } from "../../service/common.service";
import { UserAccount } from "../../interface/userAccount";

@Component({
  selector: 'app-banking-dashboard',
  templateUrl: './banking-dashboard.component.html',
  styleUrls: ['./banking-dashboard.component.scss']
})
export class BankingDashboardComponent implements OnInit {
  transactions: Transactions[] = [];
  accounts: UserAccount[] = [];
  selectedAccount: UserAccount;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void {
    this.commonService.fetchUserAccounts().subscribe((response: UserAccount[] )=> {
      this.accounts = response;
      this.selectedAccount = this.accounts[0];
      this.getRecentTransactions();
      this.commonService.setUserAccounts(this.accounts);
    })
  }

  getRecentTransactions(): void {
    this.transactions = [];

    this.commonService.fetchTransactions(this.selectedAccount.accountNumber).subscribe((response: Transactions[]) => {
      if(response.length > 0) {
        for (let i = 0; i < 5; i++) {
          this.transactions.push(response[i]);
        }
      }
    });
  }
}
