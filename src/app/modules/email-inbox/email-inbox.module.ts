import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailTemplateComponent } from "./components/email-template/email-template.component";
import { EmailsComponent } from "./components/email-template/emails/emails.component";
import { EmailContentComponent } from "./components/email-template/email-content/email-content.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
	{ path:'home', component: EmailTemplateComponent }
];

@NgModule({
	declarations: [
		EmailTemplateComponent,
		EmailsComponent,
		EmailContentComponent
	],
	exports: [
		EmailTemplateComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		HttpClientModule,
		RouterModule.forChild(routes)
	]
})
export class EmailInboxModule {
}
