import { Component, OnInit } from '@angular/core';
import { MarketService } from '../../service/market.service';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	numberOfItems: number;

	constructor(
		private service: MarketService,
		private authService: AuthService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.service.productAdded$.subscribe((response) => {
			this.numberOfItems = response;
		});
	}

	hasItems() {
		return this.numberOfItems > 0;
	}

	isLoggedIn() {
		return this.authService.isLoggedIn();
	}

	signOut($event: MouseEvent) {
		$event.preventDefault();
		this.authService.signOut();
	}

	navigateToLogin($event: MouseEvent) {
		$event.preventDefault();
		this.authService.setCurrentRoute(this.router.routerState.snapshot.url);
		this.router.navigate(['login'], { relativeTo: this.activatedRoute });
	}

	toggleMenu(event: MouseEvent) {
		event.preventDefault();
		const navMenu = document.querySelector('#nav-menu');
		navMenu.classList.toggle('open-menu');
	}
}
