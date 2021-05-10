import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserAccount } from "../interface/userAccount";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  userAccounts: UserAccount[];

  constructor(private http: HttpClient) { }

  fetchUserAccounts(): Observable<UserAccount[]> {
    return this.http.get<UserAccount[]>('./assets/response/accounts.json');
  }

  getPayees() {
    return this.http.get('./assets/response/payees.json');
  }

  fetchTransactions(accountNumber: string) {
    return this.http.get(`./assets/response/transactions-${accountNumber}.json`);
  }

  setUserAccounts(accounts: UserAccount[]) {
    this.userAccounts = accounts;
  }

  getUserAccounts() {
    return this.userAccounts;
  }
}
