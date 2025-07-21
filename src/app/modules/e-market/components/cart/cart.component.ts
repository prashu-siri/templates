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

	constructor(private service: MarketService, private title: Title) {}

	ngOnInit(): void {
		this.title.setTitle('Purilo | Cart');
		this.products = JSON.parse(this.service.getProducts());
		this.service.setpageName('cart');
	}

	removeItem($event: MouseEvent, productDetails: Product) {
		$event.preventDefault();
		this.products = this.products.filter((product) => {
			return product.id != productDetails.id;
		});

		this.service.setProducts(this.products);
	}

	hasProducts() {
		return this.products?.length > 0;
	}
}
