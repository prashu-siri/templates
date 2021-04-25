import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Transactions } from "../../interface/transactions";
import { ModalComponent } from "../../modal/modal.component";

@Component({
  selector: 'app-banking-dashboard',
  templateUrl: './banking-dashboard.component.html',
  styleUrls: ['./banking-dashboard.component.scss']
})
export class BankingDashboardComponent implements OnInit {
  transactions: Transactions[];
  transaction: Transactions;
  modalHeader: string;

  @ViewChild(ModalComponent)
  private modal: ModalComponent;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.http.get("./assets/response/transactions.json").subscribe((response: Transactions[]) => {
      this.transactions = response;
    });
  }

  getClass(type: string) {
    return type === 'Credited' ? 'credit': 'debit';
  }

  viewDetails(transaction: Transactions, event) {
    if(event) {
      event.preventDefault();
    }

    this.modalHeader = "Transaction Details";
    this.transaction = transaction;
    this.modal.openModal();
  }

  closeModal() {
    this.modal.closeModal();
  }
}
