import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {
    @Input() svgIconId;
    iconPath;
    constructor() {
    }

  // tslint:disable-next-line:typedef
    ngOnInit() {
      this.iconPath = '../../../assets/icons.svg#icon-' + this.svgIconId;
    }
}
