import { Component, OnDestroy, OnInit } from '@angular/core';
import { MarketService } from '../../service/market.service';
import { Product } from '../../interface/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Alert } from '../../../shared/interface/alert';
import { SubscriptionContainer } from '../../helper/subscription-container';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit, OnDestroy {
	products: Product[];
	totalCost: number = 0;
	shippingForm: FormGroup;
	billingForm: FormGroup;
	customerForm: FormGroup;
	sameAsShipping: boolean = true;
	alert: Alert;
	states: any;
	subscription = new SubscriptionContainer();
	success: boolean = false;
	showCheckout: boolean = true;
	pageName: string = 'cart';

	constructor(
		private service: MarketService,
		private authService: AuthService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private title: Title
	) {}

	ngOnInit(): void {
		this.title.setTitle('Purilo | Checkout');
		this.products = JSON.parse(this.service.getProducts());
		this.getStates();

		this.service.pageName$.subscribe((pageName) => {
			console.log('inside subscribe', pageName);
			this.pageName = pageName;
		});

		this.customerForm = new FormGroup({
			email: new FormControl('', [
				Validators.required,
				Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
			]),
		});

		this.shippingForm = new FormGroup({
			firstName: new FormControl('', Validators.required),
			lastName: new FormControl('', Validators.required),
			phoneNumber: new FormControl('', [
				Validators.required,
				Validators.pattern('^[0-9]{10}$'),
			]),
			address: new FormControl('', Validators.required),
			apartment: new FormControl(''),
			city: new FormControl('', Validators.required),
			state: new FormControl('', Validators.required),
			postalCode: new FormControl('', [
				Validators.required,
				Validators.pattern('^[0-9]{0,6}$'),
			]),
		});

		this.billingForm = new FormGroup({
			firstName: new FormControl('', Validators.required),
			lastName: new FormControl('', Validators.required),
			phoneNumber: new FormControl('', [
				Validators.required,
				Validators.pattern('^[0-9]{10}$'),
			]),
			address: new FormControl('', Validators.required),
			apartment: new FormControl(''),
			city: new FormControl('', Validators.required),
			state: new FormControl('', Validators.required),
			postalCode: new FormControl('', [
				Validators.required,
				Validators.pattern('^[0-9]{0,6}$'),
			]),
		});
	}

	getStates() {
		this.subscription.addSubscription = this.service
			.fetchStates()
			.subscribe((response) => {
				this.states = response;
			});
	}

	calculateTotalCost() {
		this.totalCost = 0;
		this.products.forEach((product) => {
			this.totalCost = this.totalCost + product.cost * product.noOfItems;
		});

		return this.totalCost;
	}

	setBillingForm() {
		if (this.sameAsShipping) {
			this.billingForm.setValue(this.shippingForm.value);
		} else {
			this.billingForm.reset();
		}
	}

	submitCustomerForm() {
		if (this.customerForm.invalid && !this.isLoggedIn()) {
			this.customerForm.markAllAsTouched();
		} else {
			this.customerForm.get('email').setValue(this.getUserEmail());
		}
	}

	pay() {
		this.setBillingForm();
		this.submitCustomerForm();
		if (
			this.shippingForm.valid &&
			this.billingForm.valid &&
			this.customerForm.valid
		) {
			this.service
				.placeOrder(
					this.products,
					this.shippingForm.value,
					this.billingForm.value,
					this.customerForm.value
				)
				.subscribe();
			this.success = true;
			this.alert = {
				isErrorMessage: false,
				isSuccessMessage: true,
				message:
					'Thank you for shopping at Purilo. Your order has been placed successfully.',
			};
			this.showCheckout = false;
			//Empty localstorage
			this.service.removeProducts();
		} else {
			this.showCheckout = true;
			this.alert = {
				isErrorMessage: true,
				isSuccessMessage: false,
				message: 'Kindly fill all the sections',
			};
		}
	}

	isLoggedIn() {
		return this.authService.isLoggedIn();
	}

	getUserEmail() {
		return this.authService.getLoggedInUser().email;
	}

	navigateToLogin($event: MouseEvent) {
		$event.preventDefault();
		this.authService.setCurrentRoute(this.router.routerState.snapshot.url);
		this.router.navigate(['../login'], { relativeTo: this.activatedRoute });
	}

	ngOnDestroy(): void {
		this.subscription.removeSubscription();
	}
}
