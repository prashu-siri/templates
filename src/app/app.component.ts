import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showMain = true; //TODO should be true
  emailTemplate = false;
  bankingTemplate = false; //TODO should be false

  showTemplate(name: string) {
    this.emailTemplate = false;

    if (name.toUpperCase() === 'ET') {
      this.emailTemplate = true;
    } else if (name.toUpperCase() === 'BT') {
      this.bankingTemplate = true;
    }

    this.showMain = false;
  }
}
