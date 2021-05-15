import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserAccount } from "../interface/userAccount";
import { Observable, throwError } from "rxjs";
import { BankDetails } from "../interface/bankDetails";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    userAccounts: UserAccount[];
    payees: any[] = [];

    constructor(private http: HttpClient) {
    }

    fetchUserAccounts(): Observable<UserAccount[]> {
        return this.http.get<UserAccount[]>('./assets/response/accounts.json');
    }

    getPayees() {
        return this.http.get('./assets/response/payees.json');
    }

    fetchTransactions(accountNumber: string) {
        return this.http.get(`./assets/response/transactions-${ accountNumber }.json`);
    }

    setUserAccounts(accounts: UserAccount[]) {
        this.userAccounts = accounts;
    }

    getUserAccounts() {
        return this.userAccounts;
    }

    setPayeeList(payeeList): void {
        this.payees = payeeList
    }

    getPayeeList() {
        return this.payees;
    }

    deletePayee(accountNumber: string) {
        const payees = this.payees.filter((payee) => {
            return payee.accountNumber != accountNumber
        });

        this.setPayeeList(payees);
    }

    addPayee(payee: any, bankName: string): void {
        const payeeDetails = {
            "name": payee.payeeName,
            "accountNumber": payee.payeeAccountNumber,
            "bank": bankName
        };
        this.payees.push(payeeDetails);
    }

    fetchBankDetails(code: string): Observable<BankDetails> {
        const ifscCode = (code as string).toUpperCase().trim();
        const url = `https://bank-apis.justinclicks.com/API/V1/IFSC/${ ifscCode }`;

        return this.http.get<BankDetails>(url)
            .pipe(
                catchError(() => {
                    return throwError("Not a valid IFSC code");
                })
        );
    }
}
