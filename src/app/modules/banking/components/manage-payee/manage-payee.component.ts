import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Constant } from "../../service/constants";

@Component({
    selector: 'app-manage-payee',
    templateUrl: './manage-payee.component.html',
    styleUrls: ['./manage-payee.component.scss']
})
export class ManagePayeeComponent implements OnInit {

    managePayeeTab: string = 'delete';

    constructor(private title: Title) {
    }

    ngOnInit(): void {
        this.title.setTitle(Constant.MANAGE_PAYEE_TITLE);
    }


    getActiveTab(selectedTab: string) {
        return this.managePayeeTab === selectedTab;
    }

}
