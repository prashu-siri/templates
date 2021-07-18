import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/auth.service";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	constructor(private authService: AuthService) {
	}

	ngOnInit(): void {
	}

	logout($event: MouseEvent) {
		$event.preventDefault();
		this.authService.logOut();
	}
}
