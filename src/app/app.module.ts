import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { EmailInboxModule } from "./modules/email-inbox/email-inbox.module";

@NgModule({
    declarations: [
        AppComponent
    ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
