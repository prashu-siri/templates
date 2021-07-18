import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private router: Router) {
	}

	login() {
		localStorage.setItem('token', Math.random().toString());
	}

	isLoggedIn() {
		return !!localStorage.getItem('token');
	}

	logOut() {
		localStorage.removeItem('token');
		this.router.navigate(['/banking/login']);
	}
}
