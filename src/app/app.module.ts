import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./modules/shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NotificationsService, SimpleNotificationsModule } from "angular2-notifications";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		SharedModule,
		SimpleNotificationsModule.forRoot(),
	],
	providers: [
		NotificationsService,
	],
	exports: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
