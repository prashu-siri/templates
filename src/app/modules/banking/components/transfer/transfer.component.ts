import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../service/common.service";
import { UserAccount } from "../../interface/userAccount";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  accounts: UserAccount[];
  transferForm: FormGroup;
  toAccounts: UserAccount[];
  fromAccountBalance: string;
  toAccountBalance: string;
  submitted: boolean = false;
  successMessage: boolean = false;
  errorMessage: boolean = false;
  initialFormState;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
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
    this.successMessage = false; //Reset the success message from the previous transfer if any
    this.fromAccountBalance = this.fromAccount.value.availableBalance;

    this.toAccount.setValue('');
    this.toAccountBalance = '';
    this.toAccounts = this.accounts.filter((account) => {
      return account.accountNumber != this.fromAccount.value.accountNumber;
    });
  }

  changeToAccount() {
    this.toAccountBalance = this.toAccount.value.availableBalance;
  }

  transfer(): void {
    this.submitted = true;
    this.successMessage = false;
    this.errorMessage = false;

    if(this.transferForm.valid) {
      this.successMessage = true;
      this.scrollToBanner();
      this.resetForm();
    } else {
      this.errorMessage = true;
      this.scrollToBanner();
    }
  }

  scrollToBanner() {
    setTimeout(() => {
        const element = document.getElementById('alert');
        element.scrollIntoView({behavior: "smooth"});
      }, 300);
  }

  resetForm() {
      this.submitted = false;
      this.transferForm.reset(this.initialFormState);
      this.toAccountBalance = '';
      this.fromAccountBalance = '';
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
