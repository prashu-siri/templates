import { Component, OnInit } from '@angular/core';
import { MarketService } from '../../service/market.service';

@Component({
	selector: 'app-payment',
	templateUrl: './payment.component.html',
	styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
	paymentType: string = 'card';

	constructor(private service: MarketService) {}

	ngOnInit(): void {}

	navigateToPreviousPage() {
		this.service.setpageName('shipping');
	}
}
