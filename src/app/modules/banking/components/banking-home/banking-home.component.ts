import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-banking-home',
  templateUrl: './banking-home.component.html',
  styleUrls: ['./banking-home.component.scss']
})
export class BankingHomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    //Navigate to login on page load
    this.route.navigate(['/login'])
  }

  isLoginPage() {
    return this.route.url.indexOf('login') > -1;
  }
}
