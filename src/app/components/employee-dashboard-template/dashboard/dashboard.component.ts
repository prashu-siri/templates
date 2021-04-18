import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  acceptedApplicationsPercentage: number = (84 / 336) * 100;
  rejectedApplicationsPercentage: number = (173 / 336) * 100;
  colors: any[] = [
      '#263D42',
      '#7899D4',
      '#DEA47E',
      '#B95F89'
  ];

  // @ts-ignore
  viewDate: Date = new Date();

  constructor() {}

  ngOnInit(): void {
    this.showProgress(50, 'design', this.colors[0]);
    this.showProgress(30, 'ios', this.colors[1]);
    this.showProgress(10, 'hr', this.colors[2]);
    this.showProgress(70, 'devops', this.colors[3]);
  }

  // tslint:disable-next-line:typedef
  showProgress(width, id, bgColor) {
    const elem = document.getElementById(id);
    elem.style.width = width + '%';
    elem.style.backgroundColor = bgColor;
  }

  // tslint:disable-next-line:typedef
  toggleMenu(event) {
    const id = event.currentTarget.id;
    document.querySelector('#' + id).classList.toggle('open');
  }

}
