import { Component, OnInit } from '@angular/core';
import { Transaction } from "../../interface/transactions";
import { CommonService } from "../../service/common.service";
import { UserAccount } from "../../interface/userAccount";
import { AccountTransactions } from "../../interface/accountTransactions";

@Component({
	selector: 'app-banking-dashboard',
	templateUrl: './banking-dashboard.component.html',
	styleUrls: ['./banking-dashboard.component.scss']
})
export class BankingDashboardComponent implements OnInit {
	transactions: Transaction[] = [];
	accounts: UserAccount[] = [];
	selectedAccount: UserAccount;

	constructor(private commonService: CommonService) {
	}

	ngOnInit(): void {
		this.getAccounts();
	}

	getAccounts(): void {
		this.commonService.fetchUserAccounts().subscribe((response: UserAccount[]) => {
			this.accounts = response;
			this.selectedAccount = this.accounts[0];
			this.getRecentTransactions();
			this.commonService.setUserAccounts(this.accounts);
		})
	}

	getRecentTransactions(): void {
		this.transactions = [];

		this.commonService.fetchTransactions(this.selectedAccount.accountNumber).
			subscribe((response: AccountTransactions[]) => {
				const transactions = response[0].transactions;
				if (transactions.length > 0) {
					for (let i = 0; i < 5; i++) {
						this.transactions.push(transactions[i]);
					}
				}
			});
	}
}
