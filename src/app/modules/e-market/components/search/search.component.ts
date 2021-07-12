import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

	closeSearch(event: MouseEvent) {
		event.preventDefault();
		document.querySelector('#search').classList.remove('open');
	}
}
