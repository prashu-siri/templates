import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../service/common.service";

@Component({
  selector: 'app-pay-anyone',
  templateUrl: './pay-anyone.component.html',
  styleUrls: ['./pay-anyone.component.scss']
})
export class PayAnyoneComponent implements OnInit {

  toAccount: string = 'payee';
  payees: any[];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getPayees();
  }

  displayAccountDetails(value: string) {
    return this.toAccount === value;
  }

  getPayees() {
      this.commonService.getPayees().subscribe((response: any[]) => {
          this.payees = response;
      })
  }

}
