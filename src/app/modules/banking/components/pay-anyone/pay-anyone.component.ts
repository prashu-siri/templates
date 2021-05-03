import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../service/common.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-pay-anyone',
  templateUrl: './pay-anyone.component.html',
  styleUrls: ['./pay-anyone.component.scss']
})
export class PayAnyoneComponent implements OnInit {

  payees: any[];
  paymentForm;
  errorMessage: boolean = false;
  submitted: boolean = false;
  showForm: boolean = true;
  successMessage: boolean = false;
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
          Validators.pattern(new RegExp('^([0-9]+)(\.[0-9]{1,})?$'))
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
      if(value === 'payAnyOne') {
        this.accountNumber.setValidators(Validators.required);
        this.code.setValidators(Validators.required);
        this.accountName.setValidators(Validators.required);
      } else {
        this.payee.setValidators(Validators.required);
      }
    })
  }

  displayAccountDetails(value: string) {
    return this.payeeType.value === value;
  }

  getPayees() {
      this.commonService.getPayees().subscribe((response: any[]) => {
          this.payees = response;
      })
  }

  showPreview() {
    this.submitted = true;
    this.errorMessage = false;

    if(this.paymentForm.invalid) {
      this.errorMessage = true;
      setTimeout(() => {
        document.getElementById('errorMessage').scrollIntoView()
      },300);
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
    this.successMessage = true;
  }

  resetForm(event) {
    if(event) {
      event.preventDefault();
    }

    this.submitted = false;
    this.successMessage = false;
    this.errorMessage = false;
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

  get fromAccount() {
    return this.paymentForm.get('fromAccount');
  }

  get payeeType() {
    return this.paymentForm.get('payeeType');
  }

  get payee() {
    return this.paymentForm.get('payee');
  }

  get accountName() {
    return this.paymentForm.get('accountName');
  }

  get accountNumber() {
    return this.paymentForm.get('accountNumber');
  }

  get code() {
    return this.paymentForm.get('code');
  }

  get amount() {
    return this.paymentForm.get('amount');
  }

  get description() {
    return this.paymentForm.get('description');
  }
}
