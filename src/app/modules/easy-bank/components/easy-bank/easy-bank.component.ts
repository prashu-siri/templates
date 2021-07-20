import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'app-easy-bank',
    templateUrl: './easy-bank.component.html',
    styleUrls: ['./easy-bank.component.scss']
})
export class EasyBankComponent implements OnInit {

    constructor(private title: Title) {
    }

    ngOnInit(): void {
        this.title.setTitle("Easy Bank Home");
    }

    toggleMenu() {
        document.getElementById("menu").classList.toggle("open");
    }

}
