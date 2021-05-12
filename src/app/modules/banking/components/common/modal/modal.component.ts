import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalHeader: string;
  @Input() isPrimaryButtonVisible: boolean = true;
  @Input() isSecondaryButtonVisible: boolean = true;
  @Input() primaryButtonText: string;
  @Input() secondaryButtonText: string;

  @Output() submittedValue: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    document.querySelector("#modal-info").classList.add("open");
  }

  closeModal(event) {
    this.submittedValue.emit(event.target.innerHTML);
    document.querySelector("#modal-info").classList.remove("open");
  }

  applyClass() {
    return this.isPrimaryButtonVisible && !this.isSecondaryButtonVisible;
  }
}
