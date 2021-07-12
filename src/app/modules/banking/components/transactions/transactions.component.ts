import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Transaction } from "../../interface/transactions";
import { ModalComponent } from "../../../shared/modal/modal.component";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transaction: Transaction;
  modalHeader: string;

  @Input() transactions: Transaction[];

  @ViewChild(ModalComponent)
  private modal: ModalComponent;

  constructor() { }

  ngOnInit(): void {
  }

  getClass(type: string) {
    return type === 'Credited' ? 'credit': 'debit';
  }

  viewDetails(transaction: Transaction, event) {
    if(event) {
      event.preventDefault();
    }

    this.modalHeader = "Transaction Details";
    this.transaction = transaction;
    this.modal.openModal();
  }

  closeModal(event) {
    this.modal.closeModal(event);
  }

}
