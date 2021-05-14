import { Component, Input, OnInit } from '@angular/core';
import { Alert } from "../interface/alert";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  @Input()
  alertDetails: Alert;

  constructor() { }

  ngOnInit(): void {
    this.alertDetails = {
      message: '',
      isErrorMessage: false,
      isSuccessMessage: false
    }
  }

}
