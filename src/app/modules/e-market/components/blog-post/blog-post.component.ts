import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { MarketService } from "../../service/market.service";
import { Post } from "../../interface/post";
import { SubscriptionContainer } from "../../helper/subscription-container";

@Component({
	selector: 'app-blog-post',
	templateUrl: './blog-post.component.html',
	styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit, OnDestroy {
	post: Post;
	subscriptionContainer = new SubscriptionContainer();
	constructor(private route: ActivatedRoute, private service: MarketService) {
	}

	ngOnInit(): void {
		this.route.paramMap.subscribe((params: ParamMap) => {
			this.fetchBlogPost(+params.get('id'));
		});
	}

	fetchBlogPost(id: number) {
		this.subscriptionContainer.addSubscription = this.service.fetchPost(id).subscribe(response => {
			this.post = response;
		});
	}

	ngOnDestroy(): void {
		this.subscriptionContainer.removeSubscription();
	}
}
