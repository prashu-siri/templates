import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from "../../service/common.service";
import { Alert } from "../../../shared/interface/alert";
import { Payee } from "../../interface/payee";
import { ModalComponent } from "../../../shared/modal/modal.component";

@Component({
	selector: 'app-delete-payee',
	templateUrl: './delete-payee.component.html',
	styleUrls: ['./delete-payee.component.scss']
})
export class DeletePayeeComponent implements OnInit {

	payees: Payee[];
	id: number;
	header: string = 'Confirmation';
	successMessage: boolean = false;
	message: string;
	deletePayeeAlert: Alert = {
		message: "",
		isSuccessMessage: false,
		isErrorMessage: false
	};

	@ViewChild(ModalComponent)
	private modal: ModalComponent;

	constructor(private commonService: CommonService) {
	}

	ngOnInit(): void {
		this.payees = this.commonService.getPayeeList();

		if (this.payees.length == 0) {
			this.getPayees();
		}
	}

	getPayees(): void {
		this.commonService.getPayees().subscribe((response: any[]) => {
			this.payees = response;
			this.commonService.setPayeeList(this.payees);
		});
	}

	deletePayee(event: MouseEvent): void {
		const value = (event.target as HTMLElement).innerHTML;
		if (value.toUpperCase().trim() === "DELETE") {
			this.commonService.deletePayee(this.id).subscribe(() => {
				this.getPayees();
				this.deletePayeeAlert = {
					message: "Payee deleted successfully",
					isSuccessMessage: true
				};
			});
			this.modal.closeModal(event);
		}
	}

	openModal($event: MouseEvent, id: number): void {
		if ($event) {
			$event.preventDefault();
		}

		this.successMessage = false;
		this.id = id;
		this.modal.openModal();
	}

}
