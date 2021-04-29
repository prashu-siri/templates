import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getPayees() {
    return this.http.get('./assets/response/payees.json');
  }

  fetchTransactions() {
    return this.http.get("./assets/response/transactions.json");
  }
}
