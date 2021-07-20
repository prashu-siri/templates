import { Component, DoCheck, OnInit } from '@angular/core';
import { CommonService } from "../../service/common.service";
import { UserAccount } from "../../interface/userAccount";
import { AccountTransactions } from "../../interface/accountTransactions";
import { Transaction } from "../../interface/transactions";
import { Constant } from "../../service/constants";
import { Title } from "@angular/platform-browser";

@Component({
	selector: 'app-accounts',
	templateUrl: './accounts.component.html',
	styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit, DoCheck {

	tab: string = "accountDetails";
	selectedAccount: UserAccount;
	transactions: Transaction[];
	userAccounts: UserAccount[];

	constructor(private commonService: CommonService, private title: Title) {
	}

	ngOnInit(): void {
		this.fetchUserAccounts();
	}

	ngDoCheck(): void {
		this.setPageTitle(this.tab);
	}

	fetchUserAccounts() {
		this.commonService.fetchUserAccounts().subscribe(response => {
			this.userAccounts = response;
			this.selectedAccount = this.userAccounts[0];
			this.fetchAccountTransactions();
		});
	}

	fetchAccountTransactions() {
		this.commonService.fetchTransactions(this.selectedAccount.accountNumber).
			subscribe((response: AccountTransactions[]) => {
				this.transactions = response[0].transactions;
			});
	}

	isActiveTab(value: string) {
		return value === this.tab;
	}

	private setPageTitle(value: string) {
		switch (value) {
			case "accountDetails" :
				this.title.setTitle(Constant.ACCOUNT_DETAILS_TITLE);
				break;
			case "transactions" :
				this.title.setTitle(Constant.TRANSACTION_HISTORY_TITLE);
				break;
			case "loans" :
				this.title.setTitle(Constant.LOANS_TITLE);
				break;
		}

	}
}
