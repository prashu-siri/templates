import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../service/common.service";
import { UserAccount } from "../../interface/userAccount";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Alert } from "../../../shared/interface/alert";
import { Title } from "@angular/platform-browser";
import { Constant } from "../../service/constants";

@Component({
	selector: 'app-transfer',
	templateUrl: './transfer.component.html',
	styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

	accounts: UserAccount[];
	transferForm: FormGroup;
	toAccounts: UserAccount[];
	fromAccountBalance: number;
	toAccountBalance: number;
	submitted: boolean = false;
	initialFormState;
	transferAlert: Alert = {
		message: "",
		isSuccessMessage: false,
		isErrorMessage: false
	};

	constructor(private commonService: CommonService, private title: Title) { }

	ngOnInit(): void {
		this.title.setTitle(Constant.TRANSFER_TITLE);
		this.accounts = this.commonService.getUserAccounts();
		this.toAccounts = this.accounts;

		this.transferForm = new FormGroup({
			'toAccount': new FormControl('', Validators.required),
			'fromAccount': new FormControl('', Validators.required),
			'transferAmount': new FormControl('', [
				Validators.required,
				Validators.pattern(new RegExp('^([0-9]+)(\.[0-9]+)?$'))
			])
		});

		this.initialFormState = this.transferForm.value;
	}


	changeFromAccount() {
		this.resetAlerts();//Reset the success message from the previous transfer if any
		this.fromAccountBalance = this.fromAccount.value.availableBalance;

		this.toAccount.setValue('');
		this.toAccountBalance = 0;
		this.toAccounts = this.accounts.filter((account) => {
			return account.accountNumber != this.fromAccount.value.accountNumber;
		});
	}

	changeToAccount() {
		this.toAccountBalance = this.toAccount.value.availableBalance;
	}

	transfer(): void {
		this.submitted = true;
		this.resetAlerts();

		if(this.transferForm.valid) {
			//Check if user has sufficient balance
			const amount = Number(this.transferAmount.value);
			if(this.fromAccountBalance > amount) {
				this.fromAccount.value.availableBalance = this.fromAccountBalance - amount;
				this.toAccount.value.availableBalance = this.toAccountBalance + amount;

				this.accounts.forEach(account => {
					this.commonService.updateAccountDetails(account);
				});

				this.transferAlert = {
					message: "Transfer successful",
					isErrorMessage: false,
					isSuccessMessage: true
				};
				this.resetForm();
			} else {
				this.transferAlert = {
					message: "You do not have sufficient balance to make this transfer",
					isErrorMessage: true,
					isSuccessMessage: false
				};
			}

		} else {
			this.transferAlert = {
				message: "Please correct the errors in the below form.",
				isErrorMessage: true,
				isSuccessMessage: false
			};
		}
	}

	resetForm() {
		this.submitted = false;
		this.transferForm.reset(this.initialFormState);
		this.toAccountBalance = 0;
		this.fromAccountBalance = 0;
	}

	resetAlerts () {
		this.transferAlert = {
			message: "",
			isSuccessMessage: false,
			isErrorMessage: false
		};
	}
	get toAccount(): FormControl {
		return this.transferForm.get('toAccount') as FormControl;
	}

	get fromAccount(): FormControl {
		return this.transferForm.get('fromAccount') as FormControl;
	}

	get transferAmount(): FormControl {
		return this.transferForm.get('transferAmount') as FormControl;
	}
}
