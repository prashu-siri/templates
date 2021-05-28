import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-easy-bank',
    templateUrl: './easy-bank.component.html',
    styleUrls: ['./easy-bank.component.scss']
})
export class EasyBankComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    toggleMenu() {
        document.getElementById("menu").classList.toggle("open");
    }

}
