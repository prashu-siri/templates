import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MarketService } from "../../service/market.service";
import { Product } from "../../interface/product";
import { Review } from "../../interface/review";
import { Post } from "../../interface/post";
import { ModalComponent } from "../../../shared/modal/modal.component";
import { SubscriptionContainer } from "../../helper/subscription-container";
import { Title } from "@angular/platform-browser";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
	products: Product[] = [];
	reviews: Review[] = [];
	posts: Post[] = [];
	previewProductDetails;
	subscriptionContainer = new SubscriptionContainer();

	@ViewChild(ModalComponent)
	modal: ModalComponent;

	constructor(private service: MarketService, private title: Title) {
	}

	ngOnInit(): void {
		this.title.setTitle("Purilo | Home");
		this.fetchFeaturedProducts();
		this.fetchReviews();
		this.fetchPosts();
	}

	fetchFeaturedProducts(): void {
		this.subscriptionContainer.addSubscription = this.service.fetchFeaturedProducts().
			subscribe((response: Product[]) => {
				this.products = response;
			});
	}

	fetchReviews(): void {
		this.subscriptionContainer.addSubscription = this.service.fetchReviews().subscribe((response: Review[]) => {
			this.reviews = response;
		})
	}

	fetchPosts(): void {
		this.subscriptionContainer.addSubscription = this.service.fetchPosts().subscribe((response: Post[]) => {
			this.posts = response;
			this.service.setBlogPosts(this.posts);
		})
	}

	preview(product: Product) {
		this.previewProductDetails = product;
		this.modal.openModal();
	}

	ngOnDestroy(): void {
		this.subscriptionContainer.removeSubscription();
	}

	addToCart(product: Product) {
		this.service.addToCart(product);
	}
}
