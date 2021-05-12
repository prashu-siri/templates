import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from "../common/modal/modal.component";
import { CommonService } from "../../service/common.service";

@Component({
    selector: 'app-delete-payee',
    templateUrl: './delete-payee.component.html',
    styleUrls: ['./delete-payee.component.scss']
})
export class DeletePayeeComponent implements OnInit {

    payees: any[];
    accountNumber: string;
    header: string = 'Confirmation';
    successMessage: boolean = false;
    message: string;

    @ViewChild(ModalComponent)
    private modal: ModalComponent;

    constructor(private commonService: CommonService) {
    }

    ngOnInit(): void {
       this.getPayees();
    }

    getPayees(): void {
        this.payees = this.commonService.getPayeeList();

        if (this.payees.length == 0) {
            this.commonService.getPayees().subscribe((response: any[]) => {
                this.payees = response;
                this.commonService.setPayeeList(this.payees);
            });
        }
    }

     deletePayee(): void {
        this.commonService.deletePayee(this.accountNumber);
        this.getPayees();
        this.successMessage = true;
        this.message = "Payee deleted successfully";
    }

    openModal($event: MouseEvent, accountNumber: string): void {
        if ($event) {
            $event.preventDefault();
        }

        this.successMessage = false;
        this.accountNumber = accountNumber;
        this.modal.openModal();
    }

    closeModal(value: string): void {
        if (value.toUpperCase().trim() === "DELETE") {
            this.deletePayee();
        }
    }

}
