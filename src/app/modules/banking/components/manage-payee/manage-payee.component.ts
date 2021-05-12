import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../service/common.service";

@Component({
    selector: 'app-manage-payee',
    templateUrl: './manage-payee.component.html',
    styleUrls: ['./manage-payee.component.scss']
})
export class ManagePayeeComponent implements OnInit {

    managePayeeTab: string = 'delete';

    constructor(private commonService: CommonService) {
    }

    ngOnInit(): void {}


    getActiveTab(selectedTab: string) {
        return this.managePayeeTab === selectedTab;
    }

}
