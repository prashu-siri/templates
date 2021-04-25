import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalHeader: string;

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    document.querySelector("#modal-info").classList.add("open");

  }

  closeModal() {
    document.querySelector("#modal-info").classList.remove("open");
  }

}
