import { Component, OnInit } from '@angular/core';
import { MarketService } from "../../service/market.service";
import { Product } from "../../interface/product";

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
	products: Product[] = [];
	totalCost: number = 0;

	constructor(private service: MarketService) { }

	ngOnInit(): void {
		this.products = JSON.parse(this.service.getProducts());
	}

	calculateTotalCost(): number {
		this.totalCost = 0;
		this.products.forEach(product => {
			this.totalCost = this.totalCost + (product.cost * product.noOfItems);
		});

		return this.totalCost;
	}

	private removeItem($event: MouseEvent, productDetails: Product) {
		$event.preventDefault();
		this.products = this.products.filter(product => {
			return product.id != productDetails.id;
		});

		this.service.setProducts(this.products);
	}
}
