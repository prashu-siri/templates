import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(element) {
    document.querySelector("#"+element).classList.toggle('open');
  }
    
  selectOption(event: any, option: any, element) {
    event.preventDefault();
    document.querySelector("."+element).innerHTML = option;
  }

}
