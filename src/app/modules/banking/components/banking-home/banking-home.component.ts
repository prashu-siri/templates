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
    //Navigate to dashboard on page load
    this.route.navigate(['/dashboard'])
  }

}
