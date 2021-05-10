import { Component, Input, OnInit } from '@angular/core';
import { UserAccount } from "../../interface/userAccount";

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  constructor() { }

  @Input()
  accountDetails: UserAccount;

  ngOnInit(): void {
  }

}
