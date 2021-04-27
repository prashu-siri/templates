import { Component, OnInit } from '@angular/core';
import { Transactions } from "../../interface/transactions";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-banking-dashboard',
  templateUrl: './banking-dashboard.component.html',
  styleUrls: ['./banking-dashboard.component.scss']
})
export class BankingDashboardComponent implements OnInit {
  transactions: Transactions[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getRecentTransactions();
  }

  getRecentTransactions() {
    this.http.get('./assets/response/transactions.json').subscribe((response: Transactions[]) => {
      if(response.length > 0) {
        for (let i = 0; i < 5; i++) {
          console.log(this.transactions);
          this.transactions.push(response[i]);
        }
      }
    });
  }
}
