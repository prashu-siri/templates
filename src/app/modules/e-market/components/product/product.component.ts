import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MarketService } from '../../service/market.service';
import { Product } from '../../interface/product';
import { SubscriptionContainer } from '../../helper/subscription-container';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
	products: Product[];
	itemType: string;
	pageHeading: string;
	isLoading: boolean = false;
	subscriptionContainer = new SubscriptionContainer();
	searchTerm: string;
	filteredProducts: Product[];

	constructor(
		private route: ActivatedRoute,
		private service: MarketService,
		private title: Title
	) {}

	ngOnInit(): void {
		this.isLoading = true;
		this.route.paramMap.subscribe((response: ParamMap) => {
			this.itemType = response.get('item');
			this.pageHeading =
				this.itemType === 'fruit' ? 'Fruits' : 'Vegetables';
			this.fetchProducts(this.itemType);
			this.title.setTitle('Purilo | ' + this.pageHeading);
		});
	}

	private fetchProducts(productType: string) {
		//Fetch products based on type
		this.subscriptionContainer.addSubscription = this.service
			.fetchProducts(productType)
			.subscribe((response: Product[]) => {
				this.products = response;
				this.filteredProducts = response;
				this.isLoading = false;
			});
	}

	removeQuantity($event: MouseEvent, product: Product) {
		$event.preventDefault();
		product.quantity -= 1;
		product.quantity = product.quantity <= 0 ? 1 : product.quantity;
	}

	addQuantity($event: MouseEvent, product: Product) {
		$event.preventDefault();
		product.quantity += 1;
	}

	addToCart(product: Product) {
		this.service.addToCart(product);
	}

	search() {
		if (this.searchTerm.trim() == '') {
			this.filteredProducts = this.products;
		} else {
			this.filteredProducts = this.products.filter((product) => {
				return product.name
					.toLowerCase()
					.includes(this.searchTerm.toLowerCase());
			});
		}
	}

	ngOnDestroy(): void {
		this.subscriptionContainer.removeSubscription();
	}
}
