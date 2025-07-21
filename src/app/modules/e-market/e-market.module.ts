import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { SearchComponent } from './components/search/search.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MarketService } from './service/market.service';
import { AddressComponent } from './components/address/address.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderInterceptor } from './service/header.interceptor';
import { AuthService } from './service/auth.service';
import { PaymentComponent } from './components/payment/payment.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';

const routes: Routes = [
	{
		path: '',
		component: MainComponent,
		children: [
			{
				path: 'blog',
				component: BlogHomeComponent,
				children: [
					{ path: ':id', component: BlogPostComponent },
					{ path: '', component: BlogsComponent },
				],
			},
			{ path: 'product/:item', component: ProductComponent },
			{ path: 'contact', component: ContactComponent },
			{ path: 'cart', component: CartComponent },
			{ path: 'checkout', component: CheckoutComponent },
			{ path: 'profile', component: ProfileComponent },
			{ path: 'login', component: SignInComponent },
			{ path: 'home', component: HomeComponent },
			{ path: '**', pathMatch: 'full', redirectTo: 'home' },
		],
	},
];

@NgModule({
	declarations: [
		HomeComponent,
		HeaderComponent,
		FooterComponent,
		MainComponent,
		ProductPreviewComponent,
		SearchComponent,
		BlogsComponent,
		BlogHomeComponent,
		BlogPostComponent,
		ProductComponent,
		CartComponent,
		ContactComponent,
		CheckoutComponent,
		AddressComponent,
		ProfileComponent,
		SignInComponent,
		PaymentComponent,
  OrderSummaryComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		SharedModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [
		MarketService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HeaderInterceptor,
			multi: true,
		},
		AuthService,
	],
})
export class EMarketModule {}
