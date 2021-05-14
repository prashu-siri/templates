import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CommonService } from "../../service/common.service";
import { Constant } from "../../service/constants";
import { Alert } from "../../../shared/interface/alert";
import { BankDetails } from "../../interface/bankDetails";

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
    showAlert: boolean = false;
    bankDetails: BankDetails;

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

    addPayee() {
        this.showAlert = false;

        if (this.addPayeeForm.valid) {
            this.commonService.addPayee(this.addPayeeForm.value);
            this.showAlert = true;
            this.alertDetails = {
                message: "Payee added successfully",
                isSuccessMessage: true,
                isErrorMessage: false
            };
        } else {
            this.showAlert = true;
            this.alertDetails = {
                message: "Please fill the below form. All fields are mandatory.",
                isSuccessMessage: false,
                isErrorMessage: true
            };
        }
    }

    resetAddPayeeForm() {
        this.showAlert = false;
        this.addPayeeForm.reset(this.initialFormValues);
    }

    fetchBankDetails() {
        this.commonService.fetchBankDetails(this.code.value).subscribe(response => {
            console.log(response);
            this.bankDetails = response;
        });
    }

}
