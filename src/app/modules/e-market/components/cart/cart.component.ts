import { Component, OnInit } from '@angular/core';
import { MarketService } from '../../service/market.service';
import { Product } from '../../interface/product';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
	products: Product[] = [];
	totalCost: number = 0;
	discount: number = 0;
	isInvalidCoupon: boolean = false;
	availableCoupons: any[] = [
		{
			code: 'FRESH50',
			minValue: 200,
			discAmount: 50,
		},
		{
			code: 'FRESH100',
			minValue: 500,
			discAmount: 100,
		},
	];
	couponCode: string = '';

	constructor(private service: MarketService, private title: Title) {}

	ngOnInit(): void {
		this.title.setTitle('Purilo | Cart');
		this.products = JSON.parse(this.service.getProducts());
	}

	calculateSubTotal(): number {
		this.totalCost = 0;
		this.products.forEach((product) => {
			this.totalCost = this.totalCost + product.cost * product.noOfItems;
		});

		return this.totalCost;
	}

	calculateTotalCost(): number {
		this.totalCost = 0;
		this.products.forEach((product) => {
			this.totalCost = this.totalCost + product.cost * product.noOfItems;
		});

		return this.totalCost - this.discount;
	}

	validateCoupon() {
		const validCoupon = this.availableCoupons.find((coupon) => {
			return (
				coupon.code === this.couponCode.toUpperCase() &&
				this.calculateTotalCost() >= coupon.minValue
			);
		});
		if (validCoupon) {
			this.discount = validCoupon.discAmount;
			this.couponCode = '';
			this.isInvalidCoupon = false;
		} else {
			this.isInvalidCoupon = true;
		}
	}

	removeItem($event: MouseEvent, productDetails: Product) {
		$event.preventDefault();
		this.products = this.products.filter((product) => {
			return product.id != productDetails.id;
		});

		this.service.setProducts(this.products);
		this.discount = 0;
	}

	hasProducts() {
		return this.products?.length > 0;
	}
}
