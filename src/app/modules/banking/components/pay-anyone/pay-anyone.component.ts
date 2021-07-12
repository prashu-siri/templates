import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../service/common.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Constant } from "../../service/constants";
import { Alert } from "../../../shared/interface/alert";

@Component({
  selector: 'app-pay-anyone',
  templateUrl: './pay-anyone.component.html',
  styleUrls: ['./pay-anyone.component.scss']
})
export class PayAnyoneComponent implements OnInit {

  payees: any[] = [];
  paymentForm;
  alert: Alert;
  paymentSuccessMessage: boolean;
  submitted: boolean = false;
  showForm: boolean = true;
  isShowPreview: boolean = false;
  initialFormState;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getPayees();
    this.paymentForm = new FormGroup({
      'fromAccount': new FormControl('7877-8765676'),
      'payeeType': new FormControl('payee'),
      'payee': new FormControl('', Validators.required),
      'accountName': new FormControl(''),
      'code': new FormControl(''),
      'accountNumber': new FormControl(''),
      'amount': new FormControl('', [
          Validators.required,
          Validators.pattern(Constant.AMOUNT_PATTERN)
      ]),
      'description': new FormControl('', Validators.required),
      'reference': new FormControl('')
    });

    /*Store the initial values of the form controls.
    This is then supplied to the reset method to retain the initial values
    of the form controls. Otherwise, the initial values of the form controls
    are lost on reset*/
    this.initialFormState = this.paymentForm.value;

    this.payeeType.valueChanges.subscribe(value => {
      this.submitted = false;

      if(value === 'payAnyone') {
        this.accountNumber.setValidators([Validators.required, Validators.pattern(Constant.NUMBER_PATTERN)]);
        this.code.setValidators([Validators.required, Validators.pattern(Constant.IFSC_CODE_PATTERN)]);
        this.accountName.setValidators([Validators.required, Validators.pattern(Constant.NAME_PATTERN)]);
      } else {
        this.payee.setValidators(Validators.required);
      }
    })
  }

  displayAccountDetails(value: string) {
    return this.payeeType.value === value;
  }

  getPayees() {
      this.payees = this.commonService.getPayeeList();

      if(this.payees.length == 0) {
        this.commonService.getPayees().subscribe((response: any[]) => {
          this.payees = response;
          this.commonService.setPayeeList(this.payees);
        });
      }
  }

  showPreview() {
    this.submitted = true;

    if(this.paymentForm.invalid) {
      this.alert = {
        isErrorMessage: true,
        message: "Please correct the errors in the below form."
      };
      return;
    }

    this.showForm = false;
    this.isShowPreview = true;
  }

  goBack() {
    this.showForm = true;
    this.isShowPreview = false;
  }

  pay() {
    this.isShowPreview = false;
    this.paymentSuccessMessage = true;
  }

  resetForm(event) {
    if(event) {
      event.preventDefault();
    }

    this.submitted = false;
    this.alert = {
      isErrorMessage: false,
      isSuccessMessage: false
    };
    this.paymentSuccessMessage = false;
    this.isShowPreview = false;
    this.showForm = true;
    this.paymentForm.reset(this.initialFormState);
  }

  generateTransactionId() {
    return Math.floor(Math.random()*1000000000);
  }

  getAccountNumber() {
    return this.payee.value !== '' ? this.payee.value : this.accountNumber.value;
  }

  get fromAccount(): FormControl {
    return this.paymentForm.get('fromAccount') as FormControl;
  }

  get payeeType(): FormControl {
    return this.paymentForm.get('payeeType') as FormControl;
  }

  get payee(): FormControl {
    return this.paymentForm.get('payee') as FormControl;
  }

  get accountName(): FormControl {
    return this.paymentForm.get('accountName') as FormControl;
  }

  get accountNumber(): FormControl {
    return this.paymentForm.get('accountNumber') as FormControl;
  }

  get code(): FormControl {
    return this.paymentForm.get('code') as FormControl;
  }

  get amount(): FormControl {
    return this.paymentForm.get('amount') as FormControl;
  }

  get description(): FormControl {
    return this.paymentForm.get('description') as FormControl;
  }
}
