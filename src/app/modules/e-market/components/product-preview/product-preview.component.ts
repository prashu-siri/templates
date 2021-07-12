import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Product } from "../../interface/product";
import { MarketService } from "../../service/market.service";

@Component({
	selector: 'app-product-preview',
	templateUrl: './product-preview.component.html',
	styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit, DoCheck {

	@Input()
	productDetails: Product;

	constructor(private service: MarketService) {
	}

	ngOnInit(): void {
	}

	changeQuantity(event: MouseEvent, type: string) {
		event.preventDefault();

		if(type === "minus") {
			this.productDetails.quantity -= 1;
			this.productDetails.quantity = this.productDetails.quantity <= 0 ? 1 : this.productDetails.quantity;
		} else {
			this.productDetails.quantity += 1;
		}
	}

	addToCart($event: MouseEvent) {
		$event.stopPropagation();
		this.service.addToCart(this.productDetails);
	}

	//Called when a change is detected on the component
	ngDoCheck(): void {
	}
}
