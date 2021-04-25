import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employee-dashboard';
  showMain = true;
  employeeDashboardTemplate = false;
  emailTemplate = false;
  bankingTemplate = false;

  showTemplate(name: string) {
    this.employeeDashboardTemplate = false;
    this.emailTemplate = false;

    if (name.toUpperCase() === 'EDT') {
      this.employeeDashboardTemplate = true;
    } else if (name.toUpperCase() === 'ET') {
      this.emailTemplate = true;
    } else if (name.toUpperCase() === 'BT' ) {
      this.bankingTemplate = true;
    }

    this.showMain = false;
  }
}
