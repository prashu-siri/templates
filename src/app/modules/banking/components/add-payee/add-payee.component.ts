import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CommonService } from "../../service/common.service";
import { Constant } from "../../service/constants";
import { Alert } from "../../../shared/interface/alert";
import { BankDetails } from "../../interface/bankDetails";
import { AlertsComponent } from "../../../shared/alerts/alerts.component";
import { Payee } from "../../interface/payee";

@Component({
	selector: 'app-add-payee',
	templateUrl: './add-payee.component.html',
	styleUrls: ['./add-payee.component.scss']
})
export class AddPayeeComponent implements OnInit {

	addPayeeForm: FormGroup;
	initialFormValues;
	alertDetails: Alert = {
		message: "",
		isSuccessMessage: false,
		isErrorMessage: false
	};
	bankDetails: BankDetails;

	@ViewChild(AlertsComponent)
	alert: AlertsComponent;

	constructor(private commonService: CommonService) {
	}

	ngOnInit(): void {
		this.addPayeeForm = new FormGroup({
			'payeeName': new FormControl('', [
				Validators.required,
				Validators.pattern(Constant.NAME_PATTERN)
			]),
			'code': new FormControl('', [
				Validators.required,
				Validators.pattern(Constant.IFSC_CODE_PATTERN)
			]),
			'payeeAccountNumber': new FormControl('', [
				Validators.required,
				Validators.pattern(Constant.NUMBER_PATTERN)
			])
		});

		this.initialFormValues = this.addPayeeForm;
	}

	/**
	 * Adds the payee details to the payee list
	 */
	addPayee() {
		this.setAlertDetails('', false, false);
		const isPayeeExist = this.checkIfPayeeExists();
		if (this.addPayeeForm.valid && !isPayeeExist) {
			this.commonService.addPayee(this.addPayeeForm.value, this.bankDetails.BANK).subscribe((response: Payee) => {
				if (response.id) {
					this.setAlertDetails(
						"Payee added successfully",
						true,
						false
					);
					this.bankDetails = null;
					this.addPayeeForm.reset(this.initialFormValues);

					this.fetchPayees();
				}
			});

		} else if (this.addPayeeForm.valid && isPayeeExist) {
			this.setAlertDetails(
				"Payee with same account number already exists",
				false,
				true
			);
		} else {
			this.setAlertDetails(
				"Please fill the below form. All fields are mandatory.",
				false,
				true
			);
		}
	}

	/**
	 * Fetches the latest payees
	 */
	fetchPayees() {
	    this.commonService.getPayees().subscribe(response => {
	        this.commonService.setPayeeList(response);
        })
    }

	/**
	 * Checks if the payee is already added based on the account number
	 */
	checkIfPayeeExists(): boolean {
		const payees = this.commonService.getPayeeList();

		const filteredPayees = payees.filter((payee) => {
			return payee.accountNumber === this.payeeAccountNumber.value;
		});

		return filteredPayees.length > 0;
	}

	/**
	 * Fetches the bank details using the IFSC code
	 */
	fetchBankDetails() {
		if (this.code.value) {
			this.commonService.fetchBankDetails(this.code.value).subscribe(response => {
				this.bankDetails = response;
			}, () => {
				this.bankDetails = null;
				this.code.setErrors({'incorrectCode': true});
			});
		}
	}

	setAlertDetails(message: string, isSuccess: boolean, isError: boolean) {
		this.alertDetails = {
			message: message,
			isSuccessMessage: isSuccess,
			isErrorMessage: isError
		};
		message !== '' && this.alert.focus();
	}

	get payeeName(): FormControl {
		return this.addPayeeForm.get('payeeName') as FormControl;
	}

	get code(): FormControl {
		return this.addPayeeForm.get('code') as FormControl;
	}

	get payeeAccountNumber(): FormControl {
		return this.addPayeeForm.get('payeeAccountNumber') as FormControl;
	}

	isPayeeNameInvalid(): boolean {
		return this.payeeName.invalid && (this.payeeName.touched || this.payeeName.dirty);
	}

	isCodeInvalid(): boolean {
		return this.code.invalid && (this.code.touched || this.code.dirty);
	}

	isPayeeAccountNumberInvalid(): boolean {
		return this.payeeAccountNumber.invalid && (this.payeeAccountNumber.touched || this.payeeAccountNumber.dirty);
	}
}
