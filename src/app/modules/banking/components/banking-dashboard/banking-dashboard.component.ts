import { Component, OnInit } from '@angular/core';
import { Transactions } from "../../interface/transactions";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "../../service/common.service";

@Component({
  selector: 'app-banking-dashboard',
  templateUrl: './banking-dashboard.component.html',
  styleUrls: ['./banking-dashboard.component.scss']
})
export class BankingDashboardComponent implements OnInit {
  transactions: Transactions[] = [];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getRecentTransactions();
  }

  getRecentTransactions() {
    this.commonService.fetchTransactions().subscribe((response: Transactions[]) => {
      if(response.length > 0) {
        for (let i = 0; i < 5; i++) {
          this.transactions.push(response[i]);
        }
      }
    });
  }
}
