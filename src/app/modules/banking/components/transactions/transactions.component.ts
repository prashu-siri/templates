import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Transactions } from "../../interface/transactions";
import { ModalComponent } from "../common/modal/modal.component";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transaction: Transactions;
  modalHeader: string;

  @Input() transactions: Transactions[];

  @ViewChild(ModalComponent)
  private modal: ModalComponent;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
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
