import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserAccount } from "../interface/userAccount";
import { Observable, throwError } from "rxjs";
import { BankDetails } from "../interface/bankDetails";
import { catchError } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { AccountTransactions } from "../interface/accountTransactions";
import { Payee } from "../interface/payee";

@Injectable({
	providedIn: 'root'
})
export class CommonService {
	userAccounts: UserAccount[];
	payees: any[] = [];
	apiUrl: string = environment.apiUrl;

	constructor(private http: HttpClient) {
	}

	/**
	 * Fetches the accounts associated to the user
	 */
	fetchUserAccounts(): Observable<UserAccount[]> {
		const path = this.apiUrl + "accounts";
		return this.http.get<UserAccount[]>(path);
	}

	/**
	 * Fetches the payee list
	 */
	getPayees() {
		const path = this.apiUrl + "payees";
		return this.http.get(path);
	}

	/**
	 * Fetches transactions of a particular account
	 * @param accountNumber
	 */
	fetchTransactions(accountNumber: string): Observable<AccountTransactions[]> {
		const path = this.apiUrl + `transactions?accountNumber=${ accountNumber }`;
		return this.http.get<AccountTransactions[]>(path);
	}

	updateAccountDetails(account) {
		const path = this.apiUrl + "accounts";
		const headers = new HttpHeaders({
			"Content-type": "application/json"
		});

		this.http.post<Payee>(path, JSON.stringify(account), {
			headers: headers
		});
	}

	/**
	 * Adds payee details
	 * @param payee
	 * @param bankName
	 */
	addPayee(payee: any, bankName: string): Observable<Payee> {
		const payeeDetails = {
			"name": payee.payeeName,
			"accountNumber": payee.payeeAccountNumber,
			"bank": bankName
		};

		const path = this.apiUrl + "payees";
		const headers = new HttpHeaders({
			"Content-type": "application/json"
		});

		return this.http.post<Payee>(path, JSON.stringify(payeeDetails), {
			headers: headers
		});
	}


	/**
	 * Deletes the payee using the unique id
	 * @param id
	 */
	deletePayee(id: number) {
		const path = this.apiUrl + `payees/${ id }`;
		return this.http.delete(path);
	}

	/**
	 * Fetches the bank details using the IFSC code
	 * @param code - IFSC code of the bank
	 */
	fetchBankDetails(code: string): Observable<BankDetails> {
		const ifscCode = (code as string).toUpperCase().trim();
		const url = `https://bank-apis.justinclicks.com/API/V1/IFSC/${ ifscCode }`;

		return this.http.get<BankDetails>(url).pipe(
			catchError(() => {
				return throwError("Not a valid IFSC code");
			})
		);
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
}
